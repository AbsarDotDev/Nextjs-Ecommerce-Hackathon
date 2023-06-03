import CategoryCards from '../components/catCards'
import Footer from '../components/footer'
import Header from '../components/header'
import HeroSection from '../components/hero'
import TwoColumnComponent from '../components/section'
import SingleProduct from '@/components/single_product'
export default function Home() {
  return (
    <div>
 
      <Header/>
      <HeroSection/>
      {/*@ts-ignore */}
      <CategoryCards/>
    <SingleProduct />
      <TwoColumnComponent/>
      {/*@ts-ignore */}
      <Footer/>

    </div>
  )
}
