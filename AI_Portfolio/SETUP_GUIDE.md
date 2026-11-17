# 🚀 Quick Setup Guide

## How to View Your Portfolio

### Method 1: Double-Click (Easiest)
1. Navigate to the `AI_Portfolio` folder
2. Double-click `launch.bat` to open in your default browser
3. Enjoy the animations!

### Method 2: Manual Open
1. Navigate to the `AI_Portfolio` folder
2. Right-click `index.html`
3. Select "Open with" → Choose your browser (Chrome recommended)

### Method 3: Direct Browser
1. Open your browser
2. Press `Ctrl + O` (or `Cmd + O` on Mac)
3. Navigate to: `C:\Users\singh\OneDrive\Desktop\pxy\AI_Portfolio\index.html`
4. Click "Open"

## ✏️ Customization Checklist

Before deploying, update these items:

### 1. GitHub Links (index.html)
- [ ] Line ~80: Replace `USERNAME` with your GitHub username
- [ ] Line ~100: Replace `USERNAME` with your GitHub username  
- [ ] Line ~270-310: Update all project GitHub URLs
- [ ] Line ~400: Update GitHub profile link
- [ ] Line ~470: Update LinkedIn URL
- [ ] Line ~475: Update email address
- [ ] Line ~480: Update Twitter URL

### 2. Personal Information
- [ ] Update "About Me" description
- [ ] Customize project titles and descriptions
- [ ] Add your actual skills (or adjust percentages)
- [ ] Update experience timeline items
- [ ] Add your contact information

### 3. Optional Customizations
- [ ] Change color scheme in `css/style.css` (lines 5-20)
- [ ] Modify typing animation phrases in `js/main.js` (lines 65-70)
- [ ] Adjust animation speeds in `js/animations.js`
- [ ] Add your own images to `assets/` folder

## 🎨 Color Customization

To change the color scheme, edit `css/style.css`:

```css
:root {
    --primary-cyan: #00f0ff;     /* Main accent color */
    --primary-blue: #0066ff;     /* Secondary accent */
    --neon-purple: #9d00ff;      /* Gradient accent */
    /* ... more colors */
}
```

## 🌐 Deployment Options

### Option 1: GitHub Pages (Free)
1. Create a new GitHub repository
2. Upload all files from `AI_Portfolio` folder
3. Go to Settings → Pages
4. Select main branch → Save
5. Your site will be live at `https://username.github.io/repo-name`

### Option 2: Netlify (Free)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the `AI_Portfolio` folder
3. Your site is live instantly!

### Option 3: Vercel (Free)
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Deploy with one click

## 📱 Testing Checklist

- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Test on mobile device
- [ ] Check all links work
- [ ] Verify animations are smooth
- [ ] Test contact form
- [ ] Check responsive design

## 🐛 Troubleshooting

**Animations not working?**
- Make sure you have internet connection (for GSAP CDN)
- Try a different browser
- Clear browser cache

**Cursor not showing?**
- Custom cursor only works on desktop
- Try moving mouse around the page

**Particles not visible?**
- Check browser console for errors (F12)
- Ensure JavaScript is enabled

## 💡 Tips

1. **Best viewed in Chrome** for optimal performance
2. **Scroll slowly** to see all animations
3. **Hover over elements** to see interactive effects
4. **Use on desktop** for full experience

## 📞 Need Help?

If you encounter any issues:
1. Check the browser console (F12) for errors
2. Ensure all files are in the correct folders
3. Verify internet connection for CDN resources

---

**Enjoy your futuristic AI Engineer portfolio! 🤖✨**
