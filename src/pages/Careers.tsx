import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrum from "../components/Breadcrum";

export default function Careers() {
  return (
    <div>
      <Header />
      <Breadcrum title="Careers" />
      <section className="section-padding careers-section-premium" id="careers">
        <div className="container">
          {/* Hero Grid */}
          <div className="row align-items-center mb-5 pb-lg-4">
            <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
              <div className="careers-tag mb-3">
                <i className="bi bi-rocket-takeoff-fill me-2" /> Join Our
                Mission
              </div>
              <h2 className="display-5 fw-bold mb-4">
                Build a career that{" "}
                <span className="gradient-text">saves vision</span>.
              </h2>
              <p className="lead text-secondary mb-4">
                Netram Eye Foundation is looking for compassionate professionals
                dedicated to bringing healthcare to underserved communities.
                Your expertise can restore dignity and sight.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a href="#openRoles" className="btn-primary-custom px-4 py-3">
                  Explore Openings <i className="bi bi-chevron-down ms-2" />
                </a>
                <a
                  href="#careerApply"
                  className="btn btn-outline-dark px-4 py-3"
                  style={{ borderRadius: 50, fontWeight: 600 }}
                >
                  Quick Apply
                </a>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="careers-highlight-grid">
                <div className="highlight-item-card">
                  <div className="icon-blob">
                    <i className="bi bi-heart-pulse" />
                  </div>
                  <h6>Healthcare Impact</h6>
                  <p>Direct involvement in life-changing eye care programs.</p>
                </div>
                <div className="highlight-item-card active">
                  <div className="icon-blob">
                    <i className="bi bi-people" />
                  </div>
                  <h6>Collaborative Culture</h6>
                  <p>Work with passionate experts and volunteers.</p>
                </div>
                <div className="highlight-item-card">
                  <div className="icon-blob">
                    <i className="bi bi-lightning-charge" />
                  </div>
                  <h6>Global Growth</h6>
                  <p>Opportunities to learn and lead in the NGO sector.</p>
                </div>
                <div className="highlight-item-card">
                  <div className="icon-blob">
                    <i className="bi bi-geo-alt" />
                  </div>
                  <h6>Field Experience</h6>
                  <p>Engage directly with communities across Delhi NCR.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Stats Bar */}
          <div className="row g-4 mb-5" data-aos="fade-up">
            <div className="col-md-4">
              <div className="career-metric-card">
                <span className="label">Work Style</span>
                <h4 className="mb-0">Hybrid &amp; Field</h4>
                <div className="metric-bg-icon">
                  <i className="bi bi-building" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="career-metric-card-gold">
                <span className="label">Main Location</span>
                <h4 className="mb-0">New Delhi (GK-2)</h4>
                <div className="metric-bg-icon">
                  <i className="bi bi-geo" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="career-metric-card">
                <span className="label">Organization</span>
                <h4 className="mb-0">Healthcare NGO</h4>
                <div className="metric-bg-icon">
                  <i className="bi bi-shield-check" />
                </div>
              </div>
            </div>
          </div>
          {/* Open Positions Section */}
          <div className="text-center mb-5" id="openRoles" data-aos="fade-up">
            <h2 className="section-title">Open Positions</h2>
            <p className="section-desc mx-auto">
              Explore roles where your skills can make a measurable difference.
            </p>
          </div>
          <div className="row g-4 mb-5 pb-lg-5">
            {/* Role 1 */}
            <div
              className="col-lg-4 col-md-6"
              data-aos="flip-left"
              data-aos-delay={100}
            >
              <div className="career-role-box">
                <div className="role-header d-flex align-items-center mb-4">
                  <div className="role-icon-box me-3">
                    <i className="bi bi-clipboard2-plus" />
                  </div>
                  <div>
                    <h5 className="mb-0 fw-bold">Program Coordinator</h5>
                    <span className="badge-role">Operations</span>
                  </div>
                </div>
                <p className="small text-muted mb-4">
                  Lead vision screening camps, coordinate with local partners,
                  and manage field reporting for eye care projects.
                </p>
                <div className="role-meta mb-4">
                  <div className="meta-bit">
                    <i className="bi bi-briefcase" /> 1-3 Years
                  </div>
                  <div className="meta-bit">
                    <i className="bi bi-geo-alt" /> Delhi NCR
                  </div>
                  <div className="meta-bit">
                    <i className="bi bi-clock" /> Full Time
                  </div>
                </div>
                <a href="#careerApply" className="btn-role-apply">
                  Apply Now <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
            {/* Role 2 */}
            <div
              className="col-lg-4 col-md-6"
              data-aos="flip-left"
              data-aos-delay={200}
            >
              <div className="career-role-box">
                <div className="role-header d-flex align-items-center mb-4">
                  <div className="role-icon-box me-3">
                    <i className="bi bi-megaphone" />
                  </div>
                  <div>
                    <h5 className="mb-0 fw-bold">Comms Executive</h5>
                    <span className="badge-role gold">Marketing</span>
                  </div>
                </div>
                <p className="small text-muted mb-4">
                  Craft impact stories, manage donor communications, and run our
                  social media campaigns to reach more lives.
                </p>
                <div className="role-meta mb-4">
                  <div className="meta-bit">
                    <i className="bi bi-briefcase" /> 1-2 Years
                  </div>
                  <div className="meta-bit">
                    <i className="bi bi-geo-alt" /> Delhi NCR
                  </div>
                  <div className="meta-bit">
                    <i className="bi bi-clock" /> Part Time
                  </div>
                </div>
                <a href="#careerApply" className="btn-role-apply">
                  Apply Now <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
            {/* Role 3 */}
            <div
              className="col-lg-4 col-md-6"
              data-aos="flip-left"
              data-aos-delay={300}
            >
              <div className="career-role-box">
                <div className="role-header d-flex align-items-center mb-4">
                  <div className="role-icon-box me-3">
                    <i className="bi bi-person-circle" />
                  </div>
                  <div>
                    <h5 className="mb-0 fw-bold">Outreach Associate</h5>
                    <span className="badge-role dark">Field</span>
                  </div>
                </div>
                <p className="small text-muted mb-4">
                  Mobilize communities for screening camps and assist the
                  medical team in conducting vision tests.
                </p>
                <div className="role-meta mb-4">
                  <div className="meta-bit">
                    <i className="bi bi-briefcase" /> Freshers
                  </div>
                  <div className="meta-bit">
                    <i className="bi bi-geo-alt" /> Delhi NCR
                  </div>
                  <div className="meta-bit">
                    <i className="bi bi-clock" /> Full Time
                  </div>
                </div>
                <a href="#careerApply" className="btn-role-apply">
                  Apply Now <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          {/* Application Wrap */}
          <div
            className="row g-0 rounded-4 overflow-hidden shadow-lg"
            id="careerApply"
            data-aos="fade-up"
          >
            {/* Hiring Process */}
            <div
              className="col-lg-5 p-4 p-md-5 text-white"
              style={{ backgroundColor: "#035e63" }}
            >
              <span className="text-warning small fw-bold text-uppercase mb-3 d-block">
                Process
              </span>
              <h3 className="fw-bold mb-4">Simple Hiring Steps</h3>
              <div className="hiring-timeline">
                <div className="h-step mb-4">
                  <div className="h-num">01</div>
                  <div className="h-text">
                    <h6 className="mb-1 fw-bold">Apply Online</h6>
                    <p className="small opacity-75">
                      Fill out the form with your details and specific role
                      interest.
                    </p>
                  </div>
                </div>
                <div className="h-step mb-4">
                  <div className="h-num">02</div>
                  <div className="h-text">
                    <h6 className="mb-1 fw-bold">Shortlisting</h6>
                    <p className="small opacity-75">
                      Our HR team reviews applications based on skill-match.
                    </p>
                  </div>
                </div>
                <div className="h-step">
                  <div className="h-num">03</div>
                  <div className="h-text">
                    <h6 className="mb-1 fw-bold">Final Interview</h6>
                    <p className="small opacity-75">
                      Connect with our leadership team for a final discussion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Form Card */}
            <div className="col-lg-7 bg-white p-4 p-md-5">
              <h3 className="fw-bold mb-1">Submit Application</h3>
              <p className="text-muted mb-4">
                Join our community of healthcare change-makers.
              </p>
              <form id="careerForm" className="row g-3">
                <div className="col-md-6">
                  <label className="form-label-premium">Full Name</label>
                  <div className="premium-input-wrap">
                    <i className="bi bi-person" />
                    <input
                      name="name"
                      required
                      className="form-control-premium"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label-premium">Email Address</label>
                  <div className="premium-input-wrap">
                    <i className="bi bi-envelope" />
                    <input
                      name="email"
                      type="email"
                      required
                      className="form-control-premium"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label-premium">Phone Number</label>
                  <div className="premium-input-wrap">
                    <i className="bi bi-telephone" />
                    <input
                      name="phone"
                      className="form-control-premium"
                      placeholder="+91 0000000000"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label-premium">Position</label>
                  <div className="premium-input-wrap">
                    <i className="bi bi-briefcase" />
                    <select
                      name="role"
                      required
                      className="form-select-premium"
                    >
                      <option value="" disabled aria-selected={true}>
                        Select Role
                      </option>
                      <option value="Program Coordinator">
                        Program Coordinator
                      </option>
                      <option value="Communications Executive">
                        Communications Executive
                      </option>
                      <option value="Outreach Associate">
                        Outreach Associate
                      </option>
                      <option value="General Application">
                        General Application
                      </option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label-premium">Experience</label>
                  <div className="premium-input-wrap">
                    <i className="bi bi-bar-chart" />
                    <input
                      name="experience"
                      className="form-control-premium"
                      placeholder="e.g. 2 Years"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label-premium">City</label>
                  <div className="premium-input-wrap">
                    <i className="bi bi-geo-alt" />
                    <input
                      name="location"
                      className="form-control-premium"
                      placeholder="Delhi NCR"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <label className="form-label-premium">
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    className="form-control-premium"
                    style={{ paddingLeft: 20 }}
                    placeholder="Tell us why you are interested..."
                    defaultValue={""}
                  />
                </div>
                <div className="col-12 mt-4 text-end">
                  <button
                    type="submit"
                    className="btn-primary-custom px-5 py-3"
                  >
                    Send Application <i className="bi bi-send ms-2" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
