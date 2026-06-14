/* ============================================================
   MAIN.JS — Theme toggle, scroll header, mobile nav
   ============================================================ */

(function () {
  'use strict';

  // ── Theme Toggle ──────────────────────────────────────────
  const html = document.documentElement;
  const toggleBtn = document.querySelector('[data-theme-toggle]');

  function getTheme() {
    return html.getAttribute('data-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    if (toggleBtn) {
      const isDark = theme === 'dark';
      toggleBtn.setAttribute('aria-label', 'Switch to ' + (isDark ? 'light' : 'dark') + ' mode');
      toggleBtn.innerHTML = isDark
        ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>'
        : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
    }
  }

  // Initialize
  var initialTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  applyTheme(initialTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      var current = getTheme();
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  // ── Scroll-aware header ───────────────────────────────────
  var header = document.getElementById('site-header');
  var lastScrollY = 0;

  if (header) {
    window.addEventListener('scroll', function () {
      var currentY = window.scrollY;
      if (currentY > 60) {
        header.classList.add('site-header--scrolled');
      } else {
        header.classList.remove('site-header--scrolled');
      }
      lastScrollY = currentY;
    }, { passive: true });
  }

  // ── Mobile nav toggle ─────────────────────────────────────
  var mobileToggle = document.getElementById('nav-mobile-toggle');
  var navLinks = document.getElementById('nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
      mobileToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
      mobileToggle.innerHTML = isOpen
        ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'
        : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
    });

    // Close nav when a link is clicked
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.setAttribute('aria-label', 'Open menu');
        mobileToggle.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
      });
    });
  }

  // ── Scroll reveal (lightweight) ───────────────────────────
  if ('IntersectionObserver' in window) {
    var revealEls = document.querySelectorAll('.skill-card, .work-card, .post-card, .blog-preview-item');
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
      el.style.transition = 'opacity 0.5s cubic-bezier(0.16,1,0.3,1), transform 0.5s cubic-bezier(0.16,1,0.3,1)';
      observer.observe(el);
    });
  }

})();
