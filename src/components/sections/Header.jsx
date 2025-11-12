import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import Container from '../ui/Container';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const aboutUsLinks = [
    { title: 'Our Story', desc: 'Know more about us', href: '/about' },
    { title: 'Our Work', desc: 'Learn what we do', href: '/product' },
    { title: 'Testimonials and Reviews', desc: 'Feedbacks', href: '/testimonials' },
    { title: 'Training and Internships', desc: 'Launch new products faster', href: '/forum' },
  ];

  const productsLinks = [
    { title: 'Our Products', href: '/product' },
  ];

  const communityMembersLinks = [
    { title: 'Admin Dashboard', desc: 'Manages community operations', href: '/admin', img: '/images/Admin_dashboard.png' },
    { title: 'Technical Team', desc: 'Makes websites and apps', href: '/technical-team', img: '/images/Tech_team.png' },
    { title: 'PR Team', desc: 'Handles public relations', href: '/pr-team', img: '/images/Pr_team.png' },
    { title: 'Branding Team', desc: 'Handles media and designing', href: '/branding-team', img: '/images/Branding_team.png' },
    { title: 'Management Team', desc: 'Leads strategic direction', href: '/management-team', img: '/images/Management_team.png' },
  ];

  const servicesLinks = [
    { title: 'Website Development', href: '/website-development' },
    { title: 'Web App Development', href: '/webapp-development' },
    { title: 'Mobile App Development', href: '/mobile-app-development' },
    { title: 'Download Brochure', href: '#' },
  ];

  const supportLinks = [
    { title: 'Contact Support', desc: 'Submit a ticket', href: '/contact' },
    { title: 'Knowledge Base', desc: 'Helpful articles', href: '/knowledge-base' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md border-b border-white/10' : 'bg-black/80 backdrop-blur-sm'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/images/devantra white logo.png" 
              alt="Devantra Logo" 
              height="150" 
              width="150"
              className="max-h-20 w-auto"
            />
          </Link>

          {/* Debug: Show current theme */}
          <div className="hidden lg:block text-white text-xs opacity-50">
            Theme: {theme}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* About Us Dropdown */}
            <div 
              className="nav-item-dropdown"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="nav-item">
                About Us
                <svg className="dropdown-icon w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 12 8">
                  <path d="M1 1.5L6 6.5L11 1.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              
              {activeDropdown === 'about' && (
                <div className="navbar_link-wrapper">
                  <div className="navbar_dropdown-link-container">
                    {aboutUsLinks.map((link, idx) => (
                      <Link
                        key={idx}
                        to={link.href}
                        className="navbar_link-item"
                      >
                        <div className="navbar_link-icon">
                          <div className="w-4 h-4 border-2 border-white/60 rounded"></div>
                        </div>
                        <div>
                          <div className="navbar_link-heading">{link.title}</div>
                          <div className="navbar_link-description">{link.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Products Dropdown */}
            <div 
              className="nav-item-dropdown"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="nav-item">
                Products
                <svg className="dropdown-icon w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 12 8">
                  <path d="M1 1.5L6 6.5L11 1.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              
              {activeDropdown === 'products' && (
                <div className="navbar_link-wrapper">
                  <div className="navbar_dropdown-link-container">
                    {productsLinks.map((link, idx) => (
                      <Link
                        key={idx}
                        to={link.href}
                        className="navbar_link-item"
                      >
                        <div className="navbar_link-icon">
                          <div className="w-4 h-4 border-2 border-white/60 rounded"></div>
                        </div>
                        <div className="navbar_link-heading">{link.title}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Collaborations Link */}
            <Link to="/collaborations" className="text-white/80 hover:text-white transition-colors font-medium">
              Collaborations
            </Link>

            {/* Community Members Dropdown */}
            <div 
              className="nav-item-dropdown"
              onMouseEnter={() => setActiveDropdown('community')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="nav-item">
                Community Members
                <svg className="dropdown-icon w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 12 8">
                  <path d="M1 1.5L6 6.5L11 1.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              
              {activeDropdown === 'community' && (
                <div className="navbar_link-wrapper">
                  <div className="navbar_dropdown-link-container">
                    {communityMembersLinks.map((link, idx) => (
                      <Link
                        key={idx}
                        to={link.href}
                        className="navbar_link-item"
                      >
                        <div className="navbar_link-icon">
                          <div className="w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 rounded"></div>
                        </div>
                        <div>
                          <div className="navbar_link-heading">{link.title}</div>
                          <div className="navbar_link-description">{link.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div 
              className="nav-item-dropdown"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="nav-item">
                Services
                <svg className="dropdown-icon w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 12 8">
                  <path d="M1 1.5L6 6.5L11 1.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              
              {activeDropdown === 'services' && (
                <div className="navbar_link-wrapper" style={{left: 'auto', right: '0', transform: 'none'}}>
                  <div className="navbar_dropdown-link-container" style={{minWidth: '500px', padding: '24px 32px'}}>
                    <div className="grid grid-cols-2 gap-8">
                    {/* Services Column */}
                    <div>
                      <h3 className="text-white font-bold mb-4 pb-2 border-b border-white/20">Services</h3>
                      <div className="space-y-2">
                        {servicesLinks.map((link, idx) => (
                          <Link
                            key={idx}
                            to={link.href}
                            className="flex items-center gap-3 py-2 hover:text-orange-500 text-white/90 transition-colors"
                          >
                            <div className="w-5 h-5 bg-gray-800 rounded flex items-center justify-center">
                              <div className="w-2 h-2 bg-white/60 rounded"></div>
                            </div>
                            <span className="font-medium">{link.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                    
                    {/* Support Column */}
                    <div>
                      <h3 className="text-white font-bold mb-4 pb-2 border-b border-white/20">Support</h3>
                      <div className="space-y-3">
                        {supportLinks.map((link, idx) => (
                          <Link
                            key={idx}
                            to={link.href}
                            className="flex items-center gap-3 p-3 bg-gray-900/50 rounded-lg hover:bg-gray-900 border border-white/10 hover:border-orange-500/50 transition-all"
                          >
                            <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                              <div className="w-4 h-4 border-2 border-white/60 rounded"></div>
                            </div>
                            <div>
                              <div className="text-white font-semibold text-sm">{link.title}</div>
                              <div className="text-white/60 text-xs">{link.desc}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              )}
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>

            {/* Action Buttons */}
            <Link to="/contact" className="text-white/90 hover:text-white px-4 py-2 rounded-lg hover:bg-white/10 transition-all font-medium">
              Contact Us
            </Link>
            <Link to="/signup" className="bg-linear-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-orange-500/50 transition-all font-semibold">
              Join Now
            </Link>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-3">
              <div className="space-y-2">
                <div className="text-white/60 text-xs font-semibold uppercase px-2">About Us</div>
                {aboutUsLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-white/90 hover:text-white hover:bg-white/5 py-2 px-4 rounded transition-colors"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
              
              <div className="space-y-2">
                <div className="text-white/60 text-xs font-semibold uppercase px-2">Products</div>
                {productsLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-white/90 hover:text-white hover:bg-white/5 py-2 px-4 rounded transition-colors"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>

              <Link
                to="/collaborations"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white/90 hover:text-white hover:bg-white/5 py-2 px-4 rounded transition-colors"
              >
                Collaborations
              </Link>

              <div className="space-y-2">
                <div className="text-white/60 text-xs font-semibold uppercase px-2">Community</div>
                {communityMembersLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-white/90 hover:text-white hover:bg-white/5 py-2 px-4 rounded transition-colors"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>

              <div className="space-y-2">
                <div className="text-white/60 text-xs font-semibold uppercase px-2">Services</div>
                {servicesLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-white/90 hover:text-white hover:bg-white/5 py-2 px-4 rounded transition-colors"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>

              <div className="pt-4 space-y-2">
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-center text-white/90 hover:text-white border border-white/20 px-4 py-2 rounded-lg hover:bg-white/10 transition-all font-medium"
                >
                  Contact Us
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-center bg-linear-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-orange-500/50 transition-all font-semibold"
                >
                  Join Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
