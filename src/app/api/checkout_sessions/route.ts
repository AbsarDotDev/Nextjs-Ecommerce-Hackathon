import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-11-15',
});

const createPaymentIntent = async (amount: number) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount:amount*100,
    currency: 'usd',
  });

  return paymentIntent;
};
export const POST = async (request: NextRequest) =>{
  const req = await request.json();
console.log(req)
    try {
      const { amount } = req;

      const paymentIntent = await createPaymentIntent(amount);
console.log(paymentIntent)
      if (paymentIntent.client_secret) {
        return NextResponse.json({ clientSecret: paymentIntent.client_secret, paymentStatus :'succeeded' });
      } else {
        throw new Error('Client secret is null');
      }    } catch (error) {
      console.error('Error creating payment intent:', error);
      return NextResponse.json({ error: 'Failed to create payment intent' });
    }
 
}
