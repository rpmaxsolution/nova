const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel-image');
let currentIndex = 0;

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
}

// Auto-slide a cada 4 segundos
setInterval(nextSlide, 4000);
