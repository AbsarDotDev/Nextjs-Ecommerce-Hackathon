import Image from "next/image";
const TwoColumnComponent = () => {
    return (
        <div className="py-20">
            <div className="flex flex-row px-[120px] mt-10 mb-10">
                <div className="w-full lg:w-1/2 md:w-1/2 md:pr-0 ">
                    <Image src="/painting2.jpg" alt="Image_1" width={500} height={400} />
                </div>
                <div className="w-full lg:w-1/2 md:w-1/2 flex pl-8 items-center">
                    <div>
                        <h1 className="text-2xl font-bold lg:mb-4 md:mb-0">On Demand Art</h1>
                        <p className="text-gray-700 text-left">
                            Offering customized artwork tailored to your <br /> specific needs and preferences. Whether you{'"'}re  <br /> looking for illustrations, paintings, or digital designs, <br /> bring to your vision life.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-row px-[120px] mt-10 mb-10">

                <div className="w-full lg:w-1/2 md:w-1/2 flex pl-8 items-center">
                    <div>
                        <h1 className="text-2xl font-bold lg:mb-4 md:mb-0">Lisence Terms</h1>
                        <p className="text-gray-700">
                            Preview watermarked images inside <br /> your designs first. Then license, access <br /> and manage them directly within dibble only...
                        </p>
                    </div>
                </div>

                <div className="w-full  lg:w-1/2 lg:pr-20 md:w-1/2 md:pr-0 ">
                    <Image src="/Paniting.jpg" alt="Image_2" width={400} height={300} />
                </div>
            </div>

        </div>
    );
};

export default TwoColumnComponent;