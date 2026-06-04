import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  { src: "/assets/Banner/slider1 (1).png", alt: "Netram Eye Foundation" },
  { src: "/assets/Banner/slider1 (2).jpeg", alt: "Netram Eye Foundation" },
  { src: "/assets/Banner/slider1 (3).png", alt: "Netram Eye Foundation" },
  { src: "/assets/Banner/slider1 (4).png", alt: "Netram Eye Foundation" },
  { src: "/assets/Banner/slider1 (5).png", alt: "Netram Eye Foundation" },
];

export default function Herosection() {
  const nextEl = useRef(null);
  const prevEl = useRef(null);

  return (
    <section className="hero-section p-0" id="home">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        className="hero-swiper"
        loop={true}
        slidesPerView={1}
        spaceBetween={0}
        speed={800}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        onBeforeInit={(swiper: SwiperType) => {
          const nav = swiper.params.navigation;
          if (nav && typeof nav === "object" && "nextEl" in nav) {
            nav.nextEl = nextEl.current;
            nav.prevEl = prevEl.current;
          }
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <a href="./project-details.html">
              <img
                src={slide.src}
                alt={slide.alt}
                className="hero-slide-img"
                width={1920}
                height={780}
                loading={index === 0 ? undefined : "lazy"}
              />
            </a>
          </SwiperSlide>
        ))}

        <div ref={nextEl} className="swiper-button-next d-none d-md-flex hero-nav-btn" />
        <div ref={prevEl} className="swiper-button-prev d-none d-md-flex hero-nav-btn" />
        <div className="swiper-pagination hero-pagination" />
      </Swiper>
    </section>
  );
}
