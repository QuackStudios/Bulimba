// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Select all divs with the class "fade-in-div"
const fadeInDivs = document.querySelectorAll(".fade-in1");

// Loop through each div and create a fade-in animation
fadeInDivs.forEach((div) => {
    gsap.fromTo(
        div,
        { opacity: 0, y: 50 }, // Start state: invisible and slightly below
        {
            opacity: 1,
            ease: "power2.out",
            y: 0, // End state: fully visible and in place
            duration: 1, // Animation duration
            scrollTrigger: {
                trigger: '.result-driven-section', // Trigger animation when this div enters the viewport
                start: "top 80%", // Start when the top of the div is 80% down the viewport
                end: "top -20%", // End when the top of the div is 20% down the viewport
                toggleActions: "play reverse play reverse", // Play forward on scroll down, reverse on scroll up
                markers: false, // Set to true if you want to see debug markers
            },
        }
    );
});

// Select all divs with the class "fade-in-div"
const fadeInDivs2 = document.querySelectorAll(".fade-in2");

// Loop through each div and create a fade-in animation
fadeInDivs2.forEach((div) => {
    gsap.fromTo(
        div,
        { opacity: 0, y: 50 }, // Start state: invisible and slightly below
        {
            opacity: 1,
            ease: "power2.out",
            y: 0, // End state: fully visible and in place
            duration: 1, // Animation duration
            scrollTrigger: {
                trigger: '.result-driven-section', // Trigger animation when this div enters the viewport
                start: "top 45%", // Start when the top of the div is 80% down the viewport
                end: "top -50%", // End when the top of the div is 20% down the viewport
                toggleActions: "play reverse play reverse", // Play forward on scroll down, reverse on scroll up
                markers: false, // Set to true if you want to see debug markers
            },
        }
    );
});



// Select all divs with the class "fade-in-div"
const fadeInDivs3 = document.querySelectorAll(".fade-in3");

// Loop through each div and create a fade-in animation
fadeInDivs3.forEach((div) => {
    gsap.fromTo(
        div,
        { opacity: 0, y: 50 }, // Start state: invisible and slightly below
        {
            opacity: 1,
            ease: "power2.out",
            y: 0, // End state: fully visible and in place
            duration: 1, // Animation duration
            scrollTrigger: {
                trigger: '.result-driven-section', // Trigger animation when this div enters the viewport
                start: "top 40%", // Start when the top of the div is 80% down the viewport
                end: "top -50%", // End when the top of the div is 20% down the viewport
                toggleActions: "play reverse play reverse", // Play forward on scroll down, reverse on scroll up
                markers: false, // Set to true if you want to see debug markers
            },
        }
    );
});




// Select all divs with the class "fade-in-div"
const fadeInDivs4 = document.querySelectorAll(".fade-in4");

// Loop through each div and create a fade-in animation
fadeInDivs4.forEach((div) => {
    gsap.fromTo(
        div,
        { opacity: 0, y: 50 }, // Start state: invisible and slightly below
        {
            opacity: 1,
            ease: "power2.out",
            y: 0, // End state: fully visible and in place
            duration: 1, // Animation duration
            scrollTrigger: {
                trigger: '.result-driven-section', // Trigger animation when this div enters the viewport
                start: "top 35%", // Start when the top of the div is 80% down the viewport
                end: "top -50%", // End when the top of the div is 20% down the viewport
                toggleActions: "play reverse play reverse", // Play forward on scroll down, reverse on scroll up
                markers: false, // Set to true if you want to see debug markers
            },
        }
    );
});