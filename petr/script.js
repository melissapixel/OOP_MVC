const slides = document.querySelector('.slides');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let slideIndex = 0;
const slideWidth = slides.clientWidth;

function showSlide(index) {
    slides.style.transform = `translateX(-${index * slideWidth}px)`; // Используем slideWidth
}

prevBtn.addEventListener('click', () => {
    if (slideIndex > 0) {
        slideIndex--;
        showSlide(slideIndex);
    }
});

nextBtn.addEventListener('click', () => {
    if (slideIndex < 3) {
        slideIndex++;
        showSlide(slideIndex);
    }
});

// ==========================

function autoResize() {
    const textarea = document.getElementById('myTextarea');
    textarea.style.height = '1px'; // Сбросим высоту перед измерением
  
    const scrollHeight = textarea.scrollHeight;
    textarea.style.height = scrollHeight + 'px';
  }