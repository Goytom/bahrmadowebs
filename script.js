<!-- ======================================================================= -->
<!-- FILE: script.js (UPDATED with scroll listener) -->
<!-- ======================================================================= -->

<script>
document.addEventListener('DOMContentLoaded', function() {
    
    // --- Mobile Menu Functionality ---
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');

            // Change icon from bars to X and back
            const icon = menuToggle.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // --- Active Nav Link Highlighter ---
    // Get the current page URL
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('.main-nav .nav-links a');

    navLinks.forEach(link => {
        // Remove active class from all links first
        link.classList.remove('active');
        const linkPage = link.getAttribute('href').split("/").pop();

        // Add active class to the link that matches the current page
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });

    // --- Contact Form Handler (for contact.html) ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevents the default form submission
            
            // In a real website, you would send this data to a server or email service.
            // For this prototype, we'll just show an alert.
            const name = document.getElementById('name').value;
            alert(`Thank you for your message, ${name}! We will get back to you shortly.`);
            
            contactForm.reset(); // Clears the form fields
        });
    }

    // --- NEW: Header Scroll Effect ---
    const header = document.querySelector('.main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) { // Add class after scrolling 50px
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
});
</script>
