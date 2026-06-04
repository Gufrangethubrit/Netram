export default function Faq() {
  return (
    <div>
      <section className="faq-section section-padding" id="faq">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <div className="section-tag mx-auto">
              <i className="bi bi-patch-question-fill me-2" /> Frequently Asked
              Questions
            </div>
            <h2 className="section-title">
              Common <span className="gradient-text">Queries</span>
            </h2>
            <p className="section-desc mx-auto" style={{ maxWidth: 600 }}>
              Find answers to the most common questions about our foundation,
              donations, and how you can help.
            </p>
          </div>
          <div className="row g-5 align-items-center">
            {/* Left Column: FAQ */}
            <div className="col-lg-6" data-aos="fade-right">
              <div className="accordion accordion-custom" id="netramFaq">
                {/* FAQ Item 1 */}
                <div className="accordion-item shadow-sm border-0 mb-3">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-1"
                    >
                      <span className="faq-num me-3">01</span> What is Netram
                      Eye Foundation?
                    </button>
                  </h2>
                  <div
                    id="faq-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#netramFaq"
                  >
                    <div className="accordion-body">
                      Netram Eye Foundation is a non-profit working on eye care
                      and preventive health services, focused on reducing
                      preventable blindness, providing school screenings, and
                      running outreach camps across India.
                    </div>
                  </div>
                </div>
                {/* FAQ Item 2 */}
                <div className="accordion-item shadow-sm border-0 mb-3">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-2"
                    >
                      <span className="faq-num me-3">02</span> Is my donation
                      tax-exempt?
                    </button>
                  </h2>
                  <div
                    id="faq-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#netramFaq"
                  >
                    <div className="accordion-body">
                      Yes, donations to Netram Eye Foundation are tax-exempt
                      subject to applicable laws. Donors will receive the
                      required certificate for tax purposes.
                    </div>
                  </div>
                </div>
                {/* FAQ Item 3 */}
                <div className="accordion-item shadow-sm border-0 mb-3">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-3"
                    >
                      <span className="faq-num me-3">03</span> How can I become
                      a volunteer?
                    </button>
                  </h2>
                  <div
                    id="faq-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#netramFaq"
                  >
                    <div className="accordion-body">
                      We welcome volunteers for eye camps, screening drives and
                      outreach. Apply via our website or email{" "}
                      <strong>info@netrameyefoundation.com</strong>.
                    </div>
                  </div>
                </div>
                {/* FAQ Item 4 */}
                <div className="accordion-item shadow-sm border-0 mb-3">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-4"
                    >
                      <span className="faq-num me-3">04</span> Where does my
                      donation money go?
                    </button>
                  </h2>
                  <div
                    id="faq-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#netramFaq"
                  >
                    <div className="accordion-body">
                      Transparency is our priority. Your contributions go
                      directly toward our core programs: funding digital
                      classrooms, providing nutritious meals to children,
                      medical relief work, and skill development for women in
                      marginalized communities.
                    </div>
                  </div>
                </div>
                {/* FAQ Item 5 */}
                <div className="accordion-item shadow-sm border-0 mb-3">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-5"
                    >
                      <span className="faq-num me-3">05</span> Can I donate in
                      kind (books, clothes, food)?
                    </button>
                  </h2>
                  <div
                    id="faq-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#netramFaq"
                  >
                    <div className="accordion-body">
                      Absolutely! We accept donations such as educational
                      materials, new clothes, and non-perishable food items.
                      Please contact our office in New Delhi to arrange a
                      drop-off or collection.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Column: Image with Tilt */}
            <div className="col-lg-6" data-aos="fade-left">
              <div className="faq-image-wrapper" style={{ perspective: 1200 }}>
                <div className="faq-image-tilt">
                  <img
                    src="./assets/new/img108.jpg"
                    alt="About Netram Eye Foundation"
                  />
                  <div className="faq-image-badge">
                    <i className="bi bi-heart-fill" />
                    <span>Helping Hands</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
