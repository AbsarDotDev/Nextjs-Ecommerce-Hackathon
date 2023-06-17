"use client";
import { StripeProducts } from "@/interfaces/interface";
import getStipePromise from "@/lib/stripe";
import { Interface } from "readline";

interface StripeCheckOutButtonProps {
    products: StripeProducts[];
  }
const StripeCheckOutButton = ({products}:StripeCheckOutButtonProps) => {
  const handleCheckout = async () => {
    const stripe = await getStipePromise();
    const response = await fetch("/api/stripe-session/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify(products),
    });

    const data = await response.json();
    if (data.session) {
      stripe?.redirectToCheckout({ sessionId: data.session.id });
    }
  };

  return (
    <div className="py-5">
  <button onClick={handleCheckout} className="mt-6 w-full rounded-md py-1.5 bg-primary-pink font-semibold hover:bg-primary-lightpink  text-white uppercase">Checkout</button>
    </div>
  );
};

export default StripeCheckOutButton;