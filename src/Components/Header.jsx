import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-12">
        <div>
        <img className="w-[470px]" src={logo} alt="" />
        </div>    
        <p className="text-[#706f6f] my-5 text-lg">Journalism Without Fear or Favour</p>    
    </div>
  )
}

export default Header