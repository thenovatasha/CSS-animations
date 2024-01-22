const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const indicatorParents = document.querySelector('.controls ul');
let sectionIndex = 0;

document.querySelectorAll('.controls li').forEach(function(indicator, idX) {
    indicator.addEventListener('click', function() {
    clearInterval(autoSlide);
    moveSlider(idX);
    autoSlide = setInterval(slideRight, 5000);
    });
});

rightArrow.addEventListener('click', () => {
    clearInterval(autoSlide);
    slideRight();
    autoSlide = setInterval(slideRight, 5000);
});

leftArrow.addEventListener('click', () => {
    clearInterval(autoSlide)
    slideLeft();
    autoSlide = setInterval(slideRight, 5000);
});

function slideRight() {
    sectionIndex = (sectionIndex < 3) ? sectionIndex + 1: 0;
    moveSlider(sectionIndex);
}
function slideLeft() {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    moveSlider(sectionIndex);
}

function moveSlider(sectionIndex) {
    slider.style.transform = `translate(${sectionIndex * -25}%)`;
    document.querySelector('.controls .selected').classList.remove('selected');
    indicatorParents.children[sectionIndex].classList.add('selected');
}

let autoSlide = setInterval(slideRight, 5000);

