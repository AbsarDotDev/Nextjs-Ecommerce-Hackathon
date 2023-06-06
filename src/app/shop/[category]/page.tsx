import ProductCard from "@/components/single_product";
import { client } from "@/lib/client";
import { Image as IImage} from 'sanity'
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";

 const getProductsByCategory = async (cat_name:string) => {
    const res = await client.fetch("*[_type == 'product' && category->name==$title]",{"title":cat_name});
    return res;
  } 
  export interface IProduct {
    _id: string,
    title: string,
    description: string,
    image: IImage,
    price:Number,
    category:{
        name:string
    }
  }
export default async function Prod({ params }: {params: { category: string }}) {
   const data :IProduct[] = await getProductsByCategory(params.category)
    return(
    <>
        <Header/>
<section className='best-selling mt-20'>
      <div className='px-20 pt-20 flex flex-col items-start'>
            <h3 className="font-bold text-2xl text-gray-800 leading-5  pb-5">
            {params.category}
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