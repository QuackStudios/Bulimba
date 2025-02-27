document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("hero-video");
    const soundButton = document.getElementById("soundButton");
    const soundIcon = document.getElementById("soundIcon");

    if (video && soundButton && soundIcon) {
        // Toggle sound on button click
        soundButton.addEventListener("click", () => {
            if (video.muted) {
                video.muted = false;
                soundIcon.src = "assets/img-assets/volume-button.svg"; // Change to volume icon
            } else {
                video.muted = true;
                soundIcon.src = "assets/img-assets/mute-button.svg"; // Change to mute icon
            }
        });

        // Pause video when it scrolls out of view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    video.play(); // Play the video when it is in view
                } else {
                    video.pause(); // Pause the video when it is out of view
                }
            });
        }, { threshold: 0.5 }); // Trigger when 50% of the video is visible

        // Observe the video element
        observer.observe(video);
    } else {
        console.error("One or more elements (video, soundButton, soundIcon) are missing in the DOM.");
    }
});



// Linear interpolation function
function lerp(start, end, t) {
    return start * (1 - t) + end * t;
}

// Convert hex colour to RGB
function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
}

// Sections
const section1 = document.querySelector('.slider-section-wrapper');
const section2 = document.querySelector('.awards-recognition-section');

// Define colours
const colorStart = hexToRgb('#ffffff'); // White
const colorEnd = hexToRgb('#f0eae1'); // Target colour

// Define the artificial extension (e.g., 40vh)
const extensionHeight = window.innerHeight * 0.4; // 40% of viewport height

// Scroll event listener
lenis.on('scroll', () => {
    const section1Bottom = section1.getBoundingClientRect().bottom;
    const section2Top = section2.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Calculate scroll progress between the two sections
    let progress = Math.min(
        Math.max((windowHeight - section2Top) / (windowHeight + section1Bottom + extensionHeight), 0),
        1
    );

    // Interpolate the background colour
    const r = Math.round(lerp(colorStart.r, colorEnd.r, progress));
    const g = Math.round(lerp(colorStart.g, colorEnd.g, progress));
    const b = Math.round(lerp(colorStart.b, colorEnd.b, progress));

    // Apply the interpolated colour to the body
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

// Animation frame for Lenis
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);