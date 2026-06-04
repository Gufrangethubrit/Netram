import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Testimonial = {
  name: string;
  role: string;
  image: string;
  quote: string;
  featured?: boolean;
};

const testimonials: Testimonial[] = [
  {
    name: "Meena Devi",
    role: "Mother, Jaipur",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    quote:
      "Netram Eye Foundation ne hamare ghar aakar meri aankhon ki jaanch ki aur mere bete ki zindagi badal gayi. Aaj uske sapne clear hain - woh doctor banna chahta hai.",
  },
  {
    name: "Arjun Sharma",
    role: "Volunteer, Delhi",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    quote:
      "I have been volunteering with Netram for three years. Working on eye camps and screenings has been deeply rewarding - we see immediate impact in people's lives.",
    featured: true,
  },
  {
    name: "Kavita Joshi",
    role: "CSR Partner, Mumbai",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    quote:
      "Our company partnered with Netram Eye Foundation for a CSR initiative. Their professionalism and transparency made the partnership highly successful.",
  },
  {
    name: "Sanjay Verma",
    role: "Local Community Leader",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    quote:
      "The change I see in these children is breath-taking. They are confident, skilled, and ready to take on the world with courage and determination. Truly inspiring!",
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div
      className={`testimonial-card ${
        testimonial.featured ? "featured-testimonial" : ""
      }`}
    >
      <div className="quote-icon">
        <i className="bi bi-quote" />
      </div>
      <p>"{testimonial.quote}"</p>
      <div className="testimonial-author">
        <img src={testimonial.image} alt={testimonial.name} />
        <div>
          <strong>{testimonial.name}</strong>
          <span>{testimonial.role}</span>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="testimonials-section section-padding" id="testimonials">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <div className="section-tag mx-auto">
            <i className="bi bi-chat-quote-fill me-2" /> What People Say
          </div>
          <h2 className="section-title">
            Voices From the <span className="gradient-text">Heart</span>
          </h2>
        </div>

        <div data-aos="fade-up">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            className="testimonials-slider"
            spaceBetween={24}
            slidesPerView={1}
            loop={testimonials.length > 3}
            speed={900}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              reverseDirection: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation
            breakpoints={{
              576: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.name}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="text-center mt-5" data-aos="fade-up">
          <a href="./reviews.html" className="btn-primary-custom px-5">
            View All Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
