gsap.registerPlugin(ScrollTrigger);

// Select all divs with the class "fade-in-div"
const fadeInDivs = document.querySelectorAll(".fade-in1");

gsap.fromTo('.fade-in1',
    { opacity: 0, y: 50 }, // Initial state: hidden and slightly below
    {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: '.contact-one-form-section', // Trigger animation when this section enters the viewport
            start: "top 80%", // Start when the top of the trigger is 80% down the viewport
            end: "top -60%",
            toggleActions: "play reverse play reverse", // Play animation in both directions
        }
    }
);


gsap.fromTo('.fade-in2',
    { opacity: 0, y: 50 }, // Initial state: hidden and slightly below
    {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: '.contact-one-form-section', // Trigger animation when this section enters the viewport
            start: "top 80%", // Start when the top of the trigger is 80% down the viewport
            end: "top -73%",
            toggleActions: "play reverse play reverse", // Play animation in both directions
        }
    }
);

