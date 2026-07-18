// ============================================================
//  SUBIN JOSEPH PORTFOLIO — main.js
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ── Set active nav link ──────────────────────────────────
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link[data-page]').forEach(link => {
    if (link.dataset.page === currentPage) link.classList.add('active');
  });

  // ── Mobile hamburger ─────────────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', open);
    });

    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => mobileMenu.classList.remove('open'));
    });
  }

  // ── Fade-in on scroll ────────────────────────────────────
  const fadeEls = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  fadeEls.forEach(el => observer.observe(el));

  // Immediately reveal above-fold elements
  setTimeout(() => {
    document.querySelectorAll('.hero .fade-in').forEach(el => {
      el.classList.add('visible');
    });
  }, 100);

  // ── Email reveal ─────────────────────────────────────────
  const emailBtn   = document.getElementById('emailRevealBtn');
  const emailPanel = document.getElementById('emailDisplay');
  const copyBtn    = document.getElementById('copyEmailBtn');
  const EMAIL      = 'subinjoseph412@gmail.com';

  if (emailBtn && emailPanel) {
    emailBtn.addEventListener('click', () => {
      emailPanel.classList.toggle('show');
      emailBtn.textContent = emailPanel.classList.contains('show')
        ? '✕  Hide email'
        : '';

      // Re-inject icon if hiding
      if (!emailPanel.classList.contains('show')) {
        emailBtn.innerHTML = `
          <svg class="gmail-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="1.5" fill="none"/>
            <path d="M22 6L12 13 2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M2 6l7 7M22 6l-7 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
          </svg>
          Get in touch via Email`;
      }
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(EMAIL).then(() => {
        copyBtn.textContent = 'Copied!';
        copyBtn.classList.add('copied');
        setTimeout(() => {
          copyBtn.textContent = 'Copy';
          copyBtn.classList.remove('copied');
        }, 2000);
      });
    });
  }

  // ── Portfolio video hover play ───────────────────────────
  document.querySelectorAll('.portfolio-card').forEach(card => {
    const video = card.querySelector('video');
    if (!video) return;
    card.addEventListener('mouseenter', () => video.play());
    card.addEventListener('mouseleave', () => { video.pause(); video.currentTime = 0; });
  });

  // ── Nav scroll style ─────────────────────────────────────
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      nav.style.background = 'rgba(9,8,15,0.92)';
    } else {
      nav.style.background = 'rgba(9,8,15,0.6)';
    }
  }, { passive: true });

});
