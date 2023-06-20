import { client } from '@/lib/client'
import { Image as IImage } from 'sanity'
import CategoryCards from '@/components/category_cards'
import Header from '@/components/header';
import Footer from '@/components/footer';


const getCategories = async () => {
  const res = await client.fetch("*[_type == 'category']");
  return res;
}
export interface ICategory {
  _id: string,
  name: string,
  description: string,
  image: IImage
}

export default async function Shop() {
  const categories: ICategory[] = await getCategories();
  return (<>
    <Header />

    <section className="prefix-px max-w-screen-6xl w-full">
      <div className='' >
        <h3 className="font-bold text-2xl text-gray-800 leading-5">
          Categories
        </h3>
        <h5 className="text-gray-800 font-light text-lg pt-2 mb-5">
          Explore diverse collections of our most incredible high-resolution,
          royalty-free, stock assets
        </h5>
      </div>
      <div className="grid grid-cols-[auto] md:grid-cols-[auto,auto] custom:grid-cols-[auto,auto] lg:grid-cols-[auto,auto,auto] mb-20 justify-between">
          {categories.map(
            (item: any) => { return (<div key={item._id} > <CategoryCards category={item} /></div>) }
          )}


      </div>
    </section>
    {/*@ts-ignore */}
    <Footer />
  </>

  );
}


