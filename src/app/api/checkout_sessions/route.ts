import { Cart, OrderItemsTable, OrderTable, cartTable, db } from "@/lib/drizzle";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

const createPaymentIntent = async (amount: number) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount * 100,
    currency: "usd",
  });

  return paymentIntent;
};

export const POST = async (request: NextRequest) => {
  const req = await request.json();

  try {
    const { alldata, cartItems } = req;
    const orderId = await saveOrderDetails(alldata, cartItems);
    const paymentIntent = await createPaymentIntent(alldata.amount);
    const res = await db.delete(cartTable).where(eq(cartTable.user_id, alldata.user_id))
      .returning();
    if (paymentIntent.client_secret) {
      return NextResponse.json({
        clientSecret: paymentIntent.client_secret,
        paymentStatus: "succeeded",
        orderId: orderId,
      });
    } else {
      throw new Error("Client secret is null");
    }
  } catch (error) {
    console.error("Error creating payment intent:", error);
    return NextResponse.json({ error: "Failed to create payment intent" });
  }
};

// Function to save order details in the database
const saveOrderDetails = async (alldata: any, cartItems: any[]) => {
  // Save the formData in the Orders table and retrieve the orderId
  const orderId: any = await saveOrder(alldata);
  console.log(orderId);

  // Save the product details in the Order_Items table
  await saveOrderItems(orderId, cartItems);

  return orderId;
};

// Function to save the formData in the Orders table
const saveOrder = async (alldata: any) => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Adding 1 because getMonth() returns a zero-based value
  const day = currentDate.getDate();

  const formattedDate = `${year}-${month}-${day}`;

  const res = await db
    .insert(OrderTable)
    .values({
      total_amount: alldata.amount,
      first_name: alldata.firstName,
      last_name: alldata.lastName,
      email: alldata.email,
      phone_number: alldata.phone,
      user_id: cookies().get("user_id")?.value as string,
      order_date: formattedDate,
    })
    .returning();
  return res[0].id;
};

// Function to save the product details in the Order_Items table
const saveOrderItems = async (orderId: number, cartItems: any[]) => {
  cartItems.map(async (item: Cart) => {
    await db.insert(OrderItemsTable).values({
      order_id: orderId,
      product_id: item.product_id,
      quantity: item.quantity,
    });
  });
};
