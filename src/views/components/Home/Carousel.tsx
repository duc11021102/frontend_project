import slide1 from "../../../assets/img/slide_1_img.webp";
import slide2 from "../../../assets/img/slide_2_img.webp";
import slide3 from "../../../assets/img/slide_3_img.webp";
import slide4 from "../../../assets/img/slide_4_img.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// import "swiper/swiper-bundle.min.css";

const Carousel = () => {
  return (
    <>
      <main>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          speed={1000}
          loop
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            enabled: false,
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          pagination={{
            clickable: true,
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          className="swiper-container"
        >
          <SwiperSlide className="swiper-slide">
            <img src={slide1} loading="lazy" alt=""></img>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src={slide2} loading="lazy" alt=""></img>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src={slide3} loading="lazy" alt=""></img>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src={slide4} loading="lazy" alt=""></img>
          </SwiperSlide>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
          {/* <div className="custom-pagination"></div> */}
        </Swiper>
      </main>
    </>
  );
};
export default Carousel;
