import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrum from "../components/Breadcrum";

export default function Certificate() {
  return (
    <div>
      <Header />
      <Breadcrum title="Certificate" />
      <section className="cert-section section-padding">
        <div className="container">
          <div className="text-center mb-5">
            <div className="section-tag mx-auto">
              <i className="bi bi-file-earmark-check-fill me-2" /> Official
              Compliance
            </div>
            <h2 className="section-title">
              Our{" "}
              <span className="gradient-text">Certificates &amp; Reports</span>
            </h2>
            <p className="section-desc mx-auto" style={{ maxWidth: 600 }}>
              Transparency and compliance are at the heart of our mission. View
              and download our official registration, tax-exemption, and audit
              documents.
            </p>
          </div>
          <div className="cert-grid">
            {/* Registration Certificate */}
            <div className="cert-card" data-aos="fade-up">
              <div className="cert-icon">
                <i className="bi bi-award-fill" />
              </div>
              <h4>Trust Registration</h4>
              <p>
                The core registration certificate of Netram Eye Foundation
                establishing its legal non-profit status.
              </p>
              <a
                href="./assets/certificate/Certificate Netram.pdf"
                className="btn-download-cert"
                download=""
              >
                <i className="bi bi-file-earmark-pdf-fill me-1" /> Download PDF
              </a>
            </div>
            {/* 80G */}
            <div className="cert-card" data-aos="fade-up" data-aos-delay={100}>
              <div className="cert-icon">
                <i className="bi bi-patch-check-fill" />
              </div>
              <h4>80G Certificate</h4>
              <p>
                Official tax-exemption certificate enabling donors to claim 50%
                deduction on their contributions.
              </p>
              <a
                href="./assets/certificate/80G.pdf"
                className="btn-download-cert"
                download=""
              >
                <i className="bi bi-file-earmark-pdf-fill me-1" /> Download PDF
              </a>
            </div>
            {/* 12AB */}
            <div className="cert-card" data-aos="fade-up" data-aos-delay={200}>
              <div className="cert-icon">
                <i className="bi bi-file-earmark-medical-fill" />
              </div>
              <h4>12AB Registration</h4>
              <p>
                Registration granted by the Income Tax Department for permanent
                exemption of NGO income.
              </p>
              <a
                href="./assets/certificate/12AB.pdf"
                className="btn-download-cert"
                download=""
              >
                <i className="bi bi-file-earmark-pdf-fill me-1" /> Download PDF
              </a>
            </div>
            {/* NGO Darpan */}
            <div className="cert-card" data-aos="fade-up">
              <div className="cert-icon">
                <i className="bi bi-bank2" />
              </div>
              <h4>NGO Darpan</h4>
              <p>
                Verification by NITI Aayog, confirming Netram Eye Foundation's
                presence on the national portal.
              </p>
              <a
                href="./assets/certificate/ngo darpan .pdf"
                className="btn-download-cert"
                download=""
              >
                <i className="bi bi-file-earmark-pdf-fill me-1" /> Download PDF
              </a>
            </div>
            {/* CSR-1 */}
            <div className="cert-card" data-aos="fade-up" data-aos-delay={100}>
              <div className="cert-icon">
                <i className="bi bi-shield-check" />
              </div>
              <h4>CSR-1 Certificate</h4>
              <p>
                Mandatory certification for undertaking Corporate Social
                Responsibility (CSR) initiatives.
              </p>
              <a
                href="./assets/certificate/CSR1 Certificate.PDF"
                className="btn-download-cert"
                download=""
              >
                <i className="bi bi-file-earmark-pdf-fill me-1" /> Download PDF
              </a>
            </div>
            {/* PAN Card */}
            <div className="cert-card" data-aos="fade-up" data-aos-delay={200}>
              <div className="cert-icon">
                <i className="bi bi-card-text" />
              </div>
              <h4>PAN Card (NGO)</h4>
              <p>
                Permanent Account Number issued by the Income Tax Department for
                Foundation operations.
              </p>
              <a
                href="./assets/certificate/netram pan card.jpg.jpeg"
                className="btn-download-cert"
                download=""
              >
                <i className="bi bi-file-earmark-image-fill me-1" /> Download
                Image
              </a>
            </div>
            {/* Audit Report 23-24 */}
            <div className="cert-card" data-aos="fade-up">
              <div className="cert-icon">
                <i className="bi bi-journal-check" />
              </div>
              <h4>Audit Report 23-24</h4>
              <p>
                Latest comprehensive financial audit report reflecting 2023-2024
                operations and transparency.
              </p>
              <a
                href="./assets/certificate/AUDIT REPORT 23-24.pdf"
                className="btn-download-cert"
                download=""
              >
                <i className="bi bi-file-earmark-pdf-fill me-1" /> Download PDF
              </a>
            </div>
            {/* Audit Report 22-23 */}
            <div className="cert-card" data-aos="fade-up" data-aos-delay={100}>
              <div className="cert-icon">
                <i className="bi bi-journal-text" />
              </div>
              <h4>Audit Report 22-23</h4>
              <p>
                Full financial disclosure and verified audit results for the
                fiscal year 2022-2023.
              </p>
              <a
                href="./assets/certificate/Audit Report 2022-23.pdf"
                className="btn-download-cert"
                download=""
              >
                <i className="bi bi-file-earmark-pdf-fill me-1" /> Download PDF
              </a>
            </div>
            {/* Audit Report 21-22 */}
            <div className="cert-card" data-aos="fade-up" data-aos-delay={200}>
              <div className="cert-icon">
                <i className="bi bi-journal" />
              </div>
              <h4>Audit Report 21-22</h4>
              <p>
                Annual audit report for 2021-2022 documenting financial health
                and distribution history.
              </p>
              <a
                href="./assets/certificate/Audit Report 2021-22.pdf"
                className="btn-download-cert"
                download=""
              >
                <i className="bi bi-file-earmark-pdf-fill me-1" /> Download PDF
              </a>
            </div>
            {/* MOA */}
            <div className="cert-card" data-aos="fade-up">
              <div className="cert-icon">
                <i className="bi bi-file-text-fill" />
              </div>
              <h4>Memorandum (MOA)</h4>
              <p>
                Official Memorandum of Association detailing the foundation's
                rules and bylaws.
              </p>
              <a
                href="./assets/certificate/MOA Copy.pdf"
                className="btn-download-cert"
                download=""
              >
                <i className="bi bi-file-earmark-pdf-fill me-1" /> Download PDF
              </a>
            </div>
            {/* Udyam */}
            <div className="cert-card" data-aos="fade-up" data-aos-delay={100}>
              <div className="cert-icon">
                <i className="bi bi-building-check" />
              </div>
              <h4>Udyam Registration</h4>
              <p>
                MSME registration certificate validating the foundation's
                operational small-enterprise status.
              </p>
              <a
                href="./assets/certificate/Udyam Registration Certificate.pdf"
                className="btn-download-cert"
                download=""
              >
                <i className="bi bi-file-earmark-pdf-fill me-1" /> Download PDF
              </a>
            </div>
            {/* Renewal */}
            <div className="cert-card" data-aos="fade-up" data-aos-delay={200}>
              <div className="cert-icon">
                <i className="bi bi-arrow-repeat" />
              </div>
              <h4>Renewal Certificate</h4>
              <p>
                Current active renewal certificate for NGO registration and
                operational compliance.
              </p>
              <a
                href="./assets/certificate/Renewal-Certificate.pdf"
                className="btn-download-cert"
                download=""
              >
                <i className="bi bi-file-earmark-pdf-fill me-1" /> Download PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
