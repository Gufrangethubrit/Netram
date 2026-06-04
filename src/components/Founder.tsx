// Founder component

export default function Founder() {
  return (
   <div><section className="founder-section section-padding" id="founder">
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-7" data-aos="fade-right">
          <div className="section-tag">
            <i className="bi bi-person-badge-fill me-2" /> Founder
          </div>
          <p className="section-descp founder-desc">
            <strong>Dr. Anchal Gupta</strong>, an ophthalmologist, has become a
            <strong>beacon of hope for thousands of people</strong>
            as she has been helping over the last ten years.
            She left her job to make
            <strong>eye care accessible for all.</strong>
            She embraced her unique abilities and didn’t let fear hold her back from
            <strong>pursuing her dreams.</strong>
            She is both —
            <strong>a wonderful mother and an incredible doctor.</strong>
            With razor sharp focus and
            <strong>dedication of steel</strong>,
            she is set on her mission to
            <strong>make this world a better place.</strong>
            She inspires other women to
            <strong>believe in themselves</strong>
            as she continues to
            <strong>break the glass ceiling day after day.</strong>
          </p>
          <div className="founder-values-grid">
            <div className="founder-value-card">
              <div className="founder-value-icon">
                <i className="bi bi-eye" />
              </div>
              <div>
                <h5>
                  <strong className="text-white">Message From The Founder</strong>
                </h5>
                <p>
                  <strong className="text-white">
                    “Dhan rahe, na joban rahe, rahe na gaam na dhaam
                    Kabir jug me Yash rahe, kar de kisi ka kaam”
                  </strong>
                </p>
                <p className="text-white">
                  A life lived with
                  <strong className="text-white">good intentions</strong>
                  and dedicated to
                  <strong className="text-white">others well-being</strong>
                  is the ultimate way to conduct our beings.
                  If we all put our
                  <strong className="text-white">sincere efforts collectively</strong>,
                  we can
                  <strong className="text-white">make this world better.</strong>
                </p>
                <br />
                <p className="text-white">
                  The joy of
                  <strong className="text-white">giving back and adding value to society</strong>
                  is fulfilling and unparalleled.
                  As a guiding force at
                  <strong className="text-white">Netram Eye Foundation</strong>,
                  I always endeavour to instill
                  <strong className="text-white">empathy and resilience</strong>
                  in all my teammates.
                  As a founder, I dream of spreading our wings of
                  <strong className="text-white">empathy and excellence</strong>
                  to the last man of society.
                </p>
              </div>
            </div>
          </div>
          {/* <div class="founder-impact-grid">
                  <div class="founder-impact-card">
                      <span class="impact-number">10L+</span>
                      <span class="impact-label">PEOPLE REACHED</span>
                  </div>
                  <div class="founder-impact-card">
                      <span class="impact-number">1.2L+</span>
                      <span class="impact-label">SCHOOL SCREENINGS</span>
                  </div>
                  <div class="founder-impact-card">
                      <span class="impact-number">2500+</span>
                      <span class="impact-label">CAMPS CONDUCTED</span>
                  </div>
              </div> */}
        </div>
        <div className="col-lg-5" data-aos="fade-left">
          <div className="founder-image-wrap">
            <img src="./assets/volunteer/anchal_new_2.webp" alt="Dr Anchal Gupta — Founder" />
            <div className="founder-image-badge">
              <strong>Dr. Anchal Gupta</strong>
              <span>Founder, Netram Eye Foundation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section></div>

  )
}
