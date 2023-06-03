import Image from "next/image";
import HeroPoster from "/src/assets/images/Card1.png";
import Link from "next/link";

const CategoryCards = () => {
  return (
      <section className="px-20">
        <div>
          <h3 className="font-bold text-2xl text-gray-800 leading-5">
            Curated asset collections
          </h3>
          <h5 className="text-gray-800 font-light text-lg pt-2 mb-5">
            Explore diverse collections of our most incredible high-resolution,
            royalty-free, stock assets
          </h5>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="">
            <Link href={""}>
              <Image
                className="max-w-xs rounded bg-white p-1"
                src={'/card1.jpg'} width={500} height={500}
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
          <div className="">
            <Link href={""}>
              <Image
                className="max-w-xs rounded bg-white p-1"
                src={'/card2.jpg'} width={500} height={500}
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
          <div className="">
            <Link href={""}>
              <Image
                className="max-w-xs rounded bg-white p-1"
                src={'/card3.jpg'} width={500} height={500}
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
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="">
            <Link href={""}>
              <Image
                className="max-w-xs rounded bg-white p-1"
                src={'/card1.jpg'} width={500} height={500}
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
          <div className="">
            <Link href={""}>
              <Image
                className="max-w-xs rounded bg-white p-1"
                src={'/card2.jpg'} width={500} height={500}
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
          <div className="">
            <Link href={""}>
              <Image
                className="max-w-xs rounded bg-white p-1"
                src={'/card3.jpg'} width={500} height={500}
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
        </div>
        
      </section>
  );
};

export default CategoryCards;