# Woodward St Bakery Café - Premium Website

A luxury, hyper-animated Next.js 14 website for Woodward St Bakery Café in Cairns, featuring smooth animations, elegant design, and a premium user experience.

## 🌟 Features

- **Premium Design**: Dark, elegant theme matching reference UI with gold accents
- **Smooth Animations**: Framer Motion and GSAP scroll animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Sections**:
  - Full-screen animated hero section
  - About section with feature highlights
  - Menu showcase with hover effects
  - Signature items carousel (Swiper)
  - Catering services section
  - Customer testimonials carousel
  - Photo gallery with lightbox
  - Contact form with Google Maps integration
  - Animated footer with social links

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. **Move Images to Public Folder**
   
   First, create a `public` folder in the root directory and move all image files there:
   - logo.jpg
   - Crispy on the outside, melt-in-your-mouth chocolate on the inside. Breakfast perfection awaits!W.jpg
   - website-landing-page-bakery-shop-home-page-ui-design-bakery-products-website-banner-design_755018-490.jpg
   - Work, play, or celebrate—we're the perfect place to do it all! 🎉☕ Free Wi-Fi, loads of parking,.jpg
   - See that seat there It has your name on it! At our Empower & Align Sessions, we don't just talk .jpg
   - Screenshot_20251028-191440_1.jpg
   - Any video files (optional)

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run Development Server**

   ```bash
   npm run dev
   ```

4. **Open Browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🎨 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: 
  - Framer Motion
  - GSAP with ScrollTrigger
- **UI Components**:
  - Swiper (carousel)
  - React Icons
  - React Hook Form
- **State Management**: Zustand
- **HTTP Client**: Axios

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page assembling all sections
│   └── globals.css         # Global styles and Tailwind
├── components/
│   ├── Navigation.tsx      # Sticky navigation with scroll effects
│   ├── HeroSection.tsx     # Full-screen hero with animations
│   ├── AboutSection.tsx    # About with features grid
│   ├── MenuSection.tsx     # Menu cards with hover effects
│   ├── SignatureSlider.tsx # Swiper carousel
│   ├── CateringSection.tsx # Catering services
│   ├── ReviewsSection.tsx  # Testimonials carousel
│   ├── GallerySection.tsx  # Photo gallery with lightbox
│   ├── ContactSection.tsx  # Contact form + map
│   ├── Footer.tsx          # Footer with links
│   └── ScrollAnimations.tsx # GSAP scroll animations
├── public/                 # Static assets (images, videos)
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies and scripts

```

## 🎯 Key Features Implemented

### Navigation
- Sticky header with blur effect on scroll
- Smooth scroll to sections
- Mobile responsive menu
- Social media links

### Hero Section
- Full-screen layout with parallax effects
- Animated text reveals
- Floating elements
- Scroll indicator

### About Section
- Split layout with images
- Feature cards with icons
- Scroll-triggered animations

### Menu Section
- Card-based layout with hover effects
- Image zoom on hover
- Overlay with CTA button
- Price display

### Signature Slider
- Swiper carousel with 3D coverflow effect
- Auto-play functionality
- Touch/drag support
- Responsive design

### Catering Section
- Feature grid with icons
- Statistics display
- Call-to-action button
- Background animations

### Reviews Section
- Auto-rotating testimonials
- Star ratings
- Custom avatars
- Smooth transitions

### Gallery Section
- Masonry-style grid
- Lightbox on click
- Zoom animations
- Responsive layout

### Contact Section
- React Hook Form integration
- Google Maps embed
- Contact information cards
- Form validation

### Footer
- Multi-column layout
- Social media links
- Quick links navigation
- Copyright information

## 🎨 Design System

### Colors
- **Primary**: `#1a1612` (Dark brown)
- **Secondary**: `#c9a468` (Gold)
- **Accent**: `#d4af7a` (Light gold)
- **Dark**: `#0a0a0a` (Black)
- **Light**: `#f5f5f5` (Off-white)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Script**: Cormorant Garamond (italic serif)

### Animations
- Fade in on scroll
- Slide up/left/right
- Zoom in effects
- Parallax scrolling
- Hover transforms
- Smooth page transitions

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: ≥ 1024px

## 🔧 Customization

### Update Business Information

Edit the following files:
- `components/Navigation.tsx` - Phone number, social links
- `components/HeroSection.tsx` - Address, hours, contact
- `components/ContactSection.tsx` - Location, email, phone
- `app/layout.tsx` - SEO metadata

### Update Images

Replace images in the `/public` folder with your own. Make sure to keep the same filenames or update the image paths in the components.

### Change Colors

Update `tailwind.config.js`:

```js
colors: {
  primary: '#your-color',
  secondary: '#your-color',
  // ...
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

Build the static export:

```bash
npm run build
```

Deploy the `.next` folder to your hosting provider.

## 📄 License

© 2025 Woodward St Bakery Café. All rights reserved.

## 🤝 Support

For support or inquiries, contact:
- **Email**: info@woodwardstbakery.com
- **Phone**: 1472014614 0931
- **Location**: 216 Woodward St, Whitfield, QLD 4870, Australia

---

**Made with ❤️ in Cairns**
