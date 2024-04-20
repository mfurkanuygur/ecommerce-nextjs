"use client"
import { getUserInfos } from "@/lib/data"
import { useSearchTerm, useFilteredProduct, useLoginState } from "@/store/store"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"

const Navbar = () => {
    const inputRef = useRef()
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)

    const loginState = useLoginState((state) => state.loginState)
    const updateLoginState = useLoginState((state) => state.updateLoginState)
    useEffect(() => {
        const isLogin = sessionStorage.getItem("isLogin");
        if (isLogin && !loginState) {
            updateLoginState(true);
        }
    }, [loginState, updateLoginState]);
    const openMenu = () => {
        setIsOpen(!isOpen)
    }
    const handleSearch = (e) => {
        e.preventDefault()
        if (inputRef.current.value !== "") {
            // updateSearchTerm(inputRef.current.value)
            router.push(`/products/?search=${inputRef.current.value}`)
            // inputRef.current.value = ""
        }
        else {
            router.push("/products")
        }
    }
    const handleLogout = () => {
        sessionStorage.clear()
        updateLoginState(!loginState)
    }
    return (
        <header className=" sticky top-0 z-40  bg-cyan-900 text-white" >
            <nav className=" px-4 lg:px-24 py-4" >
                <div className="flex justify-between items-center capitalize font-bold">
                    <Link className="text-[32px] font-bold " href={"/"}>Logo</Link>
                    <Link href={"/"} className="hidden md:block">Home</Link>
                    <Link href={"/products"} className="hidden md:block">Products</Link>
                    <Link href={"/about"} className="hidden md:block">about</Link>
                    <form onSubmit={(e) => handleSearch(e)} className="flex relative items-center">
                        <input type="search" ref={inputRef} placeholder="Search something!!" className="w-full rounded-lg p-3 transition text-slate-400 focus:text-cyan-900 hidden md:block" />
                        {/* <button className="absolute right-0 p-3" onClick={ handleClear}>x</button> */}
                    </form>
                    {
                        loginState &&
                        <>
                            <Link href={"/cart"} className="hidden md:block">Cart</Link>
                            <Link href={"/favorites"} className="hidden md:block">Favorites</Link>
                            <button onClick={() => handleLogout()} >Logout</button>
                        </> || <>
                            <Link href={"/login"} className="hidden md:block">login</Link>
                            <Link href={"/signin"} className="hidden md:block">sign in</Link>
                        </>
                    }
                    <div className='block cursor-pointer md:hidden' onClick={() => openMenu()}>
                        <Image src={"/menu.png"} width={25} height={20} />
                    </div>
                </div>
                {isOpen && (
                    <div className="flex flex-col justify-center items-center text-center gap-5 capitalize font-bold  md:hidden">
                        <Link href={"/"}>Home</Link>
                        <Link href={"/products"}>Products</Link>
                        <Link href={"/login"}>login</Link>
                        <Link href={"/signin"}>sign in</Link>
                        <form onSubmit={(e) => handleSearch(e)} className="flex relative items-center">
                            <input type="search" ref={inputRef} placeholder="Search something!!" className="text-black w-full rounded-lg p-3 active:border-white " />
                            {/* <button className="absolute right-0 p-3" onClick={ handleClear}>x</button> */}
                        </form>
                    </div>
                )}
            </nav>
        </header >
    )
}

export default Navbar