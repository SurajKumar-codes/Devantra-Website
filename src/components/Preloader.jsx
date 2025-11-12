import { useEffect, useState } from 'react';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide preloader after 3 seconds (matching original website)
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = '';
    }, 3000);

    // Prevent scrolling while preloader is visible
    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="preloader-bg fixed top-0 left-0 right-0 bottom-0 w-screen h-screen bg-black z-[9999] flex items-center justify-center">
      <img 
        src="/images/Devantra_main_preloader.gif" 
        alt="Loading..." 
        className="preloader-image w-40 h-auto rounded-xl shadow-2xl"
        style={{ 
          borderRadius: '12px', 
          boxShadow: '0 10px 28px rgba(0,0,0,0.25)' 
        }}
      />
    </div>
  );
};

export default Preloader;
