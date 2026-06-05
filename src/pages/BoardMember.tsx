import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrum from "../components/Breadcrum";

export default function BoardMember() {
  return (
    <div>
      <Header />
      <Breadcrum title="Board Member" />
      <section className="team-section section-padding" id="team">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <div className="section-tag mx-auto">
              <i className="bi bi-person-badge-fill me-2" /> Meet Our Board
              Members
            </div>
          </div>
          <div
            className="row g-4 justify-content-center"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="team-card h-100">
                <div className="team-img-wrap">
                  <img src="./assets/volunteer/seema.png" alt="Seema Gupta" />
                  <div className="team-social">
                    <a href="#">
                      <i className="bi bi-linkedin" />
                    </a>
                    <a href="#">
                      <i className="bi bi-twitter-x" />
                    </a>
                    <a href="#">
                      <i className="bi bi-instagram" />
                    </a>
                  </div>
                </div>
                <div className="team-info">
                  <h5>Seema Gupta</h5>
                  <span>President</span>
                  <br />
                  <a
                    href="./seema-gupta-profile.html"
                    className="prog-link team-profile-link"
                    aria-label="View Seema Gupta profile"
                  >
                    View Profile <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="team-card h-100">
                <div className="team-img-wrap">
                  <img
                    src="./assets/volunteer/rajkumari.jpeg"
                    alt="rajkumari"
                  />
                  <div className="team-social">
                    <a href="#">
                      <i className="bi bi-linkedin" />
                    </a>
                    <a href="#">
                      <i className="bi bi-twitter-x" />
                    </a>
                    <a href="#">
                      <i className="bi bi-instagram" />
                    </a>
                  </div>
                </div>
                <div className="team-info">
                  <h5>Raj Kumari</h5>
                  <span>Vice President</span> <br />
                  <a
                    href="./rajkumari-profile.html"
                    className="prog-link team-profile-link"
                    aria-label="View Raj Kumari profile"
                  >
                    View Profile <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="team-card h-100">
                <div className="team-img-wrap">
                  <img
                    src="./assets/volunteer/anchal_new_2.webp"
                    alt="Dr. Anchal Gupta"
                  />
                  <div className="team-social">
                    <a href="#">
                      <i className="bi bi-linkedin" />
                    </a>
                    <a href="#">
                      <i className="bi bi-twitter-x" />
                    </a>
                    <a href="#">
                      <i className="bi bi-instagram" />
                    </a>
                  </div>
                </div>
                <div className="team-info">
                  <h5>Dr. Anchal Gupta</h5>
                  <span>Founder &amp; General Secretary</span>
                  <br />
                  <a
                    href="./anchal-gupta-profile.html"
                    className="prog-link team-profile-link"
                    aria-label="View Dr. Anchal Gupta profile"
                  >
                    View Profile <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="team-card h-100">
                <div className="team-img-wrap">
                  <img
                    src="./assets/volunteer/sattan.png"
                    alt="Sattan Sharma"
                  />
                  <div className="team-social">
                    <a href="#">
                      <i className="bi bi-linkedin" />
                    </a>
                    <a href="#">
                      <i className="bi bi-twitter-x" />
                    </a>
                    <a href="#">
                      <i className="bi bi-instagram" />
                    </a>
                  </div>
                </div>
                <div className="team-info">
                  <h5>Sattan Sharma</h5>
                  <span>Treasurer</span>
                  <br />
                  <a
                    href="./sattan-sharma-profile.html"
                    className="prog-link team-profile-link"
                    aria-label="View Sattan Sharma profile"
                  >
                    View Profile <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="team-card h-100">
                <div className="team-img-wrap">
                  <br />
                  <img src="./assets/volunteer/vivek.png" alt="Vivek Maini" />
                  <div className="team-social">
                    <a href="#">
                      <i className="bi bi-linkedin" />
                    </a>
                    <a href="#">
                      <i className="bi bi-twitter-x" />
                    </a>
                    <a href="#">
                      <i className="bi bi-instagram" />
                    </a>
                  </div>
                </div>
                <div className="team-info">
                  <h5>Vivek Maini</h5>
                  <span>Executive Member</span>
                  <br />
                  <a
                    href="./vivek-maini-profile.html"
                    className="prog-link team-profile-link"
                    aria-label="View Vivek Maini profile"
                  >
                    View Profile <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="team-card h-100">
                <div className="team-img-wrap">
                  <img src="./assets/volunteer/deepak.png" alt="Deepak Singh" />
                  <div className="team-social">
                    <a href="#">
                      <i className="bi bi-linkedin" />
                    </a>
                    <a href="#">
                      <i className="bi bi-twitter-x" />
                    </a>
                    <a href="#">
                      <i className="bi bi-instagram" />
                    </a>
                  </div>
                </div>
                <div className="team-info">
                  <h5>Deepak Singh</h5>
                  <span>Executive Member</span>
                  <br />
                  <a
                    href="./deepak-singh.html"
                    className="prog-link team-profile-link"
                    aria-label="View Deepak Singh profile"
                  >
                    View Profile <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="team-card h-100">
                <div className="team-img-wrap">
                  <img
                    src="./assets/volunteer/abhishek.png"
                    alt="Abhishek Mishra"
                  />
                  <div className="team-social">
                    <a href="#">
                      <i className="bi bi-linkedin" />
                    </a>
                    <a href="#">
                      <i className="bi bi-twitter-x" />
                    </a>
                    <a href="#">
                      <i className="bi bi-instagram" />
                    </a>
                  </div>
                </div>
                <div className="team-info">
                  <h5>Abhishek Mishra</h5>
                  <span>Executive Member</span>
                  <br />
                  <a
                    href="./abhishek-mishra-profile.html"
                    className="prog-link team-profile-link"
                    aria-label="View Abhishek Mishra profile"
                  >
                    View Profile <i className="bi bi-arrow-right" />
                  </a>
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
