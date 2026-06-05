import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrum from "../components/Breadcrum";

export default function Video() {
  return (
    <div>
        <Header />
        <Breadcrum title="Video Gallery" />
        <section className="gallery-section section-padding" id="gallery">
  <div className="container">
    <div className="text-center mb-5" data-aos="fade-up">
      <div className="section-tag mx-auto">
        <i className="bi bi-images me-2" /> Our Gallery
      </div>
    </div>
    <div className="text-center mb-4" data-aos="fade-up">
      <span className="nav-link active d-inline-flex align-items-center gap-2 px-4 py-2"></span>
    </div>
    <div className="row g-4 video-grid" data-aos="fade-up" data-aos-delay={100}>
      <div className="col-md-6 col-lg-4">
        <div className="gallery-card gallery-video-card">
          <div className="gallery-video-wrap gallery-video-frame">
            <span className="gallery-play-badge" aria-hidden="true">
              <i className="bi bi-play-fill" />
            </span>
            <video
              controls=""
              preload="metadata"
              playsInline=""
              title="Netram Video"
            >
              <source src="#" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4">
        <div className="gallery-card gallery-video-card">
          <div className="gallery-video-wrap gallery-video-frame">
            <span className="gallery-play-badge" aria-hidden="true">
              <i className="bi bi-play-fill" />
            </span>
            <video
              controls=""
              preload="metadata"
              playsInline=""
              title="Netram Video 2"
            >
              <source src="#" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4">
        <div className="gallery-card gallery-video-card">
          <div className="gallery-video-wrap gallery-video-frame">
            <span className="gallery-play-badge" aria-hidden="true">
              <i className="bi bi-play-fill" />
            </span>
            <video
              controls=""
              preload="metadata"
              playsInline=""
              title="Netram Video 3"
            >
              <source src="#" type="video/mp4" />
            </video>
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
