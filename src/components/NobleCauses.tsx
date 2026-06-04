export default function NobleCauses() {
  return (
    <div><section className="causes-section section-padding" id="causes">
    <div className="causes-bg-glow" />
    <div className="container">
      <div className="text-center mb-5" data-aos="fade-up">
        <div className="section-tag mx-auto">
          <i className="bi bi-heart-pulse-fill me-2" /> Our Noble Causes
        </div>
        <h2 className="section-title">
          Empowering Lives <span className="gradient-text">Through You</span>
        </h2>
        <p className="section-desc mx-auto" style={{maxWidth: 600}}>
          Every small contribution creates a giant ripple of change. Choose a cause and be the reason for a
          child's smile today.
        </p>
      </div>
      <div className="causes-carousel-wrapper">
        <div className="causes-carousel">
          {/* Cause Card 1: Education */}
          <div className="cause-card" data-aos="fade-up" data-aos-delay={100}>
            <div className="cause-card-inner">
              <div className="cause-card-image">
                <img src="./assets/Gallery_img/gallery_img (2).JPG" alt="Education Support" />
                <div className="cause-overlay">
                  <span className="cause-badge bg-orange"><i className="bi bi-book-fill me-1" />
                    Education</span>
                </div>
              </div>
              <div className="cause-card-content">
                <h4>Free Cataract Surgeries</h4>
                <p>Providing digital kits, books, and scholarships to ensure no child stops learning due
                  to poverty.</p>
                <div className="cause-progress-wrapper">
                  <div className="progress-info">
                    <span>Raised: <strong>₹2,65,000</strong></span>
                    <span>65%</span>
                  </div>
                  <div className="cause-progress">
                    <div className="progress-bar progress-orange" style={{width: '65%'}} />
                  </div>
                  <div className="progress-goal">Goal: ₹4,00,000</div>
                </div>
                <a href="./contribute.html" className="cause-donate-btn">
                  <span>Contribute Now</span> <i className="bi bi-arrow-right-short" />
                </a>
              </div>
            </div>
          </div>
          {/* Cause Card 2: Health */}
          <div className="cause-card" data-aos="fade-up" data-aos-delay={200}>
            <div className="cause-card-inner">
              <div className="cause-card-image">
                <img src="./assets/Gallery_img/gallery_img (1).jpg" alt="Healthcare" />
                <div className="cause-overlay">
                  <span className="cause-badge bg-purple"><i className="bi bi-heart-fill me-1" />
                    Healthcare</span>
                </div>
              </div>
              <div className="cause-card-content">
                <h4>Free Spectacle Distribution</h4>
                <p>Funding medical surgeries and providing high-protein meals to battle malnutrition in
                  slum clusters.</p>
                <div className="cause-progress-wrapper">
                  <div className="progress-info">
                    <span>Raised: <strong>₹3,90,000</strong></span>
                    <span>78%</span>
                  </div>
                  <div className="cause-progress">
                    <div className="progress-bar progress-purple" style={{width: '78%'}} />
                  </div>
                  <div className="progress-goal">Goal: ₹5,00,000</div>
                </div>
                <a href="./contribute.html" className="cause-donate-btn">
                  <span>Contribute Now</span> <i className="bi bi-arrow-right-short" />
                </a>
              </div>
            </div>
          </div>
          {/* Cause Card 3: Empowerment */}
          <div className="cause-card" data-aos="fade-up" data-aos-delay={300}>
            <div className="cause-card-inner">
              <div className="cause-card-image">
                <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80" alt="Women Empowerment" />
                <div className="cause-overlay">
                  <span className="cause-badge bg-teal"><i className="bi bi-person-heart me-1" />
                    Empowerment</span>
                </div>
              </div>
              <div className="cause-card-content">
                <h4>Cornea Transplants</h4>
                <p>Empowering mothers with sewing and handicraft skills to help them achieve financial
                  independence.</p>
                <div className="cause-progress-wrapper">
                  <div className="progress-info">
                    <span>Raised: <strong>₹1,80,000</strong></span>
                    <span>45%</span>
                  </div>
                  <div className="cause-progress">
                    <div className="progress-bar progress-teal" style={{width: '45%'}} />
                  </div>
                  <div className="progress-goal">Goal: ₹4,00,000</div>
                </div>
                <a href="./contribute.html" className="cause-donate-btn">
                  <span>Contribute Now</span> <i className="bi bi-arrow-right-short" />
                </a>
              </div>
            </div>
          </div>
          {/* Cause Card 4: Empowerment */}
          <div className="cause-card" data-aos="fade-up" data-aos-delay={300}>
            <div className="cause-card-inner">
              <div className="cause-card-image">
                <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80" alt="Women Empowerment" />
                <div className="cause-overlay">
                  <span className="cause-badge bg-teal"><i className="bi bi-person-heart me-1" />
                    Empowerment</span>
                </div>
              </div>
              <div className="cause-card-content">
                <h4>Skill Development &amp; Awareness Education</h4>
                <p>Empowering mothers with sewing and handicraft skills to help them achieve financial
                  independence.</p>
                <div className="cause-progress-wrapper">
                  <div className="progress-info">
                    <span>Raised: <strong>₹1,80,000</strong></span>
                    <span>45%</span>
                  </div>
                  <div className="cause-progress">
                    <div className="progress-bar progress-teal" style={{width: '45%'}} />
                  </div>
                  <div className="progress-goal">Goal: ₹4,00,000</div>
                </div>
                <a href="#donate" className="cause-donate-btn">
                  <span>Contribute Now</span> <i className="bi bi-arrow-right-short" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}
