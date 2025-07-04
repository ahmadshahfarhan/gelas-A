import Element1 from "../../assets/svg/cup.svg";
import Element2 from "../../assets/svg/animes.svg";
import Element3 from "../../assets/svg/panahleft.svg";
import Element4 from "../../assets/svg/gelasmakan.svg";
import Element5 from "../../assets/svg/kamera.svg";

import { SpinningText } from "../../Ui/AboutUs/Spinning";

const AboutUs = () => {
  const child = Array.from({ length: 8 }, () => "edible cup");
  const items = Array.from({ length: 1 }, () => (
    <div className=" flex gap-2 items-center mx-auto justify-center">
      {child.map((items, index) => (
        <h1
          key={index}
          className={`uppercase text-8xl text-center title-font text-[#dedada35] px-1
             ${index % 2 === 0 ? "text-[#dedada90]" : "text-[#dedada90]"}`}
        >
          {items}
        </h1>
      ))}
    </div>
  ));
  return (
    <>
      <div className="">
        <div className=" flex justify-between items-center mx-auto mt-6">
          <div className=" relative">
            <img className="z-10 relative" src={Element5} alt="gelas A" />
            <div className=" bg-[#14463a8c] h-[320px] w-[320px] rounded-full absolute top-[-20px] right-0 left-[-140px]"></div>
          </div>
          <div className=" flex-col relative">
            <h1 className=" uppercase title-font text-8xl text-[#14463a]">
              about us
            </h1>
            <h3 className=" max-w-[490px] text-[#14463a] description-font text-lg">
              Minum? Bisa. Dimakan? Jelas bisa! Di{" "}
              <span className=" font-bold">GELAS A</span>, kami bikin gelas yang
              nggak cuma buat nampung minuman, tapi juga bisa kamu gigit
              setelahnya. Rasanya enak, bahannya alami, dan pastinya nggak
              ninggalin sampah. Peduli lingkungan jadi makin seru dan nggak
              boring sama sekali!
            </h3>
            <img
              className=" absolute top-11 right-[-120px] rotate-[13deg] transform scale-y-[-1]"
              src={Element3}
              alt="gelas A"
            />
          </div>
          <div className=" relative">
            <img className=" relative z-10" src={Element2} alt="gelas A" />
            <div className=" bg-[#14463a8c] h-[360px] w-[360px] rounded-full absolute top-0 left-[140px]"></div>
          </div>
        </div>
        <div className=" relative">
          <div className="mt-[-20px] relative -z-10 max-w-[600px] overflow-hidden mx-auto p-5">
            {[...Array(2)].map((_, index) => (
              <div
                key={index}
                className={`-z-10 w-max hover:[animation-play-state:paused] mt-[-25px]
                ${
                  index % 2 === 0
                    ? "animate-marquee-reverse"
                    : "animate-marqueeHome"
                }`}
              >
                {items.map((item, index) => (
                  <div className="" key={index}>
                    {item}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <SpinningText
            reverse
            duration={12}
            radius={6}
            className=" text-2xl uppercase absolute top-[75px] left-1/2 transform -translate-x-1/2 text-[#14463a] font-bold"
          >
            gelas A gelas A gelas A gelas A
          </SpinningText>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
