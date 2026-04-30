const navbar = document.getElementById('navbar');
const ham    = document.getElementById('hamburger');
const menu   = document.querySelector('.nav-menu');

// Scroll effect
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu toggle
if (ham && menu) {
    ham.addEventListener('click', () => {
        ham.classList.toggle('open');
        menu.classList.toggle('open');
    });

    // Cerrar menu al hacer click en un link
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            ham.classList.remove('open');
            menu.classList.remove('open');
        });
    });
}

// Fade-up on scroll
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.feat-card, .dashboard-layout, .cta-inner').forEach(el => {
    el.classList.add('fade-up');
    fadeObserver.observe(el);
});