import Link from "next/link"

const Footer = () => {
    return (
        <div>
            <div className="py-6 px-5 lg:px-24 flex items-center justify-between text-black">
                <Link href={"/"}>Home</Link>
                <Link href={"/products"}>Products</Link>
                <Link href={"/login"}>login</Link>
                <Link href={"/signin"}>sign in</Link>
            </div>
        </div>
    )
}

export default Footer