import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <main className="hero relative overflow-hidden min-h-screen flex items-center" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Animated glowing half-circle backgrounds */}
      <div className="hero-glow-bg absolute inset-0 pointer-events-none"></div>

      {/* Solid circle above hero glow bg, under hero content */}
      <div className="hero-circle-bg absolute inset-0 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="hero-content flex flex-col lg:flex-row items-center justify-between gap-12 py-20">
          <div className="hero-left flex-1 text-center lg:text-left">
            <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Compete. <br />
              Learn. <br />
              Innovate.
            </h1>
            <p className="hero-description text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Welcome to DEVANTRA<br />
              The ultimate coding community where developers unite, compete, and excel together.
            </p>
            <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/signup" className="btn-primary inline-block px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Join Now
              </Link>
              <Link to="/about" className="btn-secondary inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
                Explore more
              </Link>
            </div>
          </div>
          <div className="hero-right flex-1 max-w-xl">
            <img 
              src="/images/hero.png" 
              alt="hero_png"
              className="w-full h-auto rounded-xl shadow-2xl"
              style={{ borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          color: white;
        }

        .hero-glow-bg::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -20%;
          width: 80%;
          height: 100%;
          background: radial-gradient(circle, rgba(255, 107, 0, 0.3) 0%, transparent 70%);
          animation: glow-pulse 8s ease-in-out infinite;
        }

        .hero-glow-bg::after {
          content: '';
          position: absolute;
          bottom: -50%;
          right: -20%;
          width: 80%;
          height: 100%;
          background: radial-gradient(circle, rgba(0, 123, 255, 0.3) 0%, transparent 70%);
          animation: glow-pulse 8s ease-in-out infinite 4s;
        }

        .hero-circle-bg::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%);
          border-radius: 50%;
        }

        @keyframes glow-pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }

        .hero-title {
          background: linear-gradient(135deg, #ffffff 0%, #ff6b00 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 5s ease infinite;
        }

        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @media (max-width: 1024px) {
          .hero-content {
            flex-direction: column;
          }
          
          .hero-left {
            text-align: center;
          }
          
          .hero-buttons {
            justify-content: center;
          }
        }
      `}</style>
    </main>
  );
};

export default Hero;
