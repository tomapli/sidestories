import Link from "next/link";
import { redirect } from "next/navigation";

import { Button } from "@acme/ui/button";

import { createSupabaseServerClient, getSession } from "~/auth/server";
import { env } from "~/env";

export default async function AdminPage() {
  const session = await getSession();

  if (session) {
    redirect("/admin/dashboard");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#170b22] px-4 py-12 text-[#fff7ee]">
      <section className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-md">
        <Link
          href="/"
          className="font-display text-sm font-bold tracking-[0.16em] uppercase"
        >
          Side Stories
        </Link>

        <div className="mt-12">
          <p className="text-sm font-bold tracking-[0.18em] text-[#ffb45f] uppercase">
            Admin
          </p>
          <h1 className="font-display mt-4 text-5xl leading-[0.92] font-extrabold">
            Prihlaseni
          </h1>
          <p className="mt-5 text-lg leading-8 text-[#fff7ee]/82">
            Pro vstup do administrace se prihlas pres Google.
          </p>
        </div>

        <form className="mt-8">
          <Button
            size="lg"
            className="w-full"
            formAction={async () => {
              "use server";
              const supabase = await createSupabaseServerClient();
              const { data, error } = await supabase.auth.signInWithOAuth({
                provider: "google",
                options: {
                  redirectTo: `${env.NEXT_PUBLIC_SITE_URL}/auth/callback?next=/admin/dashboard`,
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
      </section>
    </main>
  );
}
