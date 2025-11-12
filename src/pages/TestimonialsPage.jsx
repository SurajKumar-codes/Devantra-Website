import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Full Stack Developer',
      company: 'Tech Corp',
      text: 'Devantra has been instrumental in my growth as a developer. The community is supportive and the resources are top-notch.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Software Engineer',
      company: 'StartupXYZ',
      text: 'The coding competitions pushed me to improve my skills. I landed my dream job thanks to the portfolio I built here.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'DevOps Engineer',
      company: 'Cloud Solutions Inc',
      text: 'Amazing platform for learning and collaboration. The AI code review feature is a game-changer!',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'Frontend Developer',
      company: 'Design Studio',
      text: 'I\'ve learned more in 6 months on Devantra than I did in 2 years on my own. Highly recommended!',
      rating: 5
    }
  ];

  return (
    <Section className="pt-32 pb-20">
      <Container>
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-gradient">Testimonials & Reviews</h1>
          <p className="text-xl text-[var(--color-dark)] opacity-80 max-w-2xl mx-auto">
            Hear what our community members have to say about their experience with Devantra.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-[var(--color-dark)] opacity-80 mb-6 italic">&quot;{testimonial.text}&quot;</p>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <p className="font-bold text-[var(--color-dark)]">{testimonial.name}</p>
                <p className="text-sm text-[var(--color-dark)] opacity-60">{testimonial.role} at {testimonial.company}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default TestimonialsPage;
