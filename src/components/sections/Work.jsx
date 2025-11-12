import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';

const Work = () => {
  const projects = [
    {
      title: 'FinTech Payment Platform',
      category: 'Web Application',
      description: 'A secure payment processing platform handling millions in transactions with real-time analytics.',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Healthcare Management System',
      category: 'Enterprise Software',
      description: 'Comprehensive patient management system streamlining healthcare operations for multiple clinics.',
      tags: ['Vue.js', 'Python', 'MongoDB'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'E-Learning Marketplace',
      category: 'SaaS Platform',
      description: 'Online learning platform connecting thousands of students with expert instructors worldwide.',
      tags: ['Next.js', 'GraphQL', 'Redis'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'IoT Fleet Management',
      category: 'Mobile & Web',
      description: 'Real-time vehicle tracking and fleet optimization system with mobile companion app.',
      tags: ['React Native', 'AWS', 'TypeScript'],
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <Section id="work" className="bg-slate-50 dark:bg-gray-800">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-dark)] mb-4">
          Featured Work
        </h2>
        <p className="text-xl text-[var(--color-gray)] max-w-3xl mx-auto">
          Explore some of our recent projects and see how we've helped businesses transform digitally
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {projects.map((project, index) => (
          <Card key={index} hover>
            <div className={`w-full h-48 bg-gradient-to-br ${project.color} rounded-lg mb-6 flex items-center justify-center`}>
              <div className="text-white text-6xl font-bold opacity-20">
                {index + 1}
              </div>
            </div>
            <div className="text-sm font-semibold text-[var(--color-primary)] mb-2">
              {project.category}
            </div>
            <h3 className="text-2xl font-bold text-[var(--color-dark)] mb-3">
              {project.title}
            </h3>
            <p className="text-[var(--color-gray)] mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <span 
                  key={tagIndex}
                  className="px-3 py-1 bg-slate-100 dark:bg-gray-700 text-[var(--color-dark)] text-sm rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button size="lg" variant="outline">
          View All Projects
        </Button>
      </div>
    </Section>
  );
};

export default Work;
