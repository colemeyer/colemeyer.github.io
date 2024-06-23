document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    let currentSlide = 0;
    let slideInterval;

    const updateCounter = () => {
        document.querySelector('.carousel-counter-text').textContent = `${currentSlide + 1} / ${totalSlides}`;
    };

    const showSlide = (index) => {
        if (index >= totalSlides) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide = index;
        }

        const offset = -currentSlide * 100;
        document.querySelector('.carousel-slides').style.transform = `translateX(${offset}%)`;
        updateCounter();
    };

    const startSlideShow = () => {
        slideInterval = setInterval(() => {
            showSlide(currentSlide + 1);
        }, 5000);
    };

    const resetSlideShow = () => {
        clearInterval(slideInterval);
        startSlideShow();
    };

    document.querySelector('.carousel-counter .left-arrow').addEventListener('click', () => {
        showSlide(currentSlide - 1);
        resetSlideShow();
    });

    document.querySelector('.carousel-counter .right-arrow').addEventListener('click', () => {
        showSlide(currentSlide + 1);
        resetSlideShow();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            showSlide(currentSlide - 1);
            resetSlideShow();
        } else if (e.key === 'ArrowRight') {
            showSlide(currentSlide + 1);
            resetSlideShow();
        }
    });

    // Initialize the counter
    updateCounter();
    // Start the slideshow
    startSlideShow();
});
