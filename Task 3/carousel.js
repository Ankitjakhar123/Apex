const images = [
    'https://via.placeholder.com/400x200?text=Image+1',
    'https://via.placeholder.com/400x200?text=Image+2',
    'https://via.placeholder.com/400x200?text=Image+3'
];
let current = 0;
const img = document.getElementById('carouselImg');
document.getElementById('prevBtn').onclick = function() {
    current = (current - 1 + images.length) % images.length;
    img.src = images[current];
};
document.getElementById('nextBtn').onclick = function() {
    current = (current + 1) % images.length;
    img.src = images[current];
};
