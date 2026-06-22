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
})).enableRLS();

export const Game = pgTable("games", (t) => ({
  id: t.uuid().notNull().primaryKey().defaultRandom(),
  name: t.varchar({ length: 256 }).notNull(),
  description: t.text(),
  createdAt: t.timestamp("created_at").defaultNow().notNull(),
  updatedAt: t
    .timestamp("updated_at", { mode: "date", withTimezone: true })
    .$onUpdateFn(() => sql`now()`),
})).enableRLS();

export const Task = pgTable("tasks", (t) => ({
  id: t.uuid().notNull().primaryKey().defaultRandom(),
  gameId: t
    .uuid("game_id")
    .notNull()
    .references(() => Game.id, { onDelete: "cascade" }),
  title: t.varchar({ length: 256 }).notNull(),
  description: t.text(),
  createdAt: t.timestamp("created_at").defaultNow().notNull(),
  updatedAt: t
    .timestamp("updated_at", { mode: "date", withTimezone: true })
    .$onUpdateFn(() => sql`now()`),
})).enableRLS();

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
})).enableRLS();

export const CreatePostSchema = createInsertSchema(Post, {
  title: z.string().max(256),
  content: z.string().max(256),
}).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
