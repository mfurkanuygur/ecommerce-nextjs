import Product from "@/components/product/Product"
import { getUserCart } from "@/lib/data"

const page = async() => {
  const isLogin=sessionStorage.getItem("isLogin")
  const cartItems=await getUserCart(isLogin)
  console.log(cartItems)
  return (
    <>
      {/* {cartItems.map(product => (
        <Product product={product} key={product.id} />
      ))} */}
    </>
  )
}

export default page