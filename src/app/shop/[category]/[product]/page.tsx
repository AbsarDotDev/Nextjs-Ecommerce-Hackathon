import CategoryCards from "@/components/category_cards";
import Header from "@/components/header";
import { Image as IImage } from 'sanity'

import SingleProducts from "@/components/single_prodPage";
import { client } from "@/lib/client";
import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/lib/image";
import Footer from "@/components/footer";
import ProductCard from "@/components/single_product";
import { category } from "../../../../../sanity/category";
import { AddToCartBtn } from "@/components/addToCart_btn";

const getProductData = async (prd_name: string) => {
  const res = await client.fetch("*[_type == 'product' && title==$title]", { "title": prd_name });
  return res;
}

const getNotProductData = async (prd_cat: string , prd_id:string) => {
  const res = await client.fetch("*[_type == 'product' && category._ref == $categoryName && _id != $productId]",{"categoryName":prd_cat,"productId":prd_id});
  return res;
}
export interface IProduct {
  _id: string,
  title: string,
  description: string,
  image: IImage,
  price: Number,
  category: {
    _ref: string
  }
}
export default async function Products({ params }: { params: { product: string } }) {
  const decodedProduct = decodeURIComponent(params.product);
  const data: IProduct[] = await getProductData(decodedProduct)
  const ndata = await getNotProductData(data[0].category._ref , data[0]._id)
  return (
    <div>
      <Header />
      <section className=" prefix-px max-w-screen-6xl w-full pt-10">
        <div className="flex flex-col md:flex-row gap-x-10 gap-y-10">
          <div className="flex-1">
            <Image src={urlForImage(data[0].image).url()}
              alt="Image_1" width={1900} height={400} />
          </div>
          <AddToCartBtn product={data[0]}/>
        </div>
          <h3 className="font-bold text-2xl text-gray-800 leading-5 mt-10 pb-5">
            Related Products
          </h3>
          <div className="grid grid-cols-[auto] md:grid-cols-[auto,auto] custom:grid-cols-[auto,auto] lg:grid-cols-[auto,auto,auto] gap-x-2 gap-y-3 mb-20 justify-between">
        {ndata.map(
          (item: any) => {
            return (<div key={item._id} className="" > <ProductCard product={item} category={"Vector"}/></div>) }
        )}
        </div>
      </section>

      {/*@ts-ignore */}
      <Footer />
    </div>

  );
}