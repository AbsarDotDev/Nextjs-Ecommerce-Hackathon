import Image from "next/image";
import HeroPoster from "/src/assets/images/Card1.png";
import Link from "next/link";

import { ICategory } from "@/app/page";
import { urlForImage } from "@/lib/image";

interface CategoryCardsProps {
  category: ICategory;
}
const CategoryCards = ({ category }: CategoryCardsProps) => {   
  return (
        <div className="w-full mb-2 max-w-sm transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
          <Link href={`/shop/${category.name}`}>
            <Image
              className="bg-white p-1 max-h-[300px] object-cover h-[350px]"
              src={urlForImage(category.image).url()} width={400} height={400}
              alt="Logo"
            ></Image>
            <h6 className="font-bold text-[16px] pl-5 pt-3 pb-1">
{category.name}
          </h6>
            <p className="text-gray-800 text-[14px] pl-5 pb-4">
            {category.description}
            </p>
          </Link>
        </div>
  )
};

export default CategoryCards;