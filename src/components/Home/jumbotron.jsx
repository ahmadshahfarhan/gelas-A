import { useState, useRef } from "react";
import panahleft from "../../assets/svg/panahleft.svg";
import panahright from "../../assets/svg/panahright.svg";
import halal from "../../assets/svg/halal.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Thumbs,
  Navigation,
  EffectFade,
  EffectCube,
  EffectCoverflow,
  EffectFlip,
} from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { HomeProduk } from "../../data/Home/HomeProduk";

const Jumbotron = ({ Marquee }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const mainSwiperRef = useRef(null);
  const StyleJumbotron =
    "title-font text-[140px] leading-[110px] uppercase base-white-text";
  return (
    <>
      <div className=" text-center pt-[110px]">
        <h1 className={StyleJumbotron}>Drinking coffee is fun</h1>
        <h1 className={StyleJumbotron}>glasses are fun too!</h1>
      </div>
      <div className=" relative">
        <Swiper
          onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          // effect="fade"
          speed={2500}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Thumbs, Navigation, Autoplay, EffectFade]}
          autoplay={{ delay: 2500 }}
          className="main-slider mt-[-30px] mx-auto"
        >
          {HomeProduk.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                className="mx-auto rotate-[8deg]  relative z-10"
                src={item.img}
                alt={item.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="bg-[#00000078] h-[530px] w-[530px] rounded-full absolute left-1/2 top-[360px] -translate-x-1/2 -translate-y-1/2"></div>
        <img
          className=" absolute top-[550px] z-20 left-1/2  -translate-x-[230px] -translate-y-1/2 rotate-[20deg]"
          src={halal}
          alt="gelas A"
        />
        <div className=" relative">
          <h1 className=" absolute max-w-[200px] bottom-0 top-[-560px] base-white-text leading-[17px] left-1/9 description-font">
            zero waste, 100% dari bahan-bahan kue kering, seruput minum, gigit
            gelasnya!
          </h1>
          <img
            className=" absolute bottom-0 top-[-490px] left-[310px]"
            src={panahleft}
            alt="gelas A"
          />
        </div>
        <div className="relative">
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={15}
            slidesPerView={3}
            watchSlidesProgress
            modules={[Thumbs, Navigation]}
            className="thumb-slider max-w-[200px] absolute bottom-0 top-[-490px] base-white-text left-1/3"
          >
            {HomeProduk.map((item, index) => (
              <SwiperSlide
                key={index}
                className="bg-[#00000078] rounded-2xl p-2 cursor-pointer"
              >
                <img
                  className="relative z-10 w-[200px] mx-auto"
                  onMouseEnter={() => mainSwiperRef.current?.slideTo(index)}
                  src={item.img}
                  alt={item.title}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <img
            src={panahright}
            alt=""
            className="absolute bottom-0 top-[-600px] right-[310px] rotate-[-34deg]"
          />
        </div>
        <Marquee />
      </div>
    </>
  );
};

export default Jumbotron;
