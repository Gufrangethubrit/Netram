import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrum from "../components/Breadcrum";

export default function Donate() {
  return (
    <div>
      <Header />
      <Breadcrum title="Donate" />

      <section className="donate-section" id="donate">
        <div className="donate-bg-shapes">
          <div className="d-shape d-shape-1" />
          <div className="d-shape d-shape-2" />
        </div>
        <div className="container">
          <div className="donate-card" data-aos="zoom-in">
            <div className="row align-items-center g-4">
              <div className="col-lg-7">
                <div className="donate-icon-wrap">
                  <i className="bi bi-balloon-heart-fill" />
                </div>
                <h2>
                  Change a Child’s Life <br />
                  <span>Today</span>
                </h2>
                <p>
                  Your small contribution can brighten the future of thousands
                  of children. Every rupee is not just a donation — it is hope,
                  it is a dream.
                </p>
                <div className="donate-amounts">
                  <button className="amount-btn active" data-amount={100}>
                    ₹100
                  </button>
                  <button className="amount-btn" data-amount={500}>
                    ₹500
                  </button>
                  <button className="amount-btn" data-amount={1000}>
                    ₹1,000
                  </button>
                  <button className="amount-btn" data-amount={5000}>
                    ₹5,000
                  </button>
                </div>
              </div>
              <div className="col-lg-5" style={{ perspective: 1200 }}>
                <div className="donate-form-wrap">
                  <h5>
                    <i className="bi bi-heart-fill me-2" /> Donate Now
                  </h5>
                  <div className="row g-2">
                    <div className="col-12">
                      <div className="donate-input-wrap">
                        <i className="bi bi-person donate-form-icon" />
                        <input
                          type="text"
                          id="donorName"
                          className="donate-input ps-5"
                          placeholder="Full Name"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="donate-input-wrap">
                        <i className="bi bi-envelope donate-form-icon" />
                        <input
                          type="email"
                          id="donorEmail"
                          className="donate-input ps-5"
                          placeholder="Email Address"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="donate-input-wrap">
                        <i className="bi bi-phone donate-form-icon" />
                        <input
                          type="tel"
                          id="donorPhone"
                          className="donate-input ps-5"
                          placeholder="Phone Number"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="donate-input-wrap">
                        <i className="bi bi-card-text donate-form-icon" />
                        <input
                          type="text"
                          id="donorPAN"
                          className="donate-input ps-5"
                          placeholder="PAN Number (For 80G Tax Benefit)"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="donate-input-wrap">
                        <span className="rupee-symbol">₹</span>
                        <input
                          type="number"
                          id="donateAmount"
                          className="donate-input"
                          placeholder="Enter Amount"
                          min={1}
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <select className="donate-select font-awesome-select mb-2">
                        <option disabled="" selected="">
                          Select Donation Purpose
                        </option>
                        <option value="Education">
                           &nbsp; Education Support
                        </option>
                        <option value="Health">
                           &nbsp; Health &amp; Nutrition
                        </option>
                        <option value="ChildCare"> &nbsp; Child Care</option>
                        <option value="Women">
                           &nbsp; Women Empowerment
                        </option>
                        <option value="Digital">
                           &nbsp; Digital Literacy
                        </option>
                        <option value="Environment">
                           &nbsp; Environment
                        </option>
                        <option value="General"> &nbsp; General Fund</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <button className="donate-btn" id="donateBtn">
                        <i className="bi bi-heart-fill me-2" /> Confirm Donation
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ----branch----- */}
      <div className="dashboard">
        {/* Cards */}
        <div className="cards-col">
          <div
            className="stat-card card-purple"
            onmousemove="tilt(event,this)"
            onmouseleave="untilt(this)"
          >
            <div className="icon-wrap icon-purple">
              <svg viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
            <div className="card-info">
              <div className="card-num" id="n0">
                36
              </div>
              <div className="card-label">States</div>
              <div className="card-sub">Across the Country</div>
            </div>
          </div>
          <div
            className="stat-card card-blue"
            onmousemove="tilt(event,this)"
            onmouseleave="untilt(this)"
          >
            <div className="icon-wrap icon-blue">
              <svg viewBox="0 0 24 24">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
              </svg>
            </div>
            <div className="card-info">
              <div className="card-num" id="n1">
                10
              </div>
              <div className="card-label">Our Members</div>
              <div className="card-sub">Across the Country</div>
            </div>
          </div>
          <div
            className="stat-card card-amber"
            onmousemove="tilt(event,this)"
            onmouseleave="untilt(this)"
          >
            <div className="icon-wrap icon-amber">
              <svg viewBox="0 0 24 24">
                <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z" />
              </svg>
            </div>
            <div className="card-info">
              <div className="card-num" id="n2">
                1
              </div>
              <div className="card-label">Our Branches</div>
              <div className="card-sub">Across the Country</div>
            </div>
          </div>
          <div
            className="stat-card card-teal"
            onmousemove="tilt(event,this)"
            onmouseleave="untilt(this)"
          >
            <div className="icon-wrap icon-teal">
              <svg viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <div className="card-info">
              <div className="card-num" id="n3">
                0
              </div>
              <div className="card-label">Our Volunteers</div>
              <div className="card-sub">Across the Country</div>
            </div>
          </div>
        </div>
        {/* Map */}
        <div className="map-col">
          <div id="map" />
          <div className="map-info-card">
            <div className="map-info-name">
              <i className="fa-solid fa-building" /> Netram Eye Foundation
            </div>
            <div className="map-info-addr">
              <i className="fa-solid fa-location-dot" /> E-98, Greater Kailash-2
              <br />
              <i className="fa-solid fa-map-marker-alt" /> New Delhi – 110048
              <br />
              <i className="fa-solid fa-phone" /> 011-41676655 / 9212646655
            </div>
            <div className="map-info-tags">
              <span className="tag tag-green">
                <i className="fa-solid fa-hand-holding-heart" /> NGO
              </span>
              <span className="tag tag-blue">
                <i className="fa-solid fa-book-open" /> Education
              </span>
              <span className="tag tag-orange">
                <i className="fa-solid fa-heart-pulse" /> Healthcare
              </span>
            </div>
          </div>
          <div className="map-live">
            <div className="live-dot" />
            <i className="fa-solid fa-signal" /> 1 Branch Active
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
