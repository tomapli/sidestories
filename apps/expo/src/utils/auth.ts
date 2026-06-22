import type { Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import Constants from "expo-constants";
import * as Linking from "expo-linking";
import * as SecureStore from "expo-secure-store";
import * as WebBrowser from "expo-web-browser";
import { createClient } from "@supabase/supabase-js";

WebBrowser.maybeCompleteAuthSession();

const localSupabaseEnv = {
  publishableKey: "sb_publishable_ACJWlzQHlZjBrEguHvfOxg_3BJgxAaH",
};

const isProductionEnv = process.env.NODE_ENV === "production";

function getLocalSupabaseUrl() {
  const host = Constants.expoConfig?.hostUri?.split(":")[0] ?? "127.0.0.1";
  return `http://${host}:55321`;
}

const supabaseUrl = isProductionEnv
  ? (process.env.EXPO_PUBLIC_SUPABASE_URL ??
    process.env.NEXT_PUBLIC_SUPABASE_URL ??
    "https://xpxpbfzxavfnvxhfcecq.supabase.co")
  : getLocalSupabaseUrl();

const supabasePublishableKey = isProductionEnv
  ? (process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
    "sb_publishable_ZuCfGBILY5tkhknjmDIw5Q_zBLRiAFI")
  : localSupabaseEnv.publishableKey;

export const supabase = createClient(supabaseUrl, supabasePublishableKey, {
  auth: {
    storage: {
      getItem: (key: string) => SecureStore.getItemAsync(key),
      setItem: (key: string, value: string) =>
        SecureStore.setItemAsync(key, value),
      removeItem: (key: string) => SecureStore.deleteItemAsync(key),
    },
    autoRefreshToken: true,
    detectSessionInUrl: false,
    flowType: "pkce",
    persistSession: true,
  },
});

export function useAuthSession() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    void supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
    });

    return () => subscription.unsubscribe();
  }, []);

  return session;
}

export async function signInWithGoogle() {
  const redirectTo = Linking.createURL("/");
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo,
      skipBrowserRedirect: true,
    },
  });

  if (error) {
    throw error;
  }

  if (!data.url) {
    throw new Error("No URL returned from signInWithOAuth");
  }

  const result = await WebBrowser.openAuthSessionAsync(data.url, redirectTo);
  if (result.type !== "success") {
    return;
  }

  const code = Linking.parse(result.url).queryParams?.code;
  if (typeof code === "string") {
    await supabase.auth.exchangeCodeForSession(code);
  }
}
