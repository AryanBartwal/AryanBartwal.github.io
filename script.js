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

// Debug flag
const DEBUG = true;

// Log function
function log(message) {
    if (DEBUG) {
        console.log(`[Debug] ${message}`);
    }
}

// YouTube video IDs
const videoIds = {
    'player1': 'TT0WcGXWGZU',
    'player2': 'O6I5oJmHDLs',
    'player3': 'WQU4ryfG6JE',
    'player4': 'SQc1OByXw-Q',
    'player5': 'qbKHfqunTso'
};

// Load YouTube API
log('Starting to load YouTube API');
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Store players
let players = {};

// Simple method to create embedded videos
function createEmbeddedVideos() {
    log('Creating embedded videos');
    Object.entries(videoIds).forEach(([playerId, videoId]) => {
        const playerDiv = document.getElementById(playerId);
        if (playerDiv) {
            log(`Creating player for ${playerId}`);
            const iframe = document.createElement('iframe');
            iframe.src = `https://www.youtube.com/embed/${videoId}`;
            iframe.width = '100%';
            iframe.height = '100%';
            iframe.allowFullscreen = true;
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.frameBorder = '0';
            playerDiv.appendChild(iframe);
            log(`Player ${playerId} created`);
        } else {
            log(`Error: Could not find element with id ${playerId}`);
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    log('DOM Content Loaded');
    createEmbeddedVideos();
});

// Backup: If YouTube API fails, still show embedded videos
window.onYouTubeIframeAPIReady = function() {
    log('YouTube API Ready');
    // If videos haven't been created yet, create them
    if (Object.keys(players).length === 0) {
        createEmbeddedVideos();
    }
}
