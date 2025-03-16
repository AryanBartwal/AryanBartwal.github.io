document.addEventListener('DOMContentLoaded', function() {
    const scrollDown = document.querySelector('.scroll-down');
    const aboutSection = document.querySelector('#about');

    if (scrollDown && aboutSection) {
        scrollDown.addEventListener('click', function() {
            aboutSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            scrollDown.style.opacity = '0';
        } else {
            scrollDown.style.opacity = '1';
        }
    });
});

document.title = "Aryan Bartwal | E-Portfolio";
