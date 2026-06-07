/**
 * Lightbox functionality for the photography gallery
 */

function openLightbox(src, alt) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');

  if (!lightbox || !lightboxImage) return;

  lightboxImage.src = src;
  lightboxImage.alt = alt;
  lightbox.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  lightbox.classList.add('is-closing');
  setTimeout(() => {
    lightbox.classList.remove('is-open');
    lightbox.classList.remove('is-closing');
    document.body.style.overflow = '';
  }, 300);
}

// Close on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const lightbox = document.getElementById('lightbox');
    if (lightbox && lightbox.classList.contains('is-open')) {
      closeLightbox();
    }
  }
});

// Close on overlay click (but not image click)
document.addEventListener('click', (e) => {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  if (e.target === lightbox && lightbox.classList.contains('is-open')) {
    closeLightbox();
  }
});
