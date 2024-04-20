import { getProductDetail } from "@/lib/data"
import Image from "next/image"
const page = async ({ params }) => {
  const { slug } = params
  const product = await getProductDetail(slug)
  const { id, title, price, description, category, image, rating } = product
  const { rate, count } = rating
  return (
    <div className="bg-white m-12 lg:mx-36 lg:my-12 p-12 lg:p-24 rounded-xl  flex justify-around items-center">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
        <div className=" lg:w-1/2  flex justify-center border-2 border-cyan-800 rounded-xl p-8 shadow-2xl min-h-64">
          <Image src={image} alt={title} width={200} height={200} />
        </div>
        <div className="capitalize  lg:w-1/2 flex flex-col gap-4 ">
          <h5 className="">{category}</h5>
          <h1 className="font-bold lg:text-2xl">{title}</h1>
          <h2 className="font-bold text-2xl">$ {price}</h2>
          <p >{description}</p>
          <div className=" w-full bg-slate-300 font-semibold  rounded-lg flex ">
            <button className="w-1/2 p-3 text-cyan-800 hover:bg-cyan-800 hover:text-white transition rounded-lg">Add Favorite</button>
            <button className="w-1/2 p-3 text-cyan-800 hover:bg-cyan-800 hover:text-white transition rounded-lg">Add Cart</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default page