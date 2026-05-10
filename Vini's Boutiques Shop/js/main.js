/* ============================================================
   PRIYA'S BOUTIQUE — main.js
   All button logic, form handling, animations
   ============================================================ */

// ── YOUR WHATSAPP NUMBER ──────────────────────────────────────
// CHANGE THIS to your WhatsApp number (with country code, no +)
const WHATSAPP_NUMBER = "919566334850";

// ── MOBILE MENU ───────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

function closeMenu() {
  mobileMenu.classList.remove('open');
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
    mobileMenu.classList.remove('open');
  }
});

// ── NAVBAR SCROLL EFFECTS ─────────────────────────────────────
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');

  // Shrink navbar on scroll
  nav.style.height = window.scrollY > 50 ? '56px' : '68px';

  // Add shadow on scroll
  nav.style.boxShadow = window.scrollY > 10
    ? '0 2px 20px rgba(192,86,106,0.1)'
    : 'none';

  // Highlight active nav link
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  let current = '';

  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });

  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});

// ── SCROLL FADE-IN ANIMATION ──────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

// Apply animation to these elements
document.querySelectorAll(
  '.service-card, .g-item, .testi-card, .contact-block, .about-grid > div'
).forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// ── FILE UPLOAD HANDLER ───────────────────────────────────────
function fileChosen(input) {
  const label = document.getElementById('fileLabel');
  if (input.files[0]) {
    label.textContent = '✓ ' + input.files[0].name;
    label.style.color = 'var(--rose)';
  } else {
    label.textContent = '';
  }
}

// ── ORDER FORM SUBMIT ─────────────────────────────────────────
function handleOrder(e) {
  e.preventDefault();

  const name    = document.getElementById('fname').value.trim();
  const phone   = document.getElementById('fphone').value.trim();
  const service = document.getElementById('fservice').value;
  const fabric  = document.getElementById('ffabric').value;
  const date    = document.getElementById('fdate').value;
  const design  = document.getElementById('fdesign').value;
  const notes   = document.getElementById('fnotes').value;

  // Show success message
  const successBox = document.getElementById('formSuccess');
  successBox.style.display = 'block';
  successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });

  // Build WhatsApp message
  const msg = [
    `👗 *New Order — Vini's Boutique*`,
    ``,
    `*Name:* ${name}`,
    `*Phone:* ${phone}`,
    `*Service:* ${service}`,
    `*Fabric:* ${fabric || 'Not specified'}`,
    `*Needed by:* ${date || 'Not specified'}`,
    `*Design Preference:* ${design || 'Not specified'}`,
    `*Notes:* ${notes || 'None'}`,
    ``,
    `Please confirm my order. Thank you! 🙏`
  ].join('\n');

  // Open WhatsApp after short delay
  setTimeout(() => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
      '_blank'
    );
  }, 900);
}
