import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Preloader from './components/Preloader';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Approach from './components/sections/Approach';
import Work from './components/sections/Work';
import Testimonials from './components/sections/Testimonials';
import CTA from './components/sections/CTA';
import Footer from './components/sections/Footer';

// Import page components (we'll create these)
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ForumPage from './pages/ForumPage';
import CollaborationsPage from './pages/CollaborationsPage';
import AdminPage from './pages/AdminPage';
import TechnicalTeamPage from './pages/TechnicalTeamPage';
import PRTeamPage from './pages/PRTeamPage';
import BrandingTeamPage from './pages/BrandingTeamPage';
import ManagementTeamPage from './pages/ManagementTeamPage';
import WebsiteDevelopmentPage from './pages/WebsiteDevelopmentPage';
import WebAppDevelopmentPage from './pages/WebAppDevelopmentPage';
import MobileAppDevelopmentPage from './pages/MobileAppDevelopmentPage';
import ContactPage from './pages/ContactPage';
import KnowledgeBasePage from './pages/KnowledgeBasePage';
import SignupPage from './pages/SignupPage';

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Approach />
      <Work />
      <Testimonials />
      <CTA />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Preloader />
      <Router>
        <div className="min-h-screen">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/product" element={<ProductPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/forum" element={<ForumPage />} />
              <Route path="/collaborations" element={<CollaborationsPage />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/technical-team" element={<TechnicalTeamPage />} />
              <Route path="/pr-team" element={<PRTeamPage />} />
              <Route path="/branding-team" element={<BrandingTeamPage />} />
              <Route path="/management-team" element={<ManagementTeamPage />} />
              <Route path="/website-development" element={<WebsiteDevelopmentPage />} />
              <Route path="/webapp-development" element={<WebAppDevelopmentPage />} />
              <Route path="/mobile-app-development" element={<MobileAppDevelopmentPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/knowledge-base" element={<KnowledgeBasePage />} />
              <Route path="/signup" element={<SignupPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
