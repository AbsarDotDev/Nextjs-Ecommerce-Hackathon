'use client'

import { useState } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Cart } from "@/lib/drizzle";
import { IProduct } from "@/app/shop/[category]/page";
import { urlForImage } from "@/lib/image";



interface ICart{
  cart:Cart,
  product:any
}

const CartProductLayout = ({cart,product}:ICart) => {
    const [counter, setCounter] = useState(cart.quantity);
    const price = product.price;


    const handleIncrement = () => {
        setCounter(counter + 1);
    };

    const handleDecrement = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    };

    const handleInputChange = (event: any) => {
        const value = parseInt(event.target.value);

        if (!isNaN(value)) {
            setCounter(value);
        }
    };

    const getTotalPrice = (price:number) => {
        return price * counter;

    };

    const handleDelete =async () => {
        try {
            const res = await fetch('/api/cart', {
                method: "DELETE",  
                // mode:'no-cors', 
                cache:"no-store",
                headers: {
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({"id":cart.id})
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
        return (
        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div className="flex w-2/5">
                <div className="w-20">
                    <Image src={urlForImage(product.image).url()} width={70} height={60} alt="asdjn" />
                </div>
                <div className="flex flex-col items-start justify-between ml-4 flex-grow">
                    <span className="font-bold text-sm">{product.name}</span>
                    <button onClick={handleDelete} className="font-semibold text-red-600 hover:text-red-500 text-xs">Remove</button>
                </div>
            </div>
            <div className="flex justify-center w-1/5">
                {/* <button
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300"
                    onClick={handleDecrement}
                >
                    <svg className="w-4 h-4 fill-current text-gray-600" viewBox="0 0 448 512">
                        <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                </button> */}
                <p>{counter}</p>
                {/* <input
                    className="mx-2 border text-center w-12"
                    type="text"
                    value={counter}
                    onChange={handleInputChange}
                    disabled
                /> */}
                {/* <button
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300"
                    onClick={handleIncrement}
                >
                    <svg className="w-4 h-4 fill-current text-gray-600" viewBox="0 0 448 512">
                        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                </button> */}
            </div>

            <span className="text-center w-1/5 font-semibold text-sm">${`${product.price}`}</span>
            <span className="text-center w-1/5 font-semibold text-sm">${getTotalPrice(Number(product.price)).toFixed(2)}</span>
        </div>

    );
};

export default CartProductLayout;
