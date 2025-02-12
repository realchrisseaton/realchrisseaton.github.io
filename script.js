document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add("loaded");

    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });

    reveals.forEach(reveal => observer.observe(reveal));
});
