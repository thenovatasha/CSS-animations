var scrollWrapper = document.querySelector('.scroll-wrapper');
var sections = document.querySelectorAll('.image');
var currentIndex = 0;

document.querySelector('.left-arrow').addEventListener('click', function() {
    if (currentIndex > 0) {
        currentIndex--;
        sections[currentIndex].scrollIntoView({ behavior: 'smooth' });
    }
});

document.querySelector('.right-arrow').addEventListener('click', function() {
    if (currentIndex < sections.length - 1) {
        currentIndex++;
        sections[currentIndex].scrollIntoView({ behavior: 'smooth' });
    }
});