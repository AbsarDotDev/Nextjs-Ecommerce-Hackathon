import Image from "next/image";
import HeroPoster from "/src/assets/images/Card1.png";
import Link from "next/link";


const getData = async () => {
  try {
      const res = await fetch("http://127.0.0.1:3000/api/category", {
          method: "GET",
          cache: "no-store",
          headers: {
              "Content-Type": "application/json"
          }
      });
      if (!res.ok) {
          throw new Error("Failed to fetch the data")
      };
      const result = await res.json()
      return result
  } catch (err) {
      console.log(err)
  }
}


const CategoryCards = () => {   
  return (
   
        <div className="w-full max-w-sm">
          <Link href={""}>
            <Image
              className="max-w-xs rounded bg-white p-1"
              src={'/card1.jpg'} width={250} height={250}
              alt="Logo"
            ></Image>
            <h6 className="font-bold text-[16px] pt-3 pb-1">
              Stock photos
            </h6>
            <p className="text-gray-800 text-[14px] pb-4">
              Beautiful and inspiring royalty-free stock images
            </p>
          </Link>
        </div>
  )
};

export default CategoryCards;