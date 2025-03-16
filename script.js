// Scroll down button functionality
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

    // Make scroll down button interactive
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            scrollDown.style.opacity = '0';
        } else {
            scrollDown.style.opacity = '1';
        }
    });
});

// Update page title dynamically
document.title = "Aryan Bartwal | E-Portfolio";

// Add click handlers for all fullscreen buttons
const fullscreenButtons = document.querySelectorAll('.fullscreen-button');
    
fullscreenButtons.forEach(button => {
    button.addEventListener('click', function() {
        const videoContainer = this.closest('.video-container');
        const iframe = videoContainer.querySelector('iframe');
        
        if (!document.fullscreenElement) {
            // Enter fullscreen
            if (videoContainer.requestFullscreen) {
                videoContainer.requestFullscreen();
            } else if (videoContainer.webkitRequestFullscreen) {
                videoContainer.webkitRequestFullscreen();
            } else if (videoContainer.msRequestFullscreen) {
                videoContainer.msRequestFullscreen();
            } else if (videoContainer.mozRequestFullScreen) {
                videoContainer.mozRequestFullScreen();
            }
        } else {
            // Exit fullscreen
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            }
        }
    });
});

// Handle video playback on mobile
document.addEventListener('DOMContentLoaded', function() {
    const videoContainers = document.querySelectorAll('.video-container');
    
    videoContainers.forEach(container => {
        const iframe = container.querySelector('iframe');
        
        // Add touch event handling for mobile
        container.addEventListener('touchstart', function(e) {
            if (e.target.classList.contains('fullscreen-button')) {
                e.preventDefault();
                if (document.fullscreenEnabled) {
                    container.requestFullscreen();
                }
            }
        });
        
        // Handle orientation change
        window.addEventListener('orientationchange', function() {
            setTimeout(function() {
                const width = container.offsetWidth;
                iframe.style.width = width + 'px';
                iframe.style.height = (width * 0.5625) + 'px'; // 16:9 aspect ratio
            }, 100);
        });
    });
});
