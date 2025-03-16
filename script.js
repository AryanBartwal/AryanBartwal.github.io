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

// Load YouTube IFrame API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Initialize YouTube players when API is ready
var players = [];
function onYouTubeIframeAPIReady() {
    document.querySelectorAll('.video-container iframe').forEach((iframe, index) => {
        // Extract video ID from iframe src
        const videoId = iframe.src.split('embed/')[1].split('?')[0];
        
        // Replace iframe with div for YouTube player
        const divId = 'youtube-player-' + index;
        const div = document.createElement('div');
        div.id = divId;
        iframe.parentNode.replaceChild(div, iframe);
        
        // Create YouTube player
        players[index] = new YT.Player(divId, {
            height: '100%',
            width: '100%',
            videoId: videoId,
            playerVars: {
                'playsinline': 1,
                'enablejsapi': 1,
                'modestbranding': 1,
                'controls': 1,
                'rel': 0
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    });
}

function onPlayerReady(event) {
    // Player is ready
    const playerElement = event.target.getIframe();
    const container = playerElement.closest('.video-container');
    
    // Add click event to container for play/pause
    container.addEventListener('click', function(e) {
        if (!e.target.classList.contains('fullscreen-button')) {
            const player = event.target;
            const state = player.getPlayerState();
            if (state === YT.PlayerState.PLAYING) {
                player.pauseVideo();
            } else {
                player.playVideo();
            }
        }
    });
}

function onPlayerStateChange(event) {
    // Handle player state changes if needed
}

// Handle fullscreen
document.addEventListener('DOMContentLoaded', function() {
    const fullscreenButtons = document.querySelectorAll('.fullscreen-button');
    
    fullscreenButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent video play/pause
            const container = this.closest('.video-container');
            
            if (!document.fullscreenElement) {
                if (container.requestFullscreen) {
                    container.requestFullscreen();
                } else if (container.webkitRequestFullscreen) {
                    container.webkitRequestFullscreen();
                } else if (container.msRequestFullscreen) {
                    container.msRequestFullscreen();
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            }
        });
    });
});

// Handle orientation changes
window.addEventListener('orientationchange', function() {
    setTimeout(function() {
        players.forEach(player => {
            if (player && player.getIframe) {
                const iframe = player.getIframe();
                const container = iframe.closest('.video-container');
                const width = container.offsetWidth;
                iframe.style.width = width + 'px';
                iframe.style.height = (width * 0.5625) + 'px';
            }
        });
    }, 100);
});
