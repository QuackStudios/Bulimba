gsap.registerPlugin(ScrollTrigger);

// Hero Image Shrink Animation
const heroImage = document.querySelector('.hero-video-shrink');

gsap.to(heroImage, {
    scrollTrigger: {
        trigger: '.bg-image', // The section to trigger the animation
        start: 'top top', // When the top of the hero hits the top of the viewport
        end: 'bottom top', // When the bottom of the hero hits the top of the viewport
        scrub: true, // Smoothly animate as you scroll
    },
    scale: 0.97, // Shrink the image to 50% of its size
    y: -50, // Move the image up
    opacity: 0.8, // Optional: Fade out the image slightly
});