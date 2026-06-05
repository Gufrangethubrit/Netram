import React from 'react'
import Header from '../components/Header';
import Breadcrum from '../components/Breadcrum';
import Footer from '../components/Footer';

export default function Story() {
  return (
    <div>
      <Header />
      <Breadcrum title="Our Story" />
      <div>
        <section className="story-hero">
          <div className="container hero-grid">
            <div className="hero-panel" data-aos="fade-up">
              <div className="section-tag text-white">
                <i className="bi bi-bookmark-star-fill" /> Our Story
              </div>
              <h1 className="hero-title">From One Clinic to a Movement</h1>
              <p className="hero-lead">
                Netram Eye Foundation began on 5th August 2013 with a small
                clinic and a simple belief — quality eye care is a right, not a
                privilege. Today we deliver screenings, surgeries and awareness
                across India.
              </p>
              <div className="hero-ctas">
                <a href="donate.html" className="btn btn-light btn-lg">
                  Donate
                </a>
                <a
                  href="volunteer.html"
                  className="btn btn-outline-light btn-lg"
                >
                  Volunteer
                </a>
              </div>
              <div className="hero-stats">
                <div className="hero-stat">Lakhs+ Lives</div>
                <div className="hero-stat">100k+ Spectacles</div>
                <div className="hero-stat">100k+ Surgeries</div>
              </div>
            </div>
            <div className="hero-image" data-aos="fade-left">
              <img
                src="./assets/Gallery_img/img2.jpg"
                alt="Outreach and team"
              />
            </div>
          </div>
        </section>
        <section className="story-content">
          <div className="container">
            <div className="row gx-5">
              <div className="col-lg-8">
                <div className="story-card mb-4" data-aos="fade-up">
                  <h3>How It Began</h3>
                  <p className="text-muted">
                    Netram Eye Foundation began its journey with a small clinic
                    and a simple belief — quality eye care should be a right for
                    everyone. We moved beyond the clinic, taking screenings and
                    treatment directly to communities through camps, mobile
                    services and school programs.
                  </p>
                </div>
                <div
                  className="story-card mb-4"
                  data-aos="fade-up"
                  data-aos-delay={80}
                >
                  <h4>Vertical Timeline</h4>
                  <div className="timeline mt-3">
                    <div className="timeline-event">
                      <strong>2013 — Founding</strong>
                      <p className="text-muted">
                        First clinic opened on 5th August. Focus on
                        patient-first care and local outreach.
                      </p>
                    </div>
                    <div className="timeline-event">
                      <strong>2016–2018 — Growing Outreach</strong>
                      <p className="text-muted">
                        Introduced school screenings, mobile eye clinics and
                        larger community camps.
                      </p>
                    </div>
                    <div className="timeline-event">
                      <strong>2019–2024 — Partnerships &amp; Scale</strong>
                      <p className="text-muted">
                        Built hospital networks, strengthened referral pathways
                        and increased surgical capacity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="story-card mb-3" data-aos="fade-up">
                  <h5>Our Values</h5>
                  <ul className="text-muted">
                    <li>
                      Access for all — regardless of geography or ability to pay
                    </li>
                    <li>Clinical excellence paired with compassion</li>
                    <li>Community-led, sustainable solutions</li>
                  </ul>
                </div>
                <div
                  className="story-card mb-3"
                  data-aos="fade-up"
                  data-aos-delay={60}
                >
                  <h5>Featured In</h5>
                  <div className="media-logos mt-2">
                    <span className="badge">A2Z News</span>
                    <span className="badge">NDTV</span>
                    <span className="badge">Zee News</span>
                    <span className="badge">MediCircle</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Stats grid */}
            <div className="stats-grid" data-aos="fade-up" data-aos-delay={100}>
              <div className="stat-box">
                <div className="stat-num">Lakhs+</div>
                <div className="stat-label">Lives Impacted</div>
              </div>
              <div className="stat-box">
                <div className="stat-num">Thousands</div>
                <div className="stat-label">Camps Conducted</div>
              </div>
              <div className="stat-box">
                <div className="stat-num">100k+</div>
                <div className="stat-label">Spectacles Distributed</div>
              </div>
              <div className="stat-box">
                <div className="stat-num">100k+</div>
                <div className="stat-label">Surgeries Supported</div>
              </div>
            </div>
            {/* CTA block */}
            <div
              className="cta-block mt-5"
              data-aos="fade-up"
              data-aos-delay={120}
            >
              <div>
                <h4 style={{ margin: 0 }}>Join the Movement</h4>
                <p style={{ margin: "6px 0 0" }}>
                  Support Vision 2030 — partner, donate or volunteer to restore
                  sight and strengthen communities.
                </p>
              </div>
              <div className="hero-ctas">
                <a href="donate.html" className="btn btn-light btn-lg">
                  Donate
                </a>
                <a
                  href="volunteer.html"
                  className="btn btn-outline-light btn-lg"
                >
                  Volunteer
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer/>
    </div>
  );
}
