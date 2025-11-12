import Section from '../components/ui/Section';
import Container from '../components/ui/Container';

const ManagementTeamPage = () => {
  return (
    <Section className="pt-32 pb-20">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-gradient">Management Team</h1>
          <p className="text-xl text-[var(--color-dark)] opacity-80 mb-12">
            Leads strategic direction and organizational growth.
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-4">Leadership Vision</h2>
            <p className="mb-8">
              Our management team is committed to building Devantra into the world's leading platform for developers. We focus on sustainable growth, innovation, and creating value for our community.
            </p>

            <h2 className="text-3xl font-bold mb-4">Core Responsibilities</h2>
            <ul className="space-y-2 mb-8">
              <li>Strategic planning and execution</li>
              <li>Business development and partnerships</li>
              <li>Financial management and budgeting</li>
              <li>Team leadership and culture building</li>
              <li>Product roadmap and vision</li>
              <li>Stakeholder management</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <ul className="space-y-2">
              <li><strong>Innovation:</strong> Constantly pushing boundaries</li>
              <li><strong>Integrity:</strong> Honest and transparent in all dealings</li>
              <li><strong>Excellence:</strong> Striving for the highest quality</li>
              <li><strong>Collaboration:</strong> Working together to achieve goals</li>
              <li><strong>Impact:</strong> Making a difference in developers' lives</li>
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ManagementTeamPage;
