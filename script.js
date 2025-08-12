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

// Função para criar carrossel
function criarCarrossel(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const slides = container.querySelectorAll('.carousel-slide');
  let current = 0;
  let intervalo;
  let startX = 0;
  let endX = 0;

  // Função para trocar slide
  function mudarSlide(index) {
    current = (index + slides.length) % slides.length;
    container.style.transform = `translateX(-${current * 100}%)`;
  }

  // Função para iniciar
  function iniciar() {
    if (!intervalo) {
      intervalo = setInterval(() => {
        mudarSlide(current + 1);
      }, 4000);
    }
  }

  // Função para parar
  function parar() {
    clearInterval(intervalo);
    intervalo = null;
  }

  // Detectar visibilidade na tela
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        iniciar();
      } else {
        parar();
      }
    });
  }, { threshold: 0.5 });

  observer.observe(container.parentElement);

  // Eventos de toque para swipe
  container.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });

  container.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    let diff = startX - endX;

    if (Math.abs(diff) > 50) { // arraste mínimo
      if (diff > 0) {
        mudarSlide(current + 1); // arrastou para esquerda
      } else {
        mudarSlide(current - 1); // arrastou para direita
      }
    }
  });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const topOffset = 150; // altura da topbar fixa
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});




// Criar carrosséis
criarCarrossel('carousel-desktop');
criarCarrossel('carousel-mobile');
