// ===================================
// GSAP ANIMATIONS
// ===================================

gsap.registerPlugin(ScrollTrigger);

// Page Load Animation
window.addEventListener('load', () => {
    const tl = gsap.timeline();
    
    // Animate hero elements
    tl.from('.hero-title .title-line', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out'
    })
    .from('.typing-container', {
        opacity: 0,
        duration: 0.5
    }, '-=0.5')
    .from('.hero-buttons .cta-btn', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.7)'
    }, '-=0.3')
    .from('.hologram-container', {
        scale: 0,
        opacity: 0,
        duration: 1.2,
        ease: 'elastic.out(1, 0.5)'
    }, '-=1');
});

// Scroll-triggered animations
ScrollTrigger.batch('.glass-card, .skill-item, .project-card, .timeline-item', {
    onEnter: batch => gsap.from(batch, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out'
    }),
    start: 'top 80%'
});

// Section titles animation
gsap.utils.toArray('.section-title').forEach(title => {
    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: 'top 80%'
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
});

// Skill bars animation
ScrollTrigger.batch('.skill-progress', {
    onEnter: batch => {
        batch.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            gsap.to(bar, {
                width: `${progress}%`,
                duration: 1.5,
                ease: 'power2.out'
            });
        });
    },
    start: 'top 80%'
});

// Project cards hover tilt effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        gsap.to(card, {
            rotateX: rotateX,
            rotateY: rotateY,
            duration: 0.5,
            ease: 'power2.out',
            transformPerspective: 1000
        });
        
        // Move glow effect
        const glow = card.querySelector('.project-glow');
        gsap.to(glow, {
            x: x - rect.width / 2,
            y: y - rect.height / 2,
            duration: 0.3
        });
    });
    
    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.5,
            ease: 'power2.out'
        });
    });
});

// Magnetic button effect
document.querySelectorAll('.cta-btn, .project-btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(btn, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.5)'
        });
    });
});

// Timeline items stagger animation
gsap.from('.timeline-item', {
    scrollTrigger: {
        trigger: '.timeline',
        start: 'top 70%'
    },
    x: -100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out'
});

// Contact form animation
gsap.from('.contact-form', {
    scrollTrigger: {
        trigger: '.contact-form',
        start: 'top 80%'
    },
    scale: 0.9,
    opacity: 0,
    duration: 1,
    ease: 'back.out(1.7)'
});

// Social links animation
gsap.from('.social-link', {
    scrollTrigger: {
        trigger: '.social-links',
        start: 'top 80%'
    },
    scale: 0,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: 'back.out(1.7)'
});

// Parallax effect for hero visual
gsap.to('.hologram-container', {
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
    },
    y: 200,
    opacity: 0.3,
    ease: 'none'
});

// Navbar scroll effect
ScrollTrigger.create({
    start: 'top -80',
    onUpdate: (self) => {
        if (self.direction === -1) {
            gsap.to('.navbar', { y: 0, duration: 0.3 });
        } else {
            gsap.to('.navbar', { y: -100, duration: 0.3 });
        }
    }
});

// Add scrolled class to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
