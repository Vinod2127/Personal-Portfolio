# Nalajala Vinod - Portfolio Website

A modern, fully responsive, and animated personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Features

- 🤖 **Interactive Smart Chatbot** - Keyword-based AI assistant (extensible to Gemini) for instant answers
- ✨ **Smooth Animations** - State-of-the-art Framer Motion scroll and hover effects
- 🖱️ **Custom Cursor** - Sophisticated, animated cursor with trailing effect for premium UX
- 🔍 **Project Deep Dives** - Detailed modals for every project with challenges, solutions, and impact
- 📱 **Fully Responsive** - Flawless experience across mobile, tablet, and desktop
- 🎨 **Modern Design** - Dark theme with glassmorphism and high-fidelity aesthetics
- 🔗 **Smooth Navigation** - React Scroll for seamless single-page transition
- 📧 **Contact Form** - EmailJS integration for reliable, no-backend communication
- ⚡ **High Performance** - Powered by Vite for lightning-fast load times

## 📋 Table of Contents

- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Project Structure](#project-structure)

## 🔧 Tech Stack

- **Frontend Framework:** React.js 18+
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion (Transitions, Hover, Scroll-triggered)
- **Icons:** Lucide React
- **Chatbot:** Custom React component with keyword-matching (Gemini-ready)
- **Navigation:** React Scroll
- **Contact Form:** EmailJS
- **Deployment:** Vercel / Netlify

## ⚡ Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The portfolio will open at `http://localhost:3000`

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📧 Configuration

### EmailJS Setup (Contact Form)

The contact form uses EmailJS to send emails without a backend. Follow these steps to set it up:

1. **Create an EmailJS Account**
   - Go to [EmailJS](https://www.emailjs.com/)
   - Sign up for a free account

2. **Get Your Credentials**
   - Navigate to Dashboard
   - Copy your **Public Key**
   - Create an Email Service (e.g., "Gmail")
   - Copy your **Service ID**
   - Create an Email Template and copy the **Template ID**

3. **Update Configuration**
   - Open `src/App.jsx`
   - Replace `YOUR_EMAILJS_PUBLIC_KEY` with your Public Key
   - Open `src/components/Contact.jsx`
   - Replace `YOUR_SERVICE_ID` with your Service ID
   - Replace `YOUR_TEMPLATE_ID` with your Template ID

### Example EmailJS Template

Create a template with these variables:
- `{{to_email}}` - Your email address
- `{{from_name}}` - Visitor's name
- `{{from_email}}` - Visitor's email
- `{{message}}` - Visitor's message

## 📄 Add Resume

1. **Place your resume PDF** in the `public/` folder
2. Name it `resume.pdf`
3. The download button will automatically work

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [Vercel](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will detect it's a Vite project automatically
   - Click "Deploy"

3. **Configure Environment Variables (if needed)**
   - In Vercel Dashboard → Settings → Environment Variables
   - Add your EmailJS credentials (optional for security)

### Deploy to Netlify

1. **Build the project locally**
   ```bash
   npm run build
   ```

2. **Deploy using Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=dist
   ```

   **OR**

   - Go to [Netlify](https://netlify.com)
   - Drag and drop the `dist` folder
   - Your site is live!

3. **Deploy from GitHub**
   - Connect your GitHub repository
   - Netlify will auto-detect Vite
   - Build command: `npm run build`
   - Publish directory: `dist`

## 📁 Project Structure

```
portfolio/
├── public/
│   └── resume.pdf          # Your resume
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Navigation bar
│   │   ├── Hero.jsx        # Hero section with typewriter
│   │   ├── About.jsx       # About & education timeline
│   │   ├── Skills.jsx      # Skills & technologies
│   │   ├── Projects.jsx    # Project showcase with interactive modals
│   │   ├── Publications.jsx # Publications & certifications
│   │   ├── Contact.jsx     # Contact form (EmailJS)
│   │   ├── Chatbot.jsx     # Interactive AI Chatbot
│   │   ├── CustomCursor.jsx # Animated custom cursor
│   │   └── Footer.jsx      # Footer
│   ├── hooks/
│   │   └── useInView.js    # Custom intersection observer hook
│   ├── App.jsx             # Main app component (Init EmailJS)
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles & design system
├── .env                    # Environment variables (ignored by git)
├── .env.example            # Template for environment variables
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS config
├── package.json            # Dependencies
└── README.md               # This file
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: '#00BFFF',      // Electric blue
  secondary: '#06B6D4',    // Cyan
  dark: '#0f172a',         // Dark background
  darker: '#0a0e27',       // Darker background
}
```

### Content

All content is directly in the component files:
- **Hero:** Edit `src/components/Hero.jsx`
- **About:** Edit `src/components/About.jsx`
- **Skills:** Edit `src/components/Skills.jsx`
- **Projects:** Edit `src/components/Projects.jsx`
- **Publications:** Edit `src/components/Publications.jsx`

### Animations

Adjust animation timing in components using Framer Motion properties:
- `duration` - Animation duration in seconds
- `delay` - Animation delay
- `transition` - Animation type (ease, easeInOut, etc.)

## ⚙️ Environment Variables

Create a `.env` file for sensitive data (optional):

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

Then update `App.jsx` and `Contact.jsx` to use:
```javascript
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
```

## 🐛 Troubleshooting

### Contact form not sending?
- Verify EmailJS credentials are correct
- Check browser console for errors
- Ensure Service ID and Template ID match in ContactJS

### Animations not working?
- Clear browser cache
- Check that Framer Motion is installed: `npm list framer-motion`
- Restart development server: `npm run dev`

### Deploy issues?
- Ensure all dependencies are listed in `package.json`
- Check that `build` command runs without errors locally
- Verify the `dist` folder is generated correctly

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Support

For questions or issues, feel free to reach out:
- 📧 Email: nalajalavinod@gmail.com
- 💼 LinkedIn: [Vinod Nalajala](http://www.linkedin.com/in/vinod-nalajala-a7264b268)
- 🐙 GitHub: [Vinod2127](https://github.com/Vinod2127)

---

## 🛠️ Detailed Projects Breakdown

### 1. Explainable Brain Tumor Detection
- **Tech:** Python, EfficientNet-B3, Flask, Grad-CAM
- **Goal:** Classify MRI scans with 96% accuracy and provide visual explanations using Grad-CAM.
- **Link:** [GitHub Repo](https://github.com/Vinod2127/Brain-Tumor-Prediction-With-Explainable-AI)

### 2. Plant Disease Detection
- **Tech:** Python, YOLOv8, ResNet9, Computer Vision
- **Goal:** Real-time localization and classification of leaf diseases, published at IC3SE-2025.
- **Link:** [GitHub Repo](https://github.com/Vinod2127/Leaf-Disease-Prediction-Using-ResNet9-and-YOLOv8.git)

### 3. Agricultural Drone Image Analysis
- **Tech:** Python, YOLO, ResNet, Jupyter
- **Goal:** Analyze high-resolution drone imagery for precision agriculture and crop health monitoring.
- **Link:** [GitHub Repo](https://github.com/Vinod2127/AGRICULTURAL-DRONE-IMAGE-ANALYSIS.git)

---

**Made with ❤️ by Nalajala Vinod**
