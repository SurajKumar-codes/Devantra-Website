import Section from '../components/ui/Section';
import Container from '../components/ui/Container';

const PRTeamPage = () => {
  return (
    <Section className="pt-32 pb-20">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-gradient">PR Team</h1>
          <p className="text-xl text-[var(--color-dark)] opacity-80 mb-12">
            Handles public relations and community engagement.
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="mb-8">
              We manage Devantra's public image and foster strong relationships with our community, partners, and stakeholders. Our goal is to ensure transparent communication and maintain a positive brand presence.
            </p>

            <h2 className="text-3xl font-bold mb-4">Key Responsibilities</h2>
            <ul className="space-y-2 mb-8">
              <li>Media relations and press releases</li>
              <li>Social media management</li>
              <li>Community engagement and events</li>
              <li>Brand reputation management</li>
              <li>Content strategy and communication</li>
              <li>Partnership coordination</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4">Achievements</h2>
            <ul className="space-y-2">
              <li>Featured in major tech publications</li>
              <li>Organized 50+ community events</li>
              <li>Built a social media following of 100k+</li>
              <li>Established partnerships with leading tech companies</li>
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default PRTeamPage;
