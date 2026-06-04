export default function Donate() {
  return (
    <div>
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
                          required
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
                          required
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
                          required
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
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <select className="donate-select font-awesome-select mb-2">
                        <option disabled selected>
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

      <section className="join-team-banner" id="join-us" data-aos="fade-up">
        <div className="container">
          <div className="join-banner-inner">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-7 mb-4 mb-md-0">
                <h2 className="mb-2 text-white fw-bold">
                  Be a Part of Our Mission
                </h2>
                <p className="mb-0 text-white-40 text-white">
                  Join our community of changemakers. Give your time to field
                  projects, events, and ground operations to directly impact
                  lives.
                </p>
              </div>
              <div className="col-lg-4 col-md-5 text-md-end text-center">
                <a
                  href="#contact"
                  className="btn btn-light btn-lg rounded-pill fw-bold join-now-btn"
                >
                  Join Now <i className="bi bi-arrow-right ms-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
