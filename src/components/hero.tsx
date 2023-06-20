import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <div className="relative mb-[40px]">
      <video className="w-full h-[65vh] object-cover " autoPlay loop muted>
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-[0%] w-[100%] h-[100%] items-center bg-opacity-black flex flex-col justify-center lg:pl-0 lg:pr-0 pl-10 pr-10">
        <h1 className="font-[900] text-[32px] text-white  text-center ">Explore the world’s leading <br /> design portfolios</h1>
        <p className="text-white text-center text-[17px] my-4">Millions of designers and agencies around the world showcase their portfolio work <br /> on Dribble - the home to the world’s best design and creative professionals.</p>
        <div className='text-center'>
          <button className='bg-gradient-to-l from-primary-lightpink to-primary-pink k py-3 px-8 text-white rounded-3xl'>
            <Link href={'../shop'} className=''>
              Shop Now
            </Link>
          </button>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;