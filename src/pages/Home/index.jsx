import bayanganungu from "../../assets/svg/bayanganungu.svg";

import Marquee from "../../components/Home/marquee";
import Jumbotron from "../../components/Home/jumbotron";

const Home = () => {
  return (
    <>
      <div className=" bg-[#14463a] max-h-[700px]">
        <Jumbotron Marquee={Marquee} />
      </div>
      <div className=" mt-[150px] container mx-auto relative">
        <img className=" absolute left-[-140px] bottom-0 top-[-390px] rotate-[180deg] -z-50" src={bayanganungu} alt="gelas A" />
        <img className=" absolute right-[-140px] bottom-0 top-[-390px] rotate-[200deg] -z-50" src={bayanganungu} alt="gelas A" />
        <div className=" flex justify-between">
          <h1 className=" text-md max-w-[250px] text-[#14463a] description-font leading-[21px]">
            Minum sekaligus ngemil, minumya habis gelasnya ikut habis
          </h1>
          <h1 className=" text-md max-w-[330px] text-right text-[#14463a] description-font leading-[21px]">
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
