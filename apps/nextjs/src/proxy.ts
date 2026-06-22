import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

import { env } from "~/env";

export async function proxy(request: NextRequest) {
  let response = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );
          response = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (request.nextUrl.pathname === "/admin/request-access") {
    if (!user) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }

    return response;
  }

  if (request.nextUrl.pathname.startsWith("/admin/")) {
    const redirectToAdmin = NextResponse.redirect(
      new URL("/admin", request.url),
    );

    if (!user) {
      return redirectToAdmin;
    }

    const { data: adminUser } = await supabase
      .from("users")
      .select("user_id")
      .eq("user_id", user.id)
      .not("admin_since", "is", null)
      .maybeSingle();

    if (!adminUser) {
      return redirectToAdmin;
    }
  }

  return response;
}

export const config = {
  matcher: ["/admin/:path*", "/auth/:path*"],
};
