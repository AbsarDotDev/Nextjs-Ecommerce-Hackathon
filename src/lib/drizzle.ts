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
export const OrderTable = pgTable("cart",{
    id: serial("id").primaryKey(),
    user_id: varchar("user_id",{length:255}).notNull(),
    order_date: date("user_id").notNull(),
    total_amount: decimal("total_amount").notNull(),
    first_name: varchar("first_name",{length:255}).notNull(),
    last_name: varchar("last_name",{length:255}).notNull(),
    email: varchar("email",{length:255}).notNull(),
    phone_number: varchar("number",{length:20}).notNull(),
})


export type Cart=InferModel<typeof cartTable>
export const db = drizzle(sql); 