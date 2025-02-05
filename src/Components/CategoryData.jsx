import { useLoaderData } from "react-router-dom"

const CategoryData = () => {
    const {data} = useLoaderData();
    console.log(data);
  return (
    <div>{data.length} news found in this category</div>
  )
}

export default CategoryData