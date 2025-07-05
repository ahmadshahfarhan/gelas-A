const items = Array.from({ length: 20 }, () => "order now");
const Marquee = () => {
  return (
    <>
      <div className=" pt-44 relative">
        <div className=" flex items-center gap-x-3 rotate-[3deg] w-max absolute top-20 left-[-260px]">
          <h1 className=" uppercase text-[#dedada1a] text-8xl title-font">
            edible cup
          </h1>
          <h1 className=" uppercase text-[#dedada1a] text-8xl title-font">
            edible cup
          </h1>
          <h1 className=" uppercase text-[#dedada1a] text-8xl title-font">
            edible cup
          </h1>
        </div>
        <div className=" flex items-center gap-x-3 rotate-[-3deg] w-max absolute top-20 right-[-240px]">
          <h1 className=" uppercase text-[#dedada1a] text-8xl title-font">
            edible cup
          </h1>
          <h1 className=" uppercase text-[#dedada1a] text-8xl title-font">
            edible cup
          </h1>
          <h1 className=" uppercase text-[#dedada1a] text-8xl title-font">
            edible cup
          </h1>
        </div>
        <div className="overflow-hidden whitespace-nowrap bg-[#ffb91e] py-5 w-full rotate-[3deg] z-20 relative mt-5">
          <div className=" animate-marqueeHome flex w-max items-center gap-x-12 hover:[animation-play-state:paused]">
            {items.map((item, index) => (
              <h1
                key={`top-${index}`}
                className="font-bold text-6xl uppercase title-font text-[#4b370a]"
              >
                {item}
              </h1>
            ))}
          </div>
        </div>
        <div className="overflow-hidden whitespace-nowrap bg-[#cc9620] py-5 w-full rotate-[-3deg] z-10 relative top-[-100px]">
          <div className=" animate-marquee-reverse flex w-max items-center gap-x-12 hover:[animation-play-state:paused]">
            {items.map((item, index) => (
              <h1
                key={`top-${index}`}
                className="font-bold text-6xl uppercase title-font text-[#4b370a]"
              >
                {item}
              </h1>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Marquee;
