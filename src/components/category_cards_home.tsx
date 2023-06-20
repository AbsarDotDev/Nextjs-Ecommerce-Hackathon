'use client'
import Image from "next/image";
import HeroPoster from "/src/assets/images/Card1.png";
import Link from "next/link";
import { ICat } from "@/app/page";
import { urlForImage } from "@/lib/image";
import { useState } from 'react';

interface CategoryCardsProps {
  category: ICat;
}
const CategoryCardsHome = ({ category }: CategoryCardsProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="rounded-3xl">
      <Link href={`/shop/${category.name}`}>
        <div

          className="relative rounded-3xl"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            className="bg-white p-1 object-cover h-[300px] lg:h-[500px] w-full"
            src={urlForImage(category.image).url()}
            width={500}
            height={300}
            alt="Logo"
          />

          {isHovered && (
            <div className="absolute top-0 left-0 w-full h-full bg-primary-pink opacity-75 flex items-center justify-center transition delay-2000">
              <h6 className="font-bold text-[32px] text-white text-center">
                {category.name}
              </h6>
            </div>
          )}
        </div>
      </Link>
    </div>)
};

export default CategoryCardsHome;