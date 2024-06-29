import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

// Import images from the web
import slide_image_1 from "../../assets/Photos/codefest (1).jpg";
import slide_image_2 from "../../assets/Photos/codefest (2).jpg";
import slide_image_3 from "../../assets/Photos/codefest (3).jpg";
import slide_image_4 from "../../assets/Photos/codefest (4).jpg";
import slide_image_5 from "../../assets/Photos/codefest (5).jpg";
import slide_image_6 from "../../assets/Photos/codefest (6).jpg";
import slide_image_7 from "../../assets/Photos/codefest (7).jpg";
// import slide_image_8 from "../../assets/Photos/codefest (8).jpg";

import "./coverflow.css";

function Coverflow() {
  return (
    <div className="ccontainer">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        autoplay={{ delay: 3000 }}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Coverflow;
