"use client";
import { useForm, Controller } from "react-hook-form";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Cart } from "@/lib/drizzle";



interface CheckoutFormData {
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  phone: string;
}

interface CheckoutFormProps {
  amount: number;
  cart: Cart[];
  userId:string
}
const CheckoutForm: React.FC<CheckoutFormProps> = ({ amount, cart,userId }) => {
  const stripe = useStripe();
  const elements = useElements();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CheckoutFormData>();

  const [error, setError] = useState<string | null>();

  const onSubmit = async (data: CheckoutFormData) => {
    if (!stripe || !elements) {
      return;
    }

    // const cartItems = cart.map((item) => {
    //   return item.product_id;
    // });
    const cardElement = elements.getElement(CardElement);
    const formData = {
      ...data,
      amount: amount,
      user_id:userId
    };
    if (!cardElement) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setError(error.message);
      return;
    }

    try {
      const response = await fetch("/api/checkout_sessions", {
        method: "POST",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ alldata: formData, cartItems: cart }),
      });
      if (!response.ok) {
        throw new Error("Failed to create payment intent");
      }

      const { clientSecret } = await response.json();
      const { error: paymentError, paymentIntent } =
        await stripe.confirmCardPayment(
          clientSecret, // Make sure `clientSecret` is a string
          {
            payment_method: paymentMethod?.id,
          }
        );

      if (paymentError) {
        console.log(paymentError);
      } else if (paymentIntent?.status === "succeeded") {
        // Payment succeeded, handle the success case
      }
    } catch (error) {
      console.error("Error processing payment:", error);
    }
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: "16px",
        color: "#000",
        "::placeholder": {
          color: "#888",
        },
      },
      invalid: {
        color: "#e5424d",
      },
    },
  };

  return (
    <div className="flex justify-center">
      <form className="w-full max-w-md" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="firstName"
          >
            First Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstName"
            type="text"
            {...register("firstName", { required: true })}
          />
          {errors.firstName && (
            <span className="text-red-500">First Name is required</span>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="lastName"
          >
            Last Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastName"
            type="text"
            {...register("lastName", { required: true })}
          />
          {errors.lastName && (
            <span className="text-red-500">Last Name is required</span>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500">Email is required</span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Phone
          </label>
          <Controller
            name="phone"
            control={control}
            rules={{ required: "Phone is required" }}
            render={({ field }) => (
              <PhoneInput
                enableSearch={true}
                disableCountryCode={true}
                placeholder="Enter phone number"
                country="pk"
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
          {errors.phone && (
            <span className="text-red-500">{errors.phone.message}</span>
          )}
        </div>

        {/* Repeat the same pattern for other form fields */}
        {/* ... */}

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="cardDetails"
          >
            Card Details
          </label>
          <CardElement options={cardElementOptions} />
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          disabled={!stripe}
        >
          Pay Now
        </button>
      </form>
      {/* Order summary section */}
    </div>
  );
};

export default CheckoutForm;
