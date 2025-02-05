import { useEffect, useState } from "react"

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
                category.map(category => <button className="btn border-none py-4" key={category.category_id}>{category.category_name}</button>)
            }
        </div>
    </div>
  )
}

export default Category