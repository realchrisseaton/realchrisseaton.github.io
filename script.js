document.addEventListener("DOMContentLoaded", function() {
    const aboutSection = document.getElementById("about");
    const footer = document.querySelector("footer");

    function revealOnScroll() {
        const scrollPosition = window.scrollY + window.innerHeight;
        
        if (aboutSection.offsetTop < scrollPosition) {
            aboutSection.classList.add("visible");
        }
        
        if (footer.offsetTop < scrollPosition) {
            footer.classList.add("visible");
        }
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Initial check on page load
});
