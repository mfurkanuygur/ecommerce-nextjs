import Image from "next/image";

const Banner = () => {
    return (
        <div className="w-full min-h-80 flex flex-col lg:flex-row gap-4 justify-around items-center text-slate-300 bg-cyan-900 capitalize p-5 md:p-24  my-6 rounded-xl">
            <div className="w-full lg:w-1/2">
                <Image src="/shopping-cart.jpg" alt="shopping-cart" width={200} height={300} className="w-full rounded-xl"></Image>

            </div>
            <div className="w-full lg:w-1/2 text-center md:text-end flex flex-col gap-5">
                <h1 className="text-4xl font-bold ">Discover Your Perfect Product</h1>
                <h2 className="text-2xl font-semibold">Find Your Style</h2>
                <p className="text-sm">
                    Find the perfect fit for your needs and lifestyle. Explore the latest
                    trends, gadgets, and essentials for your home. With a wide selection of
                    products, finding your style has never been easier.
                </p>
            </div>
        </div>
    );
};

export default Banner;
