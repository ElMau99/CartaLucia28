function revealCupon(cupon) {
    const mensajes = [
        "¡Un abrazo fuerte!",
        "Vale por una cena especial 🍽️",
        "¡Un regalo sorpresa! 🎁",
        "Para lo que quieras ❤️"
    ];

    // Obtener el índice del cupón actual
    const index = Array.from(cupon.parentNode.children).indexOf(cupon);

    // Mostrar el mensaje correspondiente
    cupon.textContent = mensajes[index];
    cupon.classList.add('revealed');
}