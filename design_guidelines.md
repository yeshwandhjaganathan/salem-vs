# Design Guidelines for Salem RR Biryani Unavagam

## Design Approach
**Reference-Based Approach**: Drawing inspiration from premium restaurant and hospitality brands that balance traditional heritage with modern digital experience. The design combines the warmth of traditional Tamil Nadu hospitality with contemporary web aesthetics.

## Core Design Principles
- **Cultural Heritage**: Traditional Tamil Nadu restaurant aesthetic with modern refinement
- **Elegant Sophistication**: Premium feel while maintaining approachability
- **Visual Storytelling**: Use imagery and animations to convey 20+ years of culinary tradition
- **Emotional Connection**: Create warmth and appetite appeal through color and imagery

---

## Color Palette

### Primary Colors
- **Strawberry Red**: #9f0008 (159 0% 31%) - Primary brand color for headers, CTAs, key sections
- **Gold**: #fbaf2b (40 96% 58%) - Secondary accent for highlights, icons, decorative elements
- **White**: #ffffff - Text on dark backgrounds, card backgrounds, clean sections

### Background Variations
- Dark Red backgrounds for impactful sections (Franchise, Contact)
- White/light backgrounds for content-heavy sections (Menu, About)
- Gradient overlays: Red to Black for Contact page background
- Subtle overlay on hero images (dark overlay with 40-60% opacity)

---

## Typography

### Font Families
Primary: "Poppins" - Headers and prominent text
Secondary: "Lexend Deca" - Body text and descriptions
Tertiary: "Roboto" - Forms and smaller UI elements

### Hierarchy
- **Hero Headlines**: Bold, 48-64px (3xl-4xl), Poppins
- **Section Headers**: Bold, 36-48px (2xl-3xl), Poppins
- **Subheadings**: Semi-bold, 24-32px (xl-2xl), Lexend Deca
- **Body Text**: Regular, 16-18px (base-lg), Roboto
- **UI Elements**: Regular, 14-16px (sm-base), Roboto

---

## Layout System

### Spacing Primitives
Use Bootstrap 5 spacing utilities with minimum padding of p-4:
- **Section Padding**: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- **Container Spacing**: px-4 to px-8 for consistent side margins
- **Component Gaps**: gap-4 to gap-8 between grid items
- **Element Padding**: p-4 minimum for cards and components

### Grid Structure
- Bootstrap 5 12-column grid system
- **Menu Cards**: 3 columns (lg), 2 columns (md), 1 column (sm)
- **Gallery**: 3 columns responsive grid with equal heights
- **Two-Column Sections**: About Us split (image left, content right)

---

## Component Library

### Navigation
- **Sticky Navbar**: Transparent initially, solid #9f0008 background after scroll
- White text and logo on dark red background
- Smooth height transition on scroll (0.3s ease)
- Mobile: Hamburger menu with slide-in animation

### Buttons
- **Primary CTA**: Red background (#9f0008), white text, gold hover (#fbaf2b)
- **Secondary**: Gold background (#fbaf2b), dark text, red hover
- Border-radius: 12px (rounded-xl)
- Padding: px-8 py-3 minimum
- Transition: all 0.4s ease

### Cards (Menu Items, Services)
- White background with subtle shadow (0 4px 6px rgba(0,0,0,0.1))
- Border-radius: 12px
- Padding: p-4
- Hover: lift effect (translateY(-8px)) with stronger shadow
- Image hover: zoom effect (scale 1.05) over 0.4s

### Forms
- Input fields: border-radius 8px, border: 1px solid #ddd
- Focus state: red border (#9f0008), subtle glow
- Labels: Gold color (#fbaf2b), bold
- Validation: Front-end only, red text for errors

### Modals
- Centered, max-width 900px
- White background, rounded corners 12px
- Backdrop: dark overlay (rgba(0,0,0,0.7))
- Close button: top-right, red on hover

---

## Animations & Interactions

### Entry Animation
- Double-door opening effect: two divs sliding left/right with easeInOut
- Logo fade-in after doors open (delay 0.5s, duration 1s)
- Duration: 2-2.5 seconds total

### Scroll Animations (AOS.js)
- **Fade-up**: Default for most sections (data-aos="fade-up")
- **Slide-in**: For alternating content (data-aos="slide-left" / "slide-right")
- Duration: 400-600ms
- Easing: ease-in-out
- Offset: 100-150px before trigger

### Hover Effects
- Images: zoom (scale 1.05-1.1) over 0.4s
- Cards: lift (translateY -8px) with shadow enhancement
- Buttons: background color change + subtle scale (1.02)
- Navigation links: underline animation from center

### Floating Elements
- **Chat Icon**: Bottom-left, 60x60px circular, red background
  - On click: expand to show 3 circular buttons (fade-in, stagger 100ms each)
- **Scroll-to-Top**: Bottom-right, 50x50px, gold background
  - Appears after 300px scroll with fade-in
  - Smooth scroll animation (0.8s)

---

## Page-Specific Guidelines

### Home Page
- **Hero Section**: Full-width background image with dark overlay
  - Centered text: "Legendary Salem RR Biryani Unavagam"
  - Subtext: "Traditionally Cooked with Love for 20+ Years"
  - Large "Order Now" CTA button
- Entry animation before content displays

### About Us
- Two-column layout with image left, content right
- Animated counters: Years (20+), Customers, Branches
- Background: light or white for readability

### Menu
- Grid of dish cards (image, name, description, price)
- Gold price tags
- "View Full Menu" button opens modal with simulated flipbook effect

### Catering
- Icon-based service cards (Weddings, Corporate, Events)
- Each animates upward on scroll
- Red or white background with contrasting text

### Franchise
- Red background (#9f0008) with white text
- Contact form with validation
- Professional, trust-building layout

### Gallery
- 3-column masonry or equal-height grid
- Lightbox on click (full-screen overlay)
- Hover zoom effect on images

### Outlets
- Google Maps embed (responsive iframe)
- Address list below map
- Clean, organized layout

### Contact
- Gradient background (red to black)
- White text and form elements
- Social media icons (Facebook, Twitter, Instagram, YouTube)
- Gold accent on icons

---

## Images

### Hero Image
- Large, appetizing biryani dish or restaurant ambiance
- High-resolution, warm tones
- Placement: Full-width background on Home page hero section

### Required Images
- **Chef/Kitchen**: About Us page (authentic cooking scenes)
- **Dish Photography**: Menu cards (close-up food shots with vibrant colors)
- **Restaurant Interior**: Multiple shots for Gallery page
- **People Dining**: Catering/social proof sections
- **Logo**: Transparent PNG for navbar and entry animation

### Image Treatment
- Overlay: Dark gradient (rgba(0,0,0,0.4-0.6)) on background images
- Border-radius: 12px on card images
- Aspect Ratio: 4:3 or 16:9 for consistency
- Optimization: Compressed for web performance

---

## Accessibility & Responsiveness

### Dark Mode
Not applicable - single theme with defined color scheme

### Mobile Breakpoints
- **Mobile**: < 768px (single column, stacked layout)
- **Tablet**: 768px - 991px (2 columns where applicable)
- **Desktop**: ≥ 992px (full multi-column layouts)

### Touch Targets
- Minimum 44x44px for all clickable elements
- Increased padding on mobile for better tap accuracy