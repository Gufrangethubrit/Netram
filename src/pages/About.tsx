import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrum from "../components/Breadcrum";

export default function About() {
  return (
    <div>
        <Header />
        <Breadcrum title="About Us" />
        <section className="about-section section-padding" id="about">
  <div className="container">
    <div className="row align-items-center g-5">
      <div className="col-lg-12" data-aos="fade-left">
        <div className="section-tag">
          <i className="bi bi-eye-fill me-2" /> About Us
        </div>
        <h2 className="section-title">
          Bringing Light to <span className="gradient-text"> Every Life</span>
        </h2>
        <p className="section-descp">
          We are a non-profit, non-government organization committed to
          uplifting the last man of society, with a focus on eye care and
          preventive health services. NEF is perpetually driven by providing
          comprehensive solutions to address public health concerns. We work
          closely with our partners to achieve good health care for everyone. We
          are dedicated to developing vital resources to enhance India’s
          existing eye and health care infrastructure. We are committed to being
          a transparent, accountable, inclusive, and sustainable organization
          that respects all its members and stakeholders actively seeking
          participation in democratic decision-making and organizational
          learning. Netram Eye Foundation is registered in Delhi under the
          Societies Registration Act in 2013, led by a visionary doctor, Dr.
          Anchal Gupta, an ophthalmologist and a like-minded group of
          professionals who came together to work on a people-centric model of
          development in areas like eye care, public health, education, mental
          health, women empowerment, community development, skill training, and
          social welfare.
        </p>
      </div>
    </div>
    <br />
    <p className="section-descp">
      An urge to reach out to the millions who have been deprived of medical
      assistance due to poverty kept bothering the young ophthalmologist, Dr.
      Anchal Gupta. She has become a beacon of hope for thousands of people she
      has been helping over the last ten years. We proudly have worked in
      toughest terrains across 23 states of country, touching one life at a
      time. We strongly believe, “If we don’t change the world. Who will, If not
      now, Then when”. We offer paramedical and allied healthcare training and
      employment. We provide skill training in diversified employable streams.
      Our mission is to eradicate the lack of healthcare facilities in rural
      India by creating a chain of primary healthcare units that offer
      high-quality, affordable outpatient care for low-income. We endeavor to
      eliminate all causes of avoidable blindness and reach a sustainable level
      where people can access appropriate health services.
    </p>
    <br />
    <div className="col-lg-12" data-aos="fade-right">
      <div className="about-video-wrap">
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/IhMZ7OEiGDI?si=Ix5fWmjgUSj-oXJt&autoplay=1&mute=1"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{
              border: "3px solid darkgreen",
              boxShadow: "0 12px 30px rgba(3,50,31,0.25)"
            }}
          />
        </div>
      </div>
    </div>
  </div>
</section>

        <Footer/>
    </div>
  )
}
