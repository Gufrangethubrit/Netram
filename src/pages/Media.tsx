import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrum from "../components/Breadcrum";

export default function Media() {
  return (
    <div>
      <Header />
      <Breadcrum title="Media" />

      <section className="gallery-section section-padding" id="gallery">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <div className="section-tag mx-auto">
              <i className="bi bi-images me-2" /> Our Gallery
            </div>
            <h2 className="section-title">
              Moments &amp; <span className="gradient-text">Milestones</span>
            </h2>
          </div>
          <div
            className="row g-4 gallery-image-grid"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="col-sm-6 col-lg-3">
              <div className="gallery-card gallery-image-card">
                <div className="gallery-img-wrap gallery-image-wrap">
                  <img
                    src="./assets/media_gallery/news1.png"
                    alt="Gallery image 1"
                    className="gallery-lightbox-trigger"
                    role="button"
                    tabIndex={0}
                    data-full-src="./assets/media_gallery/news1.png"
                    data-full-alt="Gallery image 1"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="gallery-card gallery-image-card">
                <div className="gallery-img-wrap gallery-image-wrap">
                  <img
                    src="./assets/media_gallery/news2.png"
                    alt="Gallery image 2"
                    className="gallery-lightbox-trigger"
                    role="button"
                    tabIndex={0}
                    data-full-src="./assets/media_gallery/news2.png"
                    data-full-alt="Gallery image 2"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="gallery-card gallery-image-card">
                <div className="gallery-img-wrap gallery-image-wrap">
                  <img
                    src="./assets/media_gallery/news3.png"
                    alt="Gallery image 3"
                    className="gallery-lightbox-trigger"
                    role="button"
                    tabIndex={0}
                    data-full-src="./assets/media_gallery/news3.png"
                    data-full-alt="Gallery image 3"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="gallery-card gallery-image-card">
                <div className="gallery-img-wrap gallery-image-wrap">
                  <img
                    src="./assets/media_gallery/news4.png"
                    alt="Gallery image 4"
                    className="gallery-lightbox-trigger"
                    role="button"
                    tabIndex={0}
                    data-full-src="./assets/media_gallery/news4.png"
                    data-full-alt="Gallery image 4"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="gallery-card gallery-image-card">
                <div className="gallery-img-wrap gallery-image-wrap">
                  <img
                    src="./assets/media_gallery/news5.png"
                    alt="Gallery image 5"
                    className="gallery-lightbox-trigger"
                    role="button"
                    tabIndex={0}
                    data-full-src="./assets/media_gallery/news5.png"
                    data-full-alt="Gallery image 5"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="gallery-card gallery-image-card">
                <div className="gallery-img-wrap gallery-image-wrap">
                  <img
                    src="./assets/media_gallery/news6.png"
                    alt="Gallery image 6"
                    className="gallery-lightbox-trigger"
                    role="button"
                    tabIndex={0}
                    data-full-src="./assets/media_gallery/news6.png"
                    data-full-alt="Gallery image 6"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="gallery-card gallery-image-card">
                <div className="gallery-img-wrap gallery-image-wrap">
                  <img
                    src="./assets/media_gallery/news7.png"
                    alt="Gallery image 7"
                    className="gallery-lightbox-trigger"
                    role="button"
                    tabIndex={0}
                    data-full-src="./assets/media_gallery/news7.png"
                    data-full-alt="Gallery image 7"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="gallery-card gallery-image-card">
                <div className="gallery-img-wrap gallery-image-wrap">
                  <img
                    src="./assets/media_gallery/news8.png"
                    alt="Gallery image 8"
                    className="gallery-lightbox-trigger"
                    role="button"
                    tabIndex={0}
                    data-full-src="./assets/media_gallery/news8.png"
                    data-full-alt="Gallery image 8"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="modal fade gallery-lightbox-modal"
        id="galleryLightboxModal"
        tabIndex={-1}
        aria-labelledby="galleryLightboxLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content border-0 bg-transparent">
            <div className="modal-body p-0 position-relative">
              <button
                type="button"
                className="btn-close gallery-lightbox-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
              <img
                id="galleryLightboxImage"
                src=""
                alt="Gallery preview"
                className="img-fluid w-100"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
