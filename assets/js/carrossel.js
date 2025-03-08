const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
// const intervalTime = 1000000000; // 10 segundos
const intervalTime = 10000; // 10 segundos

function updateCarousel() {
  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
}

// Adiciona evento aos botões
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Troca automática a cada 10 segundos
setInterval(nextSlide, intervalTime);

// Inicializa o carrossel
updateCarousel();
