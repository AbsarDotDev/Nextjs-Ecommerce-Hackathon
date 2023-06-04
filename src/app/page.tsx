import Link from 'next/link'
import CategoryCards from '../components/category_cards'
import Footer from '../components/footer'
import Header from '../components/header'
import HeroSection from '../components/hero'
import TwoColumnComponent from '../components/section'
import SingleProduct from '@/components/single_product'
import ProductCard from '@/components/single_product'
import {client} from '@/lib/client'
import { Image as IImage} from 'sanity'
export const getCategories =async()=> {
   const res=await client.fetch("*[_type == 'category'] | order(_random) [0...4]");
   return res;
}
export interface ICategory{
  _id:string,
  name:string,
  description:string,
  image:IImage
}
export default async function Home() {
  const categories:ICategory[]=await getCategories();
  // console.log(categories.length)
  // console.log(categories[0])
  return (
    <div>
 
      <Header/>
      <HeroSection/>
      {/* Category Section */}

      <section className="px-20 max-w-screen-6xl w-full">

      <div>
        <h3 className="font-bold text-2xl text-gray-800 leading-5">
          Curated asset collections
        </h3>
        <h5 className="text-gray-800 font-light text-lg pt-2 mb-5">
          Explore diverse collections of our most incredible high-resolution,
          royalty-free, stock assets
        </h5>
      </div>
      <div className="grid grid-cols-[auto] md:grid-cols-[auto,auto] custom:grid-cols-[auto,auto] lg:grid-cols-[auto,auto,auto,auto] justify-between">
       {/* {categories.map(
         (item:any)=>{  return (<CategoryCards category={item} key={item._id}/>)     }
       )} */}

 
      </div>


</section>
{/* Best Selling Section */}
      <section className='best-selling mt-20'>
      <div className='px-20 pt-20 flex flex-col items-start'>
            <h3 className="font-bold text-2xl text-gray-800 leading-5  pb-5">
                Best Selling
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">


            </div>
            <button className='bg-gradient-to-l from-primary-lightpink to-primary-pink py-3 px-8 text-white rounded-3xl mt-5'>
                <Link href={'#'} className=''>
                    View All
                </Link>
            </button>
        </div>


        </section>
      <TwoColumnComponent/>
      {/*@ts-ignore */}
      <Footer/>

    </div>
  )
}
