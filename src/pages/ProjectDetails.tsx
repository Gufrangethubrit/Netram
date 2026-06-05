import React from "react";
import Header from "../components/Header";
import Breadcrum from "../components/Breadcrum";
import Footer from "../components/Footer";

export default function ProjectDetails() {
  return (
    <div>
      <Header />
      <Breadcrum title="Project Details" />
      <section className="pd-page-section">
        <div className="container">
          <div className="row">
            {/* Main Content (Left on Desktop) */}
            <div className="col-lg-8">
              <div className="pd-page-card" data-aos="fade-up">
                {/* Badge */}
                <div className="pd-page-badge">
                  <i className="bi bi-shield-fill-check me-2" /> Eye Care &amp;
                  Preventive Healthcare
                </div>
                {/* Title */}
                <h1
                  className="pd-page-title"
                  style={{ fontSize: "2.5rem", marginBottom: 20 }}
                >
                  PROJECT ROSHNI
                </h1>
                {/* Slogan */}
                <div className="pd-slogan">
                  “Transforming Darkness Into A Brighter Tomorrow.”
                </div>
                {/* Body Content */}
                <div className="pd-page-desc">
                  <p>
                    Implemented across Delhi and Haryana in association with
                    IGL, Project Roshni is a comprehensive healthcare initiative
                    focused on improving the lives of children through
                    preventive care, awareness, and accessible vision services.
                  </p>
                  <p>
                    The program conducts large-scale vision screenings,
                    hemoglobin testing, and awareness sessions related to eye
                    health, dental hygiene, mental health, and eye donation
                    among children from underserved communities. Through free
                    spectacle distribution and early diagnosis of vision-related
                    problems, the initiative helps children overcome barriers
                    that often affect their education, confidence, and overall
                    development.
                  </p>
                  {/* Project Gallery (Interative) */}
                  {/* <div class="pd-page-image-wrapper">
                          <div class="pd-page-image">
                              <img src="./assets/project_2/roshni-img.png" id="mainProjectImg"
                                  alt="Project Roshni — View 1">
                          </div>
                          <div class="pd-thumbnails">
                              <div class="pd-thumb active-thumb"
                                  onclick="changeProjectImg('./assets/project_2/roshni-img.png', this)">
                                  <img src="./assets/project_2/roshni-img.png" alt="View 1">
                              </div>
                              <div class="pd-thumb"
                                  onclick="changeProjectImg('./assets/project_2/raahi.png', this)">
                                  <img src="./assets/project_2/raahi.png" alt="View 2">
                              </div>
                              <div class="pd-thumb"
                                  onclick="changeProjectImg('./assets/project_2/Adopt-an-Eye.png', this)">
                                  <img src="./assets/project_2/Adopt-an-Eye.png" alt="View 3">
                              </div>
                          </div>


                      </div> */}
                  <p>
                    Under this initiative, Netram Eye Foundation has
                    successfully screened more than 1,35,000 school children and
                    distributed over 30,500 free spectacles to children in need.
                    These efforts have helped thousands of children improve
                    their vision, academic performance, confidence, and quality
                    of life.
                  </p>
                  <p>
                    Many children continue to struggle silently with undetected
                    vision issues that impact their ability to learn and grow.
                    Project Roshni aims to bridge this gap by ensuring that
                    timely healthcare and awareness reach children at the right
                    stage of life. By combining medical support with community
                    awareness, the initiative creates healthier environments
                    where children can thrive with confidence and dignity.
                  </p>
                  <p>
                    At Netram Eye Foundation, we believe that every child
                    deserves the opportunity to see clearly, dream fearlessly,
                    and build a brighter future. Project Roshni continues to
                    touch thousands of young lives by bringing together
                    compassion, healthcare, and hope.
                  </p>
                  <iframe
                    width={800}
                    height={450}
                    src="https://www.youtube.com/embed/igkW_cS56cQ?si=unWT9jT_6hYFP8k1"
                    title="YouTube video player"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                {/* Secondary Features */}
                <div className="pd-feature-row mt-5">
                  <div className="pd-feature-card">
                    <div className="pd-feature-icon">
                      <i className="bi bi-eye-fill" />
                    </div>
                    <h5>Vision Screening</h5>
                    <p>
                      Comprehensive checkups for early detection of medical
                      issues.
                    </p>
                  </div>
                  <div className="pd-feature-card">
                    <div className="pd-feature-icon">
                      <i className="bi bi-eyeglasses" />
                    </div>
                    <h5>Free Spectacles</h5>
                    <p>
                      Quality eyewear distribution for underprivileged children.
                    </p>
                  </div>
                </div>
                {/* Support Checklist */}
                <div className="pd-support-box">
                  <h5 className="pd-support-title">
                    <i className="bi bi-heart-fill" /> How Your Support Helps
                  </h5>
                  <div className="pd-support-grid">
                    <div className="pd-support-item">
                      <i className="bi bi-check-circle-fill" />
                      <span>Funds large-scale vision screening camps</span>
                    </div>
                    <div className="pd-support-item">
                      <i className="bi bi-check-circle-fill" />
                      <span>
                        Enables free high-quality spectacle distribution
                      </span>
                    </div>
                    <div className="pd-support-item">
                      <i className="bi bi-check-circle-fill" />
                      <span>Supports mental health and awareness sessions</span>
                    </div>
                    <div className="pd-support-item">
                      <i className="bi bi-check-circle-fill" />
                      <span>Provides medical kits and nutrition tracking</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Sidebar (Right on Desktop) */}
            <div className="col-lg-4">
              <aside className="pd-sidebar">
                {/* Widget: Fact Sheet */}
                <div className="pd-widget" data-aos="fade-left">
                  <h5 className="pd-widget-title">
                    <i className="bi bi-info-circle-fill" /> Project Fact Sheet
                  </h5>
                  <ul className="pd-status-list">
                    <li>
                      <span className="pd-status-label">Status</span>
                      <span className="pd-status-value">Active</span>
                    </li>
                    <li>
                      <span className="pd-status-label">Region</span>
                      <span className="pd-status-value">Delhi &amp; HR</span>
                    </li>
                    <li>
                      <span className="pd-status-label">Target Area</span>
                      <span className="pd-status-value">Schools/Slums</span>
                    </li>
                    <li>
                      <span className="pd-status-label">Partner</span>
                      <span className="pd-status-value">IGL India</span>
                    </li>
                  </ul>
                </div>
                {/* Widget: Impact Stats */}
                <div
                  className="pd-widget"
                  data-aos="fade-left"
                  data-aos-delay={100}
                >
                  <h5 className="pd-widget-title">
                    <i className="bi bi-graph-up-arrow" /> Impact Snapshot
                  </h5>
                  <div className="pd-impact-item">
                    <div className="pd-impact-icon">
                      <i className="bi bi-people-fill" />
                    </div>
                    <div className="pd-impact-text">
                      <h4>1,35,000+</h4>
                      <p>Children Screened</p>
                    </div>
                  </div>
                  <div className="pd-impact-item">
                    <div className="pd-impact-icon">
                      <i className="bi bi-eyeglasses" />
                    </div>
                    <div className="pd-impact-text">
                      <h4>30,500+</h4>
                      <p>Spectacles Given</p>
                    </div>
                  </div>
                  <div className="pd-impact-item">
                    <div className="pd-impact-icon">
                      <i className="bi bi-geo-alt-fill" />
                    </div>
                    <div className="pd-impact-text">
                      <h4>2 States</h4>
                      <p>Operations Scale</p>
                    </div>
                  </div>
                </div>
                {/* Widget: Support Call */}
                <div
                  className="pd-widget pd-donate-widget"
                  data-aos="fade-left"
                  data-aos-delay={200}
                  style={{ background: "#035e63", color: "#fff" }}
                >
                  <i
                    className="bi bi-heart-pulse-fill"
                    style={{
                      fontSize: "3rem",
                      marginBottom: 20,
                      display: "block",
                    }}
                  />
                  <h4>Urgent Support Needed</h4>
                  <p>
                    Help us reach the next 10,000 children who are waiting for
                    clear vision.
                  </p>
                  <a href="donate.html" className="pd-btn-sidebar">
                    Donate &amp; Help Now
                  </a>
                </div>
                {/* Back to Project */}
                <div className="text-center mt-4">
                  <a
                    href="project.html"
                    className="pd-back-link justify-content-center"
                  >
                    <i className="bi bi-arrow-left me-1" /> Return to All
                    Projects
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
