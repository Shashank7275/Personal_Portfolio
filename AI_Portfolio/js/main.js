// ===================================
// MAIN JAVA
// ===================================

// Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let followerX = 0;
let followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    // Smooth cursor movement
    cursorX += (mouseX - cursorX) * 0.3;
    cursorY += (mouseY - cursorY) * 0.3;
    
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;
    
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top = followerY + 'px';
    
    requestAnimationFrame(animateCursor);
}

animateCursor();

// Cursor hover effects
const hoverElements = document.querySelectorAll('a, button, .project-card, .skill-item');

hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        cursorFollower.style.transform = 'scale(1.5)';
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursorFollower.style.transform = 'scale(1)';
    });
});

// ===================================
// SCROLL PROGRESS INDICATOR
// ===================================
window.addEventListener('scroll', () => {
    const scrollProgress = document.querySelector('.scroll-progress');
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
});

// ===================================
// TYPING ANIMATION
// ===================================
const typingText = document.querySelector('.typing-text');
const phrases = [
    "Building Intelligent Systems",
    "Creating AI Assistants",
    "Automating the Future",
    "Developing Smart Solutions"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentPhrase.length) {
        // Pause at end
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 500;
    }
    
    setTimeout(typeEffect, typingSpeed);
}

// Start typing animation
setTimeout(typeEffect, 1000);

// ===================================
// SMOOTH SCROLL FOR NAVIGATION
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// ACTIVE NAVIGATION LINK
// ===================================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===================================
// CONTACT FORM HANDLING
// ===================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const submitBtn = contactForm.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnIcon = submitBtn.querySelector('.btn-icon');
    
    // Animate button
    btnText.textContent = 'Sending...';
    btnIcon.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    
    // Simulate form submission (replace with actual backend call)
    setTimeout(() => {
        btnText.textContent = 'Message Sent!';
        btnIcon.innerHTML = '<i class="fas fa-check"></i>';
        
        // Reset form
        contactForm.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
            btnText.textContent = 'Send Message';
            btnIcon.innerHTML = '<i class="fas fa-paper-plane"></i>';
        }, 3000);
    }, 2000);
});

// ===================================
// HOLOGRAM AVATAR PARTICLES
// ===================================
const avatarParticles = document.querySelector('.avatar-particles');

// Create particle elements
for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = '3px';
    particle.style.height = '3px';
    particle.style.background = 'var(--primary-cyan)';
    particle.style.borderRadius = '50%';
    particle.style.boxShadow = '0 0 5px var(--primary-cyan)';
    
    const angle = (Math.PI * 2 * i) / 20;
    const radius = 60 + Math.random() * 20;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    
    particle.style.left = `calc(50% + ${x}px)`;
    particle.style.top = `calc(50% + ${y}px)`;
    
    // Random animation delay
    particle.style.animation = `particleFloat 3s ease-in-out infinite`;
    particle.style.animationDelay = `${Math.random() * 2}s`;
    
    avatarParticles.appendChild(particle);
}

// Add particle float animation
const style = document.createElement('style');
style.textContent = `
    @keyframes particleFloat {
        0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.6;
        }
        50% {
            transform: translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px) scale(1.5);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// ===================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.glass-card, .skill-item, .project-card, .timeline-item').forEach(el => {
    observer.observe(el);
});

// ===================================
// GITHUB BUTTON PULSE ANIMATION
// ===================================
const githubBtns = document.querySelectorAll('.github-nav-btn, .project-btn');

githubBtns.forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.animation = 'pulse 1s ease-in-out infinite';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.animation = 'none';
    });
});

// ===================================
// PARALLAX EFFECT ON MOUSE MOVE
// ===================================
document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    
    const hologramRings = document.querySelectorAll('.hologram-ring');
    hologramRings.forEach((ring, index) => {
        const speed = (index + 1) * 0.5;
        ring.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
    });
});

// ===================================
// SCROLL REVEAL ANIMATION
// ===================================
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.glass-card, .skill-item, .project-card, .timeline-item');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
});

// ===================================
// DYNAMIC GRADIENT BACKGROUND
// ===================================
const hero = document.querySelector('.hero');
let gradientAngle = 0;

function animateGradient() {
    gradientAngle += 0.5;
    hero.style.background = `
        linear-gradient(${gradientAngle}deg, 
            var(--bg-darker) 0%, 
            rgba(0, 102, 255, 0.05) 50%, 
            var(--bg-darker) 100%)
    `;
    requestAnimationFrame(animateGradient);
}

animateGradient();

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize scroll events
const optimizedScroll = debounce(() => {
    // Scroll-dependent code here
}, 10);

window.addEventListener('scroll', optimizedScroll);

// ===================================
// CONSOLE MESSAGE
// ===================================
console.log('%c🤖 AI Engineer Portfolio', 'color: #00f0ff; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with HTML, CSS, JavaScript & GSAP', 'color: #9d00ff; font-size: 14px;');
console.log('%cInterested in the code? Check out the GitHub repo!', 'color: #0066ff; font-size: 12px;');
