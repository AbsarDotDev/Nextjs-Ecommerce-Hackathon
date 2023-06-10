import React from "react";
import Link from "next/link";
import CartProductLayout from "@/components/cart_product";

import { Cart } from "../../lib/drizzle";
import { client } from "../../lib/sanityClient";
import { cookies } from "next/headers";
import { constants } from "buffer";

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


const getProductData = async () => {
    try {
        const user_id = cookies().get("user_id");
        const res = await fetch(`http://localhost:3000/api/cart?user_id=${user_id?.value}`, {
            method: "GET",
            cache:"no-store",
            headers: {
                "Content-Type": "application/json"
            },
        });
        if (!res.ok) {
            throw new Error("Failed to fetch the data")
        };
        const result = await res.json()
        return result
    } catch (err) {
        console.log(err)
    }
}


const Cart = async() => {
    const data = await getProductData();
    const result = await getProductsById(data)

    return (
        <div>
            <div className="container mx-auto mt-10">
                <div className="flex shadow-md my-10">
                    <div className="w-full bg-white px-10 py-10">
                        <div className="flex justify-between border-b pb-8">
                            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                            <h2 className="font-semibold text-2xl"> Items</h2>
                        </div>
                        <div className="flex mt-10 mb-5">
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                            <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
                            <h3 className="font-semibolds text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
                            <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
                        </div>
                        { !data?<div>No Items to show in cart</div>: data.map(
          (item: Cart,index:number) => { return (<div key={index}> <CartProductLayout cart={item} product={result[index]} /></div>) }
        )}
                        <div className="flex justify-between">

                            <Link href="/shop" className="flex font-semibold text-indigo-600 text-sm mt-10">

                                <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                                Continue Shopping
                            </Link>
                            <button>
                                <Link href="#" className="flex font-semibold text-indigo-600 text-sm mt-10 ">
                                    Update Cart
                                    <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                                </Link>
                            </button>
                        </div>
                        <div className="flex justify-center" >
                        <button className="bg-primary-pink font-semibold hover:bg-primary-lightpink py-3 text-sm text-white uppercase w-[75%] mt-10">Proceed To Checkout</button>
                    </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Cart