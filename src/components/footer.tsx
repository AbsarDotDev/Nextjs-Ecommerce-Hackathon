import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook , faTwitter , faInstagram,faPinterest, faDribbble} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { client } from '@/lib/sanityClient';

 const getCategoriesData = async () =>{ 
  const res = await client.fetch(`*[_type=="category"]{name}`);
  return res
}
interface categoryProps{
name:string
}
const Footer = async () => {
  const data = await getCategoriesData()
    return (<div>
      
<footer className="bg-gray-200">
    <div className="px-8 mx-auto w-full max-w-screen-6xl p-4 py-6 lg:py-8 ">
        <div className="md:flex md:justify-start gap-x-20 ">
          <div className="flex flex-col mb-6 md:mb-0 w-{100%] lg:w-[30%]">
            <div>
              <Image src="/Logo.svg" className="ml-2" width={80} height={80} alt="Logo" />
              <p className="text-left text-sm my-4">ScrwedUpArtist is the world’s leading community for creatives to share, grow, and get hired.</p>
              </div>
              <div className="flex space-x-5 mt-2 lg:mb-0">
              <FontAwesomeIcon icon={faDribbble} className='w-5 '/>
                  <FontAwesomeIcon icon={faFacebook} className='w-5 '/>
                 
                  <FontAwesomeIcon icon={faTwitter} className='w-5'/>
                
                  <FontAwesomeIcon icon={faInstagram} className='w-5'/>

                  <FontAwesomeIcon icon={faPinterest}  className='w-5'/>
                
              </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3  w-{100%] lg:w-[70%]">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Pages</h2>
                  <ul className="text-gray-600 font-medium">
                      <li className="">
                          <Link href="../../shop" className="hover:underline hover:text-primary-pink">Shop</Link>
                      </li>
                      <li className="py-4">
                          <Link href="#" className="hover:underline hover:text-primary-pink">About</Link>
                      </li>
                      <li>
                          <Link href="#" className="hover:underline hover:text-primary-pink">Contact</Link>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Categories</h2>
                  <ul className="text-gray-600 dark:text-gray-400 font-medium">
                      {data.map((item:categoryProps) => (
       <Link href="@/app/category/{item.name}" key={item.name}><li className='py-2 hover:underline hover:text-primary-pink' key={item.name}>{item.name}</li></Link> 
      ))}
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase mt-6 lg:mt-0">Legal</h2>
                  <ul className="text-gray-600 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <Link href="#" className="hover:underline hover:text-primary-pink">Privacy Policy</Link>
                      </li>
                      <li>
                          <Link href="#" className="hover:underline hover:text-primary-pink">Terms &amp; Conditions</Link>
                      </li>
                  </ul>
              </div>
          </div>
      </div>    
    </div>
    <div className="items-center border-t-[3px] border-gray-800 border-b-[3px] border-gray-800 bg-primary-pink">
          <p className="text-sm py-5 text-white text-center">© 2023 <Link href="https://flowbite.com/" className="hover:underline">Flowbite™</Link>. All Rights Reserved.
          </p>
      </div>
</footer>

      </div>
    );
  };
  
  export default Footer;