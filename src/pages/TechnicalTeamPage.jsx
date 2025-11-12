import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';

const TechnicalTeamPage = () => {
  const techStack = [
    { name: 'Frontend', techs: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'] },
    { name: 'Backend', techs: ['Node.js', 'Python', 'PostgreSQL', 'Redis'] },
    { name: 'DevOps', techs: ['Docker', 'Kubernetes', 'AWS', 'GitHub Actions'] },
    { name: 'Mobile', techs: ['React Native', 'Flutter', 'iOS', 'Android'] },
  ];

  return (
    <Section className="pt-32 pb-20">
      <Container>
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-gradient">Technical Team</h1>
          <p className="text-xl text-[var(--color-dark)] opacity-80 max-w-2xl mx-auto">
            Makes websites and apps with cutting-edge technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {techStack.map((stack, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-xl font-bold mb-4 text-[var(--color-primary)]">{stack.name}</h3>
              <div className="flex flex-wrap gap-2">
                {stack.techs.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">What We Do</h2>
          <div className="space-y-4 text-[var(--color-dark)] opacity-80">
            <p>Our technical team is responsible for building and maintaining the entire Devantra platform. We work with modern technologies and follow best practices to deliver high-quality software.</p>
            <p>We handle everything from frontend development to backend infrastructure, ensuring scalability, security, and performance.</p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default TechnicalTeamPage;
