import Link from "next/link";
import { redirect } from "next/navigation";

import { Button } from "@acme/ui/button";

import { createSupabaseServerClient, getSession } from "~/auth/server";

export default async function AdminRequestAccessPage() {
  const session = await getSession();

  if (!session) {
    redirect("/admin");
  }

  const supabase = await createSupabaseServerClient();
  const { data: adminUser } = await supabase
    .from("users")
    .select("user_id")
    .eq("user_id", session.user.id)
    .not("admin_since", "is", null)
    .maybeSingle();

  if (adminUser) {
    redirect("/admin/dashboard");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#170b22] px-4 py-12 text-[#fff7ee]">
      <section className="w-full max-w-lg rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-md">
        <Link
          href="/"
          className="font-display text-sm font-bold tracking-[0.16em] uppercase"
        >
          Side Stories
        </Link>

        <div className="mt-12">
          <p className="text-sm font-bold tracking-[0.18em] text-[#ffb45f] uppercase">
            Admin access
          </p>
          <h1 className="font-display mt-4 text-5xl leading-[0.92] font-extrabold">
            Access request received
          </h1>
          <p className="mt-5 text-lg leading-8 text-[#fff7ee]/82">
            You are signed in as {session.user.name ?? session.user.email}, but
            this account does not have admin access yet.
          </p>
          <p className="mt-4 leading-7 text-[#fff7ee]/70">
            Ask an existing admin to approve your account. Once they set your
            admin access, refresh this page and you will be sent to the
            dashboard.
          </p>
        </div>

        <form className="mt-8">
          <Button
            variant="outline"
            className="w-full border-white/30 bg-transparent text-[#fff7ee] hover:bg-white/10"
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
      </section>
    </main>
  );
}
