'use client'
import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

interface CheckoutFormProps {
  amount: number;

}
const CheckoutForm: React.FC<CheckoutFormProps> = ({amount  }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    if (!stripe || !elements) {
      return;
    }
  
    const cardElement = elements.getElement(CardElement);
  
    if (!cardElement) {
      return;
    }
  
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });
  
    if (error) {
      setError(error.message);
      return;
    }
  
    try {
      const response = await fetch('/api/checkout_sessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: amount }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to create payment intent');
      }
  
      const { clientSecret } = await response.json();
      const { error: paymentError, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret, // Make sure `clientSecret` is a string
        {
          payment_method: paymentMethod?.id,
        }
      );
  
      if (paymentError) {
        console.log(paymentError);
      } else if (paymentIntent?.status === 'succeeded') {
        // Payment succeeded, handle the success case
      }
    } catch (error) {
      console.error('Error processing payment:', error);
    }
  };
  
  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        width:'2000px',
        color: '#000',
        '::placeholder': {
          color: '#888',
        },
      },
    },
  };

  return (
    <form onSubmit={handleSubmit}>
      <div> <label>
          Card details
   <CardElement options={cardElementOptions} />
   </label>
   </div>
      {error && <div>{error}</div>}

      <button type="submit" disabled={!stripe}>
        Pay Now
      </button>
    </form>
  );
};

export default CheckoutForm;
