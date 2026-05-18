import { ExternalLink } from 'lucide-react';

function Ecosystem() {
  const projects = [
    {
      id: 'arc-wallet',
      title: 'Arc Wallet Integration',
      description: 'A seamless, secure way to manage your digital assets directly within the Arc ecosystem.',
      link: 'https://www.arc.io/ecosystem'
    },
    {
      id: 'arc-defi',
      title: 'Decentralized Finance',
      description: 'Explore the leading DeFi protocols enabling low-fee trading and liquidity provision.',
      link: 'https://www.arc.io/ecosystem'
    },
    {
      id: 'arc-nft',
      title: 'NFT Marketplaces',
      description: 'Discover platforms for minting, buying, and selling digital collectibles on Arc.',
      link: 'https://www.arc.io/ecosystem'
    },
    {
      id: 'arc-gaming',
      title: 'Web3 Gaming',
      description: 'Experience the next generation of blockchain-based gaming powered by Arc infrastructure.',
      link: 'https://www.arc.io/ecosystem'
    },
    {
      id: 'arc-identity',
      title: 'Decentralized Identity',
      description: 'Manage your digital identity securely with self-sovereign identity solutions.',
      link: 'https://www.arc.io/ecosystem'
    },
    {
      id: 'arc-tools',
      title: 'Developer Tooling',
      description: 'Essential tools and services for developers to monitor and interact with the network.',
      link: 'https://www.arc.io/ecosystem'
    }
  ];

  return (
    <div>
      <h1 className="text-center mb-8">Arc Ecosystem</h1>
      <p className="text-center mb-8" style={{ maxWidth: '600px', margin: '0 auto 40px' }}>
        Discover the powerful applications, tools, and protocols that make up the vibrant Arc network. 
      </p>

      <div className="grid">
        {projects.map((project) => (
          <div key={project.id} className="card">
            <h2 className="card-title">{project.title}</h2>
            <div className="card-content">
              <p>{project.description}</p>
            </div>
            <div className="card-actions">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline external-link">
                Visit Project <ExternalLink size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ecosystem;
