import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrum from "../components/Breadcrum";

export default function CSRCollaboration() {
  return (
    <div>
        <Header />
        <Breadcrum title="CSR Collaboration" />
        <section className="section-padding-sm csr-program-section" id="compliance">
  <div className="container">
    <div className="text-center mb-3">
      <span className="csr-eyebrow">Flagship CSR Initiative</span>
    </div>
    <div className="text-center mb-5">
      <h2 className="section-title mb-3">
        Flagship Community Program{" "}
        <span className="gradient-text">FY 2025-26</span>
      </h2>
      <p className="lead mb-0">
        Program Name: <strong>Adopt an Eye</strong> <span aria-hidden="true" />
      </p>
      <p className="mb-0 fst-italic">
        Because vision deserves ownership, not charity
      </p>
    </div>
    <div className="row g-3 justify-content-center mb-5">
      <div className="col-6 col-lg-3">
        <div className="csr-stat-card">
          <span className="csr-stat-value">20,000</span>
          <span className="csr-stat-label">Free screenings</span>
        </div>
      </div>
      <div className="col-6 col-lg-3">
        <div className="csr-stat-card">
          <span className="csr-stat-value">650</span>
          <span className="csr-stat-label">Free cataract surgeries</span>
        </div>
      </div>
      <div className="col-6 col-lg-3">
        <div className="csr-stat-card">
          <span className="csr-stat-value">2</span>
          <span className="csr-stat-label">Strategic CSR partners</span>
        </div>
      </div>
      <div className="col-6 col-lg-3">
        <div className="csr-stat-card">
          <span className="csr-stat-value">1</span>
          <span className="csr-stat-label">Integrated vision mission</span>
        </div>
      </div>
    </div>
    <div className="row g-4">
      <div className="col-lg-8">
        <div className="compliance-card csr-hero-card h-100 p-4 p-md-5">
          <div className="csr-card-kicker mb-2">Community-first approach</div>
          <h3 className="h4 mb-3">Program Overview</h3>
          <p className="mb-0">
            Under the Adopt an Eye community outreach initiative, Netram Eye
            Foundation, with the generous support of GE India Industrial Pvt.
            Ltd. and IDBI Bank, will conduct large-scale eye screening and
            vision care services for underserved communities.
          </p>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="compliance-card csr-meta-card h-100 p-4 p-md-5">
          <div className="csr-card-kicker mb-2">Partners</div>
          <h3 className="h4 mb-3">Strategic CSR Partners</h3>
          <ul className="mb-0 ps-3">
            <li>GE India Industrial Pvt. Ltd.</li>
            <li>IDBI Bank</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="row g-4 mt-1">
      <div className="col-lg-6">
        <div className="compliance-card csr-detail-card h-100 p-4 p-md-5">
          <div className="csr-card-kicker mb-2">Impact goals</div>
          <h3 className="h4 mb-3">Key Commitments</h3>
          <ul className="mb-0 ps-3">
            <li>
              20,000 community members to receive free eye screening and 650
              free cataract surgery.
            </li>
            <li>
              Early detection of cataract, refractive errors and eye diseases.
            </li>
            <li>Referral linkage for advanced treatment and surgeries.</li>
            <li>Integration with Netram's base hospital and outreach camps.</li>
          </ul>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="compliance-card csr-detail-card h-100 p-4 p-md-5">
          <div className="csr-card-kicker mb-2">Care pathway</div>
          <h3 className="h4 mb-3">Cataract Care Integration</h3>
          <p>
            As part of this initiative, identified cataract patients from
            community screenings will be linked to Netram Eye Foundation's free
            cataract surgery program, ensuring:
          </p>
          <ul className="mb-0 ps-3">
            <li>Zero-cost treatment</li>
            <li>Ethical counselling</li>
            <li>Safe surgery and post-operative care</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="row g-4 mt-1">
      <div className="col-lg-7">
        <div className="compliance-card csr-workflow-card h-100 p-4 p-md-5">
          <div className="csr-card-kicker mb-2">Delivery model</div>
          <h3 className="h4 mb-3">How the Program Works</h3>
          <ul className="mb-0 ps-3">
            <li>Community-based eye screening camps</li>
            <li>Mobilization through local NGOs, RWAs and institutions</li>
            <li>On-site basic diagnostics</li>
            <li>Hospital referral for advanced care</li>
          </ul>
          <p className="mt-3 mb-0 fst-italic">
            Old wisdom, modern systems. Works every time.
          </p>
        </div>
      </div>
      <div className="col-lg-5">
        <div className="compliance-card csr-impact-card h-100 p-4 p-md-5">
          <div className="csr-card-kicker mb-2">Why it matters</div>
          <h3 className="h4 mb-3">Why Adopt an Eye Matters</h3>
          <ul className="mb-0 ps-3">
            <li>Preventable blindness stopped early</li>
            <li>Elderly regain independence</li>
            <li>Working-age population stays productive</li>
            <li>CSR money turns into measurable social ROI</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="compliance-card csr-vision-card mt-4 p-4 p-md-5">
      <div className="csr-card-kicker mb-2">Shared commitment</div>
      <h3 className="h4 mb-3">Shared Vision, Shared Responsibility</h3>
      <p className="mb-0">
        This collaboration reflects a strong belief shared by GE India
        Industrial Pvt. Ltd., IDBI Bank, and Netram Eye Foundation that
        sustainable community health begins with accessible vision care.
      </p>
    </div>
  </div>
</section>

        <Footer/>
    </div>
  )
}
