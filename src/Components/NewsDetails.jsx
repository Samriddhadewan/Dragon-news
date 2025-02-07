import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";


const NewsDetails = ({data}) => {
    const {image_url,title, details} = data[0];
    return (
    <div className="card bg-base-100 border-[#E7E7E7] p-4 shadow-xl">
  <figure className="">
    <img
      src={image_url}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className=" py-5">
    <h2 className="card-title py-2">{title}</h2>
    <p>{details}</p>

    <Link to="/category/01" className="btn my-4 bg-[#D72050] text-white font-normal text-base  py-4"><FaArrowLeft /> All news in this category</Link>
  </div>
</div>
  )
}

export default NewsDetails