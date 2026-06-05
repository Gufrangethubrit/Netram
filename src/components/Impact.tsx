// Impact component

export default function Impact() {
  return (
    <div>
      <section className="impact-main-section" id="our-impact-designed">
        <div className="container">
          <h2 className="section-title text-center">
            Our <span className="gradient-text">Impact</span>
          </h2>
          <div className="impact-grid">
            {/* Item 1 */}
            <a href="#" className="text-decoration-none">
              <div
                className="impact-item yellow"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="impact-icon">
                  <i className="bi bi-person-fill" />
                </div>
                <div className="impact-content">
                  <h3>175,387 +</h3>
                  <p>
                    Adolescents reached with education on health &amp; nutrition
                  </p>
                </div>
              </div>
            </a>
            {/* Item 2 */}
            <a href="#" className="text-decoration-none">
              <div
                className="impact-item green"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="impact-icon">
                  <i className="bi bi-mortarboard-fill" />
                </div>
                <div className="impact-content">
                  <h3>1,453 +</h3>
                  <p>
                    Schools actively engaged to champion health and well-being
                  </p>
                </div>
              </div>
            </a>
            {/* Item 3 */}
            <a href="#" className="text-decoration-none">
              <div
                className="impact-item yellow"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="impact-icon">
                  <i className="fa-solid fa-user-doctor" />
                </div>
                <div className="impact-content">
                  <h3>2,250 +</h3>
                  <p>Healthcare providers trained to drive change</p>
                </div>
              </div>
            </a>
            {/* Item 4 */}
            <a href="#" className="text-decoration-none">
              <div
                className="impact-item purple"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="impact-icon">
                  <i className="fa-solid fa-person-walking" />
                </div>
                <div className="impact-content">
                  <h3>474,000 +</h3>
                  <p>
                    Pregnant &amp; lactating women sensitized through dedicated
                    home visits
                  </p>
                </div>
              </div>
            </a>
            {/* Item 5 */}
            <a href="#" className="text-decoration-none">
              <div
                className="impact-item orange"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="impact-icon">
                  <i className="bi bi-gender-ambiguous" />
                </div>
                <div className="impact-content">
                  <h3>257,000 +</h3>
                  <p>
                    Adolescents, mothers &amp; caregivers engaged in vibrant
                    anemia awareness events
                  </p>
                </div>
              </div>
            </a>
            {/* Item 6 */}
            <a href="#" className="text-decoration-none">
              <div
                className="impact-item carrot"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="impact-icon">
                  <i className="fa-solid fa-carrot" />
                </div>
                <div className="impact-content">
                  <h3>12,500 +</h3>
                  <p>Nutrigardens established to promote healthy nutrition</p>
                </div>
              </div>
            </a>
            {/* Item 7 */}
            <a href="#" className="text-decoration-none">
              <div
                className="impact-item green"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="impact-icon">
                  <i className="bi bi-people-fill" />
                </div>
                <div className="impact-content">
                  <h3>7,795 +</h3>
                  <p>
                    People screened for NCDs through 140+ community outreach
                    events
                  </p>
                </div>
              </div>
            </a>
            {/* Item 8 */}
            <a href="#" className="text-decoration-none">
              <div
                className="impact-item teal"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="impact-icon">
                  <i className="bi bi-person-vcard" />
                </div>
                <div className="impact-content">
                  <h3>300 +</h3>
                  <p>
                    Low birthweight newborns received Kangaroo Mother Care,
                    promoting stronger, healthier lives
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
