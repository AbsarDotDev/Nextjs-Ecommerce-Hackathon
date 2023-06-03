import 'flowbite';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook , faTwitter , faInstagram,faPinterest, faDribbble} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { client } from '@/app/lib/sanityClient';

export const getCategoriesData = async () =>{ 
  const res = await client.fetch(`*[_type=="category"]{name}`);
  return res
}
interface categoryProps{
name:string
}
const Footer = async () => {
  const data = await getCategoriesData()
    return (<>
      
<footer className="px-8 bg-gray-200">
    <div className="mx-auto w-full max-w-screen-6xl p-4 py-6 lg:py-8 ">
        <div className="md:flex md:justify-start gap-x-20 ">
          <div className="flex flex-col mb-6 md:mb-0 w-{100%] lg:w-[30%]">
            <div>
              <Image src="/Logo.svg" className="ml-2" width={80} height={80} alt="Logo" />
              <p className="text-left text-sm my-4">Dribbble is the world’s leading community for creatives to share, grow, and get hired.</p>
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
                          <Link href="https://flowbite.com/" className="hover:underline hover:text-primary-pink">Shop</Link>
                      </li>
                      <li className="py-4">
                          <Link href="https://tailwindcss.com/" className="hover:underline hover:text-primary-pink">About</Link>
                      </li>
                      <li>
                          <Link href="https://tailwindcss.com/" className="hover:underline hover:text-primary-pink">Contact</Link>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Categories</h2>
                  <ul className="text-gray-600 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                      {data.map((item:categoryProps) => (
       <Link href="@/catagory/{item.name}"><li className='py-2 hover:text-primary-pink' key={item.name}>{item.name}</li></Link> 
      ))}
                      </li>
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
      <hr className="my-6 border-gray-200 sm:mx-autolg:my-8" />
      <div className="items-center bg-primary-pink">
          <p className="text-sm text-gray-900 text-center">© 2023 <Link href="https://flowbite.com/" className="hover:underline">Flowbite™</Link>. All Rights Reserved.
          </p>
      </div>
    </div>
</footer>

      </>
    );
  };
  
  export default Footer;
  