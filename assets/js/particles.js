/* ---- particles.js config ---- */
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 90,
            "density": { "enable": true, "value_area": 900 }
        },
        "color": { "value": "#00FF87" },
        "shape": {
            "type": "circle",
            "stroke": { "width": 0, "color": "#00FF87" }
        },
        "opacity": {
            "value": 0.35,
            "random": false,
            "anim": { "enable": false }
        },
        "size": {
            "value": 2.5,
            "random": true,
            "anim": { "enable": false }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#00FF87",
            "opacity": 0.25,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2.5,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": { "enable": true, "mode": "grab" },
            "onclick": { "enable": false },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 160,
                "line_linked": { "opacity": 0.6 }
            }
        }
    },
    "retina_detect": true
});
