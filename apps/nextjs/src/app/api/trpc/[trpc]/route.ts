import { createClient } from "@supabase/supabase-js";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

import { appRouter, createTRPCContext } from "@acme/api";
import { mapSupabaseUser } from "@acme/auth";

import { getSession } from "~/auth/server";
import { env } from "~/env";

const setCorsHeaders = (response: Response) => {
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Request-Method", "*");
  response.headers.set("Access-Control-Allow-Methods", "OPTIONS, GET, POST");
  response.headers.set("Access-Control-Allow-Headers", "*");
};

export const OPTIONS = () => {
  const response = new Response(null, {
    status: 204,
  });
  setCorsHeaders(response);
  return response;
};

const getBearerSession = async (request: Request) => {
  const authorization = request.headers.get("authorization");
  const token = authorization?.match(/^Bearer (.+)$/i)?.[1];

  if (!token) {
    return null;
  }

  const supabase = createClient(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
    {
      auth: {
        persistSession: false,
      },
    },
  );
  const {
    data: { user },
  } = await supabase.auth.getUser(token);

  return user ? { user: mapSupabaseUser(user) } : null;
};

const handler = async (request: Request) => {
  const response = await fetchRequestHandler({
    endpoint: "/api/trpc",
    req: request,
    router: appRouter,
    createContext: async () =>
      createTRPCContext({
        headers: request.headers,
        session: (await getBearerSession(request)) ?? (await getSession()),
      }),
  });

  setCorsHeaders(response);
  return response;
};

export { handler as GET, handler as POST };
