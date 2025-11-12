import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';

const KnowledgeBasePage = () => {
  const categories = [
    {
      title: 'Getting Started',
      articles: [
        'How to create an account',
        'Setting up your profile',
        'Navigating the platform',
        'Your first project'
      ]
    },
    {
      title: 'Development',
      articles: [
        'Best coding practices',
        'Version control basics',
        'Testing strategies',
        'Code review guidelines'
      ]
    },
    {
      title: 'Collaboration',
      articles: [
        'Team communication',
        'Project management',
        'Issue tracking',
        'Documentation tips'
      ]
    },
    {
      title: 'Account & Billing',
      articles: [
        'Managing your subscription',
        'Payment methods',
        'Upgrading your plan',
        'Cancellation policy'
      ]
    }
  ];

  return (
    <Section className="pt-32 pb-20">
      <Container>
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-gradient">Knowledge Base</h1>
          <p className="text-xl text-[var(--color-dark)] opacity-80 max-w-2xl mx-auto">
            Find helpful articles and guides to get the most out of Devantra.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for articles..."
              className="w-full px-6 py-4 pl-12 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-[var(--color-dark)] focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
            />
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-[var(--color-primary)]">{category.title}</h2>
              <ul className="space-y-3">
                {category.articles.map((article, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-[var(--color-dark)] hover:text-[var(--color-primary)] transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      {article}
                    </a>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default KnowledgeBasePage;
