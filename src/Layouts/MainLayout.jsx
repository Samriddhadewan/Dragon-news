import Category from "../Components/Category";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";

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
      <nav className="w-[1140px] my-7 mx-auto">
        {" "}
        <Navbar />{" "}
      </nav>
      {/* main  */}
      <main className="w-[1140px] my-7 mx-auto grid grid-cols-12">
        <aside className="col-span-3 ">
          <Category></Category>
        </aside>
        <section className="col-span-6 ">main section</section>
        <aside className="col-span-3 ">right side</aside>
      </main>
    </div>
  );
};

export default MainLayout;
