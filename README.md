# ☕ Cafe Template — Modern Cafe & Bistro Website

A modern, responsive, and easily customizable website template crafted for cafes, coffee roasteries, scratch bakeries, and bistros. Built with semantic HTML5, modern modular CSS, clean vanilla JavaScript, and Vite.

---

## 🌟 Key Features

- **🎨 Modern Aesthetic & Theme Customization:**
  - Rich espresso, crema amber, and silky froth cream palette.
  - Built-in **Light and Dark mode** with smooth state persistence via `localStorage`.
  - Easily customizable CSS design tokens in `src/styles/variables.css`.
- **📱 Fully Responsive with Mobile Smart Navigation:**
  - Dedicated mobile navigation bar with **scroll-direction auto-hide** (hides on scroll down to maximize screen area, reveals immediately on scroll up).
  - Smooth mobile slide-in menu drawer with touch-friendly tap targets.
  - Proportional fluid clamp typography across all phone, tablet, and desktop viewports.
- **📖 Interactive Editorial Menu:**
  - 4-3-4-3 classic cafe structure:
    1. **Specialty Coffee & Brews** (4 items)
    2. **All-Day Artisan Brunch** (4 items)
    3. **Scratch Bakery & Pastries** (3 items)
    4. **Teas & Craft Refreshers** (3 items)
  - Interactive circular vignettes that dynamically switch images and descriptions on hover, click, or tap.
  - Easy-to-edit data store in `src/data/menu-data.js`.
- **⏰ Live Cafe Operating Status Badge:**
  - Real-time "Open / Closed" status indicator with an animated pulsing dot.
  - Fully configurable opening and closing hours in `src/js/ambiance.js`.
- **🏷️ Category Highlights Bar:**
  - Quick-scroll circular category badges (Coffee, Brunch, Bakery, Teas) replicating modern social bio navigation.
- **💬 Direct Booking & Inquiries:**
  - WhatsApp direct chat integration with pre-filled greeting messages.
  - Instagram, phone, and Google Maps direct action channels.
  - Interactive table reservation and takeaway inquiry engine.
- **⚡ Ultra Fast & Lightweight:**
  - Zero heavy framework overhead — blazing fast load times and clean production builds with Vite.

---

## 🚀 Quick Start

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18 or higher) installed.

### Installation
```bash
# Clone the repository
git clone https://github.com/snthathsara/cafe-template.git

# Navigate to the project directory
cd cafe-template

# Install dependencies
npm install

# Start the local development server
npm run dev
```

### Production Build
```bash
# Build optimized assets for production
npm run build

# Preview the production build locally
npm run preview
```

---

## 🛠️ Customization Guide

### 1. Change the Cafe Name & Branding
Search and replace `ARTISAN CAFE` in `index.html` with your cafe's brand name. You can also replace `/public/cafe-logo.svg` and `/public/favicon.svg` with your own logo files.

### 2. Update Operating Hours
Open `src/js/ambiance.js` and edit the `CAFE_HOURS_CONFIG` object:
```javascript
export const CAFE_HOURS_CONFIG = {
  weekdayOpen: 7.5,    // 7:30 AM
  weekdayClose: 21.0,  // 9:00 PM
  weekendOpen: 8.0,    // 8:00 AM
  weekendClose: 22.0,  // 10:00 PM
  openText: 'Open Today',
  openSubText: 'Closes 9:00 PM · Coffee, Brunch & Bakery',
  closedText: 'Closed Now',
  closedSubText: 'Opens 7:30 AM · Fresh Roasts & Breakfast'
};
```

### 3. Customize Colors & Themes
Open `src/styles/variables.css` to modify the primary, accent, surface, and background colors for both Light and Dark modes:
```css
:root {
  --bg-page: #FFFDF9;
  --text-primary: #231815;
  --brand-orange: #D97706; /* Primary accent / amber */
  --brand-deep: #1A110D;   /* Dark espresso */
}
```

### 4. Edit Menu Items & Prices
Update the items in `src/data/menu-data.js` and the corresponding markup in `index.html`. Each item supports image links, prices, notes, dietary tags, and recommended pairings.

### 5. Update Contact & Social Links
In `index.html`, update the placeholder links:
- **WhatsApp**: Replace `https://wa.me/15551234567` with your phone number (including country code).
- **Instagram**: Replace `https://instagram.com/yourcafename` with your handle.
- **Google Maps**: Replace the `https://maps.google.com/?q=Artisan+Cafe` query with your location.
- **Phone Number**: Update `tel:+15551234567`.

---

## 📁 Project Structure

```
cafe-template/
├── public/
│   ├── cafe-logo.svg           # Scalable vector logo
│   ├── favicon.svg             # Browser tab icon
│   ├── cafe-latte-cutout.png   # Floating hero beverage image
│   └── cafe-pastry-cutout.png  # Floating pastry image
├── src/
│   ├── data/
│   │   └── menu-data.js        # Structured menu items & categories
│   ├── js/
│   │   ├── ambiance.js         # Real-time open/closed status logic
│   │   ├── gallery.js          # Gallery preview handlers
│   │   ├── main.js             # Application entry point
│   │   ├── menu.js             # Interactive menu hover/click engine
│   │   ├── navbar.js           # Floating capsule nav & mobile auto-hide
│   │   ├── reservation.js      # Booking channel interactions
│   │   ├── scroll-animations.js# Reveal animations
│   │   └── theme.js            # Dark / Light theme switcher
│   └── styles/
│       ├── main.css            # Styles entry point
│       ├── navbar.css          # Desktop & mobile navigation styles
│       ├── editorial.css       # Core layout & mobile responsive rules
│       └── variables.css       # Color tokens, fonts, and layout constants
├── index.html                  # Main semantic HTML template
├── package.json
└── README.md
```

---

## 📄 License

This template is open-source and free to use for personal or commercial projects.
