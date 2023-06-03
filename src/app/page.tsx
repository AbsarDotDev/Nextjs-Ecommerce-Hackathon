import Image from 'next/image'
import CategoryCards from '../components/catCards'
import Footer from '../components/footer'
import Header from '../components/header'
import HeroSection from '../components/hero'
import TwoColumnComponent from '../components/section'

export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      {/*@ts-ignore */}
      <CategoryCards/>
      <TwoColumnComponent/>
      {/*@ts-ignore */}
      <Footer/>
    </div>
  )
}
