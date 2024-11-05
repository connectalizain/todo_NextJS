import { relations, InferSelectModel, InferInsertModel, } from "drizzle-orm";
import {
    pgTable,
    serial,
    varchar,
} from "drizzle-orm/pg-core";
import {sql} from '@vercel/postgres'
import { drizzle } from "drizzle-orm/vercel-postgres";

export const todoTable = pgTable("todos", {
    id: serial("id").primaryKey(),
    task: varchar("task", { length: 255 }).notNull()
});

export type Todo = InferSelectModel<typeof todoTable>;       // Type for selecting data
export type NewTodo = InferInsertModel<typeof todoTable>;     // Type for inserting data

export const db = drizzle(sql)

  export interface TodoResponse {
    data: [Todo]; // Array of Todo items
  }
  