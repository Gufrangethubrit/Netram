import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      {/* Scroll Progress Bar */}
      <div className="scroll-progress-container">
        <div className="scroll-progress-bar" id="scrollProgress" />
      </div>
      {/* ===== TOPBAR ===== */}
      <div className="site-topbar">
        <div className="container">
          <div className="topbar-content">
            <div className="topbar-contact">
              <a
                href="mailto:info@netrameyefoundation.com"
                className="topbar-link"
              >
                <i className="bi bi-envelope-fill" />
                <span>info@netrameyefoundation.com</span>
              </a>
              <div className="topbar-divider" />
              <a
                href="https://maps.google.com/?q=Netram%20Eye%20Foundation"
                target="_blank"
                rel="noopener"
                className="topbar-link"
              >
                <i className="bi bi-geo-alt-fill" />
                <span>E-98, Greater Kailash-2, New Delhi – 110048</span>
              </a>
            </div>
            <div className="topbar-actions">
              <div className="topbar-social">
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
              <a href="#login" className="topbar-login">
                <i className="bi bi-box-arrow-in-right" />
                <span>Login</span>
              </a>
              <div id="google_translate_element" style={{ display: "none" }} />
            </div>
          </div>
        </div>
      </div>
      {/* ===== NAVBAR ===== */}
      <nav className="navbar navbar-expand-lg fixed-top" id="mainNavbar">
        <div className="container">
          <Link className="navbar-brand" to="/" id="navBrand">
            <span className="brand-icon">
              <img
                src="./assets/logo/netram_logo.png"
                className="header-logo-icon"
                alt="Netram Eye Foundation"
              />
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
            aria-controls="navMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="toggler-icon">
              <i className="bi bi-list" />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav ms-auto align-items-center gap-1">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#about"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/about">
                      Our About
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/mission">
                      Mission
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/vision">
                      Vision
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/board-member">
                      Board Member
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/our-management-team">
                      Our Management Team
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/our-story">
                      Our Story
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/project">
                  Our Initiatives
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#gallery"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Gallery
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/blogs">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/event">
                      Event
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/photo">
                      Photo
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/video">
                      Video
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/media">
                      Media Coverage
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#get-involved"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Get Involved
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/csr-collaboration">
                      CSR Collaboration
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/careers">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/volunteer">
                      Volunteer with Us
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/internship">
                      Internship
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/certificate">
                  Certificate
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item ms-2">
                <Link className="btn-donate" to="/donate">
                  <i className="bi bi-heart-fill me-1" />
                  Donate
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
