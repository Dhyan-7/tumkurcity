# Tumakuru (Tumkur) City Website 🌴🏛️

An elegant, modern, accessible, and fluid-responsive official web portal for **Tumakuru (Tumkur) City**, Karnataka — known as **Kalpataru Nadu** (Land of Coconut Palms), Knowledge Capital, and Green Energy Pioneer.

---

## 🌟 Highlights & Features

- **Semantic HTML5 & Accessibility**: Fully accessible semantic structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<dialog>`, `<footer>`) with ARIA labels, keyboard focus rings, and proper contrast ratios.
- **Modern CSS Architecture**:
  - CSS Cascade Layers (`@layer reset, base, layout, components, utilities`) for predictable specificity.
  - CSS Custom Properties (Design Tokens) supporting both **Light Mode** and **Dark Mode**.
  - Fluid responsive typography and spacing using `clamp()`.
  - Dynamic viewport units (`dvh`, `dvw`) for seamless mobile browser support.
  - Media elements and illustrations using `aspect-ratio` to avoid Cumulative Layout Shift (CLS).
  - Modern targeted resets without intrusive global `*` resets.
- **Interactive Capabilities**:
  - **Attraction Filtering**: Filter landmarks by *All*, *Pilgrimage & Sacred*, *Hills & Nature*, *History & Art*, or *Smart & Modern*.
  - **Native Accessible `<dialog>`**: Instant popup with detailed information, timings, and highlights for every landmark without external dependencies.
  - **Theme Switcher**: Smooth switch between Emerald Light and Slate Dark themes, persistent via `localStorage`.
  - **Mobile Slide-Out Drawer**: Touch-friendly navigation menu with accessible backdrop and Escape-key dismiss.
  - **Emergency Helpline Directory**: Quick one-touch reference for Police (112), Fire (101), Ambulance (108), and Municipal offices.

---

## 🏛️ Featured Landmarks & Topics

1. **Sri Siddaganga Mutt**: Revered 15th-century pilgrim center and seat of Dr. Sri Sri Shivakumara Swamiji's *Trividha Dasohi* mission.
2. **Devarayanadurga (DD Hills)**: Scenic 3,940 ft hill station with Yoga and Bhoga Narasimha temples.
3. **Namada Chilume**: Natural fresh water rock spring linked to Lord Rama's exile, featuring a deer park and herbal arboretum.
4. **Kaidala Chennakeshava Temple**: Masterpiece of monolithic black-stone Hoysala sculpture and birthplace of legendary sculptor Amarashilpi Jakanachari.
5. **Amanikere Lake & Crystal Glass House**: 500-acre urban lakefront with musical dancing fountains and jogging promenades.
6. **Pavagada Solar Park (Shakti Sthala)**: 2,050 MW clean energy project spanning 13,000 acres, one of the world's largest solar parks.
7. **Siddara Betta & Goravanahalli Mahalakshmi Temple**: Famous medicinal cave retreat and devotional shrine.
8. **Tumkur Thatte Idli & Agrarian Wealth**: The world-famous soft steamed Thatte Idli of Kyatsandra and Tumakuru's premier copra/coconut trade.
9. **Tumakuru Smart City Mission (TSCL)**: Integrated Command & Control Centre (ICCC), Intelligent Transit Systems (ITS), and industrial corridor hubs (Vasanthanarasapura).

---

## 🚀 How to Run & Preview

You can open the project directly in any modern browser:

### Option 1: Direct File Open
Simply double-click `index.html` or open it with your favorite browser:
- On macOS:
  ```bash
  open index.html
  ```
- On Linux:
  ```bash
  xdg-open index.html
  ```
- On Windows:
  ```cmd
  start index.html
  ```

### Option 2: Run a Local Dev Server (Optional)
Using Python:
```bash
python3 -m http.server 3000
```
Then visit `http://localhost:3000` in your web browser.

---

## 📂 File Structure

```
Tumkur/
├── index.html     # Semantic HTML5 markup with SVG illustrations & accessible dialogs
├── styles.css     # Modern layered CSS, design tokens, light/dark themes & fluid typography
├── script.js      # Vanilla JS for filtering, dialog modal, drawer & theme toggle
└── README.md      # Documentation and overview
```

