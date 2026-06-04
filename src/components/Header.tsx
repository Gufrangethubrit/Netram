export default function header() {
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
              {/* Hidden Google Translate Element */}
              <div id="google_translate_element" style={{ display: "none" }} />
            </div>
          </div>
        </div>
      </div>
      {/* ===== NAVBAR ===== */}
      <nav className="navbar navbar-expand-lg fixed-top" id="mainNavbar">
        <div className="container">
          <a className="navbar-brand" href="index.html" id="navBrand">
            <span className="brand-icon">
              <img
                src="./assets/logo/netram_logo.png"
                className="header-logo-icon"
                alt="Netram Eye Foundation"
              />
            </span>
            {/* <span class="brand-text">KILKARI CARE FOUNDATION</span> */}
          </a>
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
                <a className="nav-link" href="./index.html">
                  Home
                </a>
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
                    <a className="dropdown-item" href="our-about.html">
                      Our About
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="mission.html">
                      Mission
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="vision.html">
                      Vision
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="board-member.html">
                      Board Member
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="our-management-team.html"
                    >
                      Our Management Team
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="our-story.html">
                      Our Story
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./project.html">
                  Our Initiatives
                </a>
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
                    <a className="dropdown-item" href="blog.html">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="event.html">
                      Event
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="photo.html">
                      Photo
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="video.html">
                      Video
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="media.html">
                      Media Coverage
                    </a>
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
                    <a className="dropdown-item" href="csr.html">
                      CSR Collaboration
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="careers.html">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="volunteer.html">
                      Volunteer with Us
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="internship.html">
                      Internship
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="certificate.html">
                  Certificate
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">
                  Contact
                </a>
              </li>
              <li className="nav-item ms-2">
                <a className="btn-donate" href="donate.html">
                  <i className="bi bi-heart-fill me-1" />
                  Donate
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
