import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";

const Category = () => {
  const [category, setCategory] = useState([])
  
  useEffect(()=> {
    fetch("https://openapi.programming-hero.com/api/news/categories")
    .then(res => res.json())
    .then(result => setCategory(result.data.news_category));
    
  } ,[])
  
    return (
    <div>
        <h1 className="text-[#403F3F] font-semibold text-xl mb-4 ">Categories  ({category.length})</h1>
        <div className="flex flex-col gap-3">
            {
                category.map(category => <NavLink to={`/category/${category.category_id}`} className="btn bg-white border-none py-4" key={category.category_id}>{category.category_name}</NavLink>)
            }
        </div>
    </div>
  )
}

export default Category