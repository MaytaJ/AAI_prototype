const navbar = document.getElementById('navbar');
const ham    = document.getElementById('hamburger');
const menu   = document.querySelector('.nav-menu');

// Scroll effect
window.addEventListener('scroll', () => {

    // NO aplicar efecto mientras el menú está abierto
    if (menu && menu.classList.contains('open')) return;

    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu toggle
if (ham && menu) {

    ham.addEventListener('click', () => {

        ham.classList.toggle('open');
        menu.classList.toggle('open');

        // bloquear scroll cuando el menú está abierto
        document.body.style.overflow = menu.classList.contains('open')
            ? 'hidden'
            : '';
    });

    // cerrar menú al tocar link
    menu.querySelectorAll('a').forEach(link => {

        link.addEventListener('click', () => {

            ham.classList.remove('open');
            menu.classList.remove('open');
            document.body.style.overflow = '';
        });
    });
}