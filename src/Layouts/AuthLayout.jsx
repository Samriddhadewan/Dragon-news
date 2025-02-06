import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"

const AuthLayout = () => {
  return (
    <div className="bg-[#F3F3F3]">
            <div className="w-[1140px] mx-auto min-h-screen">
        <header className=" py-7 ">
            <Navbar />
        </header>
        <Outlet />
    </div>
    </div>
  )
}

export default AuthLayout