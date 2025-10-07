// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', !open);
    nav.style.display = open ? 'none' : 'block';
  });
  nav.addEventListener('click', e => {
    if (e.target.tagName === 'A' && window.innerWidth < 900) {
      nav.style.display = 'none';
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Lightbox
const dialog = document.querySelector('.lightbox');
const lightImg = dialog?.querySelector('img');
const closeBtn = dialog?.querySelector('.lightbox-close');

document.querySelectorAll('.gallery-item').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const src = a.getAttribute('href');
    if (dialog && lightImg && src) {
      lightImg.src = src;
      dialog.showModal();
    }
  });
});
closeBtn?.addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', e => {
  const rect = lightImg.getBoundingClientRect();
  const clickedOutside = e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom;
  if (clickedOutside) dialog.close();
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
