import { ExternalLink, Layers, ShieldAlert, Cpu, HeartHandshake, CircleDollarSign, Terminal } from 'lucide-react';

const projects = [
  {
    id: 'circle-stack',
    title: 'Native Circle Stack',
    icon: CircleDollarSign,
    description: 'Direct deep integration of native USDC at the protocol layer, allowing consensus-level gas fee validation and stable fiat accounting.',
    link: 'https://www.arc.io/ecosystem'
  },
  {
    id: 'stable-gas',
    title: 'Stable Gas Station',
    icon: Cpu,
    description: 'Protocol-level cost estimation that guarantees transaction costs remain deterministic (e.g. exactly $0.01 per standard transfer) regardless of congestion.',
    link: 'https://docs.arc.io/'
  },
  {
    id: 'evm-compiler',
    title: 'Solidity Compiler Tooling',
    icon: Terminal,
    description: 'Developer integration support for standard EVM frameworks (Hardhat, Foundry), ensuring standard Solidity contracts compile and run instantly.',
    link: 'https://docs.arc.io/'
  },
  {
    id: 'app-kit',
    title: 'Arc App Kit UI Modules',
    icon: Layers,
    description: 'High-performance React/Vue web UI components for quick wallet onboarding, instant checkout states, and native web3 gas displays.',
    link: 'https://docs.arc.io/'
  },
  {
    id: 'payments',
    title: 'Global Payment Channels',
    icon: HeartHandshake,
    description: 'High-velocity retail integrations designed to facilitate instant settle micro-payments and friction-free cross-border merchant checkouts.',
    link: 'https://www.arc.io/ecosystem'
  },
  {
    id: 'compliance',
    title: 'Institutional Gateway',
    icon: ShieldAlert,
    description: 'Compliant transaction filters and KYC-ready validator channels tailored specifically for regulated institutional Web3 operations.',
    link: 'https://www.arc.io/'
  }
];

function Ecosystem() {
  return (
    <div>
      <h1 className="text-center mb-4">Arc Ecosystem & Tooling</h1>
      <p className="text-center mb-8" style={{ maxWidth: '650px', margin: '0 auto 40px', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6' }}>
        Explore the primary system layers, developer suites, and network primitives that form the backbone of the Arc stablecoin-native ecosystem.
      </p>

      <div className="grid">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <div key={project.id} className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ padding: '8px', borderRadius: '6px', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={24} color="var(--accent-color)" />
                </div>
                <h3 className="card-title" style={{ margin: 0, fontSize: '1.2rem' }}>{project.title}</h3>
              </div>
              
              <div className="card-content" style={{ flex: 1 }}>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: 0 }}>
                  {project.description}
                </p>
              </div>
              
              <div className="card-actions" style={{ marginTop: '24px' }}>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline external-link" style={{ padding: '8px 16px', fontSize: '0.85rem', width: '100%', justifyContent: 'center' }}>
                  Ecosystem Docs <ExternalLink size={14} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Ecosystem;
