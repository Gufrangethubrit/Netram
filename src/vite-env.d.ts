/// <reference types="vite/client" />

declare module "*.css";

declare module "leaflet/dist/leaflet.css";

declare module "swiper/css" {
  const content: string;
  export default content;
}

declare module "swiper/css/navigation" {
  const content: string;
  export default content;
}

declare module "swiper/css/pagination" {
  const content: string;
  export default content;
}

declare module "swiper/react" {
  export { Swiper, SwiperSlide } from "swiper/react";
}
