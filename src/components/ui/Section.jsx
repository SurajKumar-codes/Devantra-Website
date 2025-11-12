import Container from './Container';

const Section = ({ 
  children, 
  className = '', 
  containerSize = 'default',
  dark = false,
  id = ''
}) => {
  const bgColor = dark 
    ? 'bg-[var(--color-dark)] dark:bg-gray-950' 
    : 'bg-white dark:bg-gray-900';
  
  return (
    <section id={id} className={`py-16 md:py-24 ${bgColor} ${className}`}>
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  );
};

export default Section;
