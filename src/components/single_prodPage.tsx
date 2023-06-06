import Link from "next/link";
import Image from "next/image";
import { IProduct } from "@/app/page";

interface ProductCardsProps {
    product: IProduct;
}

export default async function SingleProducts({ product }: ProductCardsProps) {
return ( 
     <section className="px-20 max-w-screen-6xl w-full pt-10">
<div className="flex flex-col md:flex-row">
  <div className="flex-1">
    <Image src="/products.jpg" alt="Image_1" width={500} height={400} />
  </div>
  <div className="flex-1 lg:pl-5 md:pl-5">
    <h3 className="font-semibold text-2xl underline py-4 text-pink-800">
      {product.title}
    </h3>

    <p className="max-w-xl font-normal py-4">
      {product.description}
    </p>
    <div className="flex justify-center w-1/5">
      <button className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300">
        <svg
          className="w-4   h-4 fill-current text-gray-600"
          viewBox="0 0 448 512"
        >
          <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>
      </button>
      <input className="mx-2 border text-center w-12 " type="text" />
      <button className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300">
        <svg
          className="w-4 h-4 fill-current text-gray-600"
          viewBox="0 0 448 512"
        >
          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>
      </button>
    </div>
    <h1 className="font-bold text-4xl pt-3 pb-6">{`${product.price}`}</h1>
    {/* Add to Cart Button */}
    <Link
      href="#"
      className="text-white bg-primary-pink hover:bg-primary-lightpink focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Add to cart
    </Link>
  </div>
</div>
<div className="pt-5">
  <h3 className="font-semibold text-2xl underline py-2 text-pink-800">
    Description
  </h3>
  <h4 className="font-semibold text-base"> Product Description:</h4>
  <p className="max-w-full">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
    rem a laborum iste odit iusto explicabo totam repudiandae nisi amet
    at officiis animi excepturi necessitatibus dolor, illum quos fugit
    minus?
  </p>
</div>
<div className="pt-12 pb-3">
  <h3 className="font-bold text-2xl text-gray-800 leading-5">
    Categories
  </h3>
</div>
</section>
)
}