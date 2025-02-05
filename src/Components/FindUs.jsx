import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div>
        <h1 className="text-[#403F3F] mb-5 font-semibold text-xl">Find Us On</h1>
        <div className="flex flex-col">
            <button className="btn py-8 bg-white text-xl text-[#1877F2] font-normal justify-start"><FaFacebook /> Facebook</button>
            <button className="btn py-8 bg-white  text-xl  text-[#000000] font-normal justify-start "><FaTwitter /> Twitter</button>
            <button className="btn  text-xl py-8 bg-white  text-[#E4405F] font-normal justify-start "><FaInstagram /> Instagram</button>
        </div>
    </div>
  )
}

export default FindUs