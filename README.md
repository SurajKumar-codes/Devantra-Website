# Devantra Website

A modern, professional business website built with React, React Router, and Tailwind CSS. Features a comprehensive navigation system with multiple pages and dark mode support.

## Features

- 🎨 Modern, clean design with orange gradient theme
- 📱 Fully responsive (mobile, tablet, desktop)
- 🌙 Dark mode support with system preference detection
- 🧭 Complete navigation with 17+ pages
- ⚡ Fast and optimized with Vite
- 🎭 Smooth animations and transitions
- 🧩 Component-based architecture
- � Client-side routing with React Router
- 🎯 SEO-friendly structure

## Tech Stack

- **React 19.2.0** - Latest React with modern hooks
- **React Router DOM** - Client-side routing
- **Vite 7.2.2** - Next-generation frontend tooling
- **Tailwind CSS v4.1.17** - Utility-first CSS framework
- **@tailwindcss/vite v4.1.17** - Tailwind CSS v4 Vite integration

## Navigation Structure

### Main Navigation Dropdowns
1. **About Us** - Our Story, Our Work, Testimonials, Training & Internships
2. **Products** - Product showcase
3. **Collaborations** - Partnership opportunities
4. **Community Members** - Admin, Technical, PR, Branding, Management Teams
5. **Services** - Website, Web App, Mobile App Development + Support

### All Pages (17 Total)
- Home (`/`)
- About Us (`/about`)
- Products (`/product`)
- Testimonials (`/testimonials`)
- Forum/Training (`/forum`)
- Collaborations (`/collaborations`)
- Admin Dashboard (`/admin`)
- Technical Team (`/technical-team`)
- PR Team (`/pr-team`)
- Branding Team (`/branding-team`)
- Management Team (`/management-team`)
- Website Development (`/website-development`)
- Web App Development (`/webapp-development`)
- Mobile App Development (`/mobile-app-development`)
- Contact (`/contact`)
- Knowledge Base (`/knowledge-base`)
- Sign Up/Login (`/signup`)

See [NAVIGATION_GUIDE.md](./NAVIGATION_GUIDE.md) for complete navigation details.

## Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Container.jsx
│   │   └── Section.jsx
│   └── sections/        # Page sections
│       ├── Header.jsx   # Main navigation with dropdowns
│       ├── Hero.jsx
│       ├── Services.jsx
│       ├── Approach.jsx
│       ├── Work.jsx
│       ├── Testimonials.jsx
│       ├── CTA.jsx
│       └── Footer.jsx
├── pages/              # All page components
│   ├── AboutPage.jsx
│   ├── ProductPage.jsx
│   ├── TestimonialsPage.jsx
│   ├── ForumPage.jsx
│   ├── CollaborationsPage.jsx
│   ├── AdminPage.jsx
│   ├── TechnicalTeamPage.jsx
│   ├── PRTeamPage.jsx
│   ├── BrandingTeamPage.jsx
│   ├── ManagementTeamPage.jsx
│   ├── WebsiteDevelopmentPage.jsx
│   ├── WebAppDevelopmentPage.jsx
│   ├── MobileAppDevelopmentPage.jsx
│   ├── ContactPage.jsx
│   ├── KnowledgeBasePage.jsx
│   └── SignupPage.jsx
├── context/
│   └── ThemeContext.jsx # Dark mode theme context
├── App.jsx             # Router and route configuration
├── index.css           # Global styles and Tailwind config
└── main.jsx
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd Devantra-Website
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5174`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Dark Mode

The website includes a fully functional dark mode with:
- Toggle button in the header (desktop and mobile)
- Automatic system preference detection
- Persistent theme selection (localStorage)
- Smooth transitions between themes
- Complete dark mode support across all components and pages

For detailed implementation guide, see [DARK_MODE_GUIDE.md](./DARK_MODE_GUIDE.md)

## Header Navigation

The header includes:
- **Sticky navigation** with transparent-to-solid transition on scroll
- **Dropdown menus** with smooth animations
- **Mobile responsive** hamburger menu
- **Dark/Light mode toggle**
- **Action buttons** (Contact Us, Join Now)
- **Black background** with orange gradient accents

All navigation links are fully functional with React Router.

## Components Guide

For detailed information about using and customizing components, see [COMPONENT_GUIDE.md](./COMPONENT_GUIDE.md)

## Customization

### Colors

Edit the `@theme` directive in `src/index.css` to customize the color scheme:

```css
@theme {
  --color-primary: #ff7700;
  --color-secondary: #ffb300;
  --color-dark: #1f2937;
  --color-light: #f9fafb;
}
```

### Adding New Pages

1. Create page component in `src/pages/YourPage.jsx`
2. Import in `src/App.jsx`
3. Add route: `<Route path="/your-path" element={<YourPage />} />`
4. Add link in Header navigation

### Components

All components are in `src/components/` and can be easily customized. They accept standard props and className for additional styling.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Devantra. All Rights Reserved.

------------------------------------------------------------------------

## 📥 Clone the Project

``` sh
git clone git@github.com:SurajKumar-codes/Devantra-Website.git
```

------------------------------------------------------------------------

## 📂 Navigate into Project Directory

``` sh
cd Devantra-Website
```

------------------------------------------------------------------------

## 📦 Install Dependencies

``` sh
npm install
```

------------------------------------------------------------------------

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/               # Reusable UI components
│   │   ├── Button.jsx    # Button with variants
│   │   ├── Card.jsx      # Card container
│   │   ├── Container.jsx # Layout wrapper
│   │   └── Section.jsx   # Section wrapper
│   └── sections/         # Page sections
│       ├── Header.jsx    # Navigation
│       ├── Hero.jsx      # Hero section
│       ├── Services.jsx  # Services grid
│       ├── Approach.jsx  # Methodology
│       ├── Work.jsx      # Portfolio
│       ├── Testimonials.jsx # Client quotes
│       ├── CTA.jsx       # Contact section
│       └── Footer.jsx    # Site footer
├── App.jsx               # Main component
└── index.css             # Global styles
```

## 🎨 Customization

**Update Colors**: Edit CSS variables in `src/index.css` (both light and dark themes)
**Dark Mode**: Toggle button in header - preference saved to localStorage
**Modify Content**: Edit arrays in respective section components
**Add Sections**: Create new components and import in `App.jsx`

See `DARK_MODE_GUIDE.md` for detailed dark mode customization.

------------------------------------------------------------------------

## ▶️ Run the Development Server

``` sh
npm run dev
```

or

``` sh
npm start
```

------------------------------------------------------------------------

## 🏁 Build for Production

``` sh
npm run build
```

------------------------------------------------------------------------

## ✅ You're Ready!

Start coding and customize your application.

Happy coding! ✨
