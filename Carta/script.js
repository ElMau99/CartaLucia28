function toggleOpen() {
    const envelope = document.querySelector('.envelope');
    envelope.classList.toggle('open');

    // Crear serpentinas cuando se abre el sobre
    if (envelope.classList.contains('open')) {
        createSerpentinas();
    }
}

function createSerpentinas() {
    const serpentinasContainer = document.querySelector('.serpentinas');
    serpentinasContainer.innerHTML = ''; // Limpiar serpentinas existentes

    // Crear serpentinas dinámicamente
    for (let i = 0; i < 20; i++) {
        const serpentina = document.createElement('div');
        serpentina.classList.add('serpentina');

        // Configuración aleatoria de posición y animación
        serpentina.style.left = Math.random() * 100 + '%';
        serpentina.style.animationDelay = Math.random() * 1 + 's';
        serpentina.style.animationDuration = Math.random() * 2 + 2 + 's';

        serpentinasContainer.appendChild(serpentina);
    }
}

// Mostrar el regalo al final de la carta
const carta = document.getElementById('carta');
const regalo = document.getElementById('regalo');

carta.addEventListener('scroll', () => {
    if (carta.scrollTop + carta.clientHeight >= carta.scrollHeight) {
        regalo.style.display = 'block';
    }
});

// Función para redirigir a la página de cupones
function irACupones() {
    window.location.href = "cupones.html";
}