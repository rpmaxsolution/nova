// --- Carrossel Desktop ---
const carouselDesktop = document.getElementById('carousel-desktop');
if (carouselDesktop) {
  const slidesDesktop = carouselDesktop.querySelectorAll('.carousel-slide');
  let currentDesktop = 0;

  setInterval(() => {
    currentDesktop = (currentDesktop + 1) % slidesDesktop.length;
    carouselDesktop.style.transform = `translateX(-${currentDesktop * 100}%)`;
  }, 4000);
}

// --- Carrossel Mobile ---
const carouselMobile = document.getElementById('carousel-mobile');
if (carouselMobile) {
  const slidesMobile = carouselMobile.querySelectorAll('.carousel-slide');
  let currentMobile = 0;

  setInterval(() => {
    currentMobile = (currentMobile + 1) % slidesMobile.length;
    carouselMobile.style.transform = `translateX(-${currentMobile * 100}%)`;
  }, 4000);
}
