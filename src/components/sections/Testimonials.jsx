import { useState } from 'react';
import Section from '../ui/Section';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "The team delivered beyond our expectations. Their technical expertise and collaborative approach made our project a tremendous success.",
      author: "Sarah Johnson",
      role: "CTO, TechStart Inc",
      company: "TechStart",
    },
    {
      quote: "Professional, efficient, and incredibly skilled. They transformed our complex requirements into an elegant solution that our users love.",
      author: "Michael Chen",
      role: "Founder, DataFlow Solutions",
      company: "DataFlow",
    },
    {
      quote: "Working with this team was seamless. They understood our vision and brought it to life with exceptional quality and attention to detail.",
      author: "Emily Rodriguez",
      role: "Product Manager, InnovateCo",
      company: "InnovateCo",
    },
    {
      quote: "Their ability to solve complex problems and deliver on time made them invaluable partners for our digital transformation journey.",
      author: "David Park",
      role: "CEO, GrowthHub",
      company: "GrowthHub",
    },
  ];

  return (
    <Section id="testimonials" dark>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          What Our Clients Say
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Don't just take our word for it — hear from the companies we've helped succeed
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Main testimonial */}
          <div className="bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-white/10 dark:border-white/10 rounded-2xl p-8 md:p-12">
            <svg 
              className="w-12 h-12 text-[var(--color-primary)] mb-6"
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            
            <p className="text-2xl md:text-3xl text-white mb-8 leading-relaxed font-light">
              "{testimonials[activeIndex].quote}"
            </p>
            
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">
                  {testimonials[activeIndex].author.charAt(0)}
                </span>
              </div>
              <div>
                <div className="text-white font-bold text-lg">
                  {testimonials[activeIndex].author}
                </div>
                <div className="text-gray-400">
                  {testimonials[activeIndex].role}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-[var(--color-primary)] w-8' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Company logos grid */}
        <div className="mt-16 pt-16 border-t border-white/10">
          <p className="text-center text-gray-400 mb-8">Trusted by leading companies</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="text-center text-white/40 hover:text-white/80 transition-colors font-bold text-xl"
              >
                {testimonial.company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
