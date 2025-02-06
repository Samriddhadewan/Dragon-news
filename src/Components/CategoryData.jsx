import { useLoaderData } from "react-router-dom"
import NewsCard from "./NewsCard";

const CategoryData = () => {
    const {data:news} = useLoaderData();
  return (
    <div>
        <div className="space-y-5">
            
        {
            news.map(singleNews => <NewsCard key={singleNews._id} news={singleNews}></NewsCard>)
        }
        </div>

    </div>
  )
}

export default CategoryData