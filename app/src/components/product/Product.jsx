"use client"
import { addProductToCart } from "@/lib/data"
import { useLoginState, useSearchTerm } from "@/store/store"
import Link from "next/link"

const Product = ({ product }) => {
    const { id, title, price, description, category, image, rating } = product
    // const { rate, count } = rating

    const isLogin = sessionStorage.getItem("isLogin");
    const handleAddProduct = () => {
        addProductToCart(isLogin, product).then(() => console.log("başarıyla eklendi"))
    }
    return (
        <div className=" flex flex-col justify-between gap-3 bg-white shadow-md p-8 text-black text-left rounded-xl ">
            <Link href={`/products/${id}`} title={title}>
                <div className="flex flex-col justify-between gap-3">
                    <div className=" flex justify-center" >
                        <img src={image} alt={title} className="h-60 w-auto" />
                    </div>
                    <h2 className="font-bold capitalize text-lg line-clamp-1 text-cyan-800">{title}</h2>
                    <div className="flex justify-between w-full">
                        <p className="font-extrabold text-cyan-800"> ${price}</p>
                        <p className="capitalize text-sm text-gray-400"> {category}</p>
                    </div>
                </div>
                {/* <p>Rating: {rate} ({count} ratings)</p> */}
            </Link>
            <div className="w-full bg-slate-300 font-semibold  rounded-lg flex justify-around" >
                <button className="w-1/2 p-3 text-cyan-800 hover:bg-cyan-800 hover:text-white transition rounded-lg  ">
                    ♥
                </button>
                <button onClick={() => { handleAddProduct() }} className="w-1/2 p-3 text-cyan-800 hover:bg-cyan-800 hover:text-white transition rounded-lg font-bold text-xl">+</button>
            </div>
        </div>
    )
}

export default Product