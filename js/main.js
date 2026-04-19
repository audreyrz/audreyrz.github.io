/* =========================================
   AURORA CANVAS — disabled, using static background
   ========================================= */
// Aurora removed in favour of static star field CSS background

/* =========================================
   CUSTOM CURSOR
   ========================================= */
(function initCursor() {
  const dot  = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  if (!dot || !ring) return;

  let mx = -100, my = -100;
  let rx = -100, ry = -100;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  });

  // Smooth ring follow
  function animRing() {
    rx += (mx - rx) * 0.13;
    ry += (my - ry) * 0.13;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animRing);
  }
  animRing();

  // Hover effect
  const hoverEls = document.querySelectorAll('a, button, .project-card, .blog-card, .photo-grid-item');
  hoverEls.forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('hovering'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hovering'));
  });
})();

/* =========================================
   NAVBAR SCROLL
   ========================================= */
(function initNav() {
  const nav = document.querySelector('nav');
  const hamburger = document.querySelector('.nav-hamburger');
  const links = document.querySelector('.nav-links');

  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  if (hamburger && links) {
    hamburger.addEventListener('click', () => {
      links.classList.toggle('open');
      const spans = hamburger.querySelectorAll('span');
      spans[0].style.transform = links.classList.contains('open') ? 'rotate(45deg) translate(5px,5px)' : '';
      spans[1].style.opacity   = links.classList.contains('open') ? '0' : '1';
      spans[2].style.transform = links.classList.contains('open') ? 'rotate(-45deg) translate(5px,-5px)' : '';
    });
  }

  // Active link highlighting
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

/* =========================================
   SCROLL ANIMATIONS
   ========================================= */
(function initScrollAnim() {
  const targets = document.querySelectorAll('.fade-in, .stagger-children');
  if (!targets.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(t => obs.observe(t));
})();

/* =========================================
   MOUSE PARALLAX
   ========================================= */
(function initParallax() {
  document.addEventListener('mousemove', e => {
    const xPct = (e.clientX / window.innerWidth  - 0.5) * 2;
    const yPct = (e.clientY / window.innerHeight - 0.5) * 2;

    document.querySelectorAll('.parallax-layer').forEach(el => {
      const depth = parseFloat(el.dataset.depth) || 0.04;
      el.style.transform = `translate(${xPct * depth * 60}px, ${yPct * depth * 40}px)`;
    });
  });
})();

/* =========================================
   CONTACT FORM
   ========================================= */
(function initForm() {
  const form = document.querySelector('.contact-form form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type=submit]');
    btn.textContent = 'Message sent ✓';
    btn.style.background = 'linear-gradient(135deg, #43a047, #1b5e20)';
    setTimeout(() => {
      btn.textContent = 'Send Message';
      btn.style.background = '';
      form.reset();
    }, 3000);
  });
})();
