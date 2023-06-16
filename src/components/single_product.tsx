
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { IProduct } from '@/app/shop/[category]/page';
import { urlForImage } from '@/lib/image';

interface ProductCardsProps {
    product: IProduct;
    category:string
}
const ProductCard = ({ product, category }: ProductCardsProps) => {
    return (
        <>
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            {/* Product Image */}
            <Link href={`/shop/${category}/${product.title}`}>
                <Image className="p-8 rounded-t-lg transform transition-all duration-300 hover:scale-110 object-cover h-[320px]" src={urlForImage(product.image).url()} width={'500'} height={'400'} alt="product image" />
            </Link>
            <div className="px-5 pb-5">
                {/* Product Title */}
                <Link href={`/shop/${category}/${product.title}`}>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
                </Link>
                {/* Rating */}
                <div className="flex items-center mt-2.5 mb-5">
                    {/* Rating Stars */}
                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    {/* Rating Count */}
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                </div>
                <div className="flex items-center justify-between">
                    {/*@ts-ignore */}
                    <h6 className="text-xl font-semibold text-gray-900 dark:text-white">${product.price} </h6>
                    {/* Add to Cart Button */}
                    <Link href={`/shop/${category}/${product.title}`} className="text-white bg-primary-pink hover:bg-primary-lightpink focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Product</Link>
                </div>
            </div>
        </div> </>

    )
}
export default ProductCard