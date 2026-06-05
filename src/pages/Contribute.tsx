import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrum from "../components/Breadcrum";

export default function Contribute() {
  return (
    <div>
      <Header />
      <Breadcrum title="Contribute" />
      <section className="pd-page-section">
        <div className="container">
          <div className="row">
            {/* Main Content (Left on Desktop) */}
            <div className="col-lg-8">
              <div className="pd-page-card" data-aos="fade-up">
                {/* Badge */}
                <div className="pd-page-badge">
                  <i className="bi bi-heart-fill me-2" /> Join Our Noble Mission
                </div>
                {/* Title */}
                <h1
                  className="pd-page-title"
                  style={{ fontSize: "2.5rem", marginBottom: 20 }}
                >
                  Noble Causes{" "}
                  <span className="gradient-text">Worth Supporting</span>
                </h1>
                {/* Slogan */}
                <div className="pd-slogan">
                  “Your small contribution is a giant leap for someone’s
                  vision.”
                </div>
                {/* Body Content */}
                <div className="pd-page-desc">
                  <p>
                    Netram Eye Foundation is dedicated to the belief that no one
                    should live with preventable blindness. Our noble causes are
                    designed to reach the most vulnerable sections of society,
                    providing them with the gift of sight and a dignified life.
                  </p>
                  <h4
                    className="mt-4 mb-3"
                    style={{ color: "var(--primary)", fontWeight: 800 }}
                  >
                    Why Contribute?
                  </h4>
                  <p>
                    Every donation, no matter the size, directly funds our
                    medical outreach. Whether it is a simple pair of spectacles
                    for a school child or a life-changing cataract surgery for
                    an elderly person in a remote village, your support
                    translates into immediate, tangible impact.
                  </p>
                  <div className="row g-4 mt-2">
                    <div className="col-md-6">
                      <div className="pd-feature-card h-100">
                        <div className="pd-feature-icon">
                          <i className="bi bi-eye-fill" />
                        </div>
                        <h5>Adopt-an-Eye</h5>
                        <p>
                          Sponsor a cataract surgery for an underprivileged
                          elderly person. This includes pre-op, surgery, and
                          post-op care.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="pd-feature-card h-100">
                        <div className="pd-feature-icon">
                          <i className="bi bi-people-fill" />
                        </div>
                        <h5>Vision for Children</h5>
                        <p>
                          Support our school screenings where we identify vision
                          issues early and provide free high-quality spectacles.
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4">
                    Since our inception, we have been a bridge between
                    compassionate donors and those in desperate need of eye
                    care. By contributing to Netram, you aren't just giving
                    money; you are restoring a grandmother's ability to see her
                    grandchildren or a child's ability to read their first book.
                  </p>
                </div>
                {/* Noble Impact Grid */}
                <div className="pd-support-box mt-5">
                  <h5 className="pd-support-title">
                    <i className="bi bi-lightning-fill" /> Direct Impact of Your
                    Gift
                  </h5>
                  <div className="pd-support-grid">
                    <div className="pd-support-item">
                      <i className="bi bi-check-circle-fill" />
                      <span>
                        ₹500 — Provides 2 pairs of high-quality spectacles for
                        children.
                      </span>
                    </div>
                    <div className="pd-support-item">
                      <i className="bi bi-check-circle-fill" />
                      <span>
                        ₹2,500 — Funds full screening for an entire primary
                        school class.
                      </span>
                    </div>
                    <div className="pd-support-item">
                      <i className="bi bi-check-circle-fill" />
                      <span>
                        ₹5,000 — Sponsors one complete cataract surgery &amp;
                        lens.
                      </span>
                    </div>
                    <div className="pd-support-item">
                      <i className="bi bi-check-circle-fill" />
                      <span>
                        ₹15,000 — Supports an entire rural vision screening camp
                        for a day.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Sidebar (Right on Desktop) */}
            <div className="col-lg-4">
              <aside className="pd-sidebar">
                {/* Widget: Bank Details */}
                <div className="pd-widget" data-aos="fade-left">
                  <h5 className="pd-widget-title">
                    <i className="bi bi-bank2" /> Direct Bank Transfer
                  </h5>
                  <div
                    className="p-3 bg-light rounded-3"
                    style={{ border: "1px dashed var(--primary)" }}
                  >
                    <ul className="pd-status-list mb-0">
                      <li>
                        <span className="pd-status-label">Bank Name</span>
                        <span
                          className="pd-status-value text-end"
                          style={{ fontSize: "0.85rem" }}
                        >
                          CANARA BANK
                        </span>
                      </li>
                      <li>
                        <span className="pd-status-label">A/C Name</span>
                        <span
                          className="pd-status-value text-end"
                          style={{ fontSize: "0.8rem" }}
                        >
                          NETRAM EYE FOUNDATION
                        </span>
                      </li>
                      <li>
                        <span className="pd-status-label">A/C Number</span>
                        <span
                          className="pd-status-value text-end"
                          style={{ fontWeight: 800, color: "var(--primary)" }}
                        >
                          6062214000009
                        </span>
                      </li>
                      <li>
                        <span className="pd-status-label">IFSC Code</span>
                        <span className="pd-status-value">CNRB0006062</span>
                      </li>
                      <li>
                        <span className="pd-status-label">A/C Type</span>
                        <span className="pd-status-value">Current Account</span>
                      </li>
                      <li>
                        <span className="pd-status-label">Branch</span>
                        <span
                          className="pd-status-value text-end"
                          style={{ fontSize: "0.8rem" }}
                        >
                          C R PARK, DELHI-110019
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Widget: Quick QR */}
                <div
                  className="pd-widget text-center"
                  data-aos="fade-left"
                  data-aos-delay={100}
                >
                  <h5 className="pd-widget-title">
                    <i className="bi bi-qr-code-scan" /> Scan to Contribute
                  </h5>
                  <div
                    className="mx-auto"
                    style={{
                      maxWidth: 180,
                      padding: 10,
                      background: "#fff",
                      border: "1px solid #eee",
                      borderRadius: 15,
                    }}
                  >
                    <img
                      src="./assets/qr-code/qrcode.jpg"
                      alt="Scan to Donate"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <p className="small text-muted mt-3 mb-0">
                    Accepted on all UPI Apps: Google Pay, PhonePe, Paytm.
                  </p>
                </div>
                {/* Widget: General Support */}
                <div
                  className="pd-widget pd-donate-widget"
                  data-aos="fade-left"
                  data-aos-delay={200}
                >
                  <i
                    className="bi bi-gift-fill"
                    style={{
                      fontSize: "3rem",
                      marginBottom: 20,
                      display: "block",
                    }}
                  />
                  <h4>Every Life Counts</h4>
                  <p>
                    Your support is the backbone of our service. Join us in
                    making India blindness-free.
                  </p>
                  <a href="donate.html" className="pd-btn-sidebar">
                    Give Online Now
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
