# AI Engineer Portfolio Website

A fully animated, modern, high-performance personal portfolio website for an AI Engineer (Python Developer) with a futuristic dark UI inspired by JARVIS.

## 🚀 Features

### Design
- **Glassmorphism** with neon cyan/purple accents
- **Animated gradient background** with particle effects
- **Custom animated cursor** with magnetic hover effects
- **Smooth scroll animations** powered by GSAP
- **3D card tilt effects** on project cards
- **Holographic AI avatar** with rotating rings and scan lines
- **Typing animation** with rotating phrases
- **Scroll progress indicator**

### Sections
1. **Hero Section** - Full-screen landing with animated hologram and CTA buttons
2. **About Section** - Glassmorphic cards with animated skill bars
3. **Projects Section** - 4 featured projects with GitHub links and hover effects
4. **Experience Section** - Animated timeline with icons
5. **Contact Section** - Interactive form with floating labels and social links

### Animations
- Page load intro sequence
- Scroll-triggered section reveals
- Magnetic button effects
- Project card 3D tilt on hover
- Skill bar progress animations
- Particle background with connecting lines
- Parallax scrolling effects
- Typing text animation

### Performance
- Optimized scroll events with debouncing
- Efficient particle system
- Smooth 60fps animations
- Responsive design (Desktop, Tablet, Mobile)

## 📁 Project Structure

```
AI_Portfolio/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles and animations
├── js/
│   ├── particles.js    # Particle background system
│   ├── animations.js   # GSAP animations
│   └── main.js         # Main JavaScript logic
└── assets/             # Images and media (optional)
```

## 🛠️ Tech Stack

- **HTML5** - Semantic structure
- **CSS3** - Glassmorphism, gradients, animations
- **JavaScript (ES6+)** - Interactive features
- **GSAP** - Advanced animations
- **ScrollTrigger** - Scroll-based animations
- **Font Awesome** - Icons
- **Google Fonts** - Orbitron, Rajdhani, Share Tech Mono

## 🎨 Color Palette

- Primary Cyan: `#00f0ff`
- Primary Blue: `#0066ff`
- Electric Blue: `#0099ff`
- Neon Purple: `#9d00ff`
- Neon Pink: `#ff006e`
- Soft Red: `#ff3366`
- Background Dark: `#0a0e1a`
- Background Darker: `#050810`

## 🚀 Getting Started

1. **Clone or download** this repository
2. **Update the GitHub links** in `index.html`:
   - Replace `USERNAME` with your GitHub username
   - Update project repository URLs
3. **Customize content**:
   - Edit text in `index.html`
   - Modify colors in `css/style.css` (CSS variables at top)
   - Add your email and social links
4. **Open `index.html`** in a modern browser

## 📝 Customization Guide

### Change Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-cyan: #00f0ff;
    --primary-blue: #0066ff;
    /* ... more colors */
}
```

### Add/Remove Projects
Edit the projects section in `index.html`:
```html
<div class="project-card">
    <!-- Your project content -->
</div>
```

### Modify Typing Animation
Edit the phrases array in `js/main.js`:
```javascript
const phrases = [
    "Your Custom Phrase 1",
    "Your Custom Phrase 2",
    // Add more...
];
```

### Adjust Animation Speed
Modify GSAP timelines in `js/animations.js`:
```javascript
duration: 1,  // Change animation duration
stagger: 0.2, // Change stagger delay
```

## 🌐 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## 📱 Responsive Breakpoints

- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: < 768px

## ⚡ Performance Tips

- Images are loaded lazily
- Scroll events are debounced
- Animations use GPU acceleration
- Particle count optimized for performance

## 🔗 External Dependencies

All dependencies are loaded via CDN:
- GSAP: `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js`
- ScrollTrigger: `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js`
- Font Awesome: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css`
- Google Fonts: Orbitron, Rajdhani, Share Tech Mono

## 📄 License

Free to use for personal and commercial projects.

## 🤝 Credits

Designed and developed with ❤️ for AI Engineers

---

**Note**: Remember to replace placeholder links and content with your actual information before deploying!
