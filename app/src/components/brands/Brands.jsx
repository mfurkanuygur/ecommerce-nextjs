import Image from "next/image"

const Brands = () => {
    return (
        <div className="hidden lg:flex flex-col gap-5 my-5">
            <div className="flex justify-between items-center ">
                <div className="flex flex-col gap-2 capitalize" >
                    <h3 className="text-md font-semibold text-white ">Proud to be part of them</h3>
                    <h6 className="text-cyan-800 font-bold text-lg ">our brands</h6>
                </div>

            </div>
            <div className="flex justify-between ">
                <Image src={"/Vestel.webp"} alt="Vestel.webp" width={100} height={100} className="rounded-full" />
                <Image src={"/Apple.webp"} alt="Apple.webp"  width={100} height={100} className="rounded-full" />
                <Image src={"/Defacto.webp"} alt="Defacto.webp"   width={100} height={100} className="rounded-full" />
                <Image src={"/Lenovo.webp"} alt="Lenovo.webp"  width={100} height={100} className="rounded-full" />
                <Image src={"/Sony.webp"} alt="Sony.webp"  width={100} height={100} className="rounded-full" />
                <Image src={"/Xiaomi.webp"} alt="Xiaomi.webp"  width={100} height={100} className="rounded-full" />
            </div>
        </div>
    )
}

export default Brands