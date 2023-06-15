"use client"

import { loadStripe, Stripe, StripeElements } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '@/components/Checkout';

import { cookies } from 'next/headers';
import { useSearchParams } from 'next/navigation';

const getProductData = async () => {
  try {
      const user_id = cookies().get("user_id");

      const res = await fetch(`http://127.0.0.1:3000/api/cart?user_id=${user_id?.value}`, {
          method: "GET",
          mode:'no-cors',
          cache:"no-store",
          headers: {
              "Content-Type": "application/json"
          },
      });

      if (!res.ok) {
          throw new Error("Failed to fetch the data")
      };
      const result = await res.json();
      return result
  } catch (err) {
      console.log(err)
  }
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!) as Promise<Stripe | null>;
const Checkout = () => {
  const searchParams=useSearchParams()
const user_id=searchParams.get('user_id');
  return (
    <div>
      {/* ... */}
      <div className="flex justify-center">
        <Elements stripe={stripePromise}>
          <CheckoutForm amount={1000}/>
        </Elements>
      </div>
    </div>
  );
};

export default Checkout;