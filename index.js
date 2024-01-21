document.querySelector('.logo').addEventListener('click', function() {
    var ul = document.querySelector('nav ul');
    var icon = document.querySelector('.logo i');
    if (ul.classList.contains('show')) {
        ul.classList.remove('show');
        ul.classList.add('hide');
        ul.addEventListener('animationend', function() {
            if (ul.classList.contains('hide')) {
                ul.style.display = 'none';
            }
        });
    } else {
        ul.style.display = 'flex';
        ul.classList.remove('hide');
        ul.classList.add('show');
    }
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});