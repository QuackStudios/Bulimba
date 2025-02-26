const video = document.getElementById("hero-video");
const soundButton = document.getElementById("soundButton");
const soundIcon = document.getElementById("soundIcon");

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
}, { threshold: 0.1 }); // Trigger when 50% of the video is visible

// Observe the video element
observer.observe(video);

