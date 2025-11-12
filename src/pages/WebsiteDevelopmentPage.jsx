import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const WebsiteDevelopmentPage = () => {
  const features = [
    'Responsive Design',
    'SEO Optimization',
    'Fast Loading Speed',
    'Modern UI/UX',
    'CMS Integration',
    'E-commerce Solutions'
  ];

  return (
    <Section className="pt-32 pb-20">
      <Container>
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-gradient">Website Development</h1>
          <p className="text-xl text-[var(--color-dark)] opacity-80 max-w-2xl mx-auto">
            Professional website development services to establish your online presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
            <p className="text-[var(--color-dark)] opacity-80 mb-6">
              Our website development services cover everything from simple landing pages to complex web applications. We use modern technologies and best practices to deliver high-quality websites that drive results.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[var(--color-dark)]">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-4">Our Process</h3>
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-bold">1</span>
                <div>
                  <h4 className="font-bold mb-1">Discovery & Planning</h4>
                  <p className="text-sm opacity-70">Understanding your requirements and goals</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-bold">2</span>
                <div>
                  <h4 className="font-bold mb-1">Design & Prototyping</h4>
                  <p className="text-sm opacity-70">Creating wireframes and visual designs</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-bold">3</span>
                <div>
                  <h4 className="font-bold mb-1">Development</h4>
                  <p className="text-sm opacity-70">Building with modern technologies</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-bold">4</span>
                <div>
                  <h4 className="font-bold mb-1">Launch & Support</h4>
                  <p className="text-sm opacity-70">Deployment and ongoing maintenance</p>
                </div>
              </li>
            </ol>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" href="/contact">Get Started</Button>
        </div>
      </Container>
    </Section>
  );
};

export default WebsiteDevelopmentPage;
