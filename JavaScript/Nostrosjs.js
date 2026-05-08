// Navbar scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// Hamburger
const ham  = document.getElementById('hamburger');
const menu = document.querySelector('.nav-menu');
if (ham && menu) {
    ham.addEventListener('click', () => {
        ham.classList.toggle('open');
        menu.classList.toggle('open');
    });
    menu.querySelectorAll('a').forEach(l => l.addEventListener('click', () => {
        ham.classList.remove('open');
        menu.classList.remove('open');
    }));
}

// Timeline fade-in on scroll
const tlObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 120);
            tlObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.tl-item').forEach(el => tlObserver.observe(el));

// Team cards fade-in
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, i * 80);
            cardObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.team-card, .origin-card, .stat-box').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    cardObserver.observe(el);
});