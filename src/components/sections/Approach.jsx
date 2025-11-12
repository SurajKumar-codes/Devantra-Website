import Section from '../ui/Section';

const Approach = () => {
  const features = [
    {
      title: 'Expert Team',
      description: 'Our experienced developers and designers bring years of expertise to every project, ensuring top-quality solutions.',
      icon: '🎯',
    },
    {
      title: 'Collaborative Process',
      description: 'We work closely with you through every stage, with transparent communication and regular updates.',
      icon: '🤝',
    },
    {
      title: 'Cutting-Edge Technology',
      description: 'We leverage the latest technologies and best practices to build scalable, future-proof solutions.',
      icon: '⚡',
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control ensure your product works flawlessly across all scenarios.',
      icon: '✓',
    },
  ];

  return (
    <Section id="approach">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-dark)] mb-6">
            Our Approach
          </h2>
          <p className="text-xl text-[var(--color-gray)] mb-8 leading-relaxed">
            We combine technical expertise with a collaborative mindset to deliver 
            solutions that not only meet your requirements but exceed your expectations.
          </p>
          
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-lg flex items-center justify-center text-2xl">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--color-dark)] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[var(--color-gray)]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl overflow-hidden">
            <div className="w-full h-full flex items-center justify-center p-8">
              <div className="grid grid-cols-2 gap-4 w-full">
                {['Planning', 'Design', 'Development', 'Launch'].map((phase, index) => (
                  <div 
                    key={index} 
                    className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg dark:shadow-gray-900/30 border border-transparent dark:border-gray-700 transform hover:scale-105 transition-transform duration-300"
                  >
                    <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">
                      {index + 1}
                    </div>
                    <div className="text-sm font-semibold text-[var(--color-dark)]">
                      {phase}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Approach;
