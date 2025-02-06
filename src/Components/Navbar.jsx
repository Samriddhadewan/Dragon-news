import { Link } from "react-router-dom"
import profile from "../assets/user.png"


const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
        <div></div>
        <div className="flex text-[#706F6F] gap-3">
            <Link to={"/"}>Home</Link>
            <Link>About</Link>
            <Link>Career</Link>
        </div>
        <div className="flex items-center gap-3">
            <div>
                <img src={profile} alt="" />
            </div>
            <Link to="/auth/login" className="bg-[#403F3F] text-white py-3 px-7 rounded-sm">Login</Link>
        </div>
    </div>
  )
}

export default Navbar