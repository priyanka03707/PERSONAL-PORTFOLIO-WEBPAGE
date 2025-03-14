let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const sliderContainer = document.querySelector(".slider-container");

document.getElementById("next").addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlide();
});

document.getElementById("prev").addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlide();
});

function updateSlide() {
    sliderContainer.style.transform = `translateX(-${currentSlide * 100}vw)`;
}
