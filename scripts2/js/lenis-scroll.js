const lenis = new Lenis({
    smoothWheel: true, // Use this instead of 'smooth'
    smoothTouch: true, // Optional: Enable smooth scrolling for touch devices
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);