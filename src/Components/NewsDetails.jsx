import { Link } from "react-router-dom";

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

    <Link to="/category/01" className="btn btn-primary py-4">Back</Link>
  </div>
</div>
  )
}

export default NewsDetails