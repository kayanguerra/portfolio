document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector('.menu-toggle');
    const mobileNav = document.getElementById('mobile-menu');

    if (!toggle || !mobileNav) return;

    // Garante que o botão fica clicável acima do canvas
    toggle.style.position = 'relative';
    toggle.style.zIndex = '9999';

    toggle.addEventListener('click', function (e) {
        e.stopPropagation(); // impede que o clique vaze para o canvas
        const isOpen = mobileNav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Fecha ao clicar num link
    mobileNav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            mobileNav.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Fecha ao clicar fora do menu
    document.addEventListener('click', function (e) {
        if (!mobileNav.contains(e.target) && !toggle.contains(e.target)) {
            mobileNav.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
        }
    });
});
