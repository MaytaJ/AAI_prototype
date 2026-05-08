// ─── NAVBAR SCROLL ────────────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ─── HAMBURGER ────────────────────────────────────────────────────
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

// ─── FOCUS EN INPUTS Y SELECTS ────────────────────────────────────
document.querySelectorAll('.input-wrap input, .input-wrap select').forEach(el => {
    el.addEventListener('focus', () => el.closest('.input-wrap').classList.add('focused'));
    el.addEventListener('blur',  () => el.closest('.input-wrap').classList.remove('focused'));
});

// ─── COMUNAS Y BARRIOS ────────────────────────────────────────────
const comunas = {
    'Comuna 1':  ['Retiro', 'San Nicolás', 'Puerto Madero', 'San Telmo', 'Monserrat', 'Constitución'],
    'Comuna 2':  ['Recoleta'],
    'Comuna 3':  ['Balvanera', 'San Cristóbal'],
    'Comuna 4':  ['La Boca', 'Barracas', 'Parque Patricios', 'Nueva Pompeya'],
    'Comuna 5':  ['Almagro', 'Boedo'],
    'Comuna 6':  ['Caballito'],
    'Comuna 7':  ['Flores', 'Parque Chacabuco'],
    'Comuna 8':  ['Villa Soldati', 'Villa Lugano', 'Villa Riachuelo'],
    'Comuna 9':  ['Liniers', 'Mataderos', 'Parque Avellaneda'],
    'Comuna 10': ['Floresta', 'Villa Luro', 'Monte Castro', 'Versalles', 'Villa Real', 'Vélez Sársfield'],
    'Comuna 11': ['Villa Devoto', 'Villa del Parque', 'Villa Santa Rita', 'Villa General Mitre'],
    'Comuna 12': ['Saavedra', 'Villa Urquiza', 'Coghlan', 'Villa Pueyrredón'],
    'Comuna 13': ['Belgrano', 'Núñez', 'Colegiales'],
    'Comuna 14': ['Palermo'],
    'Comuna 15': ['Villa Crespo', 'Chacarita', 'Parque Chas', 'La Paternal', 'Agronomía', 'Villa Ortúzar']
};

// ─── SELECT DINÁMICO ──────────────────────────────────────────────
const comunaSelect   = document.getElementById('comuna');
const direccionSelect = document.getElementById('direccion');

if (comunaSelect && direccionSelect) {
    comunaSelect.addEventListener('change', () => {
        const comuna = comunaSelect.value;

        // Limpiar opciones anteriores
        direccionSelect.innerHTML = '';

        const defaultOpt = document.createElement('option');
        defaultOpt.value = '';
        defaultOpt.textContent = comuna ? 'Seleccionar barrio' : 'Seleccioná una comuna primero';
        direccionSelect.appendChild(defaultOpt);

        // Agregar barrios de la comuna elegida
        if (comunas[comuna]) {
            comunas[comuna].forEach(barrio => {
                const opt = document.createElement('option');
                opt.value = barrio;
                opt.textContent = barrio;
                direccionSelect.appendChild(opt);
            });
        }
    });
}