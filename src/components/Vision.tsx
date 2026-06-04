export default function Vision() {
  return (
   <div><section className="vision-2030-section section-padding-sm bg-light" id="vision-2030">
    <div className="container">
      <div className="text-center mb-4" data-aos="fade-up">
        <h2 className="section-title">Our Vision <span className="gradient-text">2030</span></h2>
        <p className="section-desc mx-auto" style={{maxWidth: 800}}>At Netram Eye Foundation, we believe that
          vision is not only about seeing the world — it is about unlocking education,
          dignity, livelihood, confidence and opportunity.</p>
      </div>
      <div className="row g-4 text-center" data-aos="fade-up">
        <div className="col-lg-3 col-md-6">
          <a href="#" className="text-decoration-none">
            <div className="mission2030 vision-stat-card p-4 h-100 bg-vision-1">
              <div className="stat-number display-4 fw-bold" data-target={1000000}>
                <span className="count">0</span><span className="suffix">M</span>
              </div>
              <div className="stat-label text-white">Eye Screenings
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-6">
          <a href="#" className="text-decoration-none">
            <div className=" mission2030 vision-stat-card p-4 h-100 bg-vision-2">
              <div className="stat-number display-4 fw-bold" data-target="100K">
                <span className="count">0</span><span className="suffix">K</span>
              </div>
              <div className="stat-label  text-white">Free Spectacles
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-6">
          <a href="#" className="text-decoration-none">
            <div className=" mission2030 vision-stat-card p-4 h-100 bg-vision-3">
              <div className="stat-number display-4 fw-bold" data-target="100K">
                <span className="count">0</span><span className="suffix">K</span>
              </div>
              <div className="stat-label  text-white">Cataract &amp; Sight-Restoring Surgeries
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-6">
          <a href="#" className="text-decoration-none">
            <div className=" mission2030 vision-stat-card p-4 h-100 bg-vision-3">
              <div className="stat-number display-4 fw-bold" data-target="5K">
                <span className="count">5</span><span className="suffix">K</span>
              </div>
              <div className="stat-label  text-white">School Eye Health Programs
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="text-center mt-4">
        <a href="./roadmap2030.html" className="btn-primary-custom px-4">
          Roadmap to 2030
        </a>
      </div>
    </div>
  </section>
</div>

  )
}
