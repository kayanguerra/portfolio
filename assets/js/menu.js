document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector('.menu-toggle');
    const mobileNav = document.getElementById('mobile-menu');

    if (toggle && mobileNav) {
        toggle.addEventListener('click', function () {
            const isOpen = mobileNav.classList.toggle('open');
            toggle.setAttribute('aria-expanded', isOpen);
        });

        // fecha ao clicar num link
        mobileNav.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                mobileNav.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
});
