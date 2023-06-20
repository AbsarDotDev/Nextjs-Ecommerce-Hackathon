import 'flowbite';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import CartPopOver from './cart_icon';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

const Header = () => {
  return (

    <nav className="bg-white border-gray-200 font-medium">      
      <div className="px-5 lg:px-10 max-w-screen-6xl flex flex-wrap items-center justify-between w-full">
        <div className='flex flex-row gap-x-10 items-center'>
      <Link href="/" className="flex items-center">
          <Image src="/Logo.svg" className="" width={70} height={80} alt="Logo" />
      </Link>
      <div className="hidden lg:block  w-full md:flex md:w-auto md:order-1" id="mobile-menu-1">
        <ul className="flex flex-col  p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <Link href="/" className="block py-2 font-poppins pl-3 pr-4 text-primary-pink bg-primary-pink rounded md:bg-transparent md:text-primary-pink md:p-0 md:dark:text-primary-pink" aria-current="page">Home</Link>
          </li>
          <li>
            <Link href="../../shop" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-pink md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Shop</Link>
          </li>
          <li>
            <Link href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-pink md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</Link>
          </li>
          <li>
            <Link href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-pink md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</Link>
          </li>
          <li>
            <Link href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-pink md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
          </li>
        </ul>
      </div>
      </div>
      <div className="lg:items-center flex md:order-2 gap-x-5 items-start">
      {/* @ts-ignore */}

      <CartPopOver />
        {/* Mount the UserButton component */}
        <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton />
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton />
      </SignedOut> 

          <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-0 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
            <span className="sr-only">Open main menu</span>

            <FontAwesomeIcon icon={faBars} style={{"color": "#f9adc3"}} width={30}/>        </button>

      </div>

      </div>
      
      <div className="block lg:hidden md:hidden items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <Link href="#" className="block py-2 pl-3 pr-4 text-white bg-primary-pink rounded md:bg-transparent md:text-primary-pink md:p-0 md:dark:text-primary-pink" aria-current="page">Home</Link>
          </li>
          <li>
            <Link href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-pink md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
          </li>
          <li>
            <Link href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-pink md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</Link>
          </li>
          <li>
            <Link href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-pink md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</Link>
          </li>
          <li>
            <Link href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-pink md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
          </li>
        </ul>
      </div>
      
    </nav>
  );
};

export default Header;
