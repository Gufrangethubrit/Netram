import { useEffect } from "react";
import Header from "../components/Header";
import Breadcrum from "../components/Breadcrum";
import Footer from "../components/Footer";

export default function RajkumariProfile() {
  useEffect(() => {
    const section = document.querySelector('.profile-details-section');
    if (section && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            section.classList.add('is-revealed');
            observer.disconnect();
          }
        });
      }, { threshold: 0.22 });
      observer.observe(section);
    } else if (section) {
      section.classList.add('is-revealed');
    }
  }, []);
  const tilt = (e: React.MouseEvent<HTMLDivElement>, element: HTMLDivElement) => {
    const rect = element.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const tiltX = (y - 0.5) * 10;
    const tiltY = (0.5 - x) * 10;
    element.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  };

  const untilt = (element: HTMLDivElement) => {
    element.style.transform = 'rotateX(0) rotateY(0)';
  };

  return (
    <div>
      <Header />
      <Breadcrum title="Rajkumari Profile" />
      <div>
        <section
          className="team-section section-padding profile-details-section"
          id="team"
        >
          <div className="container">
            <div className="text-center mb-5" data-aos="fade-up">
              <div className="section-tag mx-auto">
                <i className="bi bi-person-badge-fill me-2" /> Profile Details
              </div>
              <h2 className="section-title mt-3">Rajkumari </h2>
              <p className="section-desc mx-auto" style={{ maxWidth: 720 }}>
                President, Netram Eye Foundation
              </p>
            </div>
            <div
              className="row g-4 align-items-stretch justify-content-center"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="col-lg-4">
                <div className="team-card h-100 p-3 p-lg-4 profile-photo-card">
                  <div className="team-img-wrap profile-photo-wrap">
                    <img
                      src="./assets/volunteer/rajkumari.jpeg"
                      alt="Rajkumari "
                    />
                    <div className="team-social">
                      <a href="#" aria-label="LinkedIn">
                        <i className="bi bi-linkedin" />
                      </a>
                      <a href="#" aria-label="Twitter X">
                        <i className="bi bi-twitter-x" />
                      </a>
                      <a href="#" aria-label="Instagram">
                        <i className="bi bi-instagram" />
                      </a>
                    </div>
                  </div>
                  <div className="team-info pt-4 text-center">
                    <h5 className="mb-1">Rajkumari </h5>
                    <span>Vice President</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="team-card h-100 p-4 p-lg-5 text-start profile-bio-card">
                  <div className="mb-4">
                    <div className="d-flex flex-wrap gap-2 mb-3 profile-badge-row">
                      {/* <span class="badge rounded-pill text-bg-light border">Public Health Leader</span>
                          <span class="badge rounded-pill text-bg-light border">Women & Child Welfare</span>
                          <span class="badge rounded-pill text-bg-light border">Community Mobilization</span>
                          <span class="badge rounded-pill text-bg-light border">Government Programmes</span> */}
                    </div>
                    <p className="mb-4">
                      Raj Kumari serves as the Vice President of Netram Eye
                      Foundation. She is dedicated to the foundation's mission
                      of providing accessible eye care and social empowerment
                      through strategic planning and operational excellence.
                    </p>
                    {/* Key Highlights */}
                    <div className="profile-highlights mt-4">
                      <h5 className="highlight-title mb-3">
                        <i className="bi bi-award-fill me-2" /> Strategic
                        Leadership &amp; Operations
                      </h5>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <div className="highlight-item d-flex align-items-start gap-3">
                            <div className="h-icon">
                              <i className="bi bi-gear-fill" />
                            </div>
                            <div>
                              <strong>Operational Excellence</strong>
                              <p className="small text-muted mb-0">
                                Ensuring smooth execution of daily board
                                decisions and field activities.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="highlight-item d-flex align-items-start gap-3">
                            <div className="h-icon">
                              <i className="bi bi-lightbulb-fill" />
                            </div>
                            <div>
                              <strong>Strategic Planning</strong>
                              <p className="small text-muted mb-0">
                                Contributing key insights to scale the
                                foundation's impact across India.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="highlight-item d-flex align-items-start gap-3">
                            <div className="h-icon">
                              <i className="bi bi-people-fill" />
                            </div>
                            <div>
                              <strong>Member Engagement</strong>
                              <p className="small text-muted mb-0">
                                Building strong relationships between the
                                general body and the management team.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="highlight-item d-flex align-items-start gap-3">
                            <div className="h-icon">
                              <i className="bi bi-graph-up-arrow" />
                            </div>
                            <div>
                              <strong>Mission Growth</strong>
                              <p className="small text-muted mb-0">
                                Helping the foundation reach new milestones in
                                spectacle distribution and surgeries.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ----branch----- */}
        <div className="dashboard">
          {/* Cards */}
          <div className="cards-col">
            <div
              className="stat-card card-purple"
onMouseMove={(e) => tilt(e, e.currentTarget)}
               onMouseLeave={(e) => untilt(e.currentTarget)}
            >
              <div className="icon-wrap icon-purple">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <div className="card-info">
                <div className="card-num" id="n0">
                  36
                </div>
                <div className="card-label">States</div>
                <div className="card-sub">Across the Country</div>
              </div>
            </div>
            <div
              className="stat-card card-blue"
onMouseMove={(e) => tilt(e, e.currentTarget)}
               onMouseLeave={(e) => untilt(e.currentTarget)}
            >
              <div className="icon-wrap icon-blue">
                <svg viewBox="0 0 24 24">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              </div>
              <div className="card-info">
                <div className="card-num" id="n1">
                  10
                </div>
                <div className="card-label">Our Members</div>
                <div className="card-sub">Across the Country</div>
              </div>
            </div>
            <div
              className="stat-card card-amber"
onMouseMove={(e) => tilt(e, e.currentTarget)}
               onMouseLeave={(e) => untilt(e.currentTarget)}
            >
              <div className="icon-wrap icon-amber">
                <svg viewBox="0 0 24 24">
                  <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z" />
                </svg>
              </div>
              <div className="card-info">
                <div className="card-num" id="n2">
                  1
                </div>
                <div className="card-label">Our Branches</div>
                <div className="card-sub">Across the Country</div>
              </div>
            </div>
            <div
              className="stat-card card-teal"
onMouseMove={(e) => tilt(e, e.currentTarget)}
               onMouseLeave={(e) => untilt(e.currentTarget)}
            >
              <div className="icon-wrap icon-teal">
                <svg viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div className="card-info">
                <div className="card-num" id="n3">
                  0
                </div>
                <div className="card-label">Our Volunteers</div>
                <div className="card-sub">Across the Country</div>
              </div>
            </div>
          </div>
          {/* Map */}
          <div className="map-col">
            <div id="map" />
            <div className="map-info-card">
              <div className="map-info-name">
                <i className="fa-solid fa-building" /> Netram Eye Foundation
              </div>
              <div className="map-info-addr">
                <i className="fa-solid fa-location-dot" /> E-98, Greater
                Kailash-2
                <br />
                <i className="fa-solid fa-map-marker-alt" /> New Delhi – 110048
                <br />
                <i className="fa-solid fa-phone" /> 011-41676655 / 9212646655
              </div>
              <div className="map-info-tags">
                <span className="tag tag-green">
                  <i className="fa-solid fa-hand-holding-heart" /> NGO
                </span>
                <span className="tag tag-blue">
                  <i className="fa-solid fa-book-open" /> Education
                </span>
                <span className="tag tag-orange">
                  <i className="fa-solid fa-heart-pulse" /> Healthcare
                </span>
              </div>
            </div>
            <div className="map-live">
              <div className="live-dot" />
              <i className="fa-solid fa-signal" /> 1 Branch Active
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
