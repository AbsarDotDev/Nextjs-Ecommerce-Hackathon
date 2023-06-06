
import Link from 'next/link'
import CategoryCards from '../components/category_cards'
import Footer from '../components/footer'
import Header from '../components/header'
import HeroSection from '../components/hero'
import TwoColumnComponent from '../components/section'
import { Image as IImage } from 'sanity'
import SingleProduct from '@/components/single_product'
import ProductCard from '@/components/single_product'
import { client } from './lib/sanityClient'
import CategoryCardsHome from '@/components/category_cards_home'

import ProductCardHome from '@/components/single_product_home'
import { ICategory } from './shop/page'

export const getCat = async () => {
  const res = await client.fetch(`*[_type == 'category'] | order(_random) [0...4]`);
  return res;
}

export const getPro = async () => {
  const res = await client.fetch(`*[_type == 'product'] | order(_random) [0...4]`);
  return res;
}

export interface ICat {
  _id: string,
  name: string,
  image: IImage
}
// export interface ICategory {
//   _id: string,
//   name: string,
//   description: string,
//   image: IImage
// }

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

const getC = async (products: IProduct[]) => {
  const categoryRefs = products.map(product => product.category._ref);
  console.log(categoryRefs)
  const data = await client.fetch(`*[ _type == 'category' && _id in $categoryRefs]`, {
    "categoryRefs": categoryRefs
  });

  return data;
}

export default async function Home() {
  const data: ICat[] = await getCat();
  const pro_data: IProduct[] = await getPro();
  const cat: ICat[] = await getC(pro_data);

  // const breadcrumbItems = [
  //   { label: 'Home', url: '/' },
  //   { label: 'Categories', url: '/shop/' },
  //   { label: 'Product', url: '/shop/category/' },
  // ];

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
          <div className="grid grid-cols-[auto] md:grid-cols-[auto,auto] custom:grid-cols-[auto,auto] lg:grid-cols-[auto,auto,auto,auto] justify-between">
            {pro_data.map((item: any, index: number) => {
              const catItem = cat.find((catItem) => catItem._id === item.category._ref);
              const catName = catItem ? catItem.name : 'Photos'; // Retrieve the category name

              return (
                <div key={item._id}>
                  <ProductCardHome product={item} catname={catName} />
                </div>
              );
            })}

          </div>
          <button className='bg-gradient-to-l from-primary-lightpink to-primary-pink py-3 px-8 text-white rounded-3xl mt-5'>
            <Link href={'#'} className=''>
              View All
            </Link>
          </button>
        </div>


      </section>
      <TwoColumnComponent />
      {/*@ts-ignore */}
      <Footer />

    </div>
  )
}
