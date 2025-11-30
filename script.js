// ================
// = DOM Elements =
// ================

document.addEventListener('DOMContentLoaded', function() {
    // Navigation
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.navbar__menu');

    // ===========================
    // Mobile Navigation Toggle
    // ===========================
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            navMenu.classList.toggle('navbar__menu--active');
        });
    }

    // ===========================
    // Contact Form Submission
    // ===========================
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // Simulate form submission
            const formMessage = document.getElementById('formMessage');
            formMessage.style.display = 'block';
            formMessage.textContent = `Thank you, ${formData.name}! Your message has been received. We'll get back to you at ${formData.email} soon.`;
            formMessage.className = 'contact__form-message contact__form-message--success';

            // Reset form
            contactForm.reset();

            // Hide message after 5 seconds
            setTimeout(function() {
                formMessage.style.display = 'none';
            }, 5000);
        });
    }
});

// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

console.log('TravelFar Website Loaded');
