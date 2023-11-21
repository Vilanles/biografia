const background = document.querySelector('.background');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    // Ajusta la posición de la imagen de fondo en función de la posición del mouse
    background.style.transform = `translate(-${mouseX * 50}px, -${mouseY * 50}px)`;
});
