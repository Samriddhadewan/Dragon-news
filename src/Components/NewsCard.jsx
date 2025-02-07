import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = (props = {}) => {
  const { news } = props || {};
  return (
    <div className="max-w-full mx-auto bg-white shadow-lg rounded-xl overflow-hidden p-4">
      {/* Author Info */}
      <div className="flex items-center gap-3">
        <img
          src={news.author.img}
          alt={news.author.name}
          className="w-10 h-10 rounded-full border"
        />
        <div>
          <h3 className="font-semibold text-gray-700">{news.author.name}</h3>
          <p className="text-sm text-gray-500">{news.author.published_date}</p>
        </div>
      </div>

      {/* News Title */}
      <h2 className="text-lg font-bold text-gray-900 mt-3">{news.title}</h2>

      {/* News Image */}
      <img
        src={news.image_url}
        alt="News Thumbnail"
        className="w-full h-48 object-cover rounded-lg mt-3"
      />

      {/* News Details */}
      <p className="text-sm text-gray-600 mt-3">
        {news.details.length > 100
          ? `${news.details.substring(0, 100)}...`
          : news.details}
        <Link to={`/news/${news._id}`} className="text-blue-600 cursor-pointer"> Read More</Link>
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between mt-4">
        {/* Ratings */}
        <div className="flex items-center">
          <div className="rating rating-sm">
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <span className="ml-2 text-gray-700">{news.rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center text-gray-600">
          <FaRegEye className="text-lg" />
          <span className="ml-1">{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
