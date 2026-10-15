document.addEventListener('DOMContentLoaded', function() {
    
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.getElementById('prev-photo');
    const nextButton = document.getElementById('next-photo');
    const caption = document.getElementById('slide-caption');
    
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach(slide => {
            slide.style.display = 'none';
        });

        if (index >= slides.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex = index;
        }

        slides[currentIndex].style.display = 'block';

        if (caption) {
            const captionText = slides[currentIndex].getAttribute('data-caption');
            caption.textContent = captionText || '';
        }
    }

    if (slides.length > 0) {
        showSlide(0);
    }

    if (prevButton) {
        prevButton.addEventListener('click', function() {
            showSlide(currentIndex - 1);
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', function() {
            showSlide(currentIndex + 1);
        });
    }

    const avatars = document.querySelectorAll('.avatar');
    
    avatars.forEach(function(avatar) {
        avatar.addEventListener('click', function() {
            if (this.classList.contains('enlarged')) {
                this.classList.remove('enlarged');
            } else {
                this.classList.add('enlarged');
            }
        });
    });

    const slidesToZoom = document.querySelectorAll('.slide');
    
    slidesToZoom.forEach(function(slide) {
        slide.addEventListener('click', function() {
            if (this.classList.contains('enlarged')) {
                this.classList.remove('enlarged');
            } else {
                this.classList.add('enlarged');
            }
        });
    });

});
