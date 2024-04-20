import Image from "next/image"

const MainBanner = () => {
    return (
        <div className="relative overflow-hidden w-full min-h-80 flex flex-col lg:flex-row gap-4 justify-around items-center text-black bg-gradient-to-r from-black via-cyan-800 to-white capitalize p-5 md:p-24  my-12 rounded-xl">
            <div className="relative z-10 w-full lg:w-1/2 text-center md:text-left flex flex-col gap-5 text-white ">
                <h1 className="text-4xl font-bold ">Discover Your Perfect Product</h1>
                <h2 className="text-2xl font-semibold ">Find Your Style</h2>
                <p className="text-sm ">
                    {/* bg-gradient-to-r from-white via-cyan-800 to-black bg-clip-text text-transparent */}
                    Find the perfect fit for your needs and lifestyle. Explore the latest
                    trends, gadgets, and essentials for your home. With a wide selection of
                    products, finding your style has never been easier.
                </p>
            </div>
            <div className="relative z-10 w-full lg:w-1/2">
                <Image src="/shopping-cart.jpg" alt="shopping-cart" width={200} height={300} className="w-full rounded-xl"></Image>
            </div>
            {/* <div className="absolute  -left-20 top-50 w-full h-full lg:h-96 bg-slate-300  lg:-rotate-45"></div> */}
        </div>
    )
}

export default MainBanner