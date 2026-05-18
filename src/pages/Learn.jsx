import { Link } from 'react-router-dom';

function Learn() {
  const lessons = [
    {
      id: 'what-is-arc',
      title: 'What is Arc',
      summary: 'Learn the foundational concepts of the Arc network, its architecture, and how it revolutionizes the web3 space.',
      link: 'https://docs.arc.io/'
    },
    {
      id: 'arc-ecosystem',
      title: 'Arc Ecosystem',
      summary: 'Discover the diverse range of applications and protocols building within the Arc ecosystem.',
      link: 'https://www.arc.io/ecosystem'
    },
    {
      id: 'why-arc-matters',
      title: 'Why Arc Matters',
      summary: 'Understand the core value proposition of Arc and how it solves real-world problems for developers and users.',
      link: 'https://www.arc.io/'
    },
    {
      id: 'arc-documentation',
      title: 'Arc Documentation',
      summary: 'Navigate the official documentation to find detailed technical specifications and API references.',
      link: 'https://docs.arc.io/'
    },
    {
      id: 'developer-resources',
      title: 'Developer Resources',
      summary: 'Access tools, SDKs, and tutorials designed to help you build applications efficiently on Arc.',
      link: 'https://docs.arc.io/'
    },
    {
      id: 'getting-started',
      title: 'Getting Started',
      summary: 'A step-by-step guide to setting up your environment and deploying your first project on the network.',
      link: 'https://docs.arc.io/'
    }
  ];

  return (
    <div>
      <h1 className="text-center mb-8">Learn Arc</h1>
      <p className="text-center mb-8" style={{ maxWidth: '600px', margin: '0 auto 40px' }}>
        Explore our curated curriculum designed to take you from a beginner to an expert in the Arc ecosystem. Start your learning journey today.
      </p>

      <div className="grid">
        {lessons.map((lesson) => (
          <div key={lesson.id} className="card">
            <h2 className="card-title">{lesson.title}</h2>
            <div className="card-content">
              <p>{lesson.summary}</p>
            </div>
            <div className="card-actions">
              <a href={lesson.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Learn;
