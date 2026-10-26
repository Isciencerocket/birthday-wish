document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('celebrate-btn');
  const music = document.getElementById('bg-music');

  if (btn) {
    btn.addEventListener('click', () => {
      // Fire themed confetti (Baby Pink + Sage Green + White)
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#ea889f', '#849987', '#ffffff', '#f5cad7']
        });
      }

      // Audio playback handling
      if (music && music.paused) {
        music.play().catch((err) => {
          console.warn('Audio playback failed or was blocked by browser:', err);
        });
      }
    });
  }
});

// Modal controls (kept in global scope for HTML onclick attributes)
function openModal(imgSrc, captionText) {
  const modal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-img');
  const modalCaption = document.getElementById('modal-caption');

  if (modal && modalImg && modalCaption) {
    modalImg.src = imgSrc;
    modalCaption.textContent = captionText;
    modal.classList.add('active');
  }
}

function closeModal() {
  const modal = document.getElementById('image-modal');
  if (modal) {
    modal.classList.remove('active');
  }
}

// Close modal if Escape key is pressed
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});