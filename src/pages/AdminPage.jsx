import Section from '../components/ui/Section';
import Container from '../components/ui/Container';

const AdminPage = () => {
  return (
    <Section className="pt-32 pb-20">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-gradient">Admin Dashboard</h1>
          <p className="text-xl text-[var(--color-dark)] opacity-80 mb-12">
            Manages community operations and oversees platform development.
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-4">Role & Responsibilities</h2>
            <ul className="space-y-2 mb-8">
              <li>Platform management and oversight</li>
              <li>Community moderation and support</li>
              <li>Strategic planning and decision making</li>
              <li>Resource allocation and budgeting</li>
              <li>Performance monitoring and analytics</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <ul className="space-y-2">
              <li>User management system</li>
              <li>Content moderation tools</li>
              <li>Analytics dashboard</li>
              <li>System configuration</li>
              <li>Reporting and insights</li>
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default AdminPage;
