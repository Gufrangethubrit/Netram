import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrum from "../components/Breadcrum";

export default function Roadmap2030() {
  return (
    <div>
      <Header />
      <Breadcrum title="Roadmap 2030" />
      <section className="vision-2030-v2 section-padding" id="vision-2030">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-5" data-aos="fade-up">
            <div className="vision-badge mb-3">
              <span className="badge-dot" />
              ROADMAP TO THE FUTURE
            </div>
            <h2 className="display-4 fw-bold mb-3">
              Vision 2030:{" "}
              <span className="gradient-text">
                Eliminating Avoidable Blindness
              </span>
            </h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: 850 }}>
              At Netram Eye Foundation, we believe that vision is not only about
              seeing the world — it is about unlocking education, dignity,
              livelihood, confidence and opportunity.
            </p>
          </div>
          {/* Impact Cards (The Goals) */}
          <div className="row g-4 mb-5 pb-lg-5">
            <div
              className="col-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="vision-stat-card">
                <div className="stat-icon">
                  <i className="bi bi-people-fill" />
                </div>
                <div className="stat-info">
                  <h3 className="stat-number" data-target={1000000}>
                    <span className="count">0</span>
                    <span className="suffix">M</span>
                  </h3>
                  <p className="stat-label  text-white">Eye Screenings</p>
                </div>
              </div>
            </div>
            <div
              className="col-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="vision-stat-card">
                <div className="stat-icon">
                  <i className="bi bi-eyeglasses" />
                </div>
                <div className="stat-info">
                  <h3 className="stat-number" data-target={100000}>
                    <span className="count">0</span>
                    <span className="suffix">K</span>
                  </h3>
                  <p className="stat-label  text-white">Free Spectacles</p>
                </div>
              </div>
            </div>
            <div
              className="col-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="vision-stat-card">
                <div className="stat-icon">
                  <i className="bi bi-heart-pulse-fill" />
                </div>
                <div className="stat-info">
                  <h3 className="stat-number" data-target={100000}>
                    <span className="count">0</span>
                    <span className="suffix">K</span>
                  </h3>
                  <p className="stat-label  text-white">Restoring Surgeries</p>
                </div>
              </div>
            </div>
            <div
              className="col-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div className="vision-stat-card">
                <div className="stat-icon">
                  <i className="bi bi-hospital" />
                </div>
                <div className="stat-info">
                  <h3 className="stat-number" data-target={5000}>
                    <span className="count">0</span>
                    <span className="suffix">+</span>
                  </h3>
                  <p className="stat-label  text-white">Health Programs</p>
                </div>
              </div>
            </div>
          </div>
          {/* The Why Section */}
          <div className="row align-items-center mb-5 pb-lg-5 g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="why-content">
                <h3 className="h2 fw-bold mb-4">Why Vision 2030 Matters</h3>
                <div className="why-item mb-4">
                  <div className="why-icon">
                    <i className="bi bi-bookmark-check-fill" />
                  </div>
                  <div className="why-text">
                    <h5>Education &amp; Future</h5>
                    <p>
                      A child struggling to see the classroom board often falls
                      behind in education. Early detection saves potential
                      futures.
                    </p>
                  </div>
                </div>
                <div className="why-item mb-4">
                  <div className="why-icon">
                    <i className="bi bi-briefcase-fill" />
                  </div>
                  <div className="why-text">
                    <h5>Dignity &amp; Livelihood</h5>
                    <p>
                      A worker losing vision may lose their livelihood.
                      Restoration means returning to work and self-reliance.
                    </p>
                  </div>
                </div>
                <div className="why-item">
                  <div className="why-icon">
                    <i className="bi bi-shield-fill-plus" />
                  </div>
                  <div className="why-text">
                    <h5>Independence for All</h5>
                    <p>
                      An elderly person suffering from cataract may lose
                      independence. Quality eye care bridges this gap.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="why-image-wrapper">
                <img
                  src="assets/project_2/Mission-6-6.png"
                  alt="Vision Mission"
                  className="main-img"
                />
                <div className="vision-floating-badge top-0 end-0">
                  <div className="badge-inner">
                    <span className="badge-title">Goal 2030</span>
                    <span className="badge-text">Zero Blindness</span>
                  </div>
                </div>
                <div className="experience-card-floating bottom-0 start-0">
                  <span className="number">15+</span>
                  <span className="text">Years Of Service</span>
                </div>
              </div>
            </div>
          </div>
          {/* Our Pillars */}
          <div className="text-center mb-5" data-aos="fade-up">
            <h3 className="h2 fw-bold mb-3">Our Core Pillars</h3>
            <p className="text-muted mx-auto" style={{ maxWidth: 600 }}>
              We focus on prevention, protection, restoration and empowerment to
              ensure sustainable impact.
            </p>
          </div>
          <div className="row g-4 mb-5 pb-lg-5">
            <div
              className="col-md-6 col-lg-3"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <div className="pillar-card p-4">
                <div className="pillar-icon bg-primary-soft">
                  <i className="bi bi-bell-fill" />
                </div>
                <h5>Prevention</h5>
                <p>
                  Awareness campaigns, school education and early detection
                  programs to prevent vision loss.
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3"
              data-aos="zoom-in"
              data-aos-delay={200}
            >
              <div className="pillar-card p-4 active">
                <div className="pillar-icon bg-success-soft">
                  <i className="bi bi-shield-fill-check" />
                </div>
                <h5>Protection</h5>
                <p>
                  Regular screenings, timely spectacles and follow-up care to
                  maintain healthy eyesight.
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3"
              data-aos="zoom-in"
              data-aos-delay={300}
            >
              <div className="pillar-card p-4">
                <div className="pillar-icon bg-warning-soft">
                  <i className="bi bi-eye-fill" />
                </div>
                <h5>Restoration</h5>
                <p>
                  Sight-restoring surgeries and referral support for those
                  needing advanced clinical care.
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3"
              data-aos="zoom-in"
              data-aos-delay={400}
            >
              <div className="pillar-card p-4">
                <div className="pillar-icon bg-info-soft">
                  <i className="bi bi-people-fill" />
                </div>
                <h5>Empowerment</h5>
                <p>
                  Linking restored vision with education and livelihood programs
                  to change lives forever.
                </p>
              </div>
            </div>
          </div>
          {/* Partnership & Scale CTA */}
          <div className="partnership-cta p-4 p-md-5" data-aos="fade-up">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h3 className="fw-bold mb-3">
                  Scale &amp; Strategic Partnerships
                </h3>
                <p className="mb-4">
                  We will expand outreach via mobile eye camps, school
                  partnerships, hospital collaborations, CSR and government
                  engagement — aiming for 500 community camps every year.
                </p>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="partner-feature">
                      <i className="bi bi-check-circle-fill text-primary" />
                      <span>Trained local workforce &amp; volunteers</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="partner-feature">
                      <i className="bi bi-check-circle-fill text-primary" />
                      <span>Global referral network for surgery</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 text-center text-lg-end mt-4 mt-lg-0">
                <div className="cta-floating-box p-4 bg-white shadow-sm rounded-4">
                  <h4 className="mb-2 text-dark">Join the Movement</h4>
                  <p className="small text-muted mb-4">
                    Support Vision 2030 — help us restore sight and change
                    lives.
                  </p>
                  <a
                    href="donate.html"
                    className="btn btn-primary-custom w-100"
                  >
                    Donate Now
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
