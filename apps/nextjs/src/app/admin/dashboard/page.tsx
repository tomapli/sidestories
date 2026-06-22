import Link from "next/link";
import { redirect } from "next/navigation";

import { Button } from "@acme/ui/button";

import { createSupabaseServerClient, getSession } from "~/auth/server";

export default async function AdminDashboardPage() {
  const session = await getSession();

  if (!session) {
    redirect("/admin");
  }

  return (
    <main className="min-h-screen bg-[#f3eee8] px-4 py-5 text-[#211a16] sm:px-6 lg:px-10">
      <div className="mx-auto flex min-h-[calc(100vh-2.5rem)] max-w-6xl flex-col">
        <nav className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="font-display text-sm font-bold tracking-[0.16em] uppercase"
          >
            Side Stories
          </Link>
          <form>
            <Button
              variant="outline"
              formAction={async () => {
                "use server";
                const supabase = await createSupabaseServerClient();
                const { error } = await supabase.auth.signOut();

                if (error) {
                  throw error;
                }

                redirect("/admin");
              }}
            >
              Sign out
            </Button>
          </form>
        </nav>

        <section className="flex flex-1 items-center py-16">
          <div className="grid w-full gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-bold tracking-[0.18em] text-[#bd2f62] uppercase">
                Admin dashboard
              </p>
              <h1 className="font-display mt-4 text-5xl leading-[0.92] font-extrabold tracking-normal sm:text-7xl">
                Vitej zpatky
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#62564d] sm:text-xl sm:leading-9">
                Jsi prihlaseny jako {session.user.name ?? session.user.email}.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#211a16]/10 bg-white/70 p-6 shadow-[0_18px_50px_-32px_rgba(33,26,22,0.7)]">
              <p className="font-display text-2xl font-bold">
                Administrace je pripravena.
              </p>
              <p className="mt-3 leading-7 text-[#62564d]">
                Sem muzeme doplnit spravu registraci, obsahu nebo dalsich
                internich nastroju.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
