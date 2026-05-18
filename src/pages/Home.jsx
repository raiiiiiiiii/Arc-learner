import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';

function Home() {
  return (
    <div>
      <div className="hero-section">
        <img src="/logo.jpg" alt="Arc Logo" style={{ height: '80px', width: '80px', borderRadius: '50%', marginBottom: '24px', objectFit: 'cover' }} />
        <h1 className="hero-title">Welcome to Arc Explorer Academy</h1>
        <p className="hero-subtitle">
          Master the Arc ecosystem through our simple, professional, and structured educational platform. Built for learners and developers.
        </p>
        <Link to="/learn" className="btn btn-primary">
          Start Learning
          <ArrowRight size={18} />
        </Link>
      </div>

      <div className="grid">
        <div className="card">
          <h2 className="card-title">What is Arc?</h2>
          <div className="card-content">
            <p>
              Arc is an innovative ecosystem designed to empower developers and users alike. Discover the core concepts, infrastructure, and tools that make Arc unique.
            </p>
          </div>
          <div className="card-actions">
            <a href="https://www.arc.io/" target="_blank" rel="noopener noreferrer" className="btn btn-outline external-link">
              Official Site <ExternalLink size={16} />
            </a>
          </div>
        </div>

        <div className="card">
          <h2 className="card-title">Arc Documentation</h2>
          <div className="card-content">
            <p>
              Dive deep into technical specifications, API references, and comprehensive guides directly from the source.
            </p>
          </div>
          <div className="card-actions">
            <a href="https://docs.arc.io/" target="_blank" rel="noopener noreferrer" className="btn btn-outline external-link">
              Read Docs <ExternalLink size={16} />
            </a>
          </div>
        </div>

        <div className="card">
          <h2 className="card-title">Arc Ecosystem</h2>
          <div className="card-content">
            <p>
              Explore the growing network of applications, projects, and integrations built on the Arc platform.
            </p>
          </div>
          <div className="card-actions">
            <a href="https://www.arc.io/ecosystem" target="_blank" rel="noopener noreferrer" className="btn btn-outline external-link">
              Explore Ecosystem <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
