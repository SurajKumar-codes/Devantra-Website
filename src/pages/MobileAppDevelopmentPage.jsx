import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const MobileAppDevelopmentPage = () => {
  const platforms = [
    { name: 'iOS', icon: '📱', description: 'Native iOS apps with Swift' },
    { name: 'Android', icon: '🤖', description: 'Native Android apps with Kotlin' },
    { name: 'Cross-Platform', icon: '🌐', description: 'React Native & Flutter' },
  ];

  return (
    <Section className="pt-32 pb-20">
      <Container>
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-gradient">Mobile App Development</h1>
          <p className="text-xl text-[var(--color-dark)] opacity-80 max-w-2xl mx-auto">
            Create engaging mobile experiences for iOS and Android platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {platforms.map((platform, index) => (
            <Card key={index} hover className="p-8 text-center">
              <div className="text-6xl mb-4">{platform.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{platform.name}</h3>
              <p className="text-[var(--color-dark)] opacity-70">{platform.description}</p>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Us?</h2>
          <div className="space-y-6 mb-12">
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">User-Centric Design</h3>
              <p className="text-[var(--color-dark)] opacity-80">We prioritize user experience to create intuitive and engaging mobile applications.</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">Performance Optimization</h3>
              <p className="text-[var(--color-dark)] opacity-80">Our apps are optimized for speed, battery efficiency, and smooth performance.</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">App Store Success</h3>
              <p className="text-[var(--color-dark)] opacity-80">We handle the entire process from development to app store submission and approval.</p>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" href="/contact">Build Your App</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default MobileAppDevelopmentPage;
