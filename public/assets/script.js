/* ============================================================
   KILKARI FOUNDATION — MAIN JAVASCRIPT
   Author: Kilkari Dev Team
   Version: 1.0
   ============================================================ */

'use strict';

/* ============================================================
   1. AOS (Animate On Scroll) INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
      delay: 0,
    });
  }
  // Initialize Swiper hero slider when available
  if (typeof Swiper !== 'undefined') {
    try {
      const heroSwiper = new Swiper('.hero-swiper', {
        loop: true,
        autoHeight: true,
        autoplay: { delay: 4500, disableOnInteraction: false },
        speed: 800,
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: { el: '.hero-pagination', clickable: true },
        navigation: {
          nextEl: '.hero-swiper .swiper-button-next',
          prevEl: '.hero-swiper .swiper-button-prev',
        },
        a11y: { enabled: true },
        on: {
          init(swiper) {
            swiper.updateAutoHeight();
            if (typeof window.__updateHeroOffset === 'function') {
              window.__updateHeroOffset();
            }
          },
          imagesReady(swiper) {
            swiper.updateAutoHeight();
          },
          slideChangeTransitionEnd(swiper) {
            swiper.updateAutoHeight();
          },
        },
      });

      document.querySelectorAll('.hero-slide-img').forEach((img) => {
        const refresh = () => {
          heroSwiper.updateAutoHeight();
          if (typeof window.__updateHeroOffset === 'function') {
            window.__updateHeroOffset();
          }
        };
        if (img.complete) refresh();
        else img.addEventListener('load', refresh);
      });
    } catch (e) {
      console.warn('Swiper init failed', e);
    }
  }

  const profileSection = document.querySelector('.profile-details-section');
  if (profileSection && 'IntersectionObserver' in window) {
    const revealTargets = profileSection.querySelectorAll('.profile-photo-card, .profile-bio-card, .profile-note-card, .profile-closing-note, .profile-highlight');

    revealTargets.forEach((el, index) => {
      el.style.transitionDelay = `${index * 90}ms`;
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          profileSection.classList.add('is-revealed');
          observer.disconnect();
        }
      });
    }, { threshold: 0.22 });

    observer.observe(profileSection);
  }
});

/* ============================================================
   HERO — sit slider below fixed header (full image, no top crop)
   ============================================================ */
(function initHeroHeaderOffset() {
  const topbar = document.querySelector('.site-topbar');
  const navbar = document.getElementById('mainNavbar');
  if (!navbar) return;

  const EXTRA_OFFSET = 36;

  function updateHeroOffset() {
    let headerBottom = 0;

    if (topbar && window.getComputedStyle(topbar).display !== 'none') {
      headerBottom = Math.max(headerBottom, topbar.getBoundingClientRect().bottom);
    }
    headerBottom = Math.max(headerBottom, navbar.getBoundingClientRect().bottom);

    document.documentElement.style.setProperty(
      '--hero-header-offset',
      `${Math.ceil(headerBottom) + EXTRA_OFFSET}px`
    );
  }

  function bind() {
    updateHeroOffset();
    window.addEventListener('resize', updateHeroOffset);
    window.addEventListener('load', updateHeroOffset);

    if (typeof ResizeObserver !== 'undefined') {
      const ro = new ResizeObserver(updateHeroOffset);
      ro.observe(navbar);
      if (topbar) ro.observe(topbar);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bind);
  } else {
    bind();
  }

  window.__updateHeroOffset = updateHeroOffset;
})();

/* ============================================================
   2. NAVBAR — Scroll Effect & Active Link
   ============================================================ */
(function initNavbar() {
  const navbar = document.getElementById('mainNavbar');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Scroll → add/remove .scrolled class
  function onScroll() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    highlightActiveLink();
    if (typeof window.__updateHeroOffset === 'function') {
      window.__updateHeroOffset();
    }
  }

  // Highlight nav link based on scroll position
  function highlightActiveLink() {
    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      if (window.scrollY >= top) current = sec.getAttribute('id');
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }

  // Close mobile menu on nav-link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (link.classList.contains('dropdown-toggle')) return;

      const collapseEl = document.getElementById('navMenu');
      if (collapseEl && collapseEl.classList.contains('show')) {
        const bsCollapse = window.bootstrap
          ? bootstrap.Collapse.getOrCreateInstance(collapseEl)
          : null;
        if (bsCollapse) bsCollapse.hide();
      }
    });
  });

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // Run once on load
})();

/* ============================================================
   10. VISION 2030 COUNTERS
   Animate the small set of stat cards inside #vision-2030 when scrolled into view.
============================================================ */
(function initVision2030Counters() {
  const visionSection = document.getElementById('vision-2030');
  if (!visionSection || !('IntersectionObserver' in window)) return;

  const statEls = visionSection.querySelectorAll('.vision-stat-card .stat-number');
  if (!statEls.length) return;

  function formatCompact(n) {
    if (n >= 1000000) {
      return (n / 1000000).toFixed(n % 1000000 === 0 ? 0 : 1) + 'M';
    }
    if (n >= 1000) {
      return (n / 1000).toFixed(n % 1000 === 0 ? 0 : 1) + 'K';
    }
    return n.toLocaleString('en-IN');
  }

  function animateElement(el) {
    const target = parseInt(el.getAttribute('data-target'), 10);
    if (isNaN(target)) return;
    const countSpan = el.querySelector('.count');
    const suffixSpan = el.querySelector('.suffix');

    const duration = 2000;
    const stepTime = 20;
    const steps = Math.max(1, Math.floor(duration / stepTime));
    let current = 0;
    const increment = target / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }

      // Display compact format for large numbers when a suffix exists
      if (suffixSpan) {
        // show compact directly (e.g., 2M)
        countSpan.textContent = formatCompact(Math.round(current)).replace(/[MK]$/, '');
      } else {
        countSpan.textContent = Math.floor(current).toLocaleString('en-IN');
      }
    }, stepTime);

    // At end, ensure final formatted value
    setTimeout(() => {
      if (suffixSpan) {
        countSpan.textContent = formatCompact(target).replace(/[MK]$/, '');
      } else {
        countSpan.textContent = target.toLocaleString('en-IN');
      }
    }, duration + 50);
  }

  let started = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        started = true;
        statEls.forEach(el => animateElement(el));
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });

  observer.observe(visionSection);
})();

/* ============================================================
   3. SMOOTH SCROLL FOR ANCHOR LINKS
   ============================================================ */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      if (this.getAttribute('data-bs-toggle') === 'dropdown') return;

      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const navHeight = document.getElementById('mainNavbar')?.offsetHeight || 80;
        const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top: targetTop, behavior: 'smooth' });
      }
    });
  });
})();

/* ============================================================
   4. HERO COUNTER ANIMATION (on load)
   ============================================================ */
(function initHeroCounters() {
  const heroStats = document.querySelectorAll('.hero-stats .stat-num');
  if (!heroStats.length) return;

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'), 10);
    if (isNaN(target)) return;
    const duration = 2000;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(current).toLocaleString('en-IN');
    }, stepTime);
  }

  // Trigger after short delay for better UX
  setTimeout(() => heroStats.forEach(animateCounter), 800);
})();

/* ============================================================
   5. STATS SECTION COUNTER (Intersection Observer)
   ============================================================ */
(function initStatsCounter() {
  const statNums = document.querySelectorAll('.stat-card .stat-number');
  if (!statNums.length) return;

  let animated = false;

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'), 10);
    if (isNaN(target)) return;
    const duration = 1800;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(current).toLocaleString('en-IN');
    }, stepTime);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statNums.forEach(el => animateCounter(el));
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById('impact');
  if (statsSection) observer.observe(statsSection);
})();

/* ============================================================
   6. GALLERY FILTER
   ============================================================ */
(function initGalleryFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  if (!filterBtns.length || !galleryItems.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const category = item.getAttribute('data-category');
        const shouldShow = filter === 'all' || category === filter;

        if (shouldShow) {
          item.classList.remove('hidden');
          item.style.animation = 'galleryFadeIn 0.4s ease forwards';
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });
})();

/* ============================================================
   7. GALLERY LIGHTBOX
   ============================================================ */
(function initLightbox() {
  const lightbox = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');

  if (!lightbox || !lightboxImg) return;

  const galleryItems = document.querySelectorAll('.gallery-item:not(.hidden)');
  let activeImages = [];
  let currentIndex = 0;

  function getActiveImages() {
    return [...document.querySelectorAll('.gallery-item:not(.hidden) .gallery-img-wrap img')];
  }

  function openLightbox(index) {
    activeImages = getActiveImages();
    currentIndex = index;
    lightboxImg.src = activeImages[currentIndex]?.src || '';
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    lightboxImg.src = '';
  }

  function showPrev() {
    activeImages = getActiveImages();
    currentIndex = (currentIndex - 1 + activeImages.length) % activeImages.length;
    lightboxImg.style.opacity = '0';
    setTimeout(() => {
      lightboxImg.src = activeImages[currentIndex]?.src || '';
      lightboxImg.style.opacity = '1';
    }, 150);
  }

  function showNext() {
    activeImages = getActiveImages();
    currentIndex = (currentIndex + 1) % activeImages.length;
    lightboxImg.style.opacity = '0';
    setTimeout(() => {
      lightboxImg.src = activeImages[currentIndex]?.src || '';
      lightboxImg.style.opacity = '1';
    }, 150);
  }

  // Attach click on gallery overlays
  document.querySelectorAll('.gallery-overlay').forEach((overlay, idx) => {
    overlay.addEventListener('click', () => openLightbox(idx));
  });

  // Also click on image itself
  document.querySelectorAll('.gallery-img-wrap img').forEach((img, idx) => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => openLightbox(idx));
  });

  closeBtn?.addEventListener('click', closeLightbox);
  prevBtn?.addEventListener('click', showPrev);
  nextBtn?.addEventListener('click', showNext);

  // Click outside image to close
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });

  // Keyboard navigation
  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
  });

  // Smooth image transition
  lightboxImg.style.transition = 'opacity 0.15s ease';
})();

/* ============================================================
   8. CONTACT FORM SUBMISSION
   ============================================================ */
(function initContactForm() {
  const form = document.getElementById('contactForm');
  const successMsg = document.getElementById('formSuccess');
  const submitBtn = document.getElementById('submitBtn');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('fullName')?.value.trim();
    const email = document.getElementById('contactEmail')?.value.trim();
    const message = document.getElementById('contactMessage')?.value.trim();

    // Basic validation
    if (!name || !email || !message) {
      shakeElement(submitBtn);
      showToast('Invalid Input', 'warning');
      return;
    }
    if (!isValidEmail(email)) {
      shakeElement(document.getElementById('contactEmail'));
      showToast('Invalid Email', 'warning');
      return;
    }

    // Simulate submission
    submitBtn.innerHTML = '<i class="bi bi-hourglass-split me-2"></i>Sending...';
    submitBtn.disabled = true;

    setTimeout(() => {
      form.reset();
      form.style.display = 'none';
      if (successMsg) successMsg.classList.add('visible');
      showToast('Thank You For Contacting Us.', 'success');
    }, 1800);
  });

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
})();

/* ============================================================
   9. DONATE SECTION — Amount Buttons & Form
   ============================================================ */
(function initDonate() {
  const amountBtns = document.querySelectorAll('.amount-btn');
  const donateInput = document.getElementById('donateAmount');
  const donateBtn = document.getElementById('donateBtn');
  if (!amountBtns.length) return;

  // Amount button click
  amountBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      amountBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (donateInput) donateInput.value = btn.getAttribute('data-amount');
    });
  });

  // Custom amount input clears active button
  donateInput?.addEventListener('input', () => {
    amountBtns.forEach(b => b.classList.remove('active'));
  });

  // Donate button click
  donateBtn?.addEventListener('click', () => {
    const amount = donateInput?.value || 0;
    if (!amount || parseInt(amount) < 1) {
      shakeElement(donateInput);
      showToast('Invalid Amount', 'warning');
      return;
    }
    donateBtn.innerHTML = '<i class="bi bi-hourglass-split me-2"></i>Processing...';
    donateBtn.disabled = true;
    setTimeout(() => {
      donateBtn.innerHTML = '<i class="bi bi-check-circle-fill me-2"></i>Thank You!';
      showToast(`₹${parseInt(amount).toLocaleString('en-IN')} Thank You! 🙏`, 'success');
      setTimeout(() => {
        donateBtn.innerHTML = '<i class="bi bi-heart-fill me-2"></i>Donate Now';
        donateBtn.disabled = false;
        if (donateInput) donateInput.value = '';
        amountBtns.forEach(b => b.classList.remove('active'));
        amountBtns[0]?.classList.add('active');
      }, 3000);
    }, 2000);
  });
})();

/* ============================================================
   10. CAUSES CAROUSEL — AUTO SLIDE (ONE CARD AT A TIME)
   ============================================================ */
(function initCausesCarousel() {
  const carousel = document.querySelector('.causes-carousel');
  const wrapper = document.querySelector('.causes-carousel-wrapper');
  if (!carousel || !wrapper) return;

  const originalCards = Array.from(carousel.querySelectorAll('.cause-card'));
  if (originalCards.length < 2) return;

  let currentIndex = 0;
  let autoSlideInterval;
  let resizeTimer;
  const totalCards = originalCards.length;

  // Duplicate once for seamless looping.
  originalCards.forEach(card => {
    carousel.appendChild(card.cloneNode(true));
  });

  const allCards = Array.from(carousel.querySelectorAll('.cause-card'));

  function getCardStepPx() {
    const firstCard = allCards[0];
    if (!firstCard) return 0;

    const styles = window.getComputedStyle(carousel);
    const gap = parseFloat(styles.columnGap || styles.gap || '0') || 0;
    return firstCard.getBoundingClientRect().width + gap;
  }

  function getVisibleCardCount(stepPx) {
    const wrapperWidth = wrapper.getBoundingClientRect().width;
    if (!stepPx || !wrapperWidth) return 1;
    return Math.max(1, Math.round(wrapperWidth / stepPx));
  }

  function updateActiveCards(visibleCount) {
    allCards.forEach((card, idx) => {
      const active = idx >= currentIndex && idx < currentIndex + visibleCount;
      card.classList.toggle('cause-card-active', active);
    });
  }

  function updateCarousel(instant = false) {
    const stepPx = getCardStepPx();
    const visibleCount = getVisibleCardCount(stepPx);

    carousel.style.transition = instant
      ? 'none'
      : 'transform 0.7s cubic-bezier(0.35, 0, 0.25, 1)';
    carousel.style.transform = `translateX(-${currentIndex * stepPx}px)`;
    updateActiveCards(visibleCount);
  }

  function slideNext() {
    currentIndex += 1;
    updateCarousel();

    if (currentIndex >= totalCards) {
      window.setTimeout(() => {
        currentIndex = 0;
        updateCarousel(true);
      }, 700);
    }
  }

  function startAutoSlide() {
    stopAutoSlide();
    autoSlideInterval = setInterval(slideNext, 4000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  // Keep offsets correct when card width changes per breakpoint.
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      updateCarousel(true);
    }, 180);
  });

  // Init
  updateCarousel(true);
  startAutoSlide();

  // Hover Pause
  wrapper.addEventListener('mouseenter', stopAutoSlide);
  wrapper.addEventListener('mouseleave', startAutoSlide);

  // Touch support (simple stop)
  wrapper.addEventListener('touchstart', stopAutoSlide, { passive: true });
  wrapper.addEventListener('touchend', startAutoSlide, { passive: true });
})();

/* ============================================================
   10b. GALLERY SLIDERS (IMAGES & VIDEOS)
   ============================================================ */
(function initGallerySliders() {
  const commonGalleryOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: { slidesPerView: 2 },
      992: { slidesPerView: 3 }
    }
  };

  new Swiper('.gallery-image-slider', {
    ...commonGalleryOptions,
    pagination: { el: '.image-pagination', clickable: true },
  });

  const galleryVideoSwiper = new Swiper('.gallery-video-slider', {
    ...commonGalleryOptions,
    autoplay: { delay: 4500, disableOnInteraction: false },
    pagination: { el: '.video-pagination', clickable: true },
  });

  const galleryVideoSlider = document.querySelector('.gallery-video-slider');
  if (galleryVideoSlider) {
    const galleryVideos = Array.from(galleryVideoSlider.querySelectorAll('video'));

    const pauseAutoplay = () => {
      if (galleryVideoSwiper.autoplay && galleryVideoSwiper.autoplay.running) {
        galleryVideoSwiper.autoplay.stop();
      }
    };

    const resumeAutoplayIfIdle = () => {
      const hasPlayingVideo = galleryVideos.some((video) => !video.paused && !video.ended);
      if (!hasPlayingVideo && galleryVideoSwiper.autoplay && !galleryVideoSwiper.autoplay.running) {
        galleryVideoSwiper.autoplay.start();
      }
    };

    galleryVideos.forEach((video) => {
      const videoWrap = video.closest('.gallery-video-wrap');

      video.addEventListener('play', pauseAutoplay);
      video.addEventListener('play', () => {
        videoWrap?.classList.add('is-playing');
      });
      video.addEventListener('pause', () => {
        videoWrap?.classList.remove('is-playing');
        window.setTimeout(resumeAutoplayIfIdle, 0);
      });
      video.addEventListener('ended', () => {
        videoWrap?.classList.remove('is-playing');
        resumeAutoplayIfIdle();
      });
    });
  }
})();

/* ============================================================
   10c. PROJECTS & ACTIVITIES SLIDERS
   ============================================================ */
(function initTabSliders() {
  const commonOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: { slidesPerView: 2 },
      992: { slidesPerView: 3 }
    }
  };

  new Swiper('.projects-slider', {
    ...commonOptions,
    pagination: { el: '.projects-pagination', clickable: true },
  });

  new Swiper('.activities-slider', {
    ...commonOptions,
    autoplay: { delay: 5500, disableOnInteraction: false },
    pagination: { el: '.activities-pagination', clickable: true },
  });
})();

/* ============================================================
   11. TEAM SLIDER (SWIPER)
   ============================================================ */
(function initTeamSlider() {
  if (typeof Swiper === 'undefined') return;
  if (!document.querySelector('.teamSwiper')) return;

  new Swiper('.teamSwiper', {
    slidesPerView: 1,
    spaceBetween: 24,
    observer: true,
    observeParents: true,
    loop: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.team-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
})();

/* ============================================================
   12. TILT EFFECT MODIFIED — Add Cause Cards
   ============================================================ */
(function initTiltEffect() {
  if (window.innerWidth < 992) return;

  const tiltElements = document.querySelectorAll('.program-card, .cause-card-inner, .blog-card-inner, .testimonial-card, .donate-form-wrap, .contact-info-card, .contact-form-card, .faq-image-tilt, .compliance-card, .bank-qr-card, .bank-details-card, .project-card, .gallery-card');

  tiltElements.forEach(el => {
    el.addEventListener('mousemove', e => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -8; // Slightly more tilt
      const rotateY = ((x - centerX) / centerX) * 8;
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
      el.style.zIndex = "5";
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
      el.style.zIndex = "";
    });
  });
})();

/* ============================================================
   11. NEWSLETTER FORM
   ============================================================ */
(function initNewsletter() {
  const newsletterBtn = document.getElementById('newsletterBtn');
  const newsletterEmail = document.getElementById('newsletterEmail');
  if (!newsletterBtn || !newsletterEmail) return;

  newsletterBtn.addEventListener('click', () => {
    const email = newsletterEmail.value.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      shakeElement(newsletterEmail);
      showToast('Invalid Email', 'warning');
      return;
    }
    newsletterBtn.innerHTML = '<i class="bi bi-check-lg"></i>';
    newsletterEmail.value = '';
    showToast('Thank You For Subscribing! 🎉', 'success');
    setTimeout(() => {
      newsletterBtn.innerHTML = '<i class="bi bi-send-fill"></i>';
    }, 3000);
  });

  newsletterEmail.addEventListener('keydown', e => {
    if (e.key === 'Enter') newsletterBtn.click();
  });
})();

/* ============================================================
   12. BACK TO TOP BUTTON
   ============================================================ */
(function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

/* ============================================================
   13. TOAST NOTIFICATION SYSTEM
   ============================================================ */
function showToast(message, type = 'success') {
  // Remove existing toasts
  document.querySelectorAll('.kilkari-toast').forEach(t => t.remove());

  const icons = {
    success: 'bi-check-circle-fill',
    warning: 'bi-exclamation-triangle-fill',
    error: 'bi-x-circle-fill',
    info: 'bi-info-circle-fill',
  };
  const colors = {
    success: '#06D6A0',
    warning: '#FFD166',
    error: '#EF476F',
    info: '#2EC4B6',
  };

  const toast = document.createElement('div');
  toast.className = 'kilkari-toast';
  toast.innerHTML = `
    <i class="bi ${icons[type] || icons.info}" style="color:${colors[type] || colors.info};font-size:1.1rem;flex-shrink:0;"></i>
    <span>${message}</span>
    <button onclick="this.parentElement.remove()" style="background:none;border:none;color:inherit;cursor:pointer;font-size:1rem;padding:0;margin-left:8px;opacity:0.6;">
      <i class="bi bi-x-lg"></i>
    </button>
  `;

  // Toast Styles
  Object.assign(toast.style, {
    position: 'fixed',
    bottom: '90px',
    right: '24px',
    zIndex: '10000',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    background: '#1E1E38',
    color: '#fff',
    padding: '14px 20px',
    borderRadius: '12px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
    fontSize: '0.88rem',
    fontFamily: "'Poppins', sans-serif",
    fontWeight: '500',
    maxWidth: '340px',
    border: `1px solid ${colors[type]}33`,
    animation: 'toastSlideIn 0.35s cubic-bezier(0.4,0,0.2,1) forwards',
    backdropFilter: 'blur(10px)',
  });

  // Inject keyframes once
  if (!document.getElementById('kilkari-toast-styles')) {
    const style = document.createElement('style');
    style.id = 'kilkari-toast-styles';
    style.textContent = `
      @keyframes toastSlideIn {
        from { opacity:0; transform: translateX(60px); }
        to   { opacity:1; transform: translateX(0); }
      }
      @keyframes toastSlideOut {
        from { opacity:1; transform: translateX(0); }
        to   { opacity:0; transform: translateX(60px); }
      }
      @keyframes galleryFadeIn {
        from { opacity:0; transform: scale(0.95); }
        to   { opacity:1; transform: scale(1); }
      }
    `;
    document.head.appendChild(style);
  }

  document.body.appendChild(toast);

  // Auto dismiss after 4s
  setTimeout(() => {
    toast.style.animation = 'toastSlideOut 0.3s ease forwards';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

/* ============================================================
   13. SHAKE ANIMATION HELPER
   ============================================================ */
function shakeElement(el) {
  if (!el) return;
  el.style.animation = 'none';
  el.offsetHeight; // Reflow

  const style = document.getElementById('kilkari-shake-style');
  if (!style) {
    const s = document.createElement('style');
    s.id = 'kilkari-shake-style';
    s.textContent = `
      @keyframes kilkariShake {
        0%,100% { transform: translateX(0); }
        20%      { transform: translateX(-8px); }
        40%      { transform: translateX(8px); }
        60%      { transform: translateX(-5px); }
        80%      { transform: translateX(5px); }
      }
    `;
    document.head.appendChild(s);
  }
  el.style.animation = 'kilkariShake 0.45s ease';
  el.addEventListener('animationend', () => { el.style.animation = ''; }, { once: true });
}

/* Redundant section removed */


/* ============================================================
   15. NAVBAR BRAND ANIMATION ON HOVER
   ============================================================ */
(function initBrandAnimation() {
  const brand = document.getElementById('navBrand');
  if (!brand) return;
  brand.addEventListener('mouseenter', () => {
    const icon = brand.querySelector('.brand-icon');
    if (icon) {
      icon.style.transform = 'rotate(15deg) scale(1.1)';
      icon.style.transition = 'transform 0.3s ease';
    }
  });
  brand.addEventListener('mouseleave', () => {
    const icon = brand.querySelector('.brand-icon');
    if (icon) {
      icon.style.transform = '';
    }
  });
})();

/* ============================================================
   16. TEAM CARD SOCIAL LINKS TOOLTIP-LIKE EFFECT
   ============================================================ */
(function initTeamCards() {
  document.querySelectorAll('.team-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.zIndex = '10';
    });
    card.addEventListener('mouseleave', () => {
      card.style.zIndex = '';
    });
  });
})();

/* ============================================================
   17. SCROLL PROGRESS BAR (TOP OF PAGE)
   ============================================================ */
(function initScrollProgress() {
  const bar = document.createElement('div');
  bar.id = 'scrollProgressBar';
  Object.assign(bar.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    height: '3px',
    width: '0%',
    background: 'linear-gradient(90deg, #6A704B, #3F4A2D, #006B4F)',
    zIndex: '99999',
    transition: 'width 0.1s linear',
    pointerEvents: 'none',
  });
  document.body.prepend(bar);

  window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    bar.style.width = `${progress}%`;
  }, { passive: true });
})();

/* ============================================================
   18. LAZY LOAD IMAGES (Intersection Observer Fallback)
   ============================================================ */
(function initLazyImages() {
  const lazyImgs = document.querySelectorAll('img[loading="lazy"]');
  if (!lazyImgs.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          observer.unobserve(img);
        }
      });
    }, { rootMargin: '100px' });

    lazyImgs.forEach(img => observer.observe(img));
  }
})();

/* ============================================================
   19. TESTIMONIAL STAR RATINGS (Dynamic)
   ============================================================ */
(function addStarRatings() {
  const timings = [5, 5, 5];
  document.querySelectorAll('.testimonial-card').forEach((card, i) => {
    const stars = document.createElement('div');
    stars.style.cssText = 'display:flex;gap:3px;margin-bottom:12px;';
    for (let s = 0; s < 5; s++) {
      const star = document.createElement('i');
      star.className = s < timings[i] ? 'bi bi-star-fill' : 'bi bi-star';
      star.style.color = '#FFD166';
      star.style.fontSize = '0.85rem';
      stars.appendChild(star);
    }
    const desc = card.querySelector('p');
    if (desc) card.insertBefore(stars, desc);
  });
})();

/* ============================================================
   20. FOOTER YEAR AUTO-UPDATE
   ============================================================ */
(function updateFooterYear() {
  const yearEl = document.querySelector('.footer-bottom p');
  if (yearEl) {
    const year = new Date().getFullYear();
    yearEl.innerHTML = yearEl.innerHTML.replace(/\d{4}/, year);
  }
})();

/* ============================================================
   21. TESTIMONIALS SLIDER (SWIPER)
   ============================================================ */
(function initTestimonialsSlider() {
  if (typeof Swiper !== 'undefined') {
    new Swiper('.testimonials-slider', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      },
    });
  }
})();

/* ============================================================
   22. PRELOADER (Optional smooth page entry)
   ============================================================ */
(function initPageEntry() {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  window.addEventListener('load', () => {
    document.body.style.opacity = '1';
  });
})();

/* ============================================================
   23. LANGUAGE SWITCHER (GOOGLE TRANSLATE)
   ============================================================ */
function changeLanguage(langCode) {
  const googleTranslateCombo = document.querySelector('.goog-te-combo');
  if (googleTranslateCombo) {
    googleTranslateCombo.value = langCode;
    googleTranslateCombo.dispatchEvent(new Event('change'));

    // Update UI text
    const langDisplay = document.getElementById('currentLang');
    if (langDisplay) {
      langDisplay.innerText = langCode === 'hi' ? 'Hindi (हिन्दी)' : 'English';
    }

    showToast(`Language changed to ${langCode === 'hi' ? 'Hindi' : 'English'}`, 'success');
  } else {
    showToast('Translation service is still loading...', 'warning');
  }
}

//our partners section
const complianceSwiperElement = document.querySelector(".complianceSwiper");
if (complianceSwiperElement) {
  const swiper = new Swiper(complianceSwiperElement, {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      }
    }
  });
}

/* ============================================================
   24. BRANCH DASHBOARD (CARDS + MAP)
   ============================================================ */
function tilt(e, el) {
  if (!el) return;
  const r = el.getBoundingClientRect();
  const x = e.clientX - r.left;
  const y = e.clientY - r.top;
  const cx = r.width / 2;
  const cy = r.height / 2;
  const rx = ((y - cy) / cy) * -12;
  const ry = ((x - cx) / cx) * 12;

  el.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-5px) scale(1.02)`;
  el.style.boxShadow = `${-ry * 0.6}px ${Math.abs(rx) * 0.5 + 8}px 32px rgba(0,0,0,0.13)`;
}

function untilt(el) {
  if (!el) return;
  el.style.transform = 'perspective(700px) rotateX(0) rotateY(0) translateY(0) scale(1)';
  el.style.boxShadow = '';
}

(function initBranchCardsAndMap() {
  const targets = [23, 2500, 2200, 1];
  targets.forEach((val, i) => {
    const el = document.getElementById('n' + i);
    if (el) el.textContent = String(val);
  });

  const mapElement = document.getElementById('map');
  if (!mapElement || mapElement.querySelector('img') || typeof L === 'undefined') return;

  const LAT = 28.6237;
  const LNG = 77.2797;

  const map = L.map('map').setView([LAT, LNG], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
  }).addTo(map);

  L.marker([LAT, LNG]).addTo(map).bindPopup(
    '<strong><i class="bi bi-building"></i> Netram Eye Foundation</strong><br>' +
    '<i class="bi bi-geo-alt-fill"></i> E-98, Greater Kailash-2<br>' +
    '<i class="bi bi-geo-alt"></i> New Delhi – 110048<br>' +
    '<i class="bi bi-telephone-fill"></i> 011-41676655'
  ).openPopup();
})();

(function initNpoMapHover() {
  const states = document.querySelectorAll('.npo-india-map .india-state');
  const details = document.getElementById('npoMapDetails');
  const select = document.querySelector('.npo-state-select select');
  if (!states.length || !details) return;

  const setDetails = (state) => {
    states.forEach((item) => item.classList.remove('is-active'));
    state.classList.add('is-active');

    details.innerHTML = `
      <span>Selected Region</span>
      <h3>${state.dataset.state || 'All India'}</h3>
      <div class="npo-detail-grid">
        <div>
          <small>Total IDs</small>
          <strong>${state.dataset.total || '0'}</strong>
        </div>
        <div>
          <small>Active IDs</small>
          <strong>${state.dataset.active || '0'}</strong>
        </div>
        <div>
          <small>Blacklisted</small>
          <strong>${state.dataset.blacklisted || '0'}</strong>
        </div>
      </div>
      <p>Type: ${state.dataset.type || 'Trust, Society, Section 8 Company'}</p>
    `;
  };

  states.forEach((state) => {
    state.addEventListener('mouseenter', () => setDetails(state));
    state.addEventListener('focus', () => setDetails(state));
  });

  if (select) {
    select.addEventListener('change', () => {
      const value = select.value.toLowerCase();
      const match = Array.from(states).find((state) =>
        state.dataset.state.toLowerCase().includes(value.toLowerCase())
      );
      setDetails(match || states[0]);
    });
  }

  setDetails(states[0]);
})();

//video-playback badge sync with swiper autoplay
document.addEventListener('DOMContentLoaded', () => {
  const galleryVideos = document.querySelectorAll('.gallery-video-frame video');

  galleryVideos.forEach((video) => {
    const wrapper = video.closest('.gallery-video-frame');
    if (!wrapper) return;

    const syncPlayBadge = () => {
      wrapper.classList.toggle('is-playing', !video.paused && !video.ended);
    };

    video.addEventListener('play', syncPlayBadge);
    video.addEventListener('pause', syncPlayBadge);
    video.addEventListener('ended', syncPlayBadge);
    syncPlayBadge();
  });
});

//Image-project section thumbnail click handler

function changeProjectImg(src, element) {
  const mainImg = document.getElementById('mainProjectImg');
  mainImg.style.opacity = '0';
  setTimeout(() => {
    mainImg.src = src;
    mainImg.style.opacity = '1';
    document.querySelectorAll('.pd-thumb').forEach(t => t.classList.remove('active-thumb'));
    element.classList.add('active-thumb');
  }, 250);
}

