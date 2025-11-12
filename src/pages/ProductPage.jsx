import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';

const ProductPage = () => {
  const products = [
    {
      title: 'Code Review Platform',
      description: 'Collaborate on code reviews with AI-powered insights and feedback.',
      features: ['AI Code Analysis', 'Team Collaboration', 'Version Control Integration']
    },
    {
      title: 'Learning Management System',
      description: 'Interactive courses and tutorials for developers of all skill levels.',
      features: ['Video Lessons', 'Interactive Exercises', 'Certification Programs']
    },
    {
      title: 'Project Showcase',
      description: 'Share your projects and get feedback from the community.',
      features: ['Portfolio Builder', 'Community Feedback', 'Project Analytics']
    },
    {
      title: 'Coding Competitions',
      description: 'Participate in coding challenges and compete with developers worldwide.',
      features: ['Live Contests', 'Leaderboards', 'Prizes & Recognition']
    }
  ];

  return (
    <Section className="pt-32 pb-20">
      <Container>
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-gradient">Our Products</h1>
          <p className="text-xl text-[var(--color-dark)] opacity-80 max-w-2xl mx-auto">
            Discover our suite of tools and platforms designed to enhance your development journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <Card key={index} hover className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-primary)]">{product.title}</h3>
              <p className="text-[var(--color-dark)] opacity-80 mb-6">{product.description}</p>
              <div className="space-y-2">
                <h4 className="font-semibold text-[var(--color-dark)]">Key Features:</h4>
                <ul className="list-disc list-inside space-y-1 text-[var(--color-dark)] opacity-70">
                  {product.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default ProductPage;
