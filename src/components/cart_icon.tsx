import React from 'react';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CartPopOver: React.FC = () => {

  return (
 

  

        <a href="#" id="cart" className="flex items-center text-blue-500">
            <FontAwesomeIcon icon={faCartShopping} className='w-6' style={{"color": "#ee245f"}}/>
 <span className=" mt-[-20px] bg-primary-pink text-white rounded-full px-[8px] py-[2px]">3</span>
            </a>


  );
};

export default CartPopOver;
