import Product from "@/components/product/Product";
import Banner from "@/components/banner/Banner";
import { getAllProducts, testFetch } from "@/lib/data";
import Link from "next/link";
import Brands from "@/components/brands/Brands";
import MainBanner from "@/components/mainBanner/MainBanner";

export default async function Home() {
  let products = await getAllProducts()
  products = products?.sort(() => Math.random() - 0.5);
  // const test = await testFetch()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 lg:px-24">
      <MainBanner />
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center ">
          <div className="flex flex-col gap-2 capitalize" >
            <h6 className=" text-md font-semibold text-white">What's new</h6>
            <h3 className=" text-cyan-800 font-bold text-lg">take a look at some our new products</h3>
          </div>
          <button className=" border-2 border-cyan-800 py-2 px-4 rounded-xl capitalize transition text-cyan-800 hover:bg-cyan-800 hover:text-white">
            <Link href={"/products"}>view more</Link>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
          {
            products?.slice(0, 8).map(product => (
              <Product product={product} key={product.id} />
            ))
          }
          {/* {
            test.data.map(tester => (
              <div key={tester.id}>{tester.name}</div>
            ))
          } */}
        </div>
        <Banner />
        <div className="flex justify-between items-center ">
          <div className="flex flex-col gap-2 capitalize" >
            <h3 className="text-md font-semibold text-white ">Hard to choose right products for you?</h3>
            <h6 className="text-cyan-800 font-bold text-lg ">our products</h6>
          </div>
          <button className=" border-2 border-cyan-800 py-2 px-4 rounded-xl capitalize transition text-cyan-800 hover:bg-cyan-800 hover:text-white">
            <Link href={"/products"}>view more</Link>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
          {
            products?.slice(8, 16).map(product => (
              <Product product={product} key={product.id} />
            ))
          }
        </div>
        <Brands />
      </div>
    </main>
  );
}
