window.addEventListener('scroll', function () {
    var header = document.getElementById('header');
    if (!header) return;
    header.style.backgroundColor = window.scrollY > 20
        ? 'rgba(7, 9, 10, 0.96)'
        : 'rgba(7, 9, 10, 0.88)';
});
