import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const WebAppDevelopmentPage = () => {
  const technologies = [
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'AWS', category: 'Cloud' },
  ];

  return (
    <Section className="pt-32 pb-20">
      <Container>
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-gradient">Web App Development</h1>
          <p className="text-xl text-[var(--color-dark)] opacity-80 max-w-2xl mx-auto">
            Build powerful, scalable web applications tailored to your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card hover className="p-6 text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2">High Performance</h3>
            <p className="text-[var(--color-dark)] opacity-70">Optimized for speed and efficiency</p>
          </Card>
          <Card hover className="p-6 text-center">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold mb-2">Secure</h3>
            <p className="text-[var(--color-dark)] opacity-70">Built with security best practices</p>
          </Card>
          <Card hover className="p-6 text-center">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-bold mb-2">Scalable</h3>
            <p className="text-[var(--color-dark)] opacity-70">Grows with your business</p>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {technologies.map((tech, index) => (
              <Card key={index} className="p-4 text-center">
                <div className="font-bold text-lg mb-1">{tech.name}</div>
                <div className="text-sm opacity-60">{tech.category}</div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" href="/contact">Start Your Project</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default WebAppDevelopmentPage;
