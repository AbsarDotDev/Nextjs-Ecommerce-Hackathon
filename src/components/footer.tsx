import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook , faTwitter , faInstagram,faPinterest} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const Footer = () => {
    return (<>
      <footer className="bg-gradient-to-b from-primary-blue to-gray-400 text-white py-6">
        <div className="container mx-auto py-8">
          <div className="flex flex-row gap-8">
            {/* Column 1 */}
            <div className="flex flex-col w-[30%] ml-8">
            <Image src="/logoR.png" alt="Logo" width={130} height={80} className=''/>
              <p className="text-left text-sm my-4">Dribbble is the world’s leading community for creatives to share, grow, and get hired.</p>
              <div className="flex space-x-3 ml-1">
                  <FontAwesomeIcon icon={faFacebook} className='w-6'/>
                
                  <FontAwesomeIcon icon={faTwitter} className='w-6'/>
                
                  <FontAwesomeIcon icon={faInstagram} className='w-6'/>

                  <FontAwesomeIcon icon={faPinterest}  className='w-6'/>
                
              </div>
            </div>
  
            {/* Column 2 */}
            <div className='w-[20%] ml-4'>
              <h4 className="text-lg font-bold mb-4">Pages</h4>
              <ul className="space-y-3">
        <li>
          <Link href="#" className="hover:text-primary-red">Shop</Link>
          </li>
          <li>
            <Link href="#" className="hover:text-primary-red text-[17px]">Photos</Link>
          </li>
          <li>
          <Link href="#" className="hover:text-primary-red text-[17px]">Illustrations</Link>
          </li>
          <li>
          <Link href="#" className="hover:text-primary-red text-[17px]">Vectors</Link>
          </li>
          <li>
          <Link href="#" className="hover:text-primary-red text-[17px]">3D Assets</Link>
          </li>
        </ul>
            </div>
  
            {/* Column 3 (same as Column 2) */}
            <div className='w-[20%]'>
              <h4 className="text-lg font-bold mb-4">Links</h4>
              <ul className="space-y-3">
        <li>
          <Link href="#" className="hover:text-primary-red">Blog</Link>
          </li>
          <li>
            <Link href="#" className="hover:text-primary-red text-[17px]">Privacy Policy</Link>
          </li>
          <li>
          <Link href="#" className="hover:text-primary-red text-[17px]">Support</Link>
          </li>
          <li>
          <Link href="#" className="hover:text-primary-red text-[17px]">License Terms</Link>
          </li>
          <li>
          <Link href="#" className="hover:text-primary-red text-[17px]">Go Pro!</Link>
          </li>
        </ul>
            </div>
  
            {/* Column 4 */}
            <div className='w-[30%]'>
              <h4 className="text-lg font-bold mb-4">Contact Details</h4>
              <p>Address: 123 Example Street</p>
              <p>Phone: +1 234 5678</p>
              <p>Email: example@example.com</p>
            </div>
          </div>
        </div>
      </footer>
      <div className='w-[100%] bg-primary-red items-center'>
          <p className='text-white py-4 text-center'>© 2023 Dribble. All Rights Reserved</p>
      </div>
      </>
    );
  };
  
  export default Footer;
  