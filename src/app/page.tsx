import Image from 'next/image'
import CategoryCards from '../components/catCards'
import Footer from '../components/footer'
import Header from '../components/header'
import HeroSection from '../components/hero'
import TwoColumnComponent from '../components/section'
import Carousel from '@/components/product_slider'
import SingleProduct from '@/components/single_product'
// const products = [
//   {
//     id: 1,
//     name: "Product 1",
//     image: "/card1.jpg",
//     description: "This is the first product.",
//   },
//   {
//     id: 1,
//     name: "Product 1",
//     image: "/card2.jpg",
//     description: "This is the first product.",
//   },
//   {
//     id: 1,
//     name: "Product 1",
//     image: "/card3.jpg",
//     description: "This is the first product.",
//   },
//   {
//     id: 1,
//     name: "Product 1",
//     image: "/card1.jpg",
//     description: "This is the first product.",
//   },
//   // Add more product objects here
// ];
export default function Home() {
  return (
    <div>
      <HeroSection />
      <CategoryCards />
      {/* <Carousel products={products} /> */}
      <SingleProduct />
      <TwoColumnComponent />
    </div>
  )
}
