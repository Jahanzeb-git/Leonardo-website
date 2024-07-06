document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Toggle nav menu on hamburger click
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    // Close nav menu when a nav link is clicked
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('open')) {
                navLinks.classList.remove('open');
            }
        });
    });

    // Trigger hover effect on feature sections when in viewport
    const features = document.querySelectorAll('.features > div');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleHoverClass() {
        features.forEach(feature => {
            if (isInViewport(feature)) {
                feature.classList.add('hover-effect');
            } else {
                feature.classList.remove('hover-effect');
            }
        });
    }

    window.addEventListener('scroll', handleHoverClass);
    handleHoverClass(); // Trigger on page load as well
});
