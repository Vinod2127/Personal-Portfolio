# 📝 Content & Customization Guide

This guide shows you exactly where all the content is and how to customize it.

## 🎯 Section Overview

Your portfolio has 8 main sections. Here's where to find and edit content.

---

## 1️⃣ NAVBAR

**File:** `src/components/Navbar.jsx`

**What to customize:**
```javascript
// Line 24-27: Navigation items
const navItems = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  // ... add/remove as needed
]

// Line 42: Logo (currently "NV")
<div className="text-2xl font-bold gradient-text">NV</div>
// Change "NV" to your name or initials
```

**Features:**
- Sticky blur background on scroll
- Mobile hamburger menu
- Smooth scroll to sections
- Animated hover effects

---

## 2️⃣ HERO

**File:** `src/components/Hero.jsx`

**What to customize:**

```javascript
// Line 26-28: Roles for typewriter effect
const roles = ['Software Developer', 'Full Stack Developer', 'ML Engineer']
// Change these to your actual roles

// Line 65: Main heading
<span className="glow-text">Nalajala Vinod</span>
// Change to your name

// Line 72: Tagline
Building intelligent systems and scalable web solutions
// Change to your tagline

// Line 89-91: CTA buttons
// "View My Work" scrolls to projects section
// "Download Resume" downloads from public/resume.pdf

// Line 102-119: Social links
// Add/edit your GitHub, LinkedIn, Email URLs

// Line 125: Contact info
📱 +91 9505387364 | 📧 nalajalavinod@gmail.com
```

**Features:**
- Animated gradient text
- Typewriter effect cycling through roles
- Floatin particle background
- Social media buttons
- Resume download button

---

## 3️⃣ ABOUT

**File:** `src/components/About.jsx`

**What to customize:**

```javascript
// Line 48-56: Bio text
<p className="text-lg text-gray-300 leading-relaxed mb-4">
  I'm an IT undergraduate...
</p>
// Customize with your bio

// Line 59-113: Education timeline
export default function About() {
  const education = [
    {
      id: 1,
      institution: 'Kalasalingam Academy...',
      degree: 'B.Tech IT',
      duration: '2022 – 2026',
      cgpa: 'CGPA: 8.18/10',
      icon: GraduationCap,
    },
    // ... add/edit education entries
  ]
}
```

**Features:**
- Animated bio text
- Education timeline with icons
- Scroll-triggered animations
- CGPA/percentage display

---

## 4️⃣ SKILLS

**File:** `src/components/Skills.jsx`

**What to customize:**

```javascript
// Lines 16-46: Skill categories
const skillCategories = [
  {
    title: 'Programming',
    icon: Code2,
    skills: ['Python', 'SQL', 'JavaScript'],
  },
  {
    title: 'Web Dev',
    icon: Zap,
    skills: ['HTML', 'CSS', 'React.js', 'Flask'],
  },
  // ... add or modify categories
]
```

**Available Icons** (from Lucide React):
- `Code2` - Programming
- `Zap` - Web/Frontend
- `Cog` - Core concepts
- `Package` - Tools
- `Boxes` - ML/AI
- `Database` - Databases

**Features:**
- Skill badges with gradient background
- Categorized by type
- Hover scale effect
- Icons from Lucide React

---

## 5️⃣ PROJECTS

**File:** `src/components/Projects.jsx`

**What to customize:**

```javascript
// Lines 16-76: Project array
const projects = [
  {
    id: 1,
    title: 'Explainable Brain Tumor Detection',
    description: 'Deep learning model...',
    tech: ['Python', 'EfficientNet-B3', 'Flask', 'Grad-CAM'],
    github: 'https://github.com/Vinod2127/...',
    image: 'https://images.unsplash.com/...', // Add image URL or local path
    private: false,
  },
  // ... add more projects
]
```

**To add a project:**
1. Copy an existing project object
2. Update all fields:
   - `id` - Unique number
   - `title` - Project name
   - `description` - Short description
   - `tech` - Array of technologies
   - `github` - GitHub URL (or null)
   - `image` - Image URL or path
   - `private` - true/false for private projects

**Image Sources:**
- Use Unsplash URLs (https://images.unsplash.com/)
- Or upload to `/public/` folder and use `/image-name.jpg`
- Recommended: 500x300 pixel images

**Features:**
- Hover lift & glow effects
- GitHub link integration
- Tech stack badges
- Private project support

---

## 6️⃣ PUBLICATIONS

**File:** `src/components/Publications.jsx`

**What to customize:**

```javascript
// Lines 14-22: Publications array
const publications = [
  {
    id: 1,
    title: 'Automated Disease Detection...',
    conference: 'IC3SE-2025',
    status: 'Under Publication',
    certificate: 'https://drive.google.com/...', // Link to certificate
  },
]

// Lines 26-33: Certifications array
const certifications = [
  {
    id: 1,
    title: 'Database Management Systems (DBMS)',
    issuer: 'CodeChef',
    certificate: 'https://www.codechef.com/...',
  },
]
```

**To add a publication:**
1. Update the `publications` array
2. Provide certificate link (Google Drive, etc.)

**To add a certification:**
1. Update the `certifications` array
2. Provide certificate URL

**Features:**
- Publication status badge
- Certificate links
- Conference/issuer information
- Organized in two sections

---

## 7️⃣ CONTACT

**File:** `src/components/Contact.jsx`

**What to customize:**

```javascript
// Lines 52-65: Contact info
const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9505387364',
    href: 'tel:+919505387364',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'nalajalavinod@gmail.com',
    href: 'mailto:nalajalavinod@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Vijayawada, AP',
    href: '#',
  },
]
```

**EmailJS Configuration:**
1. File: `src/App.jsx` (line 12)
   ```javascript
   emailjs.init('YOUR_EMAILJS_PUBLIC_KEY')
   ```

2. File: `src/components/Contact.jsx` (lines 37-39)
   ```javascript
   await emailjs.send(
     'YOUR_SERVICE_ID',
     'YOUR_TEMPLATE_ID',
     templateParams
   )
   ```

**Features:**
- Contact form with validation
- Display contact information
- Social media links
- EmailJS integration (no backend needed)

---

## 8️⃣ FOOTER

**File:** `src/components/Footer.jsx`

**What to customize:**

```javascript
// Line 13: Brand/logo text
<div className="text-2xl font-bold gradient-text">NV</div>
// Change "NV" to your initials/name

// Line 15: Brand tagline
Building intelligent systems and scalable web solutions.
// Change to your tagline

// Lines 22-33: Quick links
// These auto-link to section IDs

// Lines 40-52: Social links
// Update your GitHub, LinkedIn, Email URLs
```

**Features:**
- Three-column layout
- Quick navigation links
- Social media links
- Back-to-top button
- Copyright year (auto-updates)

---

## 🎨 Global Customizations

### Styles & Colors

**File:** `tailwind.config.js`

```javascript
colors: {
  primary: '#00BFFF',      // Electric blue (main accent)
  secondary: '#06B6D4',    // Cyan (secondary accent)
  dark: '#0f172a',         // Dark background
  darker: '#0a0e27',       // Darker background
}
```

**Change color scheme:**
1. Update the hex values
2. Rebuildwith `npm run build`
3. All components update automatically!

### Global CSS

**File:** `src/index.css`

```css
/* Glassmorphism effect */
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Button styles */
.btn-primary { /* ... */ }
.btn-secondary { /* ... */ }
```

### Animations

**File:** `tailwind.config.js` (keyframes section)

```javascript
keyframes: {
  float: {
    '0%, 100%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-20px)' },
  },
  glow: {
    '0%, 100%': { boxShadow: '0 0 20px rgba(0, 191, 255, 0.5)' },
    '50%': { boxShadow: '0 0 40px rgba(0, 191, 255, 0.8)' },
  },
}
```

Adjust values to change animation behavior.

---

## 📝 Common Customizations

### 1️⃣ Change Your Name Everywhere

Search for "Nalajala Vinod" and replace:
- Hero section
- Navbar (if showing name)
- Footer
- All social links

### 2️⃣ Change Color Scheme

Update `tailwind.config.js`:
```javascript
primary: '#FF6B6B',     // Red
secondary: '#FF8E72',   // Orange
```

### 3️⃣ Add New Skill Category

In `src/components/Skills.jsx`:
```javascript
{
  title: 'DevOps',
  icon: Cog, // or any Lucide React icon
  skills: ['Docker', 'Kubernetes', 'CI/CD'],
},
```

### 4️⃣ Add New Project

In `src/components/Projects.jsx`:
```javascript
{
  id: 4,
  title: 'Your Project',
  description: 'Your description...',
  tech: ['React', 'Node.js'],
  github: 'https://github.com/...',
  image: 'https://...',
  private: false,
},
```

### 5️⃣ Change Animation Speed

In component files, adjust transition duration:
```javascript
transition={{ duration: 0.5 }}  // Faster
transition={{ duration: 1.5 }}  // Slower
```

---

## 🔗 External Links

Update all external links:
- Social media (GitHub, LinkedIn, Email)
- Resume download
- Project GitHub links
- Certificate links
- Social followlinks in footer

**Never hardcode sensitiveinformation!**

---

## ✅ Content Checklist

Before going live:

- [ ] All personal information updated
- [ ] Your name appears in Hero and Footer
- [ ] Email address updated everywhere
- [ ] Phone number updated
- [ ] Location updated
- [ ] GitHub links working
- [ ] LinkedIn link working
- [ ] Email link working
- [ ] All projects added with correct links
- [ ] All skills added
- [ ] Education timeline complete
- [ ] Publications & certifications added
- [ ] Resume uploaded to public/
- [ ] No placeholder text remaining

---

## 🚀 After Publishing

Keep your portfolio updated:

- Update projects as you build new ones
- Add new skills you learn
- Update publications/certifications
- Refresh resume annually
- Keep social links working

---

## 📚 For More Info

- See `README.md` for full documentation
- See `tailwind.config.js` for theme customization
- See component files for detailed comments
- Lucide React icons: https://lucide.dev

---

**Happy customizing! Your portfolio is uniquely yours now.** ✨
