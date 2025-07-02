const items = Array.from({ length: 20 }, () => "edible cup");

const marquee = () => {
  return (
    <>
      <div className="overflow-hidden whitespace-nowrap bg-[#ffb91e] py-5 w-full absolute top-[330px] rotate-[3deg] z-20">
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
      <div className="overflow-hidden whitespace-nowrap bg-[#cc9620] py-5 w-full absolute top-[330px] rotate-[-3deg] z-10">
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
    </>
  );
};

export default marquee;
