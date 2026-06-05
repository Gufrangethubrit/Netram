import React from "react";
import Header from "../components/Header";
import Breadcrum from "../components/Breadcrum";
import Footer from "../components/Footer";

export default function Review() {
  const tilt = (e: React.MouseEvent<HTMLDivElement>, element: HTMLDivElement) => {
    const rect = element.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const tiltX = (y - 0.5) * 10;
    const tiltY = (0.5 - x) * 10;
    element.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  };

  const untilt = (element: HTMLDivElement) => {
    element.style.transform = 'rotateX(0) rotateY(0)';
  };

  return (
    <div>
      <Header />
      <Breadcrum title="Review" />
      <div>
        <section
          className="testimonials-section section-padding"
          id="testimonials"
        >
          <div className="container">
            <div className="text-center mb-5" data-aos="fade-up">
              <div className="section-tag mx-auto">
                <i className="bi bi-chat-quote-fill me-2" /> What People Say
              </div>
              <h2 className="section-title">
                Voices From the <span className="gradient-text">Heart</span>
              </h2>
            </div>
            {/* Static Grid Container (replaces Swiper) */}
            <div className="testimonials-grid" data-aos="fade-up">
              <div className="row g-4">
                <div className="col-lg-3 col-md-6">
                  <div className="testimonial-card">
                    <div className="quote-icon">
                      <i className="bi bi-quote" />
                    </div>
                    <p>
                      "Netram Eye Foundation ne hamare ghar aakar meri aankhon
                      ki jaanch ki aur mere bete ki zindagi badal gayi. Aaj uske
                      sapne clear hain — woh doctor banna chahta hai."
                    </p>
                    <div className="testimonial-author">
                      <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
                        alt="Meena Devi"
                      />
                      <div>
                        <strong>Meena Devi</strong>
                        <span>Mother, Jaipur</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="testimonial-card featured-testimonial">
                    <div className="quote-icon">
                      <i className="bi bi-quote" />
                    </div>
                    <p>
                      "I have been volunteering with Netram for three years.
                      Working on eye camps and screenings has been deeply
                      rewarding — we see immediate impact in people’s lives."
                    </p>
                    <div className="testimonial-author">
                      <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
                        alt="Arjun Sharma"
                      />
                      <div>
                        <strong>Arjun Sharma</strong>
                        <span>Volunteer, Delhi</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="testimonial-card">
                    <div className="quote-icon">
                      <i className="bi bi-quote" />
                    </div>
                    <p>
                      "Our company partnered with Netram Eye Foundation for a
                      CSR initiative. Their professionalism and transparency
                      made the partnership highly successful."
                    </p>
                    <div className="testimonial-author">
                      <img
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80"
                        alt="Kavita Joshi"
                      />
                      <div>
                        <strong>Kavita Joshi</strong>
                        <span>CSR Partner, Mumbai</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="testimonial-card">
                    <div className="quote-icon">
                      <i className="bi bi-quote" />
                    </div>
                    <p>
                      "The change I see in these children is breath-taking. They
                      are confident, skilled and ready to take on the world.
                      Truly inspiring!"
                    </p>
                    <div className="testimonial-author">
                      <img
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80"
                        alt="Sanjay Verma"
                      />
                      <div>
                        <strong>Sanjay Verma</strong>
                        <span>Local Community Leader</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Additional user-provided reviews */}
                <div className="col-lg-3 col-md-6">
                  <div className="testimonial-card">
                    <div className="quote-icon">
                      <i className="bi bi-quote" />
                    </div>
                    <p>
                      I recently took my father to Netram for cataract surgery,
                      and we had an excellent experience. Dr. Anchal Gupta
                      performed the surgery, and it went smoothly without any
                      complications. The recovery process was also painless and
                      easy, thanks to the clear instructions provided before and
                      after the surgery. My father is very satisfied with the
                      entire procedure. Special thanks to Dr. Neha and the
                      support staff for their help and care.
                    </p>
                    <div className="testimonial-author">
                      <img
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80"
                        alt="Hemant Mehta"
                      />
                      <div>
                        <strong>Hemant Mehta</strong>
                        <span>46 weeks ago</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="testimonial-card">
                    <div className="quote-icon">
                      <i className="bi bi-quote" />
                    </div>
                    <p>
                      We have recently referred a patient from our centre to
                      this eye centre and received amazing feedback about the
                      Eye Specialist. Thank you for introducing me to such an
                      awesome doctor — a healer of eyes and hearts. With
                      heartfelt gratitude.
                    </p>
                    <div className="testimonial-author">
                      <img
                        src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=100&q=80"
                        alt="Unidrgspecialtylaboratory"
                      />
                      <div>
                        <strong>Unidrgspecialtylaboratory</strong>
                        <span>14 Dec 2024</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="testimonial-card">
                    <div className="quote-icon">
                      <i className="bi bi-quote" />
                    </div>
                    <p>
                      "Netram Eye Foundation transforms lives by restoring
                      vision, thanks to the dedication of its expert doctor
                      Anchal Mam and compassionate staff. Your tireless efforts
                      and care bring light and hope to countless lives. Thank
                      you for making a lasting difference!"
                    </p>
                    <div className="testimonial-author">
                      <img
                        src="https://images.unsplash.com/photo-1545996124-1b58d5d3c54b?w=100&q=80"
                        alt="Piyush Mishra"
                      />
                      <div>
                        <strong>Piyush Mishra</strong>
                        <span>7 Dec 2024</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="testimonial-card">
                    <div className="quote-icon">
                      <i className="bi bi-quote" />
                    </div>
                    <p>
                      Meri eyes me galucoma hai, kisi bhi hospital me treat nahi
                      ho pa raha tha. Dr Anchal ne meri surgery kari. Ab mai
                      bilkul theek dekh sakti hu, mujhe nayi life mil gayi.
                      Thanks Netram!
                    </p>
                    <div className="testimonial-author">
                      <img
                        src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&q=80"
                        alt="Satpal Kashyap"
                      />
                      <div>
                        <strong>Satpal Kashyap</strong>
                        <span>6 Nov 2024</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="testimonial-card">
                    <div className="quote-icon">
                      <i className="bi bi-quote" />
                    </div>
                    <p>
                      My mother was suffering from cataract in the right eye. Dr
                      Anchal Gupta treated her with great care. She is polite,
                      generous, and a great ophthalmologist. Great hospitality
                      and services provided by her team.
                    </p>
                    <div className="testimonial-author">
                      <img
                        src="https://images.unsplash.com/photo-1548142813-1af1b5a0d0f4?w=100&q=80"
                        alt="Rohan Sapra"
                      />
                      <div>
                        <strong>Rohan Sapra</strong>
                        <span>5 Nov 2024</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="testimonial-card">
                    <div className="quote-icon">
                      <i className="bi bi-quote" />
                    </div>
                    <p>
                      Netram ek bhot hi acha clinic h. Yaha akar mera operation
                      hua aur ab mein bahut clear dekh sakta hun. Staff bahut
                      achha hai. Highly recommended.
                    </p>
                    <div className="testimonial-author">
                      <img
                        src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=100&q=80"
                        alt="Ramesh Tulli"
                      />
                      <div>
                        <strong>Ramesh Tulli</strong>
                        <span>2 Nov 2024</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="testimonial-card">
                    <div className="quote-icon">
                      <i className="bi bi-quote" />
                    </div>
                    <p>
                      Meri cataract surgery yahan hui, sirf 3 minute 30sec lage.
                      Mai doctor Anchal ko pichle 8 saal se dikha rahi hu, bahut
                      acchi doctor hai. I'm very very happy. God bless them.
                    </p>
                    <div className="testimonial-author">
                      <img
                        src="https://images.unsplash.com/photo-1541534401786-8a3c7a5d4f7d?w=100&q=80"
                        alt="Anonymous Patient"
                      />
                      <div>
                        <strong>Anonymous Patient</strong>
                        <span>Social media</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="testimonial-card">
                    <div className="quote-icon">
                      <i className="bi bi-quote" />
                    </div>
                    <p>
                      I am satisfied with the service; free camp at school
                      brought us here and we received excellent free services.
                      Very nice staff and kind doctors.
                    </p>
                    <div className="testimonial-author">
                      <img
                        src="https://images.unsplash.com/photo-1544005313-1ecb6a53e0b4?w=100&q=80"
                        alt="Purwah Dutta"
                      />
                      <div>
                        <strong>Purwah Dutta</strong>
                        <span>26 Aug 2024</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="testimonial-card">
                    <div className="quote-icon">
                      <i className="bi bi-quote" />
                    </div>
                    <p>
                      I had a very good experience at Netram with Dr Anchal. She
                      was the sweetest and assured us everything would go
                      smoothly. I am very happy that I no longer need to wear
                      eye glasses.
                    </p>
                    <div className="testimonial-author">
                      <img
                        src="https://images.unsplash.com/photo-1545996124-9f3f6d0b7b11?w=100&q=80"
                        alt="Shagun Khanna"
                      />
                      <div>
                        <strong>Shagun Khanna</strong>
                        <span>24 Aug 2024</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="testimonial-card">
                    <div className="quote-icon">
                      <i className="bi bi-quote" />
                    </div>
                    <p>
                      Meri maa ka parda damage tha, sab jagah ilaj mana ho gaya
                      tha. Dr Anchal mam ne theek kar diya... jaise koi magic
                      hua ho. Best eye hospital.
                    </p>
                    <div className="testimonial-author">
                      <img
                        src="https://images.unsplash.com/photo-1547425260-2f5c0f6b5b8f?w=100&q=80"
                        alt="Madan Sethi"
                      />
                      <div>
                        <strong>Madan Sethi</strong>
                        <span>13 Aug 2024</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Second batch */}
                <div className="col-lg-3 col-md-6">
                  <div className="testimonial-card">
                    <div className="quote-icon">
                      <i className="bi bi-quote" />
                    </div>
                    <p>
                      Mujhe bahut accha laga. Netram ki team mere home par aayi
                      home visit ke liye. Bohot acchi facility. 10/10 rating.
                    </p>
                    <div className="testimonial-author">
                      <img
                        src="https://images.unsplash.com/photo-1547425260-2f5c0f6b5b8f?w=100&q=80"
                        alt="Ravi Kumar"
                      />
                      <div>
                        <strong>Ravi Kumar</strong>
                        <span>4 hours ago</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="testimonial-card">
                    <div className="quote-icon">
                      <i className="bi bi-quote" />
                    </div>
                    <p>
                      Meri maa ka cataract surgery Netram Eye Hospital me hua
                      tha, jo Dr. Anchal Gupta ne kiya. Surgery se pehle hum
                      kaafi tension me the. Surgery ke baad maa ki eyesight me
                      kaafi improvement hai. Family ke liye yeh bahut badi
                      relief wali baat hai.
                    </p>
                    <div className="testimonial-author">
                      <img
                        src="https://images.unsplash.com/photo-1545996124-1b58d5d3c54b?w=100&q=80"
                        alt="Dinesh Kashyap"
                      />
                      <div>
                        <strong>Dinesh Kashyap</strong>
                        <span>14 weeks ago</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="testimonial-card">
                    <div className="quote-icon">
                      <i className="bi bi-quote" />
                    </div>
                    <p>
                      "Dr. Anchal Gupta and Netram Clinic have been our family's
                      trusted eye care partners for over a decade! From routine
                      check-ups to complex surgeries, they've handled it all
                      with expertise and care. Can't recommend them enough!"
                    </p>
                    <div className="testimonial-author">
                      <img
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80"
                        alt="Priyanka Priyadarshini"
                      />
                      <div>
                        <strong>Priyanka Priyadarshini</strong>
                        <span>16 weeks ago</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="testimonial-card">
                    <div className="quote-icon">
                      <i className="bi bi-quote" />
                    </div>
                    <p>
                      Netram hospital ki taraf se jo nayan hans naam se aankho
                      ki janch ke liye gaadi chalai jaa rahi hai; maine usme
                      apni aankhe janch karai aur mujhe motiya bind bataya gaya
                      jiske liye mujhe free coupon diya hai.
                    </p>
                    <div className="testimonial-author">
                      <img
                        src="https://images.unsplash.com/photo-1548142813-1af1b5a0d0f4?w=100&q=80"
                        alt="Bivash Chandra"
                      />
                      <div>
                        <strong>Bivash Chandra</strong>
                        <span>23 weeks ago</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="testimonial-card">
                    <div className="quote-icon">
                      <i className="bi bi-quote" />
                    </div>
                    <p>
                      I first found it in my school camp; Netram had a free camp
                      then I started coming here. It's been more than 7 years. I
                      have a great experience — Netram is really good.
                    </p>
                    <div className="testimonial-author">
                      <img
                        src="https://images.unsplash.com/photo-1541534401786-8a3c7a5d4f7d?w=100&q=80"
                        alt="Aarushi"
                      />
                      <div>
                        <strong>Aarushi</strong>
                        <span>26 weeks ago</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="testimonial-card">
                    <div className="quote-icon">
                      <i className="bi bi-quote" />
                    </div>
                    <p>
                      Best hospital and doctor I have ever seen. My surgery went
                      so well, I am very happy with my vision.
                    </p>
                    <div className="testimonial-author">
                      <img
                        src="https://images.unsplash.com/photo-1545996124-9f3f6d0b7b11?w=100&q=80"
                        alt="Alfred John"
                      />
                      <div>
                        <strong>Alfred John</strong>
                        <span>27 weeks ago</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="testimonial-card">
                    <div className="quote-icon">
                      <i className="bi bi-quote" />
                    </div>
                    <p>Good job, acha camp hai.</p>
                    <div className="testimonial-author">
                      <img
                        src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=100&q=80"
                        alt="Md Sameem"
                      />
                      <div>
                        <strong>Md Sameem</strong>
                        <span>30 weeks ago</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="testimonial-card">
                    <div className="quote-icon">
                      <i className="bi bi-quote" />
                    </div>
                    <p>Mujhe camp bahut achha laga.</p>
                    <div className="testimonial-author">
                      <img
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80"
                        alt="Shriram Ahirwar"
                      />
                      <div>
                        <strong>Shriram Ahirwar</strong>
                        <span>32 weeks ago</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="testimonial-card">
                    <div className="quote-icon">
                      <i className="bi bi-quote" />
                    </div>
                    <p>Acha camp hai.</p>
                    <div className="testimonial-author">
                      <img
                        src="https://images.unsplash.com/photo-1545996124-1b58d5d3c54b?w=100&q=80"
                        alt="Varun Koli"
                      />
                      <div>
                        <strong>Varun Koli</strong>
                        <span>32 weeks ago</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="testimonial-card">
                    <div className="quote-icon">
                      <i className="bi bi-quote" />
                    </div>
                    <p>
                      Best camp — 400 OPD. Thank you Netram Eyes Hospital and
                      team!
                    </p>
                    <div className="testimonial-author">
                      <img
                        src="https://images.unsplash.com/photo-1548142813-1af1b5a0d0f4?w=100&q=80"
                        alt="Jai Kishan"
                      />
                      <div>
                        <strong>Jai Kishan</strong>
                        <span>32 weeks ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-5" data-aos="fade-up">
                <a href="#" className="btn-primary-custom px-5">
                  View All Review
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* ----branch----- */}
        <div className="dashboard">
          {/* Cards */}
          <div className="cards-col">
            <div
              className="stat-card card-purple"
onMouseMove={(e) => tilt(e, e.currentTarget)}
               onMouseLeave={(e) => untilt(e.currentTarget)}
            >
              <div className="icon-wrap icon-purple">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <div className="card-info">
                <div className="card-num" id="n0">
                  36
                </div>
                <div className="card-label">States</div>
                <div className="card-sub">Across the Country</div>
              </div>
            </div>
            <div
              className="stat-card card-blue"
onMouseMove={(e) => tilt(e, e.currentTarget)}
               onMouseLeave={(e) => untilt(e.currentTarget)}
            >
              <div className="icon-wrap icon-blue">
                <svg viewBox="0 0 24 24">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              </div>
              <div className="card-info">
                <div className="card-num" id="n1">
                  10
                </div>
                <div className="card-label">Our Members</div>
                <div className="card-sub">Across the Country</div>
              </div>
            </div>
            <div
              className="stat-card card-amber"
onMouseMove={(e) => tilt(e, e.currentTarget)}
               onMouseLeave={(e) => untilt(e.currentTarget)}
            >
              <div className="icon-wrap icon-amber">
                <svg viewBox="0 0 24 24">
                  <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z" />
                </svg>
              </div>
              <div className="card-info">
                <div className="card-num" id="n2">
                  1
                </div>
                <div className="card-label">Our Branches</div>
                <div className="card-sub">Across the Country</div>
              </div>
            </div>
            <div
              className="stat-card card-teal"
onMouseMove={(e) => tilt(e, e.currentTarget)}
               onMouseLeave={(e) => untilt(e.currentTarget)}
            >
              <div className="icon-wrap icon-teal">
                <svg viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div className="card-info">
                <div className="card-num" id="n3">
                  0
                </div>
                <div className="card-label">Our Volunteers</div>
                <div className="card-sub">Across the Country</div>
              </div>
            </div>
          </div>
          {/* Map */}
          <div className="map-col">
            <div id="map" />
            <div className="map-info-card">
              <div className="map-info-name">
                <i className="fa-solid fa-building" /> Netram Eye Foundation
              </div>
              <div className="map-info-addr">
                <i className="fa-solid fa-location-dot" /> E-98, Greater
                Kailash-2
                <br />
                <i className="fa-solid fa-map-marker-alt" /> New Delhi – 110048
                <br />
                <i className="fa-solid fa-phone" /> 011-41676655 / 9212646655
              </div>
              <div className="map-info-tags">
                <span className="tag tag-green">
                  <i className="fa-solid fa-hand-holding-heart" /> NGO
                </span>
                <span className="tag tag-blue">
                  <i className="fa-solid fa-book-open" /> Education
                </span>
                <span className="tag tag-orange">
                  <i className="fa-solid fa-heart-pulse" /> Healthcare
                </span>
              </div>
            </div>
            <div className="map-live">
              <div className="live-dot" />
              <i className="fa-solid fa-signal" /> 1 Branch Active
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
