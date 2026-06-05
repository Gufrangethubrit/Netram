import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrum from "../components/Breadcrum";

export default function Mission() {
  return (
    <div>
        <Header />
        <Breadcrum title="Mission" />
        <section
  className="mission-vision-section section-padding"
  id="mission-vision"
>
  <div className="container">
    <div className="row g-4 align-items-center">
      <div className="col-lg-12" data-aos="fade-left">
        <div className="mv-card mv-card-mission p-4 p-lg-5 h-100">
          <div className="mv-icon mv-icon-mission mb-4">
            <i className="bi bi-bullseye" />
          </div>
          <h3 className="mv-title mb-3">Our Mission</h3>
          <div className="mv-desc text-muted mb-0 mission-copy">
            <p>
              At Netram Eye Foundation, we believe that vision is not a
              privilege — it is a basic human right. Our mission is to create a
              world where no individual is deprived of the joy of seeing
              clearly, regardless of their social or financial background.
            </p>
            <p>
              We envision a future where quality eye care reaches every child,
              every family, every community, and every corner of society. India
              continues to face an overwhelming burden of preventable blindness,
              and through our outreach programs, community screenings, awareness
              initiatives, and compassionate medical care, we strive to bridge
              this gap and bring hope to those who need it most.
            </p>
            <p>
              At the heart of our work lies our belief: “Compassion is as
              important as Prescription.” We are committed to building an
              inclusive healthcare ecosystem where everyone —
              <strong>whether they can pay, pay less,</strong> or cannot pay at
              all — receives the care, dignity, and treatment they deserve.
            </p>
            <p>
              From underserved rural communities to urban neighborhoods, from
              children struggling with poor vision to elderly individuals
              silently suffering from avoidable blindness, our purpose is
              simple: no eye should be left behind.
            </p>
            <p>
              We do not just treat vision problems; we restore confidence,
              independence, opportunity, and hope. Every eye we screen, every
              spectacle we provide, and every life we touch brings us one step
              closer to our dream:
            </p>
            <p className="mb-0">
              “Sight for All. Light for All. Hope for All.”
              <br />
              Because every eye deserves to smile.
            </p>
          </div>
          <br />
          <div className="col-lg-12" data-aos="fade-right">
            <div className="about-video-wrap">
              <div className="ratio ratio-16x9">
                <iframe
                  width={560}
                  height={315}
                  src="https://www.youtube.com/embed/Z9H2i6feejw?si=LHeP_IYvPpzPpqM2"
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        <Footer/>
    </div>
  )
}
