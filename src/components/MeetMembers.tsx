import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  profileUrl: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Shalu Arora",
    role: "CSR, Outreach & Operations Lead",
    image: "./assets/Management-Team/Shalu-Arora.png",
    profileUrl: "./shalu-arora.html",
  },
  {
    name: "B.S. Rawat",
    role: "Outreach Program Head",
    image: "./assets/Management-Team/B.S.Rawat.png",
    profileUrl: "./b.s.rawat.html",
  },
  {
    name: "Suman Singh",
    role: "State Program Coordinator",
    image: "./assets/Management-Team/Suman-Singh.png",
    profileUrl: "./suman-singh.html",
  },
  {
    name: "Neeraj Rautela",
    role: "State Program Coordinator",
    image: "./assets/Management-Team/Neeraj-Rautela.png",
    profileUrl: "./neeraj-rautela.html",
  },
  {
    name: "Shiv Shanker",
    role: "U.P. Program Manager",
    image: "./assets/Management-Team/Shiv-Shanker.png",
    profileUrl: "./shiv-shanker.html",
  },
  {
    name: "Bhumika",
    role: "Digital Management",
    image: "./assets/Management-Team/Bhumika.png",
    profileUrl: "./bhumika.html",
  },
  {
    name: "Waseem Ahmed",
    role: "IOCL Project Coordinator",
    image: "./assets/Management-Team/Waseem-Ahmed.png",
    profileUrl: "./waseem-ahmed.html",
  },
  {
    name: "Nandini Handa",
    role: "Corporate Communication Manager",
    image: "./assets/Management-Team/Nandini-Handa.png",
    profileUrl: "./nandini-handa.html",
  },
];

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="team-slide-card">
      <div className="team-card">
        <div className="team-img-wrap">
          <img src={member.image} alt={member.name} />
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

export default function MeetMembers() {
  return (
    <section className="team-section section-padding" id="team">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <div className="section-tag mx-auto">
            <i className="bi bi-person-badge-fill me-2" /> Meet Our Management
            Team
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay={100}>
          <Swiper
            modules={[Autoplay, Pagination]}
            className="teamSwiper"
            spaceBetween={24}
            slidesPerView={1}
            loop={teamMembers.length > 4}
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
            {teamMembers.map((member) => (
              <SwiperSlide key={member.name}>
                <TeamCard member={member} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="text-center mt-4">
          <a href="./our-management-team.html" className="btn-primary-custom px-4">
            View Management Team
          </a>
        </div>
      </div>
    </section>
  );
}
