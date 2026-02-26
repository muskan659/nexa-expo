# Nexa Expo - Next.js Application

This is a Next.js conversion of the Nexa Expo HTML website, preserving all styling, animations, and functionality.

## Features

- ✅ Fully responsive design
- ✅ All original animations preserved (GSAP, WOW.js, Swiper)
- ✅ Smooth scroll effects
- ✅ Interactive sliders and carousels
- ✅ Bootstrap integration
- ✅ TypeScript support
- ✅ Optimized for performance

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd nextjs-nexa-expo
```

2. Install dependencies:
```bash
npm install
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
nextjs-nexa-expo/
├── app/
│   ├── layout.tsx       # Root layout with all scripts and styles
│   ├── page.tsx         # Main homepage component
│   └── globals.css      # Global styles
├── public/
│   └── assets/
│       ├── css/         # All stylesheets
│       ├── js/          # JavaScript libraries
│       └── img/         # Images and media files
├── package.json
├── tsconfig.json
└── next.config.js
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Bootstrap 5** - UI framework
- **GSAP** - Animation library
- **Swiper** - Slider/carousel component
- **WOW.js** - Scroll animations
- **jQuery** - DOM manipulation (for legacy compatibility)

## Key Sections

1. **Hero Slider** - Dynamic image slider with parallax effects
2. **Introduction** - Company overview and mission
3. **Kuwait Vision 2035** - Services and strategic goals
4. **Why Kuwait** - Benefits of Kuwait location
5. **Why Us** - Company advantages and features
6. **Founders** - Team information with testimonial slider
7. **Contact** - Contact information and footer

## Animations

All original animations have been preserved:
- GSAP ScrollSmoother for smooth scrolling
- WOW.js for scroll-triggered animations
- Swiper for sliders and carousels
- Bootstrap collapse for accordions
- Custom parallax effects

## Customization

- Edit `app/page.tsx` to modify content
- Add new styles in `app/globals.css` or create new CSS files
- Modify animations in `/public/assets/js/main.js`
- Update configuration in `next.config.js`

## Notes

- All assets are served from the `/public` directory
- Scripts are loaded using Next.js `Script` component for optimal performance
- Client-side animations initialized in `useEffect` hooks
- Hydration warnings suppressed where necessary for animation libraries

## License

All rights reserved - Nexa Expo 2026

## Support

For issues or questions, please contact: hello@nexaexpo.co
