"use client"

import { getUserInfos } from "@/lib/data"
import { useLoginState } from "@/store/store"
import { useRouter } from "next/navigation"
import { useState } from "react"

const login = () => {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter();

    const loginState = useLoginState((state) => state.loginState);
    const updateLoginState = useLoginState((state) => state.updateLoginState);

    const handleLogin = (e) => {
        e.preventDefault()
        if (name !== "" && surname !== "" && password !== "") {
            const uniqueUser = {
                "name": name,
                "surname": surname,
                "password": password
            }
            getUserInfos(uniqueUser)
                .then(() => {
                    router.push("/");
                    updateLoginState(!loginState)
                })
        }
    }
    return (

        <div className="min-h-screen flex-col items-center justify-between p-5 lg:p-24 bg-slate-300">
            <form onSubmit={(e) => { handleLogin(e) }} className=" flex flex-col justify-center items-center   ">
                <div className=" md:w-1/3 flex flex-col  my-3 gap-2">
                    <label htmlFor="UserName" className="font-bold">Name:</label>
                    <input type="text" id="UserName" placeholder="Enter your name" className="p-2 rounded-lg" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className=" md:w-1/3 flex flex-col my-3 gap-2">
                    <label htmlFor="UserSurname" className="font-bold">Surname:</label>
                    <input type="text" id="UserSurname" placeholder="Enter your surname" className="p-2 rounded-lg" onChange={(e) => setSurname(e.target.value)} />
                </div>
                <div className=" md:w-1/3 flex flex-col my-3 gap-2">
                    <label htmlFor="UserPassword" className="font-bold">Password</label>
                    <input type="password" id="UserPassword" placeholder="Enter your password" className="p-2 rounded-lg" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className="w-full md:w-1/3 my-3 bg-cyan-900 text-white p-3 rounded-lg font-semibold transition  hover:bg-white hover:text-cyan-900">Login</button>
            </form>
        </div>
    )
}

export default login