export default function Gallery() {
  return (
    <div>
      <section className="gallery-section section-padding" id="gallery">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <div className="section-tag mx-auto">
              <i className="bi bi-images me-2" /> Our Gallery
            </div>
            <h2 className="section-title">
              Glimpses of <span className="gradient-text">Happiness</span>
            </h2>
            <p className="section-desc mx-auto" style={{ maxWidth: 550 }}>
              Every picture tells a story — of children’s smiles, their efforts,
              and their brighter future.
            </p>
          </div>
          {/* Tabs */}
          <ul
            className="nav nav-custom-tabs justify-content-center mb-5"
            id="galleryTab"
            role="tablist"
            data-aos="fade-up"
          >
            <li className="nav-item">
              <button
                className="nav-link active"
                data-bs-toggle="tab"
                data-bs-target="#gallery-images"
              >
                <i className="bi bi-image me-2" /> Images
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#gallery-videos"
              >
                <i className="bi bi-play-circle me-2" /> Videos
              </button>
            </li>
          </ul>
          <div className="tab-content" id="galleryTabContent">
            {/* Image Slider */}
            <div className="tab-pane fade show active" id="gallery-images">
              <div className="swiper gallery-image-slider pb-5">
                <div className="swiper-wrapper">
                  {/* Img 1 */}
                  <div className="swiper-slide">
                    <div className="gallery-card">
                      <div className="gallery-img-wrap">
                        <img
                          src="./assets/Gallery_img/gallery_img (1).jpg"
                          alt="Children studying"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Img 2 */}
                  <div className="swiper-slide">
                    <div className="gallery-card">
                      <div className="gallery-img-wrap">
                        <img
                          src="./assets/Gallery_img/gallery_img (6).jpg"
                          alt="Art activities"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Img 3 */}
                  <div className="swiper-slide">
                    <div className="gallery-card">
                      <div className="gallery-img-wrap">
                        <img
                          src="./assets/Gallery_img/gallery_img (7).jpg"
                          alt="Health camp"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Img 4 */}
                  <div className="swiper-slide">
                    <div className="gallery-card">
                      <div className="gallery-img-wrap">
                        <img
                          src="./assets/Gallery_img/gallery_img (4).jpg"
                          alt="Events"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination image-pagination" />
              </div>
            </div>
            {/* Video Slider */}
            <div className="tab-pane fade" id="gallery-videos">
              <div className="swiper gallery-video-slider pb-5">
                <div className="swiper-wrapper">
                  {/* Video 1 */}
                  <div className="swiper-slide">
                    <div className="gallery-card">
                      <div className="gallery-video-wrap">
                        <span className="gallery-play-badge" aria-hidden="true">
                          <i className="bi bi-play-fill" />
                        </span>
                        <video
                          controls
                          preload="metadata"
                          playsInline
                          title="Netram Video"
                        >
                          <source src="#" type="video/mp4" />
                        </video>
                      </div>
                    </div>
                  </div>
                  {/* Video 2 */}
                  <div className="swiper-slide">
                    <div className="gallery-card">
                      <div className="gallery-video-wrap">
                        <span className="gallery-play-badge" aria-hidden="true">
                          <i className="bi bi-play-fill" />
                        </span>
                        <video
                          controls
                          preload="metadata"
                          playsInline
                          title="Netram Video 2"
                        >
                          <source src="#" type="video/mp4" />
                        </video>
                      </div>
                    </div>
                  </div>
                  {/* Video 3 */}
                  <div className="swiper-slide">
                    <div className="gallery-card">
                      <div className="gallery-video-wrap">
                        <span className="gallery-play-badge" aria-hidden="true">
                          <i className="bi bi-play-fill" />
                        </span>
                        <video
                          controls
                          preload="metadata"
                          playsInline
                          title="Netram Video 3"
                        >
                          <source src="#" type="video/mp4" />
                        </video>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination video-pagination" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
