"use client";
import { useState } from "react";
import { IProduct } from "@/app/page";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
interface ProductCardsProps {
  product: IProduct;
}


export const AddToCartBtn = ({product}:ProductCardsProps) => {
  const router=useRouter();
  const showToast=()=>{
    toast.success('Added To Cart Successfully!')
}

  const handleAddToCart = async()=>{
    showToast()
    const res = await fetch("/api/cart",{
      method:"POST",
      body: JSON.stringify({
        product_id:product._id,
        quantity: counter
      })
    })
 const result = await res.json()
 router.refresh()
  }
  const price:number = Number(product.price);

  const [counter, setCounter] = useState(1);
  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  const setPrice = () => {
    return price * counter;
};
  const handleInputChange = (event: any) => {
    const value = parseInt(event.target.value);

    if (!isNaN(value)) {
      setCounter(value);
    }
  };
  return (
    <div className="flex-1 lg:pl-5 md:pl-5">
    <h1 className="font-semibold text-4xl  py-4 text-primary-pink">
      {product.title}
    </h1>
    <h3 className="font-bold text-3xl pt-3 pb-6">${`${setPrice().toFixed(2)}`}</h3>

    <p className="max-w-full font-normal py-4">
      {product.description}
    </p>
    <div>
      <div className="flex justify-center w-1/5">
        <button
          className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300"
          onClick={handleDecrement}
        >
          <svg
            className="w-4   h-4 fill-current text-gray-600"
            viewBox="0 0 448 512"
          >
            <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>
        </button>
        <input
          onChange={handleInputChange}
          className="mx-2 border text-center w-12 "
          type="text"
          value={counter}
        />
        <button
          className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300"
          onClick={handleIncrement}
        >
          <svg
            className="w-4 h-4 fill-current text-gray-600"
            viewBox="0 0 448 512"
          >
            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>
        </button>
      </div>

      {/* Add to Cart Button */}
      <Toaster/>
      <SignedIn>
      <button onClick={handleAddToCart} className="mt-10 text-white bg-primary-pink hover:bg-primary-lightpink focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Add to cart
      </button>
      </SignedIn>
      <SignedOut>
      <button disabled className="mt-10 text-white bg-primary-lightpink  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Add to cart
      </button>
      <p className="text-red-700 pt-2 text-[16px]"> <FontAwesomeIcon icon={faCircleExclamation} /> You must be signIn to add products</p>
      </SignedOut>
    </div>  </div>
   
  );
};
