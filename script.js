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

// Load YouTube API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Object to store YouTube player instances
var players = {};

// Called when YouTube API is ready
function onYouTubeIframeAPIReady() {
    // Initialize players for all videos
    for (let i = 1; i <= 5; i++) {
        players[`video${i}`] = new YT.Player(`video${i}`, {
            events: {
                'onStateChange': onPlayerStateChange
            }
        });
    }
}

// When a video starts playing, pause all others
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        const currentPlayer = event.target;
        
        // Loop through all players and pause others
        Object.values(players).forEach(player => {
            if (player !== currentPlayer) {
                player.pauseVideo();
            }
        });
    }
}
