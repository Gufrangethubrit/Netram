import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

type BoardMember = {
  name: string;
  role: string;
  image: string;
  profileUrl: string;
  imageAlt?: string;
};

const boardMembers: BoardMember[] = [
  {
    name: "Seema Gupta",
    role: "President",
    image: "./assets/volunteer/seema.png",
    profileUrl: "./seema-gupta-profile.html",
  },
  {
    name: "Raj Kumari",
    role: "Vice President",
    image: "./assets/volunteer/rajkumari.jpeg",
    profileUrl: "./rajkumari-profile.html",
  },
  {
    name: "Dr. Anchal Gupta",
    role: "Founder & General Secretary",
    image: "./assets/volunteer/anchal_new_2.webp",
    profileUrl: "./anchal-gupta-profile.html",
  },
  {
    name: "Sattan Sharma",
    role: "Treasurer",
    image: "./assets/volunteer/sattan.png",
    profileUrl: "./sattan-sharma-profile.html",
  },
  {
    name: "Vivek Maini",
    role: "Executive Member",
    image: "./assets/volunteer/vivek.png",
    profileUrl: "./vivek-maini-profile.html",
    imageAlt: "Vivek Maini",
  },
  {
    name: "Deepak Singh",
    role: "Executive Member",
    image: "./assets/volunteer/deepak.png",
    profileUrl: "./deepak-singh.html",
    imageAlt: "Deepak Singh",
  },
  {
    name: "Abhishek Mishra",
    role: "Executive Member",
    image: "./assets/volunteer/abhishek.png",
    profileUrl: "./abhishek-mishra-profile.html",
    imageAlt: "Abhishek Mishra",
  },
];

function BoardMemberCard({ member }: { member: BoardMember }) {
  return (
    <div className="team-slide-card">
      <div className="team-card">
        <div className="team-img-wrap">
          <img src={member.image} alt={member.imageAlt ?? member.name} />
          <div className="team-social">
            <a href="#" aria-label={`${member.name} LinkedIn`}>
              <i className="bi bi-linkedin" />
            </a>
            <a href="#" aria-label={`${member.name} Twitter`}>
              <i className="bi bi-twitter-x" />
            </a>
            <a href="#" aria-label={`${member.name} Instagram`}>
              <i className="bi bi-instagram" />
            </a>
          </div>
        </div>
      </div>
      <div
        className="team-info team-info-below"
        style={{
          marginTop: 16,
          position: "static",
          textAlign: "center",
          transform: "none",
          width: "100%",
        }}
      >
        <h5>{member.name}</h5>
        <span>{member.role}</span>
        <br />
        <a
          href={member.profileUrl}
          className="prog-link team-profile-link"
          aria-label={`View ${member.name} profile`}
        >
          View Profile <i className="bi bi-arrow-right" />
        </a>
      </div>
    </div>
  );
}

export default function OurBoardMembers() {
  return (
    <section className="team-section section-padding" id="team">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <div className="section-tag mx-auto">
            <i className="bi bi-person-badge-fill me-2" /> Meet Our Board
            Members
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay={100}>
          <Swiper
            modules={[Autoplay, Pagination]}
            className="teamSwiper"
            spaceBetween={24}
            slidesPerView={1}
            loop={boardMembers.length > 4}
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
            breakpoints={{
              576: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
          >
            {boardMembers.map((member) => (
              <SwiperSlide key={member.name}>
                <BoardMemberCard member={member} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="text-center mt-4">
          <a href="./board-member.html" className="btn-primary-custom px-4">
            All Board Members
          </a>
        </div>
      </div>
    </section>
  );
}
