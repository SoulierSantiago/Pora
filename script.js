document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    let isDragging = false;
    let startX, scrollLeft;

    // Desplazamiento con el ratón
    carousel.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener("mouseleave", () => isDragging = false);
    carousel.addEventListener("mouseup", () => isDragging = false);

    carousel.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2; 
        carousel.scrollLeft = scrollLeft - walk;
    });

    // Desplazamiento táctil
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
