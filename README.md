# Modern Clothing Website

A responsive, modern e-commerce website for clothing, built with HTML, CSS, and JavaScript. Features include a dynamic product grid, hero slider, and interactive elements powered by GSAP animations.

## Features

- **Modern UI/UX Design**
  - Clean, minimalist layout
  - Bold typography using Inter and Poppins fonts
  - Neutral color palette with accent colors
  - Responsive design for all devices

- **Interactive Elements**
  - GSAP-powered animations
  - Full-screen hero slider
  - Product hover effects
  - Lightbox gallery
  - Floating cart with hover previews

- **Advanced Functionality**
  - Product filtering system (category, size, color)
  - Dynamic product grid
  - Lazy loading for images
  - Mobile-first responsive design
  - Dark mode support

## Project Structure

```
cloth_web/
├── assets/
│   └── images/          # Product images (1.jpg to 23.jpg)
├── css/
│   ├── style.css       # Main styles
│   └── responsive.css  # Responsive styles
├── js/
│   └── main.js        # JavaScript functionality
└── index.html         # Main HTML file
```

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd cloth_web
   ```

2. **Install Dependencies**
   - No package manager required
   - All dependencies are loaded via CDN:
     - GSAP (animation)
     - Font Awesome (icons)
     - Google Fonts (typography)

3. **Run the Project**
   - Open `index.html` in a modern web browser
   - For local development, use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx serve
     ```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimizations

- Lazy loading for images
- CSS variables for consistent styling
- Minified external resources
- Optimized animations with GSAP
- Responsive images with proper aspect ratios

## Accessibility Features

- Semantic HTML structure
- ARIA labels where necessary
- Keyboard navigation support
- Focus management for modals
- Reduced motion support
- High contrast support

## Development Notes

- Uses CSS Grid and Flexbox for layouts
- Mobile-first approach
- Dark mode support via CSS variables
- Print stylesheet included
- Responsive breakpoints:
  - Mobile: < 768px
  - Tablet: 768px - 1023px
  - Desktop: ≥ 1024px

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Credits

- Images: Placeholder images (1.jpg to 23.jpg)
- Icons: Font Awesome
- Fonts: Google Fonts (Inter, Poppins)
- Animations: GSAP 