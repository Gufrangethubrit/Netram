import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrum from "../components/Breadcrum";

export default function Vision() {
  return (
    <div>
      <Header />
      <Breadcrum title="Our Vision" />
      <section
        className="mission-vision-section section-padding"
        id="mission-vision"
      >
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-12" data-aos="fade-left">
              <div className="mv-card mv-card-mission p-4 p-lg-5 h-100">
                <div className="mv-icon mv-icon-mission mb-4">
                  <i className="bi bi-eye" />
                </div>
                <h3 className="mv-title mb-3">Our Vision</h3>
                <div className="mv-desc text-muted mb-0 mission-copy">
                  <p>
                    At Netram Eye Foundation, our vision goes beyond providing
                    eye care — we envision building a society where healthcare,
                    dignity, and compassion reach every individual, especially
                    those who are often unheard, unseen, and underserved.
                  </p>
                  <p>
                    We aspire to create a future where no person is deprived of
                    quality healthcare because of financial limitations, social
                    barriers, gender identity, or lack of accessibility. Our
                    goal is to reach the unreachable and extend care to
                    communities that need it the most.
                  </p>
                  <p>
                    Guided by the values of
                    <strong>Ethics, Empathy, and Excellence,</strong>
                    we are committed to creating meaningful impact through
                    accessible healthcare, awareness initiatives, and
                    community-driven programs.
                  </p>
                  <p>
                    Through our initiatives, we work towards uplifting
                    underserved communities, empowering women, supporting
                    children, and creating safe and inclusive healthcare spaces
                    for members of the transgender community.
                  </p>
                  <p>
                    For us, healthcare is not just about treatment — it is about
                    restoring confidence, opportunity, self-worth, and hope.
                  </p>
                  <p>
                    As our journey continues, we also aspire to advocate for
                    emotional well-being and mental health awareness,
                    recognizing that a healthier society is built not only
                    through physical care, but also through emotional support
                    and human connection.
                  </p>
                  <p className="mb-0">
                    At Netram Eye Foundation, we aim to enhance the dignity and
                    quality of life of individuals, families, and communities by
                    building a future where compassion leads every action and
                    every life is treated with care, equality, and respect.
                    Because our vision is not only to help people see better —
                    but to help humanity live better.
                  </p>
                  <div className="col-lg-12" data-aos="fade-right">
                    <div className="about-video-wrap">
                      <div className="ratio ratio-16x9">
                        <iframe
                          width={560}
                          height={315}
                          src="https://www.youtube.com/embed/5UMIti79O4o?si=SdcE00A_ya00W0pd"
                          title="YouTube video player"
                          frameBorder={0}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
