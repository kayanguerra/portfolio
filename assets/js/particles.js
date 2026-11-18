/* ---- particles.js: rede verde atrás do conteúdo ---- */
(function () {
    if (typeof particlesJS !== "function") return;

    var INK = "#00FF87";

    function net(id, opts) {
        if (!document.getElementById(id)) return;
        particlesJS(id, {
            particles: {
                number: { value: opts.count, density: { enable: true, value_area: 900 } },
                color: { value: INK },
                shape: { type: "circle" },
                opacity: { value: opts.dot, random: false },
                size: { value: 1.6, random: true },
                line_linked: { enable: true, distance: 140, color: INK, opacity: opts.line, width: 1 },
                move: { enable: true, speed: opts.speed, direction: "none", out_mode: "out" }
            },
            interactivity: {
                events: { onhover: { enable: false }, onclick: { enable: false }, resize: true }
            },
            retina_detect: true
        });
    }

    net("particles-js",     { count: 80, dot: 0.35, line: 0.2, speed: 1.2 });
    net("header-particles", { count: 36, dot: 0.3, line: 0.14, speed: 1 });
    net("about-particles",   { count: 40, dot: 0.25, line: 0.12, speed: 1 });
    net("cv-particles",      { count: 24, dot: 0.25, line: 0.12, speed: 1 });
    net("contact-particles", { count: 40, dot: 0.25, line: 0.12, speed: 1 });
    net("hobbies-particles", { count: 40, dot: 0.25, line: 0.12, speed: 1 });
    net("footer-particles", { count: 30, dot: 0.25, line: 0.12, speed: 1 });
})();
