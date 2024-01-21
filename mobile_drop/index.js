const h1 = document.querySelector('h1');
document.querySelector('.hamburger-menu').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.menu').classList.toggle('active');
    h1.classList.toggle('black');
});