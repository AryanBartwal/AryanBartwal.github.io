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
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }
}

function onPlayerReady(event) {
    // Player is ready
}

function onPlayerStateChange(event) {
    // Handle state changes if needed
}

function playVideo(videoId) {
    if (players[videoId]) {
        players[videoId].playVideo();
    }
}

function pauseVideo(videoId) {
    if (players[videoId]) {
        players[videoId].pauseVideo();
    }
}

// Stop all other videos when one starts playing
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        for (let id in players) {
            if (players[id] !== event.target) {
                players[id].pauseVideo();
            }
        }
    }
}
