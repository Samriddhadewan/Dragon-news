import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex gap-4 p-2 bg-[#F3F3F3] rounded-sm">
      <p className="p-4 rounded-sm bg-[#D72050] text-white font-medium text-xl">Latest</p>
      <Marquee>
        <p className="text-[#403F3F] font-semibold text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, quia accusamus consequuntur esse voluptas eos?</p>
        <p  className="text-[#403F3F] font-semibold text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, quia accusamus consequuntur esse voluptas eos?</p>
        <p  className="text-[#403F3F] font-semibold text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, quia accusamus consequuntur esse voluptas eos?</p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
