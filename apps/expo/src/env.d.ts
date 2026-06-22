declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV?: "development" | "production" | "test";
    readonly EXPO_PUBLIC_SUPABASE_URL?: string;
    readonly EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY?: string;
    readonly NEXT_PUBLIC_SUPABASE_URL?: string;
    readonly NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY?: string;
  }
}

declare const process: {
  readonly env: NodeJS.ProcessEnv;
};
