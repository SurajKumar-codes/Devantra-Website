import Section from '../ui/Section';
import Button from '../ui/Button';

const CTA = () => {
  return (
    <Section id="contact" className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed">
          Let's discuss how we can help transform your ideas into reality. 
          Get in touch today for a free consultation.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-white text-[var(--color-primary)] hover:bg-gray-100"
          >
            Schedule a Call
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-white text-white hover:bg-white/10"
          >
            Send us an Email
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/20">
          <div>
            <div className="text-4xl mb-2">📧</div>
            <div className="font-semibold mb-1">Email</div>
            <div className="opacity-80">hello@devantra.com</div>
          </div>
          <div>
            <div className="text-4xl mb-2">📱</div>
            <div className="font-semibold mb-1">Phone</div>
            <div className="opacity-80">+1 (555) 123-4567</div>
          </div>
          <div>
            <div className="text-4xl mb-2">📍</div>
            <div className="font-semibold mb-1">Location</div>
            <div className="opacity-80">Global • Remote-First</div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CTA;
