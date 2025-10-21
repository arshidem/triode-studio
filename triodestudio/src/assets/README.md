# Asset Placeholders

This directory contains static assets for the TRIODE STUDIO website.

## Directory Structure

- **images/** - Store image files (JPG, PNG, WebP, SVG)
- **icons/** - Store icon files (SVG, PNG)
- **videos/** - Store video files (MP4, WebM)

## Usage Examples

### Importing Images in React Components

```jsx
// In your React component
import heroImage from '../assets/images/hero-bg.jpg';

function Hero() {
  return (
    <div style={{ backgroundImage: `url(${heroImage})` }}>
      Content here
    </div>
  );
}
```

### Importing Icons

```jsx
import logo from '../assets/icons/logo.svg';

function Navbar() {
  return <img src={logo} alt="Logo" />;
}
```

### Using Videos

```jsx
import bgVideo from '../assets/videos/background.mp4';

function VideoSection() {
  return (
    <video autoPlay loop muted>
      <source src={bgVideo} type="video/mp4" />
    </video>
  );
}
```

## Recommended Image Specifications

### Hero Images
- Format: JPG or WebP
- Size: 1920x1080px (Full HD)
- Max file size: 500KB (optimized)

### Service Icons
- Format: SVG (preferred) or PNG
- Size: 512x512px
- Transparent background

### Team Photos
- Format: JPG or PNG
- Size: 500x500px
- Square aspect ratio

### Testimonial Photos
- Format: JPG or PNG
- Size: 200x200px
- Square aspect ratio

## Image Optimization Tips

1. Use WebP format for better compression
2. Compress images before uploading
3. Use lazy loading for images below the fold
4. Provide responsive images with srcset
5. Use SVG for icons and logos

## Tools for Optimization

- **TinyPNG** - https://tinypng.com/
- **Squoosh** - https://squoosh.app/
- **SVGOMG** - https://jakearchibald.github.io/svgomg/

## Placeholder Images (Development)

For development purposes, you can use:
- **Unsplash** - https://unsplash.com/
- **Pexels** - https://pexels.com/
- **Placeholder.com** - https://placeholder.com/

Example placeholder usage:
```html
<img src="https://via.placeholder.com/500x500" alt="Placeholder" />
```
