import { sql } from "drizzle-orm";
import { pgSchema, pgTable } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const Post = pgTable("post", (t) => ({
  id: t.uuid().notNull().primaryKey().defaultRandom(),
  title: t.varchar({ length: 256 }).notNull(),
  content: t.text().notNull(),
  createdAt: t.timestamp().defaultNow().notNull(),
  updatedAt: t
    .timestamp({ mode: "date", withTimezone: true })
    .$onUpdateFn(() => sql`now()`),
}));

export const authSchema = pgSchema("auth");

export const AuthUser = authSchema.table("users", (t) => ({
  id: t.uuid().notNull().primaryKey(),
}));

export const User = pgTable("users", (t) => ({
  userId: t
    .uuid("user_id")
    .notNull()
    .primaryKey()
    .references(() => AuthUser.id, { onDelete: "cascade" }),
  adminSince: t.timestamp("admin_since", {
    mode: "date",
    withTimezone: true,
  }),
  createdAt: t.timestamp("created_at").defaultNow().notNull(),
}));

export const CreatePostSchema = createInsertSchema(Post, {
  title: z.string().max(256),
  content: z.string().max(256),
}).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
