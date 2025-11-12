const Card = ({ children, className = '', hover = false }) => {
  const hoverStyles = hover ? 'hover:shadow-xl hover:-translate-y-1 cursor-pointer' : '';
  
  return (
    <div 
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/30 p-6 transition-all duration-300 border border-transparent dark:border-gray-700 ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
