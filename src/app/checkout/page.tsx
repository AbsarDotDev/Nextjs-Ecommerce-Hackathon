
'use client'

import { loadStripe, Stripe, StripeElements } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '@/components/Checkout';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!) as Promise<Stripe | null>;
const Checkout = () => {

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