import ProductCard from "@/components/single_product";
import { client } from "@/lib/client";
import { Image as IImage } from 'sanity'
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumb from "@/components/breadcrumb";

const getProductsByCategory = async (cat_name: string) => {
  const res = await client.fetch("*[_type == 'product' && category->name==$title]", { "title": cat_name });
  return res;
}
export interface IProduct {
  forEach(arg0: (product: any) => void): unknown;
  _id: string,
  title: string,
  description: string,
  image: IImage,
  price: Number,
  category: {
    name: string
  }
}
export default async function Prod({ params }: { params: { category: string } }) {
  var Empty:string="";
  const data: IProduct[] = await getProductsByCategory(params.category)
  {if (params.category=='Audio'|| params.category=='Video') {
    Empty ="No Products Here Yet"
  }}
  return (
    <>
      <Header /> <Breadcrumb />
      <section className='prefix-px max-w-screen-6xl w-full mt-10'>
        <div className='pt-20 flex flex-col items-start'>
          <h3 className="font-bold text-2xl text-gray-800 leading-5 pb-5"> {Empty}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-20 gap-8">
            {data.map(
          (item: any) => {
            return (<div key={item._id} > <ProductCard product={item} category={params.category}/></div>) }
        )}


          </div>
        </div>
      </section>

      {/*@ts-ignore */}
      <Footer />
    </>
  );
}