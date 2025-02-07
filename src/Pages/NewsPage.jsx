import { useLoaderData } from "react-router-dom";
import Header from "../Components/Header"
import NewsDetails from "../Components/NewsDetails"
import RightSide from "../Components/RightSide"

const NewsPage = () => {
    const {data} = useLoaderData();
  return (
    <div className="w-[1140px] mx-auto ">
        <header>
            <Header />
        </header>
        <main className="grid gap-4 grid-cols-12">
            <div className="col-span-9 ">
                <h1>dragon News</h1>
                <NewsDetails data={data} />
            </div>
            <div className="col-span-3 ">
                <RightSide />
            </div>
        </main>
    </div>
  )
}

export default NewsPage