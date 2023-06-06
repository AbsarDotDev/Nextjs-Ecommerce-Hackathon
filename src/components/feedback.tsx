import React, { FC } from "react";
import Image from "next/image";

// Interface
interface cont {
  image: any;
  name: string;
  rate: string;
  para: string;
}
const Data: FC<cont> = ({ image, name, rate, para }) => (
  <div className="border rounded shadow px-4 py-4 my-6">
    <div className="flex items-center">
      <div className="pr-3 py-3">
        <Image src={image} alt={""} width={60} height={60}></Image>
      </div>
      <div>
        <h4 className=" text-pink-700 font-bold text-1xl">{name}</h4>
        <div className="flex my-1" >
        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <h3 className="mt-[-2px]">{rate}</h3>
        </div>
      </div>
    </div>
    <p className="sm:max-w-screen-md font-normal text-sm ">{para}</p>
  </div>
);

const CustomerFeedback = [
  {
    image: "/feedback.png",
    name: "jkhaui",
    rate: "5.0",
    para: "Top-notch, very well-coded and componentised web app.",
  },
  {
    image: "/feedback(1).png",
    name: "DDTrading",
    rate: "4.0",
    para: "So much good code and design for the price - first class A+",
  },
  {
    image: "/feedback(2).png",
    name: "yahya_bin_arabi",
    rate: "4.5",
    para: "Really the heavy lifting of the e-commerce workflow is mostly done (Cart, Store, Search, Filters...), Great Job guyz.",
  },
  {
    image: "/feedback(3).png",
    name: "dretz",
    rate: "5.0",
    para: "This is really a top quality code, something very rare to see. A good reference to learn and everything is brand new.",
  },
];
const Customer_Feedback = () => {
  return (
    <section className="my-20">
      <div className="flex flex-col items-center">
        <h5 className="font-medium text-pink-700">Customer Feedback</h5>
        <h3 className="font-bold text-2xl">
          What our valuable customer say about us
        </h3>
        <p className="font-normal">
          Some inspirational feedback from our customers on our Website
        </p>
      </div>
      <div className="grid grid-cols-[auto] md:grid-cols-[auto,auto] lg:grid-cols-[auto,auto,auto,auto] gap-x-2">
        {CustomerFeedback.map((item) => (
          <Data
          key={item.name}
            image={item.image}
            name={item.name}
            para={item.para}
            rate={item.rate}
          />
        ))}
      </div>
    </section>
  );
};

export default Customer_Feedback;