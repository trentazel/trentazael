const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('active');
  menuToggle.setAttribute('aria-expanded', isOpen);
  menuToggle.classList.toggle('active');
});


document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxVideo = document.getElementById('lightbox-video');
  const closeBtn = document.querySelector('.lightbox-close');

  const galleryImages = document.querySelectorAll('.galeria-cmr img, .mosaico-libre img, .hanipics img, .grid2x2 img, .masonry img');
  const galleryVideos = document.querySelectorAll('.masonry video');

  galleryImages.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      lightboxVideo.pause();
      lightboxVideo.style.display = 'none';
      lightboxImg.style.display = 'block';
      lightboxImg.src = img.src;
      lightbox.classList.add('active');
    });
  });

  galleryVideos.forEach(video => {
    video.style.cursor = 'pointer';
    video.addEventListener('click', () => {
      if (window.innerWidth <= 1024) return;

      const source = video.querySelector('source').src;
      lightboxImg.style.display = 'none';
      lightboxVideo.style.display = 'block';
      lightboxVideo.src = source;
      lightboxVideo.play();
      lightbox.classList.add('active');
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('active');
    lightboxVideo.pause();
  }

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
});