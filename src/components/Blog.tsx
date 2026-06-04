export default function Blog() {
  return (
    <div> <section className="blog-section section-padding" id="blog">
    <div className="container">
      <div className="text-center mb-5" data-aos="fade-up">
        <div className="section-tag mx-auto">
          <i className="bi bi-journal-text me-2" /> Our Latest News
        </div>
        <h2 className="section-title">
          Insights from <span className="gradient-text">Our Foundation</span>
        </h2>
        <p className="section-desc mx-auto" style={{maxWidth: 600}}>
          Stay updated with our latest stories, success reports, and articles about child welfare and
          empowerment.
        </p>
      </div>
      <div className="row g-4 justify-content-center">
        {/* Blog Post 1 */}
        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={100}>
          <div className="blog-card">
            <div className="blog-card-inner">
              <div className="blog-img-wrap">
                <img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80" alt="Digital Learning" />
                <div className="blog-date">
                  <strong>15</strong>
                  <span>Apr</span>
                </div>
                <div className="blog-category-tag">Education</div>
              </div>
              <div className="blog-info">
                <div className="blog-meta">
                  <span><i className="bi bi-person-fill" /> By Sunil Rao</span>
                  <span><i className="bi bi-chat-text-fill" /> 12</span>
                </div>
                <h4>Building Digital Dreams in Rural India</h4>
                <p>We believe every child deserves a chance to learn technology, regardless of their
                  location.</p>
                <a href="#" className="blog-link">
                  Read Story <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Blog Post 2 */}
        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={200}>
          <div className="blog-card">
            <div className="blog-card-inner">
              <div className="blog-img-wrap">
                <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80" alt="Nutrition Program" />
                <div className="blog-date">
                  <strong>12</strong>
                  <span>Apr</span>
                </div>
                <div className="blog-category-tag">Health</div>
              </div>
              <div className="blog-info">
                <div className="blog-meta">
                  <span><i className="bi bi-person-fill" /> By Priya Mehta</span>
                  <span><i className="bi bi-chat-text-fill" /> 8</span>
                </div>
                <h4>Fighting Malnutrition One Meal at a Time</h4>
                <p>Our recent nutrition drive successfully reached over 500 children across 5 slum
                  communities.</p>
                <a href="#" className="blog-link">
                  Read Story <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Blog Post 3 */}
        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={300}>
          <div className="blog-card">
            <div className="blog-card-inner">
              <div className="blog-img-wrap">
                <img src="https://images.unsplash.com/photo-1526976668912-1a811878dd37?w=600&q=80" alt="Volunteer Story" />
                <div className="blog-date">
                  <strong>08</strong>
                  <span>Apr</span>
                </div>
                <div className="blog-category-tag">Community</div>
              </div>
              <div className="blog-info">
                <div className="blog-meta">
                  <span><i className="bi bi-person-fill" /> By Amit Singh</span>
                  <span><i className="bi bi-chat-text-fill" /> 15</span>
                </div>
                <h4>Why Volunteering is Double Giving</h4>
                <p>Meet our volunteers who share their journey of how helping children changed their
                  lives.</p>
                <a href="#" className="blog-link">
                  Read Story <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <a href="./blog.html" className="btn-primary-custom px-4">
            View Blogs
          </a>
        </div>
      </div>
    </div>
  </section></div>

  )
}
