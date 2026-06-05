import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrum from "../components/Breadcrum";

export default function Internship() {
  return (
    <div>
      <Header />
      <Breadcrum title="Internship" />
      <section
        className="internship-section section-padding-sm bg-light"
        id="internship"
      >
        <div className="container">
          {/* Header Section */}
          <div className="text-center mb-5" data-aos="fade-up">
            <div className="section-tag mx-auto mb-3">
              <i className="bi bi-mortarboard-fill me-2 rotate-n15" /> Join Our
              Mission
            </div>
            <h2 className="section-title">
              Apply for an <span className="gradient-text">Internship</span>
            </h2>
            <div className="section-divider mx-auto mb-4" />
            <p className="section-desc mx-auto" style={{ maxWidth: 750 }}>
              Gain meaningful experience and help us restore vision to those in
              need. Join the Netram Eye Foundation family and set the stage for
              your professional life.
            </p>
          </div>
          <div className="row g-5 align-items-stretch">
            {/* Info Column (Left) */}
            <div className="col-lg-5" data-aos="fade-right">
              <div className="intern-info-card h-100">
                <div className="card-inner-padding p-4 p-md-5">
                  <h4 className="mb-4 fw-bold text-white">
                    Program Highlights
                  </h4>
                  <div className="feature-item mb-4">
                    <div className="feature-icon-circle">
                      <i className="fa-solid fa-clock" />
                    </div>
                    <div className="feature-text">
                      <h6 className="text-white mb-1">Duration</h6>
                      <p className="text-white-50 small mb-0">
                        Ranging from 2 to 6 months based on project needs.
                      </p>
                    </div>
                  </div>
                  <div className="feature-item mb-4">
                    <div className="feature-icon-circle">
                      <i className="fa-solid fa-briefcase" />
                    </div>
                    <div className="feature-text">
                      <h6 className="text-white mb-1">Roles Available</h6>
                      <p className="text-white-50 small mb-0">
                        Program Management, Communications, and Clinical
                        Support.
                      </p>
                    </div>
                  </div>
                  <div className="feature-item mb-4">
                    <div className="feature-icon-circle">
                      <i className="fa-solid fa-certificate" />
                    </div>
                    <div className="feature-text">
                      <h6 className="text-white mb-1">Certification</h6>
                      <p className="text-white-50 small mb-0">
                        Get a completion certificate and professional
                        recommendation.
                      </p>
                    </div>
                  </div>
                  <div className="quick-facts-box mt-5 p-4">
                    <span className="badge bg-gold text-dark mb-3">
                      Eligibility
                    </span>
                    <ul className="list-unstyled mb-0 text-white">
                      <li className="mb-2">
                        <i className="bi bi-check2-circle me-2 text-warning" />{" "}
                        Current Students
                      </li>
                      <li className="mb-2">
                        <i className="bi bi-check2-circle me-2 text-warning" />{" "}
                        Recent Graduates
                      </li>
                      <li className="mb-0">
                        <i className="bi bi-check2-circle me-2 text-warning" />{" "}
                        Socially Driven Individuals
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Form Column (Right) */}
            <div className="col-lg-7" data-aos="fade-left">
              <div className="intern-form-card p-4 p-md-5 shadow-lg h-100">
                <div className="form-header mb-4">
                  <h4 className="fw-bold mb-2">Application Form</h4>
                  <p className="text-muted small">
                    Please fill in your details correctly. A draft email will be
                    created upon submission.
                  </p>
                </div>
                <form id="internshipForm" className="row g-4">
                  {/* Full Name */}
                  <div className="col-12">
                    <div className="form-field-wrapper">
                      <label className="form-label-premium">Full Name</label>
                      <div className="input-group-premium">
                        <i className="bi bi-person" />
                        <input
                          id="iname"
                          name="name"
                          required=""
                          className="form-control-premium"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Email & Phone */}
                  <div className="col-md-6">
                    <div className="form-field-wrapper">
                      <label className="form-label-premium">
                        Email Address
                      </label>
                      <div className="input-group-premium">
                        <i className="bi bi-envelope" />
                        <input
                          id="iemail"
                          name="email"
                          type="email"
                          required=""
                          className="form-control-premium"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-field-wrapper">
                      <label className="form-label-premium">Phone Number</label>
                      <div className="input-group-premium">
                        <i className="bi bi-telephone" />
                        <input
                          id="iphone"
                          name="phone"
                          required=""
                          className="form-control-premium"
                          placeholder="+91 00000-00000"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Role & University */}
                  <div className="col-md-6">
                    <div className="form-field-wrapper">
                      <label className="form-label-premium">
                        Preferred Role
                      </label>
                      <div className="input-group-premium">
                        <i className="bi bi-briefcase" />
                        <select
                          id="irole"
                          name="role"
                          className="form-select-premium"
                          required=""
                        >
                          <option value="" disabled="" selected="">
                            Select Role
                          </option>
                          <option value="Program">Program Management</option>
                          <option value="Communications">Communications</option>
                          <option value="Clinical">Clinical Support</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-field-wrapper">
                      <label className="form-label-premium">
                        University / Organization
                      </label>
                      <div className="input-group-premium">
                        <i className="bi bi-bank" />
                        <input
                          id="iuniversity"
                          name="university"
                          required=""
                          className="form-control-premium"
                          placeholder="Your College Name"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Duration */}
                  <div className="col-12">
                    <div className="form-field-wrapper">
                      <label className="form-label-premium">
                        Preferred Duration
                      </label>
                      <div className="input-group-premium">
                        <i className="bi bi-calendar3" />
                        <input
                          id="iduration"
                          name="duration"
                          required=""
                          className="form-control-premium"
                          placeholder="e.g. 3 Months"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Message */}
                  <div className="col-12">
                    <div className="form-field-wrapper">
                      <label className="form-label-premium">
                        Why join us? (Short Statement)
                      </label>
                      <textarea
                        id="imessage"
                        name="message"
                        rows={4}
                        className="form-control-premium"
                        placeholder="Tell us about your motivation..."
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  {/* Submit */}
                  <div className="col-12 pt-3 text-center">
                    <button
                      type="submit"
                      className="btn-primary-custom w-100 py-3 shadow-md"
                    >
                      Submit Application{" "}
                      <i className="bi bi-arrow-right ms-2" />
                    </button>
                    <p className="text-muted mt-3 mb-0 small">
                      <i className="bi bi-shield-check me-1" /> Selection is
                      based on merit and interview.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
