import Marquee from "../../components/Home/marquee";
import Jumbotron from "../../components/Home/jumbotron";

const Home = () => {
  return (
    <>
      <div className=" bg-[#14463a] max-h-[700px]">
        <Jumbotron Marquee={Marquee} />
      </div>
      <div className=" mt-[100px] container mx-auto relative z-10">
        <div className=" flex justify-between">
          <h1 className=" text-xl max-w-[300px] text-[#14463a] bg-[#fbeee5]">
            Minum sekaligus ngemil, minumya habis gelasnya ikut habis
          </h1>
          <h1 className=" max-w-[330px] text-right bg-[#fbeee5]">
            Nikmati berbagai minuman di segala suasana dengan produk ramah
            lingkungan, tahan lama, dan serbaguna. Cocok untuk rumah, kantor,
            hingga acara spesial.
          </h1>
        </div>
      </div>
    </>
  );  
};

export default Home;
