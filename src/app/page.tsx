import Link from 'next/link'
import CategoryCards from '../components/category_cards'
import Footer from '../components/footer'
import Header from '../components/header'
import HeroSection from '../components/hero'
import { Image as IImage } from 'sanity'
import { client } from './lib/sanityClient'
import CategoryCardsHome from '@/components/category_cards_home'
import Features from '@/components/feature'
import Customer_Feedback from '@/components/feedback'

 const getCat = async () => {
  const res = await client.fetch(`*[_type == 'category'] | order(_random) [0...4]`);
  return res;
}

export interface ICat {
  _id: string,
  name: string,
  image: IImage
}
export interface ICategory {
  _id: string,
  name: string,
  description:string,
  image: IImage
}
// export const getPro = async () => {
//   const res = await client.fetch(`*[_type == 'category'] | order(_random) [0...4]`);
//   return res;
// }

// export interface IPro {
//   _id: string,
//   name: string,
//   image: IImage,
// }

export default async function Home() {
  const data: ICat[] = await getCat();


  return (
    <div>
      <Header />
      <HeroSection />
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
          {data.map(
            (item: any) => { return (<div key={item._id} > <CategoryCardsHome category={item} /></div>) }
          )}

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
      <div className='px-20'>
      <Features/>
      <Customer_Feedback/>
      </div>
      {/*@ts-ignore */}
      <Footer />

    </div>
  )
}
