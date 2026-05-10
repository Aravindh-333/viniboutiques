/* ════════════════════════════════════════
   form.js — Order form logic
   ✏️ CHANGE: Your WhatsApp number below
   ════════════════════════════════════════ */

/* ✏️ CHANGE: Put your WhatsApp number here (with country code, no + or spaces) */
const WHATSAPP_NUMBER = '9195663 34850';

/* ── Show chosen filename ────────────── */
function fileChosen(input) {
  const label = document.getElementById('fileLabel');
  if (input.files[0]) {
    label.textContent = '✓ ' + input.files[0].name;
  } else {
    label.textContent = '';
  }
}

/* ── Handle form submit ──────────────── */
function handleOrder(event) {
  event.preventDefault();

  /* Read form values */
  const name    = document.getElementById('fname').value.trim();
  const phone   = document.getElementById('fphone').value.trim();
  const service = document.getElementById('fservice').value;
  const fabric  = document.getElementById('ffabric').value;
  const date    = document.getElementById('fdate').value;
  const design  = document.getElementById('fdesign').value.trim();
  const notes   = document.getElementById('fnotes').value.trim();

  /* Show success message on page */
  const successBox = document.getElementById('formSuccess');
  successBox.style.display = 'block';

  /* Scroll to success message */
  successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });

  /* Build WhatsApp message */
  const message = [
    `Hi Priya's Boutique! 👋`,
    ``,
    `*New Order Request*`,
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Service: ${service}`,
    fabric  ? `Fabric: ${fabric}`             : null,
    date    ? `Delivery date needed: ${date}` : null,
    design  ? `Design preference: ${design}`  : null,
    notes   ? `Notes: ${notes}`               : null,
    ``,
    `Please confirm my order. Thank you!`
  ]
  .filter(line => line !== null)
  .join('\n');

  /* Open WhatsApp after 1 second */
  setTimeout(() => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  }, 1000);
}
