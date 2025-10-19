document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.querySelector('#register form');
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    // --- Form Submission Handler ---
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const passwordInput = document.getElementById('password');

            if (passwordInput.value.length < 8) {
                alert('Password must be at least 8 characters long.');
                passwordInput.focus();
                return;
            }

            if (registrationForm.reportValidity()) {
                alert("You're registered for the upcoming Tech Week 2025");
                registrationForm.reset();
            }
        });
    }

    // --- Mobile Menu Toggle ---
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });

        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => mainNav.classList.remove('active'));
        });
    }

    // --- Intersection Observer for Nav Highlighting (Scroll-Spy) ---
    const sections = document.querySelectorAll('main section[id]');
    const navLinks = document.querySelectorAll('#main-nav a');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href').substring(1) === entry.target.id);
                });
            }
        });
    }, { rootMargin: "-30% 0px -70% 0px" }); // Adjust rootMargin to control when the highlight triggers

    sections.forEach(section => observer.observe(section));
});