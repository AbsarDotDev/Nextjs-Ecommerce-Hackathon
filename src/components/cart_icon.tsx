import React from 'react';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const CartPopOver: React.FC = () => {

  return (
        <Link href="/cart" id="cart" className="flex items-center text-blue-500">
            <FontAwesomeIcon icon={faCartShopping} className='w-6' style={{"color": "#ee245f"}}/>
 <span className=" mt-[-20px] bg-primary-pink text-white rounded-full px-[8px] py-[2px]">3</span>
            </Link>


  );
};

export default CartPopOver;
