import Header from "../Components/Header"
import LatestNews from "../Components/LatestNews"

const MainLayout = () => {
  return (
    <div>
        {/* header  */}
        <header>
        
        <Header />
        <section className="w-[1140px] my-7 mx-auto">
          <LatestNews></LatestNews>
        </section>
        </header>
        <nav></nav>
        <main></main>
        {/* main  */}
    </div>
  )
}

export default MainLayout