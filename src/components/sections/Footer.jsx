import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="colab-footer bg-[#0a0a0a] text-white py-12">
      <div className="footer-main max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Logo Column */}
          <div className="footer-logo-col">
            <div className="footer-logo-row mb-4">
              <img 
                src="/images/devantra white logo.png" 
                alt="Devantra Logo" 
                className="footer-logo-img h-16 w-auto"
              />
            </div>
            <div className="footer-tagline text-gray-400 mb-6 text-sm">
              Deliver better products, faster.
            </div>
            <Link 
              to="/contact" 
              className="footer-demo-btn inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300 text-sm mb-6"
            >
              GET A DEMO
            </Link>
            <div className="footer-socials flex gap-4">
              <a href="#" className="footer-social hover:opacity-80 transition-opacity">
                <img src="/images/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
              </a>
              <a href="#" className="footer-social hover:opacity-80 transition-opacity">
                <img src="/images/youtube.svg" alt="YouTube" className="w-6 h-6" />
              </a>
              <a href="#" className="footer-social hover:opacity-80 transition-opacity">
                <img src="/images/facebook.svg" alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="#" className="footer-social hover:opacity-80 transition-opacity">
                <img src="/images/x.svg" alt="X" className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Why Devantra Column */}
          <div className="footer-links-col">
            <div className="footer-links-title font-bold mb-4 text-white">Why devantra ?</div>
            <Link to="/about" className="block text-gray-400 hover:text-white transition-colors mb-2 text-sm">
              About us
            </Link>
          </div>

          {/* Resources Column */}
          <div className="footer-links-col">
            <div className="footer-links-title font-bold mb-4 text-white">Resources</div>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Blog</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Product Tour Library</a>
              <Link to="/knowledge-base" className="block text-gray-400 hover:text-white transition-colors">Knowledge Base</Link>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Peer Check Podcast</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Agile for Hardware</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Design Review Resources</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">VA/VE for Mechanical</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">CAD Collaboration Guide</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Modernizing TDPs</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">AI Tools for Engineers</a>
            </div>
          </div>

          {/* Company Column */}
          <div className="footer-links-col">
            <div className="footer-links-title font-bold mb-4 text-white">Company</div>
            <div className="space-y-2 text-sm">
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors">Our Story</Link>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Careers</a>
              <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors">Contact</Link>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">DES 2025</a>
            </div>
          </div>

          {/* Contact Column */}
          <div className="footer-links-col">
            <div className="footer-links-title font-bold mb-4 text-white">Contact</div>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Sales</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Support</a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom pt-8 border-t border-gray-800 flex flex-wrap justify-center md:justify-start items-center gap-2 text-sm text-gray-400">
          <span>© 2025 Devantra</span>
          <span>| All Rights Reserved</span>
          <a href="#" className="hover:text-white transition-colors ml-2">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms and Conditions</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          <a href="#" className="hover:text-white transition-colors">CC Artwork Attribution</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
