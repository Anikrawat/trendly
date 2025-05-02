import { integer, pgEnum, pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const rolesEnum = pgEnum('user_role', ["seller", "customer"])

export const usersTable = pgTable("users", {
  id: uuid('id').primaryKey().defaultRandom(),
  role: rolesEnum('role').default("customer"),
  userId: uuid("userId").notNull()
});

export const productTable = pgTable("products", {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar({ length: 20 }).notNull(),
  description: varchar({ length: 256 }).notNull(),
  price: integer().notNull(),
  stock: integer().notNull(),
  productImageUrl: varchar().notNull(),
  category: varchar({ length: 20 }).notNull(),
  userId: uuid("user_id").references(() => usersTable.id).notNull()
})

export const orderTable = pgTable("orders", {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => usersTable.id).notNull(),
  orderDate: timestamp('order_date', { withTimezone: true }).defaultNow(),
  status: varchar({ length: 20 }).notNull(),
  totalAmount: integer().notNull()
})

export const orderItemsTable = pgTable("order_items", {
  id: uuid("id").primaryKey().defaultRandom(),
  productId: uuid("product_id").references(() => productTable.id).notNull(),
  quantity: integer().notNull(),
  price: integer().notNull(),
  orderId: uuid("order_table").references(() => orderTable.id).notNull()
})

export const cartTable = pgTable("cart", {
  id: uuid("id").primaryKey().defaultRandom(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  userId: uuid("user_id").references(() => usersTable.id).notNull()
})

export const cartItemsTable = pgTable("cart_items", {
  id: uuid("id").primaryKey().defaultRandom(),
  cartId: uuid("cart_id").references(() => cartTable.id).notNull(),
  quantity: integer().notNull(),
  productId: uuid("product_id").references(() => productTable.id).notNull()
})
