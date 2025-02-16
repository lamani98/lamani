const header = document.querySelector('.header');
const navbar = document.querySelector('.navbar');
const overlay = document.querySelector('.overlay');
const carouselImage = overlay.querySelector('.gallery_carousel img');
const leftArrow = overlay.querySelector('.arrow.left');
const rightArrow = overlay.querySelector('.arrow.right');
const closeButton = overlay.querySelector('.close');

let gallerycurrentIndex = 0;

document.querySelectorAll('.gallery').forEach(item => {
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
    item.addEventListener('touchend', (e) => {
        if (e.target.tagName === 'IMG') {
            images = Array.from(item.querySelectorAll('img'));
            gallerycurrentIndex = images.indexOf(e.target);
            updateCarouselImage();
            overlay.style.display = 'flex';
            header.style.display = 'none';
            navbar.style.display = 'none';
        }
    });
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
});