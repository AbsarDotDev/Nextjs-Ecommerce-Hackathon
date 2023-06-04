import Image from "next/image";
import HeroPoster from "/src/assets/images/Card1.png";
import Link from "next/link";
import { ICat } from "@/app/page";

interface CategoryCardsProps {
  category: ICat;
}
const CategoryCards = ({ category }: CategoryCardsProps) => {
  return (
    <div className="w-full max-w-sm">
      <Link href={`/shop/${category.name}`}>
        <Image
          className="bg-white p-1 max-h-[300px] object-cover"
          src={''} width={400} height={400}
          alt="Logo"
        ></Image>
        <h6 className="font-bold text-[16px] pt-3 pb-1">
          {category.name}
        </h6>
        <p className="text-gray-800 text-[14px] pb-4">
          {category.description}
        </p>
      </Link>
    </div>
  )
};

export default CategoryCards;