import { redirect } from "next/navigation";

import { Button } from "@acme/ui/button";

import { createSupabaseServerClient, getSession } from "~/auth/server";
import { env } from "~/env";

export async function AuthShowcase() {
  const session = await getSession();

  if (!session) {
    return (
      <form>
        <Button
          size="lg"
          formAction={async () => {
            "use server";
            const supabase = await createSupabaseServerClient();
            const { data, error } = await supabase.auth.signInWithOAuth({
              provider: "google",
              options: {
                redirectTo: `${env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
              },
            });
            if (error) {
              throw error;
            }
            if (!data.url) {
              throw new Error("No URL returned from signInWithOAuth");
            }
            redirect(data.url);
          }}
        >
          Sign in with Google
        </Button>
      </form>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl">
        <span>Logged in as {session.user.name}</span>
      </p>

      <form>
        <Button
          size="lg"
          formAction={async () => {
            "use server";
            const supabase = await createSupabaseServerClient();
            const { error } = await supabase.auth.signOut();
            if (error) {
              throw error;
            }
            redirect("/");
          }}
        >
          Sign out
        </Button>
      </form>
    </div>
  );
}
