document.addEventListener('DOMContentLoaded', function () {
    // Function to animate a counter
    function animateCounter(element, targetValue) {
        let currentValue = 0;
        const speed = 1000; // Duration for each increment in ms
        const increment = targetValue / (speed / 50); // Calculate the increment per step

        function updateCounter() {
            if (currentValue < targetValue) {
                currentValue += increment;
                if (currentValue > targetValue) currentValue = targetValue; // Ensure we don't exceed the target
                element.innerText = Math.floor(currentValue).toLocaleString(); // Format number with commas
                setTimeout(updateCounter, 50); // Call the update function after 50ms
            }
        }
        updateCounter();
    }

    // Initialize counters
    const count1 = document.querySelector('.count1 .head');
    const count2 = document.querySelector('.count2 .head');
    const count3 = document.querySelector('.count3 .head');

    // Start the animation with target values
    animateCounter(count1, 9000);
    animateCounter(count2, 2000);
    animateCounter(count3, 28);
});
// Aos(animation)
document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 1000, // Animation duration in ms
        easing: 'ease-out', // Easing function
    });
});
// 
// header fix
document.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav'); // Select the navbar element
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled'); // Add the 'scrolled' class when scrolled
    } else {
        navbar.classList.remove('scrolled'); // Remove the 'scrolled' class when at the top
    }
});
// 
