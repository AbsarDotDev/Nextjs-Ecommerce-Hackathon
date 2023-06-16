import{date, decimal, integer, pgTable, serial, varchar} from 'drizzle-orm/pg-core'
import {drizzle} from 'drizzle-orm/vercel-postgres'
import {sql} from '@vercel/postgres'
import { InferModel } from 'drizzle-orm'
 
export const cartTable = pgTable("cart",{
    id: serial("id").primaryKey(),
    user_id: varchar("user_id",{length:255}).notNull(),
    product_id: varchar("product_id",{length:255}).notNull(),
    quantity: integer("quantity").notNull(),
})
export const OrderTable = pgTable("orders",{
    id: serial("order_id").primaryKey(),
    user_id: varchar("user_id",{length:255}).notNull(),
    order_date: date("order_date").notNull(),
    total_amount: decimal("total_amount").notNull(),
    first_name: varchar("first_name",{length:255}).notNull(),
    last_name: varchar("last_name",{length:255}).notNull(),
    email: varchar("email",{length:255}).notNull(),
    phone_number: varchar("phone_number",{length:20}).notNull(),
})
export const OrderItemsTable = pgTable("order_items",{
    id: serial("id").primaryKey(),
    order_id: integer("order_id").references(() => OrderTable.id),
    product_id: varchar("product_id",{length:255}).notNull(),
    quantity: integer("quantity").notNull(),
})

export type Cart=InferModel<typeof cartTable>
export const db = drizzle(sql); 