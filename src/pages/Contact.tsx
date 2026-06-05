import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrum from "../components/Breadcrum";

export default function Contact() {
  return (
    <div>
      <Header />
      <Breadcrum title="Contact Us" />
      <section className="contact-section section-padding" id="contact">
        <div className="container">
          <div className="text-center mb-5">
            <div className="section-tag mx-auto">
              <i className="bi bi-envelope-heart-fill me-2" /> Contact Us
            </div>
            <h2 className="section-title">
              Get in Touch <span className="gradient-text">With Us</span>
            </h2>
            <p className="section-desc mx-auto" style={{ maxWidth: 550 }}>
              For any queries, suggestions, or collaboration — we are always
              here for you.
            </p>
          </div>
          <div className="row g-4">
            {/* Contact Info */}
            <div className="col-lg-5">
              <div className="contact-info-card">
                <h4>Contact Details</h4>
                <div className="contact-info-item">
                  <div className="c-icon">
                    <i className="bi bi-geo-alt-fill" />
                  </div>
                  <div>
                    <strong>Address</strong>
                    <p>
                      E-98, Greater Kailash-2, New Delhi – 110048
                      <br />
                    </p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="c-icon">
                    <i className="bi bi-telephone-fill" />
                  </div>
                  <div>
                    <strong>Phone</strong>
                    <p>+91-92126-46655</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="c-icon">
                    <i className="bi bi-envelope-fill" />
                  </div>
                  <div>
                    <strong>Email</strong>
                    <p>info@netrameyefoundation.com</p>
                  </div>
                </div>
                <div className="contact-social">
                  <a href="#" className="social-link">
                    <i className="bi bi-facebook" />
                  </a>
                  <a href="#" className="social-link">
                    <i className="bi bi-instagram" />
                  </a>
                  <a href="#" className="social-link">
                    <i className="bi bi-twitter-x" />
                  </a>
                  <a href="#" className="social-link">
                    <i className="bi bi-youtube" />
                  </a>
                  <a href="#" className="social-link">
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div className="col-lg-7">
              <div className="contact-form-card">
                <h4>Send a Message</h4>
                <form id="contactForm" noValidate="">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-group-custom">
                        <label htmlFor="fullName">Your Name</label>
                        <div className="input-icon-wrap">
                          <i className="bi bi-person-fill" />
                          <input
                            type="text"
                            id="fullName"
                            className="form-control-custom"
                            placeholder="Enter your name"
                            required=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group-custom">
                        <label htmlFor="contactEmail">Email Address</label>
                        <div className="input-icon-wrap">
                          <i className="bi bi-envelope-fill" />
                          <input
                            type="email"
                            id="contactEmail"
                            className="form-control-custom"
                            placeholder="Enter your email"
                            required=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group-custom">
                        <label htmlFor="contactPhone">Mobile Number</label>
                        <div className="input-icon-wrap">
                          <i className="bi bi-phone-fill" />
                          <input
                            type="tel"
                            id="contactPhone"
                            className="form-control-custom"
                            placeholder="Enter your mobile number"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group-custom">
                        <label htmlFor="contactSubject">Subject</label>
                        <div className="input-icon-wrap">
                          <i className="bi bi-tag-fill" />
                          <input
                            type="text"
                            id="contactSubject"
                            className="form-control-custom"
                            placeholder="Enter subject"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group-custom">
                        <label htmlFor="contactMessage">Your Message</label>
                        <textarea
                          id="contactMessage"
                          className="form-control-custom"
                          rows={4}
                          placeholder="Write your message here..."
                          required=""
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn-primary-custom w-100"
                        id="submitBtn"
                      >
                        <i className="bi bi-send-fill me-2" /> Send Message
                      </button>
                    </div>
                  </div>
                </form>
                <div className="form-success-msg" id="formSuccess">
                  <i className="bi bi-check-circle-fill" />
                  <h5>Thank You!</h5>
                  <p>
                    Your message has been received. We will get back to you
                    soon.
                  </p>
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
