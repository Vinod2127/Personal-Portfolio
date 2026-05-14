## Quick Start Guide

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Configure EmailJS (Optional but Recommended)
1. Visit https://www.emailjs.com/ and create a free account
2. Get your Public Key, Service ID, and Template ID
3. Update these files with your credentials:
   - `src/App.jsx` - Replace `YOUR_EMAILJS_PUBLIC_KEY`
   - `src/components/Contact.jsx` - Replace `YOUR_SERVICE_ID` and `YOUR_TEMPLATE_ID`

### Step 3: Add Your Resume
- Place your resume PDF in `public/resume.pdf`
- The download button will work automatically

### Step 4: Run Development Server
```bash
npm run dev
```
The portfolio will open at http://localhost:3000

### Step 5: Build for Production
```bash
npm run build
```
This creates a `dist` folder ready for deployment.

### Step 6: Deploy

**Option A: Vercel (Recommended)**
- Push to GitHub
- Connect repository on Vercel.com
- Vercel automatically detects Vite and deploys

**Option B: Netlify**
- Run `npm run build`
- Go to Netlify.com
- Drag and drop the `dist` folder
- Done!

---

### File Organization Quick Reference

| File | Purpose |
|------|---------|
| `src/components/Hero.jsx` | Main landing section with typewriter effect |
| `src/components/About.jsx` | About me & education timeline |
| `src/components/Skills.jsx` | Skills organized by category |
| `src/components/Projects.jsx` | Featured projects showcase |
| `src/components/Publications.jsx` | Publications & certifications |
| `src/components/Contact.jsx` | Contact form with EmailJS |
| `src/App.jsx` | Main app configuration (EmailJS init) |
| `tailwind.config.js` | Customize colors and theme |
| `src/index.css` | Global styles & animations |

### Quick Customization Tips

**Change Colors:**
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#00BFFF',      // Main accent color
  secondary: '#06B6D4',    // Secondary accent
  dark: '#0f172a',         // Background
}
```

**Edit Content:**
- All content is in component files
- Search and replace text directly
- Add/remove items from arrays

**Change Animations:**
Adjust Framer Motion properties:
- `duration` - How long animation takes (seconds)
- `delay` - Delay before animation (seconds)
- `transition` - Animation curve (ease, easeOut, etc.)

### Common Issues & Solutions

**Contact form not working?**
- Did you add EmailJS credentials?
- Check browser console for JavaScript errors
- Try sending a test email to troubleshoot

**Styles not loading?**
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server (Ctrl+C, then `npm run dev`)

**Build fails?**
- Delete `node_modules` and `dist`
- Run `npm install` again
- Try `npm run build`

### Next Steps

1. ✅ Update personal information in components
2. ✅ Add your resume to `public/resume.pdf`
3. ✅ Configure EmailJS for contact form
4. ✅ Test locally with `npm run dev`
5. ✅ Build with `npm run build`
6. ✅ Deploy to Vercel or Netlify

**Good luck! Your portfolio is now production-ready!** 🚀
