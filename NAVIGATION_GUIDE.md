# Devantra Website - Complete Navigation Guide

## Overview
This is the complete Devantra website with a fully functional navigation system matching the dev3 folder structure. The website includes all pages from the navbar with proper routing using React Router.

## Navigation Structure

### 1. About Us Dropdown
- **Our Story** (`/about`) - Company history and mission
- **Our Work** (`/product`) - Products and services overview
- **Testimonials and Reviews** (`/testimonials`) - Customer feedback
- **Training and Internships** (`/forum`) - Educational programs

### 2. Products Dropdown
- **Our Products** (`/product`) - Complete product showcase

### 3. Collaborations
- **Collaborations** (`/collaborations`) - Partnership opportunities

### 4. Community Members Dropdown
- **Admin Dashboard** (`/admin`) - Platform management
- **Technical Team** (`/technical-team`) - Development team
- **PR Team** (`/pr-team`) - Public relations
- **Branding Team** (`/branding-team`) - Design and media
- **Management Team** (`/management-team`) - Leadership

### 5. Services Dropdown
- **Website Development** (`/website-development`) - Web development services
- **Web App Development** (`/webapp-development`) - Application development
- **Mobile App Development** (`/mobile-app-development`) - Mobile solutions
- **Download Brochure** - Company brochure (coming soon)

**Support Section:**
- **Contact Support** (`/contact`) - Get in touch
- **Knowledge Base** (`/knowledge-base`) - Help articles

### 6. Action Buttons
- **Contact Us** (`/contact`) - Contact form
- **Join Now** (`/signup`) - Sign up / Login

## Features

### Header Navigation
- **Sticky header** with transparent background that becomes solid on scroll
- **Dropdown menus** with hover effects
- **Dark mode toggle** button
- **Mobile responsive** with hamburger menu
- **Gradient background** matching dev3 design (black with orange accents)

### Pages Created
All 17 pages have been created with proper content:

1. `/` - Home page with Hero, Services, Approach, Work, Testimonials, CTA sections
2. `/about` - About Us page
3. `/product` - Products page
4. `/testimonials` - Testimonials page
5. `/forum` - Training & Internships
6. `/collaborations` - Collaborations page
7. `/admin` - Admin Dashboard info
8. `/technical-team` - Technical Team info
9. `/pr-team` - PR Team info
10. `/branding-team` - Branding Team info
11. `/management-team` - Management Team info
12. `/website-development` - Website Development services
13. `/webapp-development` - Web App Development services
14. `/mobile-app-development` - Mobile App Development services
15. `/contact` - Contact form with information
16. `/knowledge-base` - Help articles and documentation
17. `/signup` - Sign up / Login form

### Design System
- **Colors**: Orange gradient (#ff7700 to #ffb300) for primary actions
- **Background**: Black/dark theme matching dev3
- **Typography**: Modern, clean font with proper hierarchy
- **Components**: Reusable UI components (Button, Card, Container, Section)
- **Dark Mode**: Full dark mode support with theme context

## Tech Stack
- **React 19.2.0** - Latest React with hooks
- **React Router DOM** - Client-side routing
- **Vite 7.2.2** - Build tool
- **Tailwind CSS v4.1.17** - Utility-first CSS
- **Context API** - Theme management

## Running the Project

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server runs on http://localhost:5174/

## Development Notes

### Adding New Pages
1. Create page component in `src/pages/`
2. Import in `src/App.jsx`
3. Add route in `Routes` component
4. Add link in `src/components/sections/Header.jsx`

### Styling Guidelines
- Use CSS variables defined in `src/index.css`
- Follow Tailwind CSS v4 syntax
- Maintain dark mode support
- Use existing UI components when possible

## Components Structure

```
src/
├── components/
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Container.jsx
│   │   └── Section.jsx
│   └── sections/
│       ├── Header.jsx (Main Navigation)
│       ├── Hero.jsx
│       ├── Services.jsx
│       ├── Approach.jsx
│       ├── Work.jsx
│       ├── Testimonials.jsx
│       ├── CTA.jsx
│       └── Footer.jsx
├── pages/
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
│   └── ThemeContext.jsx
├── App.jsx
└── main.jsx
```

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License
© 2025 Devantra. All Rights Reserved.
