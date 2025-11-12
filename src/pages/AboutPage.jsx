import Section from '../components/ui/Section';
import Container from '../components/ui/Container';

const AboutPage = () => {
  return (
    <Section className="pt-32 pb-20">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-gradient">Our Story</h1>
          <div className="space-y-6 text-lg text-[var(--color-dark)] opacity-80">
            <p>
              Welcome to DEVANTRA - The ultimate coding community where developers unite, compete, and excel together.
            </p>
            <p>
              We are passionate about building a platform that empowers developers to grow, learn, and innovate. Our mission is to create a space where coding enthusiasts can collaborate, share knowledge, and push the boundaries of what's possible.
            </p>
            <h2 className="text-3xl font-bold mt-12 mb-4 text-[var(--color-primary)]">What We Do</h2>
            <p>
              Devantra provides a comprehensive ecosystem for developers at all levels. From competitive coding challenges to collaborative projects, we offer everything you need to advance your career and skills.
            </p>
            <h2 className="text-3xl font-bold mt-12 mb-4 text-[var(--color-primary)]">Our Values</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Innovation and continuous learning</li>
              <li>Collaboration and community support</li>
              <li>Excellence in everything we build</li>
              <li>Inclusivity and diversity</li>
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default AboutPage;
