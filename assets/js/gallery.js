const header = document.querySelector('.header');
const navbar = document.querySelector('.navbar');
const overlay = document.querySelector('.overlay');
const carouselImage = overlay.querySelector('.gallery_carousel img');
const leftArrow = overlay.querySelector('.arrow.left');
const rightArrow = overlay.querySelector('.arrow.right');
const closeButton = overlay.querySelector('.close');

let gallerycurrentIndex = 0;

document.querySelectorAll('.gallery').forEach(item => {
    if (window.matchMedia("(max-width: 768px)").matches) {
        item.addEventListener('touchstart', (e) => {
            if (e.target.tagName === 'IMG') {
                images = Array.from(item.querySelectorAll('img'));
                gallerycurrentIndex = images.indexOf(e.target);
                updateCarouselImage();
                overlay.style.display = 'flex';
                header.style.display = 'none';
                navbar.style.display = 'none';
                navigator.vibrate(200);
            }
        });    
    } else {
        item.addEventListener('click', (e) => {
            if (e.target.tagName === 'IMG') {
                images = Array.from(item.querySelectorAll('img'));
                gallerycurrentIndex = images.indexOf(e.target);
                updateCarouselImage();
                overlay.style.display = 'flex';
                header.style.display = 'none';
                navbar.style.display = 'none';
            }
        });    
    }
})

function updateCarouselImage() {
    const { src } = images[gallerycurrentIndex];
    carouselImage.src = src;
}

leftArrow.addEventListener('click', () => {
    gallerycurrentIndex = (gallerycurrentIndex - 1 + images.length) % images.length;
    updateCarouselImage();
});

rightArrow.addEventListener('click', () => {
    gallerycurrentIndex = (gallerycurrentIndex + 1) % images.length;
    updateCarouselImage();
});

closeButton.addEventListener('click', () => {
    overlay.style.display = 'none';
    header.style.display = 'block';
    navbar.style.display = 'block';

    if (window.matchMedia("(max-width: 768px)").matches) {
        navigator.vibrate(200);
    }
});

overlay.addEventListener("touchstart", function (event) {
    startX = event.touches[0].clientX;
});

overlay.addEventListener("touchend", function (event) {
    endX = event.changedTouches[0].clientX;
  
    if (endX - startX > 50) {
        gallerycurrentIndex = (gallerycurrentIndex + 1) % images.length;
        updateCarouselImage();
    }

    if (startX - endX > 50) {
        gallerycurrentIndex = (gallerycurrentIndex - 1 + images.length) % images.length;
        updateCarouselImage();
    }
});