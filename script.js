document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel-container");

    carousel.addEventListener("mouseenter", () => {
        carousel.querySelector(".carousel").style.animation = "scroll 5s linear infinite";
    });

    carousel.addEventListener("mouseleave", () => {
        carousel.querySelector(".carousel").style.animation = "none";
    });
});