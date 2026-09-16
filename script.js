// =========================================
// MOBILE NAVIGATION TOGGLE
// =========================================
const mobileMenu = document.getElementById('mobile-menu');
const navbar = document.getElementById('navbar');

mobileMenu.addEventListener('click', () => {
    navbar.classList.toggle('active');
    const icon = mobileMenu.querySelector('i');
    if (navbar.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        const icon = mobileMenu.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// =========================================
// SCROLL REVEAL ANIMATION (INTERSECTION OBSERVER)
// =========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

// Select all elements with the 'fade-in' class
const fadeElements = document.querySelectorAll('.fade-in');
fadeElements.forEach(el => observer.observe(el));

// =========================================
// STICKY HEADER EFFECT ON SCROLL
// =========================================
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.padding = '10px 0';
        header.style.backgroundColor = 'rgba(5, 5, 10, 0.95)';
    } else {
        header.style.padding = '20px 0';
        header.style.backgroundColor = 'rgba(5, 5, 10, 0.8)';
    }
});

// =========================================
// NEWSLETTER FORM SUBMISSION (FOOTER)
// =========================================
const newsletterForm = document.getElementById('newsletterForm');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input');
        const email = emailInput.value;
        
        if (email) {
            alert(`Thank you for subscribing, ${email}! (This is a demo feature)`);
            emailInput.value = '';
        }
    });
}

// =========================================
// PROJECT INQUIRY FORM SUBMISSION (CONTACT SECTION)
// =========================================
const inquiryForm = document.getElementById('projectInquiryForm');

if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // In a real application, you would send this data to a backend server.
        alert("Thank you! Your project details have been submitted. I will get back to you soon.");
        inquiryForm.reset();
    });
}

// =========================================
// HERO TITLE TYPING EFFECT
// =========================================
document.addEventListener("DOMContentLoaded", function() {
    const typedTextSpan = document.getElementById("typed-text");
    // Words you want to cycle through
    const textArray = ["Designer", "Freelancer", "Creative Thinker"]; 
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000; // Delay between words
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } 
        else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } 
        else {
            textArrayIndex++;
            if(textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 500);
        }
    }

    // Start the typing effect
    if(textArray.length) setTimeout(type, newTextDelay + 250);
});