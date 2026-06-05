import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrum from "../components/Breadcrum";

export default function Volunteer() {
  return (
    <div>
      <Header />
      <Breadcrum title="Volunteer" />
      <section
        className="section-padding volunteer-section bg-light"
        id="volunteer"
      >
        <div className="container">
          {/* Header */}
          <div className="text-center mb-5" data-aos="fade-up">
            <div className="section-tag mx-auto mb-3">
              <i className="bi bi-heart-fill me-2" /> Volunteer With Us
            </div>
            <h2 className="section-title">
              Make a <span className="gradient-text">Difference</span>
            </h2>
            <p className="section-desc mx-auto" style={{ maxWidth: 700 }}>
              Join our mission to restore vision and hope. Whether you are a
              medical professional or a passionate student, there’s a place for
              you in our outreach teams.
            </p>
          </div>
          <div className="row g-4 justify-content-center">
            {/* Field Volunteer */}
            <div
              className="col-lg-4 col-md-6"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <div className="premium-volunteer-card">
                <div className="v-card-image">
                  <img
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop"
                    alt="Field Volunteer"
                  />
                  <div className="v-card-overlay" />
                  <div className="v-card-icon-box">
                    <i className="fa-solid fa-users-viewfinder" />
                  </div>
                </div>
                <div className="v-card-body p-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="v-badge primary text-white">
                      Community Support
                    </span>
                  </div>
                  <h4 className="h5 fw-bold mb-3">Field Volunteer</h4>
                  <p className="text-muted small mb-4">
                    Support our outreach camps through mobilization,
                    registration, and patient coordination in underserved areas.
                  </p>
                  <ul className="v-feature-list mb-4">
                    <li>
                      <i className="bi bi-check2" /> Community mobilization
                    </li>
                    <li>
                      <i className="bi bi-check2" /> Patient registration
                    </li>
                    <li>
                      <i className="bi bi-check2" /> Assist optometrists
                    </li>
                  </ul>
                  <a
                    href="mailto:volunteer@netrameyefoundation.com?subject=Volunteer%20-%20Field"
                    className="btn-primary-custom w-100 py-2"
                  >
                    Sign Up Now <i className="bi bi-arrow-right ms-2" />
                  </a>
                </div>
              </div>
            </div>
            {/* Event Volunteer */}
            <div
              className="col-lg-4 col-md-6"
              data-aos="zoom-in"
              data-aos-delay={200}
            >
              <div className="premium-volunteer-card">
                <div className="v-card-image">
                  <img
                    src="https://images.unsplash.com/photo-1540575861501-7c91c70c4ec3?q=80&w=800&auto=format&fit=crop"
                    alt="Event Volunteer"
                  />
                  <div className="v-card-overlay" />
                  <div className="v-card-icon-box">
                    <i className="fa-solid fa-calendar-star" />
                  </div>
                </div>
                <div className="v-card-body p-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="v-badge gold text-white">
                      Event Management
                    </span>
                  </div>
                  <h4 className="h5 fw-bold mb-3">Event Volunteer</h4>
                  <p className="text-muted small mb-4">
                    Help us organize successful fundraising and awareness events
                    through logistics and donor coordination.
                  </p>
                  <ul className="v-feature-list mb-4">
                    <li>
                      <i className="bi bi-check2" /> Logistics &amp; setup
                    </li>
                    <li>
                      <i className="bi bi-check2" /> Donor coordination
                    </li>
                    <li>
                      <i className="bi bi-check2" /> Photography support
                    </li>
                  </ul>
                  <a
                    href="mailto:volunteer@netrameyefoundation.com?subject=Volunteer%20-%20Event"
                    className="btn-primary-custom w-100 py-2"
                  >
                    Sign Up Now <i className="bi bi-arrow-right ms-2" />
                  </a>
                </div>
              </div>
            </div>
            {/* Medical Volunteer */}
            <div
              className="col-lg-4 col-md-6"
              data-aos="zoom-in"
              data-aos-delay={300}
            >
              <div className="premium-volunteer-card">
                <div className="v-card-image">
                  <img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop"
                    alt="Medical Volunteer"
                  />
                  <div className="v-card-overlay" />
                  <div className="v-card-icon-box">
                    <i className="fa-solid fa-hand-holding-medical" />
                  </div>
                </div>
                <div className="v-card-body p-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="v-badge dark text-white">
                      Healthcare Expert
                    </span>
                  </div>
                  <h4 className="h5 fw-bold mb-3">Medical Volunteer</h4>
                  <p className="text-muted small mb-4">
                    Optometrists and doctors are invited to provide professional
                    screenings and specialist consultations.
                  </p>
                  <ul className="v-feature-list mb-4">
                    <li>
                      <i className="bi bi-check2" /> Professional screenings
                    </li>
                    <li>
                      <i className="bi bi-check2" /> Basic diagnostics
                    </li>
                    <li>
                      <i className="bi bi-check2" /> Patient counselling
                    </li>
                  </ul>
                  <a
                    href="mailto:volunteer@netrameyefoundation.com?subject=Volunteer%20-%20Medical"
                    className="btn-primary-custom w-100 py-2"
                  >
                    Sign Up Now <i className="bi bi-arrow-right ms-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom Info Section */}
          <div className="row mt-5 g-4" data-aos="fade-up">
            <div className="col-lg-8">
              <div className="premium-guidelines-box p-4 p-md-5 h-100">
                <div className="guidelines-header mb-4">
                  <div className="d-flex align-items-center mb-2">
                    <div className="header-icon-box me-3">
                      <i className="bi bi-shield-check" />
                    </div>
                    <h4 className="h5 mb-0 fw-bold">Volunteer Guidelines</h4>
                  </div>
                  <p className="text-muted small">
                    Please review these essential protocols for all our outreach
                    activities.
                  </p>
                </div>
                <div className="guidelines-list">
                  <div
                    className="guideline-card-item mb-4"
                    data-aos="fade-up"
                    data-aos-delay={100}
                  >
                    <div className="g-number-badge">01</div>
                    <div className="g-content">
                      <h6 className="mb-1">Comprehensive Orientation</h6>
                      <p className="small text-muted mb-0">
                        Short training and orientation sessions are provided to
                        all new volunteers to ensure project alignment.
                      </p>
                    </div>
                  </div>
                  <div
                    className="guideline-card-item mb-4"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    <div className="g-number-badge">02</div>
                    <div className="g-content">
                      <h6 className="mb-1">Logistical Support</h6>
                      <p className="small text-muted mb-0">
                        Travel support is provided for field outreach days,
                        depending on the specific role and location.
                      </p>
                    </div>
                  </div>
                  <div
                    className="guideline-card-item"
                    data-aos="fade-up"
                    data-aos-delay={300}
                  >
                    <div className="g-number-badge">03</div>
                    <div className="g-content">
                      <h6 className="mb-1">Community Respect &amp; Safety</h6>
                      <p className="small text-muted mb-0">
                        All volunteers must respect local community traditions
                        and strictly adhere to on-field safety protocols.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="help-match-card p-4 p-md-5 text-center h-100 d-flex flex-column justify-content-center">
                <div className="match-icon mb-3">
                  <i className="bi bi-question-diamond" />
                </div>
                <h5 className="fw-bold mb-3">Not sure where to fit?</h5>
                <p className="text-muted small mb-4">
                  Send us a general enquiry and our team will help match your
                  skills to the right role.
                </p>
                <a
                  href="mailto:volunteer@netrameyefoundation.com"
                  className="btn-primary-custom w-100"
                >
                  General Enquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
