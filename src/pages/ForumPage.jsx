import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const ForumPage = () => {
  const programs = [
    {
      title: 'Web Development Bootcamp',
      duration: '12 weeks',
      type: 'Training',
      description: 'Comprehensive training in modern web development technologies including React, Node.js, and more.',
      spots: 20
    },
    {
      title: 'Mobile App Development Internship',
      duration: '6 months',
      type: 'Internship',
      description: 'Hands-on experience building real-world mobile applications with mentorship from industry experts.',
      spots: 10
    },
    {
      title: 'DevOps Training Program',
      duration: '8 weeks',
      type: 'Training',
      description: 'Learn cloud infrastructure, CI/CD, containerization, and modern DevOps practices.',
      spots: 15
    },
    {
      title: 'Full Stack Development Internship',
      duration: '6 months',
      type: 'Internship',
      description: 'Work on end-to-end projects covering frontend, backend, and database technologies.',
      spots: 12
    }
  ];

  return (
    <Section className="pt-32 pb-20">
      <Container>
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-gradient">Training & Internships</h1>
          <p className="text-xl text-[var(--color-dark)] opacity-80 max-w-2xl mx-auto">
            Launch your tech career with our comprehensive training programs and internship opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <Card key={index} hover className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  program.type === 'Training' 
                    ? 'bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400' 
                    : 'bg-green-500/10 text-green-600 dark:bg-green-500/20 dark:text-green-400'
                }`}>
                  {program.type}
                </span>
                <span className="text-sm text-[var(--color-dark)] opacity-60">{program.duration}</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-primary)]">{program.title}</h3>
              <p className="text-[var(--color-dark)] opacity-80 mb-6">{program.description}</p>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <span className="text-sm text-[var(--color-dark)] opacity-60">
                  {program.spots} spots available
                </span>
                <Button size="sm" variant="primary">Apply Now</Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default ForumPage;
