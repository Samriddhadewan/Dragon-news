import { FaFacebook, FaGithub } from "react-icons/fa6";

const Login = () => {
  return (
    <div>
        <h1 className="text-[#403F3F] mb-5 font-bold text-xl">Login With</h1>
        <div className="flex flex-col space-y-2">
            <button className="btn bg-white  text-blue-500 text-base font-normal"> <FaFacebook></FaFacebook> Login with Google</button>
            <button className="btn bg-white  text-base font-normal"><FaGithub /> Login with Github</button>
        </div>
    </div>
  )
}

export default Login