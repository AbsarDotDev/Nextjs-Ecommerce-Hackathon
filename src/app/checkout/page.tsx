'use client'
import { loadStripe, Stripe, StripeElements } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '@/components/Checkout';

import { useSearchParams } from 'next/navigation';
import { Cart } from '@/lib/drizzle';
import { client } from '@/lib/client';
import { IProduct } from '../page';
const getProductsById = async (data: Cart[]) => {

  if (!data) {
    return []; // Return an empty array if data is undefined
  }

  const pro_id = data.map(item => item.product_id);
  const res = await client.fetch("*[_type == 'product' && _id in $prd_id]", {
    "prd_id": pro_id,
  });
  return res;
}; 
 const getCartTotal = (cart:Cart[],products:IProduct[]) => {
    let total = 0;
  
    for (const [index, item] of cart.entries()) {
        total += Number(products[index].price) * item.quantity;
      }

    return total.toFixed(2);
  };



const getProductData = async (user_id:string) => {
  try {
      const res = await fetch(`http://localhost:3000/api/cart?user_id=${user_id}`, {
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
const Checkout =async () => {
  const searchParams= useSearchParams()
const user_id= searchParams.get('user_id');
const data=await getProductData(user_id!);
const result=await getProductsById(data);
  return (
    <div>
 
      <div className="flex justify-center">
        <Elements stripe={stripePromise}>
          <CheckoutForm amount={Number(getCartTotal(data,result))} cart={data} userId={user_id!}/>
        </Elements>
      </div>
    </div>
  );
};

export default Checkout;