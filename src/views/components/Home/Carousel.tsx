import img1 from "../../assets/slide_1_img.webp";
import img2 from "../../assets/slide_2_img.webp";
import img3 from "../../assets/slide_3_img.webp";
import img4 from "../../assets/slide_4_img.webp";
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
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          pagination={{
            clickable: true,
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="swiper-container"
        >
          <SwiperSlide className="swiper-slide">
            <img src={img1} loading="lazy" alt=""></img>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src={img2} loading="lazy" alt=""></img>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src={img3} loading="lazy" alt=""></img>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src={img4} loading="lazy" alt=""></img>
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
