import type { User } from "@supabase/supabase-js";

export interface SessionUser {
  id: string;
  email: string | null;
  name: string | null;
  image: string | null;
}

export interface Session {
  user: SessionUser;
}

export function mapSupabaseUser(user: User): SessionUser {
  const metadata = user.user_metadata as Record<string, unknown>;

  return {
    id: user.id,
    email: user.email ?? null,
    name:
      getMetadataString(metadata, "full_name") ??
      getMetadataString(metadata, "name") ??
      user.email ??
      null,
    image:
      getMetadataString(metadata, "avatar_url") ??
      getMetadataString(metadata, "picture"),
  };
}

function getMetadataString(
  metadata: Record<string, unknown>,
  key: string,
): string | null {
  const value = metadata[key];
  return typeof value === "string" && value.length > 0 ? value : null;
}
