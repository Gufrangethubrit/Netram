import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrum from "../components/Breadcrum";

export default function Event() {
  return (
    <div>
      <Header />
      <Breadcrum title="Event" />
      <section className="projects-section section-padding" id="events">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <div className="section-tag mx-auto">
              <i className="bi bi-calendar-event-fill me-2" /> Our Events
            </div>
            <h2 className="section-title">
              <span className="gradient-text">Completed Events</span>
            </h2>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="project-card activity-card">
                <div className="project-img">
                  <img
                    src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=600"
                    alt="Food Distribution Drive"
                  />
                  <div className="project-category date-badge">
                    <i className="bi bi-calendar3" /> Oct 15, 2025
                  </div>
                </div>
                <div className="project-content">
                  <h4>Food Distribution Drive</h4>
                  <p>Distributed food kits to needy families during crisis.</p>
                  <a href="#" className="project-link">
                    View Details <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="project-card activity-card">
                <div className="project-img">
                  <img
                    src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=600"
                    alt="Blood Donation Camp"
                  />
                  <div className="project-category date-badge">
                    <i className="bi bi-calendar3" /> Sep 28, 2025
                  </div>
                </div>
                <div className="project-content">
                  <h4>Blood Donation Camp</h4>
                  <p>Collected 300+ units of blood with community support.</p>
                  <a href="#" className="project-link">
                    View Details <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="project-card activity-card">
                <div className="project-img">
                  <img
                    src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=600"
                    alt="Blood Donation Camp"
                  />
                  <div className="project-category date-badge">
                    <i className="bi bi-calendar3" /> Sep 28, 2025
                  </div>
                </div>
                <div className="project-content">
                  <h4>Blood Donation Camp</h4>
                  <p>Collected 300+ units of blood with community support.</p>
                  <a href="#" className="project-link">
                    View Details <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="project-card activity-card">
                <div className="project-img">
                  <img
                    src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=600"
                    alt="Blood Donation Camp"
                  />
                  <div className="project-category date-badge">
                    <i className="bi bi-calendar3" /> Sep 28, 2025
                  </div>
                </div>
                <div className="project-content">
                  <h4>Blood Donation Camp</h4>
                  <p>Collected 300+ units of blood with community support.</p>
                  <a href="#" className="project-link">
                    View Details <i className="bi bi-arrow-right" />
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
