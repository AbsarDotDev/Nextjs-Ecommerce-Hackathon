import { OrderTable,db } from "@/lib/drizzle"
import { cookies } from "next/headers";

import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-11-15',
});

const createPaymentIntent = async (amount: number) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount * 100,
    currency: 'usd',
  });

  return paymentIntent;
};

export const POST = async (request: NextRequest) => {
  const req = await request.json();

  try {
    const { formData, products } = req;

    // Save order details in the database
    const orderId = await saveOrderDetails(formData, products);

    const paymentIntent = await createPaymentIntent(formData.amount);

    if (paymentIntent.client_secret) {
      return NextResponse.json({
        clientSecret: paymentIntent.client_secret,
        paymentStatus: 'succeeded',
        orderId: orderId,
      });
    } else {
      throw new Error('Client secret is null');

    }
  } catch (error) {
    console.error('Error creating payment intent:', error);
    return NextResponse.json({ error: 'Failed to create payment intent' });
  }
};

// Function to save order details in the database
const saveOrderDetails = async (formData: any, products: any[]) => {
  // Save the formData in the Orders table and retrieve the orderId
  const orderId:any = await saveOrder(formData);

  // Save the product details in the Order_Items table
  await saveOrderItems(orderId, products);

  return orderId;
};

// Function to save the formData in the Orders table
const saveOrder = async (formData: any) => {
  const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Adding 1 because getMonth() returns a zero-based value
const day = currentDate.getDate();

const formattedDate = `${year}-${month}-${day}`;

  const res = await db.insert(OrderTable).values({
    total_amount:formData.amount,
    first_name:formData.data.firstName,
    last_name:formData.data.lastName,
    email:formData.data.email,
    phone_number:formData.data.phone,   
    user_id: cookies().get("user_id")?.value as string,
    order_date:formattedDate,
 }).returning();
};

// Function to save the product details in the Order_Items table
const saveOrderItems = async (orderId: number, products: any[]) => {
  // Implement your database logic to save the product details in the
  // Order_Items table using the orderId
};