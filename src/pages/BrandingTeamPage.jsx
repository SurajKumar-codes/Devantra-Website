import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';

const BrandingTeamPage = () => {
  const services = [
    {
      title: 'Visual Identity',
      description: 'Logo design, color schemes, and brand guidelines',
      icon: '🎨'
    },
    {
      title: 'Content Creation',
      description: 'Graphics, videos, and marketing materials',
      icon: '📸'
    },
    {
      title: 'UI/UX Design',
      description: 'User interface and experience design',
      icon: '✨'
    },
    {
      title: 'Brand Strategy',
      description: 'Positioning, messaging, and brand voice',
      icon: '🎯'
    }
  ];

  return (
    <Section className="pt-32 pb-20">
      <Container>
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-gradient">Branding Team</h1>
          <p className="text-xl text-[var(--color-dark)] opacity-80 max-w-2xl mx-auto">
            Handles media and designing - creating stunning visual experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} hover className="p-8">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-[var(--color-primary)]">{service.title}</h3>
              <p className="text-[var(--color-dark)] opacity-80">{service.description}</p>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
          <p className="text-lg text-[var(--color-dark)] opacity-80">
            We believe in creating memorable brand experiences that resonate with our audience. Our team combines creativity with strategy to deliver designs that not only look great but also achieve business objectives.
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default BrandingTeamPage;
