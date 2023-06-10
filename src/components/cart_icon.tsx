import React from 'react';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { cookies } from 'next/headers';

const getCartItemsLength = async () => {
  try {
      const user_id = cookies().get("user_id");
      const res = await fetch(`http://127.0.0.1:3000/api/cart?user_id=${user_id?.value}`, {
          method: "GET",
          mode:'no-cors',
          cache:"no-store",
          headers: {
              "Content-Type": "application/json"
          },
      });
      if (!res.ok) {
          throw new Error("Failed to fetch the data")
      };
      const result = await res.json()
      return result.length
  } catch (err) {
      console.log(err)
  }
}
const CartPopOver = async () => {

  return (

        <Link href="./cart" id="cart" className="flex items-center text-blue-500">
            <FontAwesomeIcon icon={faCartShopping} className='w-6' style={{"color": "#ee245f"}}/>
 <span className=" mt-[-20px] bg-primary-pink text-white rounded-full px-[8px] py-[2px]">{`${await getCartItemsLength()}`}</span>
            </Link>


  );
};

export default CartPopOver;
