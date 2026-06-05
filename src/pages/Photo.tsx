import React from 'react'
import Header from '../components/Header';
import Breadcrum from '../components/Breadcrum';
import Footer from '../components/Footer';

export default function Photo() {
  return (
    <div>
        <Header/>
        <Breadcrum title="Photo Gallery" />
         <div>
  <section className="gallery-section section-padding" id="gallery">
    <div className="container">
      <div className="text-center mb-5" data-aos="fade-up">
        <div className="section-tag mx-auto">
          <i className="bi bi-images me-2" /> Our Gallery
        </div>
      </div>
      <div className="row g-4 gallery-image-grid" data-aos="fade-up" data-aos-delay={100}>
        <div className="col-sm-6 col-lg-3">
          <div className="gallery-card gallery-image-card">
            <div className="gallery-img-wrap gallery-image-wrap">
              <img src="./assets/Gallery_img/gallery_img (1).jpg" alt="Gallery image 1" className="gallery-lightbox-trigger" role="button" tabIndex={0} data-full-src="./assets/Gallery_img/gallery_img (1).jpg" data-full-alt="Gallery image 1" />
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="gallery-card gallery-image-card">
            <div className="gallery-img-wrap gallery-image-wrap">
              <img src="./assets/Gallery_img/gallery_img (2).JPG" alt="Gallery image 2" className="gallery-lightbox-trigger" role="button" tabIndex={0} data-full-src="./assets/Gallery_img/gallery_img (2).JPG" data-full-alt="Gallery image 2" />
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="gallery-card gallery-image-card">
            <div className="gallery-img-wrap gallery-image-wrap">
              <img src="./assets/Gallery_img/gallery_img (3).JPG" alt="Gallery image 3" className="gallery-lightbox-trigger" role="button" tabIndex={0} data-full-src="./assets/Gallery_img/gallery_img (3).JPG" data-full-alt="Gallery image 3" />
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="gallery-card gallery-image-card">
            <div className="gallery-img-wrap gallery-image-wrap">
              <img src="./assets/Gallery_img/gallery_img (4).jpg" alt="Gallery image 4" className="gallery-lightbox-trigger" role="button" tabIndex={0} data-full-src="./assets/Gallery_img/gallery_img (4).jpg" data-full-alt="Gallery image 4" />
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="gallery-card gallery-image-card">
            <div className="gallery-img-wrap gallery-image-wrap">
              <img src="./assets/Gallery_img/gallery_img (5).jpg" alt="Gallery image 5" className="gallery-lightbox-trigger" role="button" tabIndex={0} data-full-src="./assets/Gallery_img/gallery_img (5).jpg" data-full-alt="Gallery image 5" />
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="gallery-card gallery-image-card">
            <div className="gallery-img-wrap gallery-image-wrap">
              <img src="./assets/Gallery_img/gallery_img (6).jpg" alt="Gallery image 6" className="gallery-lightbox-trigger" role="button" tabIndex={0} data-full-src="./assets/Gallery_img/gallery_img (6).jpg" data-full-alt="Gallery image 6" />
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="gallery-card gallery-image-card">
            <div className="gallery-img-wrap gallery-image-wrap">
              <img src="./assets/Gallery_img/gallery_img (7).jpg" alt="Gallery image 7" className="gallery-lightbox-trigger" role="button" tabIndex={0} data-full-src="./assets/Gallery_img/gallery_img (7).jpg" data-full-alt="Gallery image 7" />
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="gallery-card gallery-image-card">
            <div className="gallery-img-wrap gallery-image-wrap">
              <img src="./assets/Gallery_img/gallery_img (8).jpg" alt="Gallery image 8" className="gallery-lightbox-trigger" role="button" tabIndex={0} data-full-src="./assets/Gallery_img/gallery_img (8).jpg" data-full-alt="Gallery image 8" />
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="gallery-card gallery-image-card">
            <div className="gallery-img-wrap gallery-image-wrap">
              <img src="./assets/Gallery_img/gallery_img (9).jpg" alt="Gallery image 9" className="gallery-lightbox-trigger" role="button" tabIndex={0} data-full-src="./assets/Gallery_img/gallery_img (9).jpg" data-full-alt="Gallery image 9" />
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="gallery-card gallery-image-card">
            <div className="gallery-img-wrap gallery-image-wrap">
              <img src="./assets/Gallery_img/gallery_img (10).jpg" alt="Gallery image 10" className="gallery-lightbox-trigger" role="button" tabIndex={0} data-full-src="./assets/Gallery_img/gallery_img (10).jpg" data-full-alt="Gallery image 10" />
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="gallery-card gallery-image-card">
            <div className="gallery-img-wrap gallery-image-wrap">
              <img src="./assets/Gallery_img/image (41).png" alt="Gallery image 11" className="gallery-lightbox-trigger" role="button" tabIndex={0} data-full-src="./assets/Gallery_img/image (41).png" data-full-alt="Gallery image 11" />
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="gallery-card gallery-image-card">
            <div className="gallery-img-wrap gallery-image-wrap">
              <img src="./assets/Gallery_img/img-gallery30.jpg" alt="Gallery image 12" className="gallery-lightbox-trigger" role="button" tabIndex={0} data-full-src="./assets/Gallery_img/img-gallery30.jpg" data-full-alt="Gallery image 12" />
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="gallery-card gallery-image-card">
            <div className="gallery-img-wrap gallery-image-wrap">
              <img src="./assets/Gallery_img/img-gallery_1 (1).jpeg" alt="Gallery image 13" className="gallery-lightbox-trigger" role="button" tabIndex={0} data-full-src="./assets/Gallery_img/img-gallery_1 (1).jpeg" data-full-alt="Gallery image 13" />
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="gallery-card gallery-image-card">
            <div className="gallery-img-wrap gallery-image-wrap">
              <img src="./assets/Gallery_img/img-gallery_1 (2).jpeg" alt="Gallery image 14" className="gallery-lightbox-trigger" role="button" tabIndex={0} data-full-src="./assets/Gallery_img/img-gallery_1 (2).jpeg" data-full-alt="Gallery image 14" />
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="gallery-card gallery-image-card">
            <div className="gallery-img-wrap gallery-image-wrap">
              <img src="./assets/Gallery_img/img-gallery_1 (3).jpeg" alt="Gallery image 15" className="gallery-lightbox-trigger" role="button" tabIndex={0} data-full-src="./assets/Gallery_img/img-gallery_1 (3).jpeg" data-full-alt="Gallery image 15" />
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="gallery-card gallery-image-card">
            <div className="gallery-img-wrap gallery-image-wrap">
              <img src="./assets/Gallery_img/img-gallery_1 (4).jpeg" alt="Gallery image 16" className="gallery-lightbox-trigger" role="button" tabIndex={0} data-full-src="./assets/Gallery_img/img-gallery_1 (4).jpeg" data-full-alt="Gallery image 16" />
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="gallery-card gallery-image-card">
            <div className="gallery-img-wrap gallery-image-wrap">
              <img src="./assets/Gallery_img/img-gallery_1 (5).jpeg" alt="Gallery image 17" className="gallery-lightbox-trigger" role="button" tabIndex={0} data-full-src="./assets/Gallery_img/img-gallery_1 (5).jpeg" data-full-alt="Gallery image 17" />
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="gallery-card gallery-image-card">
            <div className="gallery-img-wrap gallery-image-wrap">
              <img src="./assets/Gallery_img/img-gallery_1 (6).jpeg" alt="Gallery image 18" className="gallery-lightbox-trigger" role="button" tabIndex={0} data-full-src="./assets/Gallery_img/img-gallery_1 (6).jpeg" data-full-alt="Gallery image 18" />
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="gallery-card gallery-image-card">
            <div className="gallery-img-wrap gallery-image-wrap">
              <img src="./assets/Gallery_img/img-gallery_1 (7).jpeg" alt="Gallery image 19" className="gallery-lightbox-trigger" role="button" tabIndex={0} data-full-src="./assets/Gallery_img/img-gallery_1 (7).jpeg" data-full-alt="Gallery image 19" />
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="gallery-card gallery-image-card">
            <div className="gallery-img-wrap gallery-image-wrap">
              <img src="./assets/Gallery_img/img-gallery_1 (8).jpeg" alt="Gallery image 20" className="gallery-lightbox-trigger" role="button" tabIndex={0} data-full-src="./assets/Gallery_img/img-gallery_1 (8).jpeg" data-full-alt="Gallery image 20" />
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="gallery-card gallery-image-card">
            <div className="gallery-img-wrap gallery-image-wrap">
              <img src="./assets/Gallery_img/img-gallery_1 (9).jpeg" alt="Gallery image 21" className="gallery-lightbox-trigger" role="button" tabIndex={0} data-full-src="./assets/Gallery_img/img-gallery_1 (9).jpeg" data-full-alt="Gallery image 21" />
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="gallery-card gallery-image-card">
            <div className="gallery-img-wrap gallery-image-wrap">
              <img src="./assets/Gallery_img/img-gallery_1 (10).jpeg" alt="Gallery image 22" className="gallery-lightbox-trigger" role="button" tabIndex={0} data-full-src="./assets/Gallery_img/img-gallery_1 (10).jpeg" data-full-alt="Gallery image 22" />
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="gallery-card gallery-image-card">
            <div className="gallery-img-wrap gallery-image-wrap">
              <img src="./assets/Gallery_img/img-gallery_1 (11).jpeg" alt="Gallery image 23" className="gallery-lightbox-trigger" role="button" tabIndex={0} data-full-src="./assets/Gallery_img/img-gallery_1 (11).jpeg" data-full-alt="Gallery image 23" />
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="gallery-card gallery-image-card">
            <div className="gallery-img-wrap gallery-image-wrap">
              <img src="./assets/Gallery_img/img-gallery_1 (12).jpeg" alt="Gallery image 24" className="gallery-lightbox-trigger" role="button" tabIndex={0} data-full-src="./assets/Gallery_img/img-gallery_1 (12).jpeg" data-full-alt="Gallery image 24" />
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="gallery-card gallery-image-card">
            <div className="gallery-img-wrap gallery-image-wrap">
              <img src="./assets/Gallery_img/img-gallery_1 (13).jpeg" alt="Gallery image 25" className="gallery-lightbox-trigger" role="button" tabIndex={0} data-full-src="./assets/Gallery_img/img-gallery_1 (13).jpeg" data-full-alt="Gallery image 25" />
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="gallery-card gallery-image-card">
            <div className="gallery-img-wrap gallery-image-wrap">
              <img src="./assets/Gallery_img/img-gallery_1 (14).jpeg" alt="Gallery image 26" className="gallery-lightbox-trigger" role="button" tabIndex={0} data-full-src="./assets/Gallery_img/img-gallery_1 (14).jpeg" data-full-alt="Gallery image 26" />
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="gallery-card gallery-image-card">
            <div className="gallery-img-wrap gallery-image-wrap">
              <img src="./assets/Gallery_img/img-gallery_1 (15).jpeg" alt="Gallery image 27" className="gallery-lightbox-trigger" role="button" tabIndex={0} data-full-src="./assets/Gallery_img/img-gallery_1 (15).jpeg" data-full-alt="Gallery image 27" />
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="gallery-card gallery-image-card">
            <div className="gallery-img-wrap gallery-image-wrap">
              <img src="./assets/Gallery_img/img-gallery_1 (16).jpeg" alt="Gallery image 28" className="gallery-lightbox-trigger" role="button" tabIndex={0} data-full-src="./assets/Gallery_img/img-gallery_1 (16).jpeg" data-full-alt="Gallery image 28" />
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="gallery-card gallery-image-card">
            <div className="gallery-img-wrap gallery-image-wrap">
              <img src="./assets/Gallery_img/img-gallery_1 (17).jpeg" alt="Gallery image 29" className="gallery-lightbox-trigger" role="button" tabIndex={0} data-full-src="./assets/Gallery_img/img-gallery_1 (17).jpeg" data-full-alt="Gallery image 29" />
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="gallery-card gallery-image-card">
            <div className="gallery-img-wrap gallery-image-wrap">
              <img src="./assets/Gallery_img/img2.jpg" alt="Gallery image 30" className="gallery-lightbox-trigger" role="button" tabIndex={0} data-full-src="./assets/Gallery_img/img2.jpg" data-full-alt="Gallery image 30" />
            </div>
          </div>
        </div>
      </div>
    </div></section>
  <div className="modal fade gallery-lightbox-modal" id="galleryLightboxModal" tabIndex={-1} aria-labelledby="galleryLightboxLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-xl">
      <div className="modal-content border-0 bg-transparent">
        <div className="modal-body p-0 position-relative">
          <button type="button" className="btn-close gallery-lightbox-close" data-bs-dismiss="modal" aria-label="Close" />
          <img id="galleryLightboxImage"  alt="Gallery preview" className="img-fluid w-100" />
        </div>
      </div>
    </div>
  </div>
</div>

        <Footer/>
    </div>
  )
}
