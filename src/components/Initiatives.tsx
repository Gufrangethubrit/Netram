import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const projects = [
  {
    id: 1,
    name: "Roshni",
    image: "/assets/project_2/roshni-img.png",
    description:
      "Project Roshni is being implemented across Delhi and Haryana in association with IGL. The initiative focuses on vision screening, hemoglobin testing, free spectacle distribution, and awareness programs related to eye health, dental care, mental health, and eye donation among children.",
  },
  {
    id: 2,
    name: "Nayan Tara",
    image: "/assets/project_2/Nayan-Tara.png",
    description:
      "Project Nayan Tara was launched in 2024 with the aim of promoting eye health and preventive care among children. Under this initiative, Netram Eye Foundation has conducted eye screenings for over 10,000+ children, distributed 1,200+ free spectacles, and provided 10,000+ bottles to support health and hygiene awareness among children.",
  },
  {
    id: 3,
    name: "Garima",
    image: "/assets/project_2/garima.png",
    description:
      "Project Garima is a Menstrual Hygiene Management Program aimed at supporting villages in the Kalahandi district of Odisha. The initiative believes that menstrual products are a basic human right, not a luxury. No woman or girl should have to choose between essential needs and menstrual hygiene products.",
  },
  {
    id: 4,
    name: "Mission 6/6",
    image: "/assets/project_2/Mission-6-6.png",
    description:
      "Mission 6/6 is a comprehensive eye care initiative launched by Netram Eye Foundation for Delhi Police personnel. The program was flagged off by Addl. DCP Dhal Singh, South East District, New Delhi, with the aim of ensuring better eye health and vision care for police officers.",
  },
  {
    id: 5,
    name: "Oxygen Seva",
    image: "/assets/project_2/Oxygen-Seva.png",
    description:
      "During the COVID-19 crisis, Netram Eye Foundation supported individuals and families affected by the pandemic by providing free oxygen cylinders during the acute oxygen shortage across India, helping save countless lives.",
  },
  {
    id: 6,
    name: "Raahi",
    image: "/assets/project_2/raahi.png",
    description:
      "Raahi, in association with Sightsavers India, extends eye care services to underserved regions and focuses primarily on truck drivers. The initiative enables them to live with independence and dignity through vision screening and by providing clear vision certificates to those without visual impairment.",
  },
  {
    id: 7,
    name: "TGMC",
    image: "/assets/project_2/tgmc1.png",
    description:
      "In association with NBCFDC under the Ministry of Social Justice and Empowerment, Netram Eye Foundation launched the first mental health helpline for the transgender community and organized free medical camps across India to promote healthcare accessibility and awareness.",
  },
  {
    id: 8,
    name: "Netram Empower",
    image: "/assets/project_2/Netram-Empower.png",
    description:
      "Netram Empower is a skill development initiative designed to train and socially empower 12th-pass students through professional healthcare and vocational courses. The program enables students to secure employment opportunities or establish independent practices.",
  },
  {
    id: 9,
    name: "Community Eye Screening",
    image: "/assets/project_2/Community-Eye-%20Screening.png",
    description:
      "To extend eye care services to underserved communities, Netram Eye Foundation has conducted more than 2,500 eye screening camps independently and in collaboration with partners such as ONGC, Indian Oil, Mirofusion, NSKFDC, NBCFDC, and others.",
  },
  {
    id: 10,
    name: "Chashma Bus",
    image: "/assets/project_2/Chashma-Bus.png",
    description:
      "Chashma Bus is a mobile ophthalmic unit initiative by Netram Eye Foundation, inaugurated by District Magistrate Mrs. Harleen Kaur of South East Delhi.",
  },
  {
    id: 11,
    name: "IGL Nayan Hans",
    image: "/assets/project_2/IGL-Nayan-Hans.png",
    description:
      "Under the IGL Nayan Hans initiative, preventive healthcare services are provided to underprivileged communities living in Delhi slums. The initiative has successfully facilitated over 1,000 free cataract surgeries.",
  },
];

export default function Initiatives() {
  return (
    <section
      className="projects-section section-padding"
      id="projects-activities"
    >
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <div className="section-tag mx-auto">
            <i className="bi bi-rocket-takeoff-fill me-2" /> Our Initiatives
          </div>
          <h2 className="section-title">
            Projects &amp; <span className="gradient-text">Activities</span>
          </h2>
          <p className="section-desc mx-auto" style={{ maxWidth: 600 }}>
            Explore our recent endeavors and ongoing projects that are making a
            real impact in the community.
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          className="projects-slider pb-5"
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="project-card">
                <div className="project-img">
                  <img src={project.image} alt={project.name} />
                </div>
                <div className="project-content">
                  <h4>{project.name}</h4>
                  <p>{project.description}</p>
                  <a href="./project-details.html" className="project-link">
                    Read More <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-4">
          <a href="./project.html" className="btn-primary-custom px-4">
            View All Project
          </a>
        </div>
      </div>
    </section>
  );
}
