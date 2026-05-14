# ⚡ Portfolio - Quick Reference Card

## 🚀 Launch In 2 Minutes

```bash
# 1. Push to GitHub
git add .
git commit -m "Ready to ship"
git push

# 2a. Deploy on Vercel
# Go to vercel.com → Import Project → Deploy

# 2b. Deploy on Netlify
# Go to netlify.com → Import Project → Deploy

# ✅ Your site is live!
```

---

## 📝 Before Launch Checklist

- [ ] EmailJS configured (optional)
- [ ] Resume added to `public/resume.pdf`
- [ ] All links tested
- [ ] Tested on mobile (responsive)
- [ ] No console errors (F12)
- [ ] All social links working
- [ ] Pushed to GitHub

---

## 🔧 Main Commands

```bash
npm run dev       # Development with hot reload
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # Check code quality
```

---

## 📂 Key Files to Edit

| File | What to Change |
|------|---|
| `src/components/Hero.jsx` | Your name, roles, tagline |
| `src/components/About.jsx` | Bio, education |
| `src/components/Skills.jsx` | Your skills list |
| `src/components/Projects.jsx` | Your projects |
| `src/components/Publications.jsx` | Publications & certs |
| `src/components/Contact.jsx` | Email, phone, address |
| `tailwind.config.js` | Colors, theme |
| `public/resume.pdf` | Your resume |

---

## 🎨 Quick Customizations

### Change Colors
Edit `tailwind.config.js`:
```javascript
primary: '#00BFFF',      // Main blue
secondary: '#06B6D4',    // Cyan
dark: '#0f172a',         // Background
```

### Add a Project
Edit `src/components/Projects.jsx`:
```javascript
{
  id: 4,
  title: 'Your Project',
  description: 'Description...',
  tech: ['React', 'Node.js'],
  github: 'https://...',
  image: 'https://...',
  private: false,
},
```

### Add a Skill
Edit `src/components/Skills.jsx`:
```javascript
// Add to an existing category's skills array
skills: ['Python', 'SQL', 'JavaScript', 'NEW_SKILL'],
```

---

## 📧 EmailJS Setup

For contact form to work:

1. Go to `https://www.emailjs.com/`
2. Sign up (free)
3. Get: Public Key, Service ID, Template ID
4. Update `src/App.jsx` line 12:
   ```javascript
   emailjs.init('YOUR_PUBLIC_KEY')
   ```
5. Update `src/components/Contact.jsx` lines 37-39

---

## 🌐 Deployment

### Vercel
1. Go `vercel.com`
2. New Project
3. Select GitHub repo
4. Deploy
5. **Done!**

### Netlify
1. Go `netlify.com`
2. New Site
3. Select GitHub repo
4. Deploy
5. **Done!**

---

## 🐛 Troubleshooting

**Build fails?**
```bash
rm -r node_modules
npm install
npm run build
```

**Styles not loading?**
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server

**Contact form not working?**
- Check EmailJS credentials
- Check console (F12) for errors
- Verify Service ID & Template ID

---

## 📱 Responsive Breakpoints

```css
sm: 640px      /* Mobile landscape */
md: 768px      /* Tablet */
lg: 1024px     /* Desktop */
xl: 1280px     /* Large desktop */
```

---

## 🎬 Animation Properties

Adjust in component files:
```javascript
duration: 0.8           // How long (seconds)
delay: 0.2              // When to start (seconds)
staggerChildren: 0.1    // Space out animations
```

---

## 🔗 Important Links

- 📘 [Full Docs](README.md)
- ⚡ [Setup Guide](QUICK_START.md)
- 🚀 [Deploy Guide](DEPLOYMENT_GUIDE.md)
- 📝 [Content Guide](CONTENT_GUIDE.md)
- 📊 [Build Summary](BUILD_SUMMARY.md)

---

## ✨ Features

- ✅ Fully responsive
- ✅ Smooth animations
- ✅ Dark theme
- ✅ EmailJS contact form
- ✅ Project showcase
- ✅ Mobile menu
- ✅ SEO ready
- ✅ Zero config deploy

---

## 📊 Performance

- Build time: 8s
- JS: 307 KB (97 KB gzipped)
- CSS: 19.8 KB (4.5 KB gzipped)
- Load time: < 1s on CDN
- LightHouse: 95+

---

## 🎯 File Organization

```
portfolio/
├── src/components/    ← 8 React components
├── src/hooks/         ← Custom hooks
├── src/              ← App, styles, entry
├── public/           ← Static assets
├── dist/             ← Production build
└── docs/             ← Documentation
```

---

## 🔐 Security

- ✅ No backend code (static)
- ✅ No database
- ✅ Auto HTTPS on Vercel/Netlify
- ✅ EmailJS safe (standard practice)

---

## 💬 Need Customization?

**Easy (10 min):**
- Change colors
- Update content
- Adjust animations

**Medium (30 min):**
- Add new sections
- Custom styling
- New components

**Hard (> 1 hour):**
- Redesign layout
- Custom features
- Advanced JS

---

## 📋 Social Links

Update in components:
- GitHub: `https://github.com/YOUR_USERNAME`
- LinkedIn: `https://linkedin.com/in/YOUR_PROFILE`
- Email: `your@email.com`

---

## ✅ Launch Checklist (Fast)

```
☐ EmailJS setup (if using contact form)
☐ Resume in public/resume.pdf
☐ npm run build (no errors)
☐ All links tested
☐ Mobile tested
☐ Git pushed
☐ Deployed
☐ Shared! 🎉
```

---

## 🚀 TL;DR

```bash
# 1 minute setup
npm run build

# 30 seconds deploy
# Vercel/Netlify upload

# ∞ possibilities
# Share your portfolio!
```

---

**Print this card or bookmark for quick reference!**

**Status:** ✅ Production Ready
**Time to Live:** 2 minutes
**Support:** See documentation files

---

**Go build something great! 🚀**
