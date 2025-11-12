# Component Usage Guide

## 📦 UI Components

### Button
Flexible button component with multiple variants and sizes.

```jsx
import Button from './components/ui/Button';

// Primary button (default)
<Button>Click Me</Button>

// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium (default)</Button>
<Button size="lg">Large</Button>

// With onClick
<Button onClick={() => console.log('Clicked!')}>
  Action Button
</Button>
```

### Card
Container component with shadow and optional hover effect.

```jsx
import Card from './components/ui/Card';

// Basic card
<Card>
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>

// With hover effect
<Card hover>
  <h3>Hoverable Card</h3>
  <p>Lifts on hover</p>
</Card>
```

### Container
Responsive layout wrapper with max-width constraints.

```jsx
import Container from './components/ui/Container';

// Default container (max-w-7xl)
<Container>
  <p>Content</p>
</Container>

// Size variants
<Container size="sm">Small width</Container>
<Container size="default">Default width</Container>
<Container size="lg">Large width</Container>
<Container size="full">Full width</Container>
```

### Section
Full-width section wrapper with padding and container.

```jsx
import Section from './components/ui/Section';

// Light section (default)
<Section>
  <h2>Section Title</h2>
  <p>Content</p>
</Section>

// Dark section
<Section dark>
  <h2>Dark Section</h2>
</Section>

// With ID for navigation
<Section id="about">
  <h2>About Us</h2>
</Section>

// Custom container size
<Section containerSize="sm">
  <h2>Narrow Section</h2>
</Section>
```

## 🎨 Customizing Content

### Services Section
Edit `src/components/sections/Services.jsx`:

```jsx
const services = [
  {
    icon: <svg>...</svg>,  // Your SVG icon
    title: 'Your Service',
    description: 'Service description',
  },
  // Add more services...
];
```

### Portfolio/Work Section
Edit `src/components/sections/Work.jsx`:

```jsx
const projects = [
  {
    title: 'Project Name',
    category: 'Project Type',
    description: 'Project description',
    tags: ['Tech1', 'Tech2', 'Tech3'],
    color: 'from-blue-500 to-cyan-500', // Gradient colors
  },
  // Add more projects...
];
```

### Testimonials
Edit `src/components/sections/Testimonials.jsx`:

```jsx
const testimonials = [
  {
    quote: "Client testimonial text",
    author: "Client Name",
    role: "Client Position",
    company: "Company Name",
  },
  // Add more testimonials...
];
```

### Contact Information
Edit `src/components/sections/CTA.jsx`:

```jsx
// Update email, phone, and location
<div className="opacity-80">your-email@example.com</div>
<div className="opacity-80">+1 (555) 123-4567</div>
<div className="opacity-80">Your Location</div>
```

### Navigation Links
Edit `src/components/sections/Header.jsx`:

```jsx
const navLinks = [
  { name: 'Your Link', href: '#your-section' },
  // Add more navigation links...
];
```

### Footer Links
Edit `src/components/sections/Footer.jsx`:

```jsx
const links = {
  company: [
    { name: 'Link Name', href: '#link' },
    // Add more links...
  ],
  // Add more link groups...
};
```

## 🎨 Theming

### Update Brand Colors
Edit `src/index.css`:

```css
@theme {
  --color-primary: #0066ff;      /* Main brand color */
  --color-primary-dark: #0052cc; /* Darker shade */
  --color-secondary: #6366f1;    /* Accent color */
  --color-accent: #f59e0b;       /* Additional accent */
  --color-dark: #0f172a;         /* Dark text/bg */
  --color-gray: #64748b;         /* Secondary text */
}
```

### Custom Utilities
Add custom CSS utilities in `src/index.css`:

```css
@layer utilities {
  .your-custom-utility {
    /* Your styles */
  }
}
```

## 🎯 Best Practices

1. **Keep components small and focused** - Each component should do one thing well
2. **Use props for configuration** - Make components reusable with props
3. **Maintain consistent naming** - Use clear, descriptive names
4. **Extract repeated patterns** - Create new components for repeated UI
5. **Keep state close to where it's used** - Avoid prop drilling
6. **Use semantic HTML** - Improve accessibility and SEO

## 📱 Responsive Design Tips

Use Tailwind's responsive prefixes:
- `sm:` - 640px and up (tablet)
- `md:` - 768px and up (tablet landscape)
- `lg:` - 1024px and up (desktop)
- `xl:` - 1280px and up (large desktop)

Example:
```jsx
<div className="text-base md:text-lg lg:text-xl">
  Responsive text size
</div>
```

## 🚀 Adding New Sections

1. Create component in `src/components/sections/YourSection.jsx`
2. Import in `src/App.jsx`
3. Add to the layout:

```jsx
import YourSection from './components/sections/YourSection';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* ... other sections */}
        <YourSection />
      </main>
      <Footer />
    </div>
  );
}
```

4. Add navigation link in `Header.jsx` if needed
