/* ════════════════════════════════════════
   navbar.js — Mobile menu + scroll effects
   ════════════════════════════════════════ */

const hamburger   = document.getElementById('hamburger');
const mobileMenu  = document.getElementById('mobileMenu');
const navbar      = document.getElementById('navbar');
const navLinks    = document.querySelectorAll('.nav-links a');
const sections    = document.querySelectorAll('section[id]');

/* ── Toggle mobile menu ─────────────── */
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

/* Close menu when a link is clicked (called from HTML onclick) */
function closeMenu() {
  mobileMenu.classList.remove('open');
}

/* ── Navbar scroll behaviour ─────────── */
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY > 50;

  /* Shrink navbar on scroll */
  navbar.style.height = scrolled ? '56px' : '68px';

  /* Add shadow on scroll */
  navbar.style.boxShadow = scrolled
    ? '0 2px 20px rgba(192,86,106,0.1)'
    : 'none';

  /* Highlight active nav link */
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current
      ? 'var(--rose)'
      : '';
  });
});
