import Marquee from "./Marquee";
import element from "../assets/svg/cup.svg";
const Footer = () => {
  return (
    <>
      <div className="bg-[#14463a]">
        <Marquee />
        <div className=" mt-12">
          <div className=" relative flex-col flex">
            <h1 className=" uppercase text-[230px]  title-font base-white-text leading-[170px] text-center whitespace-pre">
              order{`\n`}now
            </h1>
            <div className="overflow-hidden h-[330px] w-[530px] flex justify-center mx-auto mt-[-70px]">
              <img
                className=" flex justify-center mx-auto w-full h-full object-cover object-top"
                src={element}
                alt=""
              />
            </div>
          </div>
          <div className="w-full bg-transparent py-4 px-12 mt-[-71px] relative z-10">
            <div className=" flex items-center justify-between">
              <h1 className="base-white-text title-font text-4xl">GELAS A</h1>
              <ul className=" flex items-center gap-11 base-white-text text-md">
                <li>About Us</li>
                <li>Testimoni</li>
                <li>Produk</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
