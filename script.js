// JavaScript code will be added here for interactivity
history.replaceState(null, null, '');

// Scroll text horizontally
function scrollText() {
    const banner = document.getElementById('scrolling-text-container');
    banner.style.animation = 'scroll-left 20s linear infinite';
}

// Call scrollText function when the DOM is loaded
document.addEventListener('DOMContentLoaded', scrollText);
