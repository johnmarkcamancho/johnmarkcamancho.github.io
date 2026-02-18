# John Mark Camancho - Portfolio Website

A modern, premium portfolio website showcasing skills and projects with stunning visual design.

## 🎨 Features

- **Modern Design**: Dark theme with vibrant purple and pink gradients
- **Glassmorphism Effects**: Beautiful frosted glass UI elements
- **Smooth Animations**: Engaging micro-animations and transitions
- **Fully Responsive**: Optimized for all device sizes
- **Interactive Elements**: Custom cursor effects, particles, and more
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🚀 Quick Start

### Option 1: Open Directly
Simply double-click `index.html` to open in your default browser.

### Option 2: Local Server (Recommended)
For the best experience, serve the files from a local server:

#### Using Python:
```bash
# Python 3
python -m http.server 8000

# Then visit: http://localhost:8000
```

#### Using Node.js:
```bash
# Install http-server globally
npm install -g http-server

# Run server
http-server

# Then visit: http://localhost:8080
```

#### Using VS Code:
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # Complete design system and styles
├── script.js           # Interactive functionality
├── library-system.png  # Project image (add your screenshots)
├── dongpasabuy.png     # Project image (add your screenshots)
├── student-crud.png    # Project image (add your screenshots)
└── README.md           # This file
```

## 🎯 Sections

1. **Hero Section** - Eye-catching introduction with animated code window
2. **Skills Section** - 6 skill cards highlighting expertise areas
3. **Projects Section** - Showcase of 3 featured projects
4. **Contact Section** - Form and contact information
5. **Footer** - Social links and copyright

## 🖼️ Adding Project Images

Replace the placeholder images with actual screenshots:

1. Take screenshots of your projects
2. Resize images to **800x480px** (or similar 5:3 ratio)
3. Save as PNG or JPG
4. Replace:
   - `library-system.png` - Library Management System screenshot
   - `dongpasabuy.png` - DONGPASABUY Delivery System screenshot
   - `student-crud.png` - Student CRUD Application screenshot

## ✏️ Customization

### Update Personal Information

Edit `index.html` and `script.js` to personalize:

- **Name & Title**: Line 48-52 in `index.html`
- **Email**: Search for "johnmark@example.com" and replace
- **Social Links**: Lines 265-278 in `index.html` and footer section
- **Contact Info**: Lines 222-251 in `index.html`

### Update Projects

Edit the `projects` array in `script.js` (lines 4-34):

```javascript
const projects = [
    {
        id: 1,
        title: "Your Project Title",
        description: "Project description...",
        image: "your-image.png",
        tech: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/yourusername/repo",
        live: "https://your-live-site.com",
        features: ["Feature 1", "Feature 2"]
    },
    // Add more projects...
];
```

### Modify Color Scheme

Update CSS variables in `styles.css` (lines 8-31):

```css
:root {
  --primary: hsl(250, 84%, 64%);      /* Purple */
  --accent: hsl(340, 82%, 62%);       /* Pink */
  --bg-primary: hsl(240, 21%, 8%);    /* Dark bg */
  /* Customize these! */
}
```

## 🎨 Color Palette

- **Primary**: Purple (`hsl(250, 84%, 64%)`)
- **Accent**: Pink (`hsl(340, 82%, 62%)`)
- **Background**: Dark (`hsl(240, 21%, 8%)`)
- **Text**: Light gray/white

## 📱 Responsive Breakpoints

- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: < 768px

## ✨ Special Features

- **Konami Code Easter Egg**: Try entering ⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️BA
- **Custom Cursor**: Following cursor effect on desktop
- **Smooth Scrolling**: Animated section transitions
- **Form Validation**: Contact form with notifications
- **Intersection Observer**: Scroll-triggered animations

## 🔧 Browser Support

- **Chrome (recommended)**
- **Firefox**
- **Safari**
- **Edge**
- **Opera**

## 📄 License

Feel free to use this template for your personal portfolio!

## 🤝 Credits

Built with modern web technologies:
- HTML5
- CSS3 (with CSS Variables)
- Vanilla JavaScript
- Font Awesome Icons
- Google Fonts (Inter & Space Grotesk)

---

**Made with ❤️ by John Mark Camancho**
