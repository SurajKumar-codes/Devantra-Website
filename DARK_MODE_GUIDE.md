# Dark Mode Implementation Guide

## 🌓 Features

The website now includes a fully functional dark mode toggle with:

- **Persistent theme** - User preference saved in localStorage
- **System preference detection** - Auto-detects OS dark mode preference
- **Smooth transitions** - Animated color transitions between themes
- **Toggle button** - Available in both desktop and mobile navigation
- **Complete coverage** - All components support dark mode

## 🎨 How It Works

### Theme Context
The dark mode is managed using React Context (`ThemeContext.jsx`):

```jsx
import { useTheme } from './context/ThemeContext';

function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      Current theme: {theme}
    </button>
  );
}
```

### CSS Variables
Dark mode uses CSS custom properties that automatically update:

**Light Mode:**
```css
--color-primary: #0066ff;
--color-dark: #0f172a;
--color-gray: #6b7280;
```

**Dark Mode:**
```css
--color-primary: #3b82f6;
--color-dark: #f9fafb; /* Inverted for dark backgrounds */
--color-gray: #9ca3af;
```

### Tailwind Classes
Components use dark mode variants:

```jsx
// Single class with dark variant
<div className="bg-white dark:bg-gray-900">

// Multiple states
<div className="text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800">

// Borders and shadows
<div className="border-gray-200 dark:border-gray-700 shadow-lg dark:shadow-gray-900/30">
```

## 🎯 Components Updated

All major components support dark mode:

### UI Components
- **Button** - Works on any background
- **Card** - Dark background with border
- **Section** - Auto-switches based on theme
- **Container** - Transparent wrapper (theme-agnostic)

### Sections
- **Header** - Glassmorphism effect on dark background
- **Hero** - Dark gradient with adjusted blob animations
- **Services** - Dark cards on darker section background
- **Approach** - Dark background with lighter cards
- **Work** - Dark cards with tags
- **Testimonials** - Already dark, maintains consistency
- **CTA** - Gradient works in both modes
- **Footer** - Dark by default, adjusted for theme

## 🛠️ Customizing Dark Mode Colors

### Update Theme Colors
Edit `src/index.css`:

```css
.dark {
  --color-primary: #3b82f6;      /* Your dark mode primary */
  --color-secondary: #818cf8;    /* Your dark mode secondary */
  --color-dark: #f9fafb;         /* Text color (inverted) */
  --color-gray-light: #1f2937;   /* Dark backgrounds */
}
```

### Add New Dark Variants
Use Tailwind's `dark:` prefix:

```jsx
<div className="bg-blue-100 dark:bg-blue-900/20">
  <p className="text-gray-900 dark:text-gray-100">
    Text adapts to theme
  </p>
</div>
```

## 📱 Toggle Button Location

The theme toggle appears in:
1. **Desktop Navigation** - Between nav links and CTA button
2. **Mobile Menu** - Next to hamburger menu icon

Both show appropriate icons:
- 🌙 Moon icon in light mode
- ☀️ Sun icon in dark mode

## 🎨 Best Practices

### 1. Use CSS Variables for Brand Colors
```jsx
// Good - respects theme
<div className="text-[var(--color-primary)]">

// Avoid - fixed color
<div className="text-blue-500">
```

### 2. Always Provide Dark Variants
```jsx
// Complete
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">

// Incomplete (will look broken in dark mode)
<div className="bg-white text-gray-900">
```

### 3. Test Borders and Shadows
```jsx
// Good - visible in both modes
<div className="border border-gray-200 dark:border-gray-700 shadow-lg dark:shadow-gray-900/30">
```

### 4. Adjust Opacity for Dark Mode
```jsx
// Light backgrounds need less opacity in dark mode
<div className="bg-blue-100 dark:bg-blue-900/20">
```

## 🚀 Extending Dark Mode

### Add to New Components

1. **Import ThemeContext** (if needed):
```jsx
import { useTheme } from '../../context/ThemeContext';
```

2. **Add dark: variants** to className:
```jsx
<div className="bg-white dark:bg-gray-800">
  <h2 className="text-gray-900 dark:text-gray-100">Title</h2>
</div>
```

3. **Test both themes** - Toggle and verify appearance

### Conditional Styling
```jsx
const { theme } = useTheme();

// Use when CSS alone isn't enough
<SomeComponent 
  color={theme === 'dark' ? '#ffffff' : '#000000'} 
/>
```

## 🔧 Troubleshooting

### Theme not persisting
- Check localStorage in DevTools
- Ensure ThemeProvider wraps entire app

### Colors not changing
- Verify `dark` class is added to `<html>` element
- Check if component uses CSS variables or dark: variants

### Flashing on page load
- Theme is loaded from localStorage before render
- If flashing occurs, add this to `index.html`:
```html
<script>
  if (localStorage.theme === 'dark') {
    document.documentElement.classList.add('dark')
  }
</script>
```

## 📊 Performance

- **No runtime cost** - CSS variables switch instantly
- **Minimal bundle size** - ~1KB for context
- **Smooth transitions** - Hardware-accelerated CSS transitions

## ♿ Accessibility

- Toggle button has `aria-label`
- Respects `prefers-color-scheme` media query
- Maintains WCAG contrast ratios in both modes
- Keyboard accessible (Tab + Enter)

---

Dark mode is now fully integrated! Users can toggle between themes, and their preference is saved for future visits. 🌓
