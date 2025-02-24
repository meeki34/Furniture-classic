// script.js

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle functionality
const mobileMenuToggle = document.querySelector('.navbar-toggler');
const mobileMenu = document.querySelector('.navbar-collapse');

mobileMenuToggle.addEventListener('click', function() {
    constExpanded = this.getAttribute('aria-expanded');
    if (typeof mobileMenu !== 'undefined') {
        if (constExpanded === 'false') {
            mobileMenu.classList.add('show');
            this.setAttribute('aria-expanded', 'true');
        } else {
            mobileMenu.classList.remove('show');
            this.setAttribute('aria-expanded', 'false');
        }
    }
});

// Product card hover effect
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.addEventListener('touchstart', function(e) {
        this.style.transform = 'translateY(-5px)';
    });
    card.addEventListener('touchend', function(e) {
        this.style.transform = 'translateY(0)';
    });
});

// Image slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
    slides[index].style.display = 'block';
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function previousSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Initialize slider
if (slides.length > 0) {
    showSlide(0);
    setInterval(nextSlide, 5000);
}

// Mobile-specific optimizations
window.addEventListener('resize', function() {
    if (window.innerWidth <= 768) {
        // Adjust font sizes for better readability
        document.querySelectorAll('h1, h2, h3').forEach(element => {
            element.style.fontSize = '1.2em';
        });
    }
});

// Add to Cart button functionality
const cart = [];
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function() {
        const product = this.closest('.product-card');
        const productId = product.querySelector('.price').textContent;
        
        if (cart.includes(productId)) {
            alert('Product already in cart!');
        } else {
            cart.push(productId);
            alert('Product added to cart!');
        }
    });
});

// Helper function for mobile scrolling
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add click event listener for all buttons
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function() {
            this.style.opacity = '0.8';
            setTimeout(() => {
                this.style.opacity = '1';
            }, 200);
        });
    });

    // Add touch support for mobile
    document.addEventListener('touchstart', function(e) {
        e.preventDefault();
    });
    document.addEventListener('touchmove', function(e) {
        e.preventDefault();
    });
    
    // Enable passive scrolling for better performance
    document.addEventListener('touchmove', function(e) {
        e.preventDefault();
    }, { passive: false });
});
