import React from "react";
import Header from "../components/Header";
import Breadcrum from "../components/Breadcrum";
import Footer from "../components/Footer";

export default function Project() {
  return (
    <div>
      <Header />
      <Breadcrum title="Our Projects" />
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
              Explore our recent endeavors and ongoing projects that are making
              a real impact in the community.
            </p>
          </div>
          <div className="tab-content" id="projectActivityTabContent">
            {/* Latest Projects Pane */}
            <div
              className="tab-pane fade show active"
              id="projects-pane"
              role="tabpanel"
              aria-labelledby="projects-tab"
              tabIndex={0}
            >
              <div className="row g-4">
                <div className="col-md-6 col-lg-4">
                  <div className="project-card">
                    <div className="project-img">
                      <img
                        src="./assets/project_2/roshni-img.png"
                        alt="Roshni"
                      />
                    </div>
                    <div className="project-content">
                      <h4>Roshni</h4>
                      <p>
                        Project Roshni is being implemented across Delhi and
                        Haryana in association with IGL. The initiative focuses
                        on vision screening, hemoglobin testing, free spectacle
                        distribution, and awareness programs related to eye
                        health, dental care, mental health, and eye donation
                        among children.
                      </p>
                      <a href="./project-details.html" className="project-link">
                        Read More <i className="bi bi-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="project-card">
                    <div className="project-img">
                      <img
                        src="./assets/project_2/Nayan-Tara.png"
                        alt="Nayan Tara"
                      />
                    </div>
                    <div className="project-content">
                      <h4>Nayan Tara</h4>
                      <p>
                        Project Nayan Tara was launched in 2024 with the aim of
                        promoting eye health and preventive care among children.
                        Under this initiative, Netram Eye Foundation has
                        conducted eye screenings for over 10,000+ children,
                        distributed 1,200+ free spectacles, and provided 10,000+
                        bottles to support health and hygiene awareness among
                        children.
                      </p>
                      <a href="./project-details.html" className="project-link">
                        Read More <i className="bi bi-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="project-card">
                    <div className="project-img">
                      <img src="./assets/project_2/garima.png" alt="Garima" />
                    </div>
                    <div className="project-content">
                      <h4>Garima</h4>
                      <p>
                        Project Garima is a Menstrual Hygiene Management Program
                        aimed at supporting villages in the Kalahandi district
                        of Odisha. The initiative believes that menstrual
                        products are a basic human right, not a luxury. No woman
                        or girl should have to choose between essential needs
                        and menstrual hygiene products.
                      </p>
                      <a href="./project-details.html" className="project-link">
                        Read More <i className="bi bi-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="project-card">
                    <div className="project-img">
                      <img
                        src="./assets/project_2/Mission-6-6.png"
                        alt="Mission 6/6"
                      />
                    </div>
                    <div className="project-content">
                      <h4>Mission 6/6</h4>
                      <p>
                        Mission 6/6 is a comprehensive eye care initiative
                        launched by Netram Eye Foundation for Delhi Police
                        personnel. The program was flagged off by Addl. DCP Dhal
                        Singh, South East District, New Delhi, with the aim of
                        ensuring better eye health and vision care for police
                        officers.
                      </p>
                      <a href="./project-details.html" className="project-link">
                        Read More <i className="bi bi-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="project-card">
                    <div className="project-img">
                      <img
                        src="./assets/project_2/Oxygen-Seva.png"
                        alt="Oxygen Seva"
                      />
                    </div>
                    <div className="project-content">
                      <h4>Oxygen Seva</h4>
                      <p>
                        During the COVID-19 crisis, Netram Eye Foundation
                        supported individuals and families affected by the
                        pandemic by providing free oxygen cylinders during the
                        acute oxygen shortage across India, helping save
                        countless lives.
                      </p>
                      <a href="./project-details.html" className="project-link">
                        Read More <i className="bi bi-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="project-card">
                    <div className="project-img">
                      <img src="./assets/project_2/raahi.png" alt="Raahi" />
                    </div>
                    <div className="project-content">
                      <h4>Raahi</h4>
                      <p>
                        Raahi, in association with Sightsavers India, extends
                        eye care services to underserved regions and focuses
                        primarily on truck drivers. The initiative enables them
                        to live with independence and dignity through vision
                        screening and by providing clear vision certificates to
                        those without visual impairment.
                      </p>
                      <a href="./project-details.html" className="project-link">
                        Read More <i className="bi bi-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="project-card">
                    <div className="project-img">
                      <img src="./assets/project_2/tgmc1.png" alt="TGMC" />
                    </div>
                    <div className="project-content">
                      <h4>TGMC</h4>
                      <p>
                        In association with NBCFDC under the Ministry of Social
                        Justice and Empowerment, Netram Eye Foundation launched
                        the first mental health helpline for the transgender
                        community and organized free medical camps across India
                        to promote healthcare accessibility and awareness.
                      </p>
                      <a href="./project-details.html" className="project-link">
                        Read More <i className="bi bi-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="project-card">
                    <div className="project-img">
                      <img
                        src="./assets/project_2/Netram-Empower.png"
                        alt="Netram Empower"
                      />
                    </div>
                    <div className="project-content">
                      <h4>Netram Empower</h4>
                      <p>
                        Netram Empower is a skill development initiative
                        designed to train and socially empower 12th-pass
                        students through professional healthcare and vocational
                        courses. The program enables students to secure
                        employment opportunities or establish independent
                        practices, while also contributing to long-term
                        reduction in unemployment.
                      </p>
                      <a href="./project-details.html" className="project-link">
                        Read More <i className="bi bi-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="project-card">
                    <div className="project-img">
                      <img
                        src="./assets/project_2/Community-Eye-%20Screening.png"
                        alt="Community Eye Screening"
                      />
                    </div>
                    <div className="project-content">
                      <h4>Community Eye Screening</h4>
                      <p>
                        To extend eye care services to underserved communities,
                        Netram Eye Foundation has conducted more than 2,500 eye
                        screening camps independently and in collaboration with
                        partners such as ONGC, Indian Oil, Mirofusion, NSKFDC,
                        NBCFDC, and others.
                      </p>
                      <a href="./project-details.html" className="project-link">
                        Read More <i className="bi bi-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="project-card">
                    <div className="project-img">
                      <img
                        src="./assets/project_2/Chashma-Bus.png"
                        alt="Chashma Bus"
                      />
                    </div>
                    <div className="project-content">
                      <h4>Chashma Bus</h4>
                      <p>
                        Chashma Bus is a mobile ophthalmic unit initiative by
                        Netram Eye Foundation, inaugurated by District
                        Magistrate Mrs. Harleen Kaur of South East Delhi.
                      </p>
                      <a href="./project-details.html" className="project-link">
                        Read More <i className="bi bi-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="project-card">
                    <div className="project-img">
                      <img
                        src="./assets/project_2/IGL-Nayan-Hans.png"
                        alt="IGL Nayan Hans"
                      />
                    </div>
                    <div className="project-content">
                      <h4>IGL Nayan Hans</h4>
                      <p>
                        Under the IGL Nayan Hans initiative, preventive
                        healthcare services are provided to underprivileged
                        communities living in Delhi slums. The program focuses
                        on diagnosing and treating eye-related problems while
                        offering free cataract surgeries. The initiative has
                        successfully facilitated over 1,000 free cataract
                        surgeries.
                      </p>
                      <a href="./project-details.html" className="project-link">
                        Read More <i className="bi bi-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="project-card">
                    <div className="project-img">
                      <img
                        src="./assets/project_2/Adopt-an-Eye.png"
                        alt="Adopt an Eye "
                      />
                    </div>
                    <div className="project-content">
                      <h4>Adopt an Eye</h4>
                      <p>
                        Under the Adopt an Eye community outreach initiative,
                        Netram Eye Foundation, with the generous support of GE
                        India Industrial Pvt. Ltd. and IDBI Bank, is conducting
                        large-scale eye screening and vision care services for
                        underserved communities. As part of this initiative,
                        free cataract surgeries have also been provided to
                        patients in need, helping restore vision and improve
                        quality of life for individuals who otherwise lack
                        access to essential eye care services.
                      </p>
                      <a href="#" className="project-link">
                        Read More <i className="bi bi-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
