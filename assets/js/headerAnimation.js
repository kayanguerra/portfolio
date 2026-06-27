window.addEventListener('scroll', function () {
    var header = document.getElementById('header');
    if (!header) return;
    if (window.scrollY > 20) {
        header.style.backgroundColor = 'rgba(5,5,5,0.97)';
    } else {
        header.style.backgroundColor = 'rgba(5,5,5,0.92)';
    }
});
