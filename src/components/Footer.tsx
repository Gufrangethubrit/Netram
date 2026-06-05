import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      {/* ===== FOOTER ===== */}
      <footer className="site-footer">
        <div className="footer-top">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-3 col-md-6">
                <div className="footer-brand">
                  <span className="brand-icon">
                    <img src="./assets/logo/netram_logo.png" />
                  </span>
                </div>
                <p className="footer-desc">
                  Netram Eye Foundation is a non-profit organization based in
                  New Delhi, focused on eye care, screenings, and community
                  health outreach.
                </p>
                <div className="footer-social">
                  <a
                    href="https://www.facebook.com/share/18stQZFUCf/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <i className="bi bi-facebook" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/netram-eye-foundation/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <i className="bi bi-linkedin" />
                  </a>
                  <a
                    href="https://www.instagram.com/netram_social.cause?igsh=MTYwdTFvNXc1a2JqMQ="
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <i className="bi bi-instagram" />
                  </a>
                  <a
                    href="https://www.instagram.com/netram_social.cause?igsh=MTYwdTFvNXc1a2JqMQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X"
                  >
                    <i className="bi bi-twitter-x" />
                  </a>
                  <a
                    href="https://youtube.com/@netrameyefoundation?si=wO5Vg_l2TstHDCfF"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                  >
                    <i className="bi bi-youtube" />
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-6">
                <h6 className="footer-heading">Quick Links</h6>
                <ul className="footer-links">
                  <li>
                    <Link to="/">
                      <i className="bi bi-chevron-right" />
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about">
                      <i className="bi bi-chevron-right" />
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/project">
                      <i className="bi bi-chevron-right" />
                      Programs
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact">
                      <i className="bi bi-chevron-right" />
                      Terms &amp; Condition
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact">
                      <i className="bi bi-chevron-right" />
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact">
                      <i className="bi bi-chevron-right" />
                      Refund Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/csr-collaboration">
                      <i className="bi bi-chevron-right" />
                      CSR Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/#faq">
                      <i className="bi bi-chevron-right" />
                      Faq
                    </Link>
                  </li>
                  <li>
                    <Link to="/donate">
                      <i className="bi bi-chevron-right" />
                      Donate
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-4 col-6">
                <h6 className="footer-heading">About</h6>
                <ul className="footer-links">
                  <li>
                    <Link to="/about">
                      <i className="bi bi-chevron-right" />
                      Our About
                    </Link>
                  </li>
                  <li>
                    <Link to="/mission">
                      <i className="bi bi-chevron-right" />
                      Mission
                    </Link>
                  </li>
                  <li>
                    <Link to="/vision">
                      <i className="bi bi-chevron-right" />
                      Vision
                    </Link>
                  </li>
                  <li>
                    <Link to="/board-member">
                      <i className="bi bi-chevron-right" />
                      Board Member
                    </Link>
                  </li>
                  <li>
                    <Link to="/our-management-team">
                      <i className="bi bi-chevron-right" />
                      Our Management Team
                    </Link>
                  </li>
                  <li>
                    <Link to="/our-story">
                      <i className="bi bi-chevron-right" />
                      Our Story
                    </Link>
                  </li>
                  <li>
                    <Link to="/project">
                      <i className="bi bi-chevron-right" />
                      Our Project
                    </Link>
                  </li>
                  <li>
                    <Link to="/csr-collaboration">
                      <i className="bi bi-chevron-right" />
                      CSR Collaboration
                    </Link>
                  </li>
                  <li>
                    <Link to="/careers">
                      <i className="bi bi-chevron-right" />
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-4 col-6">
                <h6 className="footer-heading">Gallery</h6>
                <ul className="footer-links">
                  <li>
                    <Link to="/blogs">
                      <i className="bi bi-chevron-right" />
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/event">
                      <i className="bi bi-chevron-right" />
                      Event
                    </Link>
                  </li>
                  <li>
                    <Link to="/photo">
                      <i className="bi bi-chevron-right" />
                      Photo
                    </Link>
                  </li>
                  <li>
                    <Link to="/video">
                      <i className="bi bi-chevron-right" />
                      Video
                    </Link>
                  </li>
                  <li>
                    <Link to="/media">
                      <i className="bi bi-chevron-right" />
                      Media Coverage
                    </Link>
                  </li>
                  <li>
                    <Link to="/volunteer">
                      <i className="bi bi-chevron-right" />
                      Volunteer with Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/internship">
                      <i className="bi bi-chevron-right" />
                      Internship
                    </Link>
                  </li>
                  <li>
                    <Link to="/review">
                      <i className="bi bi-chevron-right" />
                      Reviews
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact">
                      <i className="bi bi-chevron-right" />
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6">
                <h6 className="footer-heading">Contact Us</h6>
                <ul className="footer-contact-info">
                  <li>
                    <i className="bi bi-geo-alt-fill" />
                    <span>E-98, Greater Kailash-2, New Delhi – 110048</span>
                  </li>
                  <li>
                    <i className="bi bi-envelope-fill" />
                    <span>info@netrameyefoundation.com</span>
                  </li>
                  <li>
                    <i className="bi bi-telephone-fill" />
                    <span> +91-92126-46655 </span>
                  </li>
                </ul>
                <div className="footer-badges mt-3">
                  <span className="f-badge">
                    <i className="bi bi-patch-check-fill" /> NGO Certified
                  </span>
                  <span className="f-badge">
                    <i className="bi bi-shield-fill-check" /> 80G Approved
                  </span>
                </div>
                <div className="mt-3">
                  <Link
                    to="/donate"
                    className="btn btn-sm btn-primary-custom"
                    style={{ fontSize: "0.75rem", padding: "8px 15px" }}
                  >
                    <i className="bi bi-heart-fill me-1" /> Donate Now
                  </Link>
                </div>
                <div className="footer-map mt-3">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.67890123456!2d77.0!3d28.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sE-98%20Greater%20Kailash%202%20New%20Delhi!5e1!3m2!1sen!2sin!4v0000000000000!5m2!1sen!2sin"
                    width="100%"
                    height={120}
                    style={{
                      border: 0,
                      borderRadius: 8,
                      filter: "grayscale(1) invert(1) opacity(0.7)",
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 text-center">
                <p>
                  All Rights Copyright © 2026 Reserved By{" "}
                  <span className="text-white">Netram Eye Foundation</span> |{" "}
                  <span>
                    Design &amp; Developed By Team{" "}
                    <a
                      href="https://axsemsoftwares.com/"
                      className="text-white"
                    >
                      Axsem Softwares
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
