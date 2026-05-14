# 🚀 Deployment Guide

This guide will help you deploy your portfolio to either **Vercel** or **Netlify** in minutes.

## Option 1: Vercel (Recommended)

Vercel is optimized for Next.js but works perfectly with Vite. It's the easiest and fastest option.

### Step 1: Prepare Your Repository

1. Initialize git (if not already done)
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   ```

2. Push to GitHub
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" (use GitHub account for easier setup)
3. After signing in, click "Add New..." → "Project"
4. Select your portfolio repository
5. Vercel will auto-detect it's a Vite project
6. Click "Deploy"

### Step 3: Configure Environment Variables (If Using EmailJS)

1. In Vercel Dashboard, go to your project
2. Navigate to **Settings** → **Environment Variables**
3. Add the following:
   - `VITE_EMAILJS_PUBLIC_KEY` = Your Public Key
   - `VITE_EMAILJS_SERVICE_ID` = Your Service ID
   - `VITE_EMAILJS_TEMPLATE_ID` = Your Template ID
4. Click "Save"
5. Trigger a redeploy by pushing a commit or manually redeploying

### Step 4: Access Your Portfolio

Your portfolio is now live! The URL will be something like:
```
https://portfolio.vercel.app
```

### Custom Domain (Optional)

1. In Vercel Dashboard → Settings → Domains
2. Enter your custom domain
3. Follow the instructions to update DNS settings

---

## Option 2: Netlify

Great alternative with excellent support for static sites.

### Method A: GitHub Integration (Recommended)

1. Go to [netlify.com](https://netlify.com)
2. Click "Sign Up" (use GitHub)
3. After signing in, click "Add New Site" → "Connect to Git"
4. Select GitHub and authorize
5. Choose your portfolio repository
6. Settings will be auto-detected from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Click "Deploy Site"

### Method B: Manual Deployment

1. Build locally:
   ```bash
   npm run build
   ```

2. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

3. Deploy:
   ```bash
   netlify deploy --prod --dir=dist
   ```

### Method C: Drag & Drop

1. Build locally:
   ```bash
   npm run build
   ```

2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder onto the page
4. Your site is live!

### Configure Environment Variables

1. In Netlify Dashboard, go to Site Settings
2. Navigate to **Build & Deploy** → **Environment**
3. Click "Edit variables"
4. Add:
   - `VITE_EMAILJS_PUBLIC_KEY`
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
5. Trigger a redeploy

### Custom Domain

1. In Site Settings → **Domain Management**
2. Click "Add Custom Domain"
3. Enter your domain
4. Update DNS settings as instructed

---

## Post-Deployment Checklist

After deploying, verify everything works:

- [ ] Site loads without errors
- [ ] Navigation scrolls to sections smoothly
- [ ] All images and fonts load correctly
- [ ] Contact form sends emails (if using EmailJS)
- [ ] Resume download button works
- [ ] Social links open in new tabs
- [ ] Mobile responsive sections look good
- [ ] No console errors (F12 DevTools)

---

## Troubleshooting

### Dead Links After Deployment?

**Problem:** Links work locally but 404 after deployment

**Solution:** This is normal for client-side routing. Make sure:
- `netlify.toml` includes the redirect rules (already configured)
- Or use Vercel's automatic SPA support

### EmailJS Not Working After Deploy?

**Problem:** Contact form fails to send

**Solution:**
1. Verify environment variables are set in deployment platform
2. Check browser console for errors (F12)
3. Ensure EmailJS credentials are correct
4. Try sending a test email

### Styles Look Different?

**Problem:** Tailwind CSS not loading

**Solution:**
- Clear browser cache (Ctrl+Shift+Delete)
- Verify `tailwind.config.js` is correct
- Rebuild: `npm run build`

### Build Fails?

**Problem:** Deployment shows build error

**Solution:**
1. Test locally: `npm run build`
2. Check for JavaScript errors
3. Ensure all dependencies are in `package.json`
4. Try deleting `node_modules` and reinstalling: `npm install`

---

## Domain Services

Want a custom domain? Here are the best options:

- **[Namecheap](https://www.namecheap.com)** - Cheap, reliable
- **[Google Domains](https://domains.google)** - Simple setup
- **[GoDaddy](https://www.godaddy.com)** - Popular option
- **Netlify/Vercel Domains** - Direct from platform

---

## Performance Optimization

After deployment, optimize for best performance:

### Lighthouse Scores

1. Go to deployed site in Chrome
2. Open DevTools (F12)
3. Go to Lighthouse tab
4. Click "Analyze page load"

Most scores should be 90+. If not:
- Compress images: use [tinypng.com](https://tinypng.com)
- Remove unused CSS
- Minimize bundle size

### CDN & Caching

- Vercel & Netlify use global CDNs automatically
- Static assets are cached at edge locations
- No additional setup needed!

---

## Continuous Deployment

Both Vercel and Netlify support automatic deployments:

1. Every push to `main` branch triggers a deploy
2. Pull requests get preview URLs
3. Rollback to previous deployments anytime

Just push your changes and they'll be live in ~1 minute! 🚀

---

## Summary

| Feature | Vercel | Netlify |
|---------|--------|----------|
| Ease of Setup | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Performance | Excellent | Excellent |
| Free Tier | Yes | Yes |
| Custom Domain | Yes | Yes |
| Env Variables | Yes | Yes |
| Support | Great | Great |

**Recommendation:** Start with Vercel - it's the quickest to get running!

---

## Need Help?

- Check the official docs:
  - [Vercel Docs](https://vercel.com/docs)
  - [Netlify Docs](https://docs.netlify.com)
- Review your deployment logs for errors
- Check browser console (F12) for JavaScript errors

**Your portfolio is production-ready. Go live! 🎉**
