document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    let isDragging = false;
    let startX, scrollLeft;

    // Desplazamiento con el mouse (drag)
    carousel.addEventListener("mousedown", (e) => {
        isDragging = true;
        carousel.classList.add("active");
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener("mouseleave", () => {
        isDragging = false;
        carousel.classList.remove("active");
    });

    carousel.addEventListener("mouseup", () => {
        isDragging = false;
        carousel.classList.remove("active");
    });

    carousel.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2; // Ajusta la velocidad de desplazamiento
        carousel.scrollLeft = scrollLeft - walk;
    });

    // Desplazamiento con el dedo (pantallas táctiles)
    carousel.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener("touchmove", (e) => {
        const x = e.touches[0].clientX;
        const walk = (x - startX) * 2; 
        carousel.scrollLeft = scrollLeft - walk;
    });
});
