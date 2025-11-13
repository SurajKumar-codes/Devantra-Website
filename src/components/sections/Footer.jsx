import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // small delay so the footer animates in after other page content
    const id = setTimeout(() => setMounted(true), 120);
    return () => clearTimeout(id);
  }, []);

  return (
    <footer className="colab-footer relative bg-[#0a0a0a] text-white py-12 overflow-hidden">
      {/* Decorative soft blobs (subtle) */}
      <div aria-hidden className="absolute left-[-6%] top-0 w-[360px] h-[360px] rounded-full bg-gradient-to-br from-[#ff7a1a] to-[#ff4f6a] opacity-8 blur-3xl pointer-events-none"></div>
      <div aria-hidden className="absolute right-[-8%] bottom-0 w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-[#00d4ff] to-[#6b8cff] opacity-6 blur-3xl pointer-events-none"></div>

      <div className="footer-main max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Logo Column */}
          <div
            className={`footer-logo-col transition-all duration-500 ease-out transform ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: mounted ? "0ms" : "0ms" }}
          >
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
              className="footer-demo-btn inline-block px-6 py-3 bg-gradient-to-r from-[#ffd66b] via-[#ff9644] to-[#ff6b88] text-black font-semibold rounded-lg shadow-lg transform transition-all duration-250 hover:-translate-y-1 hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-orange-400/25"
              aria-label="Get a demo"
            >
              GET A DEMO
            </Link>

            <div className="footer-socials flex gap-4 mt-6">
              <a
                href="#"
                className="footer-social group p-2 rounded-full bg-white/3 hover:bg-white/5 transition-all duration-200 transform hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <img src="/images/linkedin.svg" alt="LinkedIn" className="w-6 h-6 transition-opacity group-hover:opacity-90" />
              </a>
              <a
                href="#"
                className="footer-social group p-2 rounded-full bg-white/3 hover:bg-white/5 transition-all duration-200 transform hover:-translate-y-1"
                aria-label="YouTube"
              >
                <img src="/images/youtube.svg" alt="YouTube" className="w-6 h-6 transition-opacity group-hover:opacity-90" />
              </a>
              <a
                href="#"
                className="footer-social group p-2 rounded-full bg-white/3 hover:bg-white/5 transition-all duration-200 transform hover:-translate-y-1"
                aria-label="Facebook"
              >
                <img src="/images/facebook.svg" alt="Facebook" className="w-6 h-6 transition-opacity group-hover:opacity-90" />
              </a>
              <a
                href="#"
                className="footer-social group p-2 rounded-full bg-white/3 hover:bg-white/5 transition-all duration-200 transform hover:-translate-y-1"
                aria-label="X"
              >
                <img src="/images/x.svg" alt="X" className="w-6 h-6 transition-opacity group-hover:opacity-90" />
              </a>
            </div>
          </div>

          {/* Why Devantra Column */}
          <div
            className={`footer-links-col transition-all duration-500 ease-out transform ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: mounted ? "80ms" : "0ms" }}
          >
            <div className="footer-links-title font-bold mb-4 text-white">Why Devantra ?</div>
            <Link to="/about" className="block text-gray-400 hover:text-white transition-colors mb-2 text-sm">
              About us
            </Link>
          </div>

          {/* Resources Column */}
          <div
            className={`footer-links-col transition-all duration-500 ease-out transform ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: mounted ? "160ms" : "0ms" }}
          >
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
          <div
            className={`footer-links-col transition-all duration-500 ease-out transform ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: mounted ? "240ms" : "0ms" }}
          >
            <div className="footer-links-title font-bold mb-4 text-white">Company</div>
            <div className="space-y-2 text-sm">
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors">Our Story</Link>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Careers</a>
              <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors">Contact</Link>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">DES 2025</a>
            </div>
          </div>

          {/* Contact Column */}
          <div
            className={`footer-links-col transition-all duration-500 ease-out transform ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: mounted ? "320ms" : "0ms" }}
          >
            <div className="footer-links-title font-bold mb-4 text-white">Contact</div>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Sales</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Support</a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className={`footer-bottom pt-8 border-t border-gray-800 flex flex-wrap justify-center md:justify-start items-center gap-2 text-sm text-gray-400 transition-all duration-500 transform ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: mounted ? "420ms" : "0ms" }}
        >
          <span className="mr-1">© 2025 Devantra</span>
          <span className="mx-1">| All Rights Reserved</span>

          {/* tiny separators and links - subtle hover underline */}
          <a href="#" className="hover:text-white transition-colors ml-2 text-sm">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors text-sm">Terms and Conditions</a>
          <a href="#" className="hover:text-white transition-colors text-sm">Terms of Use</a>
          <a href="#" className="hover:text-white transition-colors text-sm">CC Artwork Attribution</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;