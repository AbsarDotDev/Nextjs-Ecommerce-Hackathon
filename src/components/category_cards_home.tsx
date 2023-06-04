import Image from "next/image";
import HeroPoster from "/src/assets/images/Card1.png";
import Link from "next/link";
import { ICat } from "@/app/page";
import { urlForImage } from "@/lib/image";

interface CategoryCardsProps {
  category: ICat;
}
const CategoryCardsHome = ({ category }: CategoryCardsProps) => {
  return (
    <div className=" max-w-sm">
      <Link href={`/shop/${category.name}`}>
        <Image
          className="bg-white p-1 max-h-[300px] object-cover"
          src={urlForImage(category.image).url()} width={300} height={300}
          alt="Logo"
        ></Image>

        <h6 className="font-bold text-[32px] pt-3 pb-1 text-center">
          {category.name}
        </h6>
      </Link>
    </div>
  )
};

export default CategoryCardsHome;