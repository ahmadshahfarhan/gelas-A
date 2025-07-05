import ElementProduk from "../../assets/svg/produkelemen.svg";
import { TbBuildingStore } from "react-icons/tb";
import { dataProduk } from "../../data/Produk/Produk";

const Produk = () => {
  return (
    <>
      <div className=" base-green-bg inline-flex flex-col pl-8 pt-4 rounded-r-full mb-[-200px] px-16 mt-10">
        <h1 className=" base-white-text title-font text-6xl">
          Product Highlights
        </h1>
        <h3 className=" max-w-[250px] base-white-text leading-[20px]">
          Minum sekaligus ngemil, minumya habis gelasnya pun ikut habis
        </h3>
      </div>
      <div className="bg-[#14463a]">
        <div className=" flex justify-center contiainer mx-auto gap-32 pt-24">
          {dataProduk.map((item, index) => (
            <div key={index} className="">
              <div className=" relative">
                <img
                  className=" w-[240px] flex mx-auto relative z-10"
                  src={item.img}
                  alt={item.title}
                />
                <div className=" w-[330px]">
                  <img
                    className=" absolute top-[193px]"
                    src={ElementProduk}
                    alt=""
                  />
                </div>
              </div>
              <div className=" mt-6 space-y-1">
                <h1 className=" base-white-text title-font text-4xl text-center">
                  {item.title}
                </h1>
                <h3 className=" max-w-[280px] mx-auto base-white-text leading-[20px] text-md text-center">
                  {item.description}
                </h3>
                <button className="flex items-center gap-x-1 mx-auto base-green-text base-white-bg font-bold px-4 py-2 rounded-3xl mt-3">
                  <TbBuildingStore className=" text-3xl" />
                  <span>
                    Shop Now <span>|</span> Rp 20.000
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Produk;
