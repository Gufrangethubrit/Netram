// Mission and Vision component

export default function MissionAndVision() {
  return (
   <div> {/* ===== MISSION AND VISION SECTION ===== */}
  <section className="mission-vision-section section-padding" id="mission-vision">
    <div className="container">
      <div className="row g-4 align-items-stretch">
        {/* Mission Card */}
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
          <div className="mv-card mv-card-mission p-4 p-lg-5 h-100">
            <div className="mv-icon mv-icon-mission mb-4">
              <i className="bi bi-bullseye" />
            </div>
            <h3 className="mv-title mb-3">Our Mission</h3>
            <p className="mv-desc text-muted mb-0">
              At Netram Eye Foundation, we believe that vision is not a privilege — it is a basic human
              right. Our mission is to
              create a world where no individual is deprived of the joy of seeing clearly, regardless of
              their social or financial
              background. We envision a future where quality eye care reaches every child, every family,
              every community, and every
              corner of society.
            </p>
            <a href="./mission.html" className="prog-link mt-4">Learn More <i className="bi bi-arrow-right" /></a>
          </div>
        </div>
        {/* Vision Card */}
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
          <div className="mv-card mv-card-vision p-4 p-lg-5 h-100">
            <div className="mv-icon mv-icon-vision mb-4">
              <i className="bi bi-eye" />
            </div>
            <h3 className="mv-title mb-3">Our Vision</h3>
            <p className="mv-desc text-muted mb-0">
              At Netram Eye Foundation, our vision goes beyond providing eye care — we envision building a
              society where healthcare,
              dignity, and compassion reach every individual, especially those who are often unheard,
              unseen, and underserved.
            </p>
            <a href="./vision.html" className="prog-link mt-4">Learn More <i className="bi bi-arrow-right" /></a>
          </div>
        </div>
      </div>
    </div>
  </section></div>

  )
}
