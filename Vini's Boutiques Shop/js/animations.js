/* ════════════════════════════════════════
   animations.js
   Fade-in effect as user scrolls down
   ════════════════════════════════════════ */

/* ── Intersection Observer ───────────── */
/* Cards and items fade in when they scroll into view */

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity    = '1';
      entry.target.style.transform  = 'translateY(0)';
    }
  });
}, {
  threshold: 0.12   /* triggers when 12% of element is visible */
});

/* ✏️ Add any CSS selectors whose cards you want to animate */
const animatedItems = document.querySelectorAll(
  '.service-card, .g-item, .testi-card, .contact-block, .about-img-wrap'
);

animatedItems.forEach(el => {
  el.style.opacity    = '0';
  el.style.transform  = 'translateY(24px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
