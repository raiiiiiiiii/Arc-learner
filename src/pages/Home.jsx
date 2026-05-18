import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Zap, Coins, GitPullRequest, ExternalLink } from 'lucide-react';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section" style={{ padding: '60px 24px', marginBottom: '48px', position: 'relative' }}>
        <img src="/logo.jpg" alt="Arc Logo" style={{ height: '90px', width: '90px', borderRadius: '50%', marginBottom: '24px', objectFit: 'cover', border: '3px solid var(--border-color)' }} />
        <h1 className="hero-title" style={{ fontSize: '2.75rem', fontWeight: '800', marginBottom: '16px', color: 'var(--text-primary)' }}>
          Arc Explorer Academy
        </h1>
        <p className="hero-subtitle" style={{ fontSize: '1.2rem', maxWidth: '680px', margin: '0 auto 32px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
          Master the fundamentals of the **Economic OS**—a stablecoin-native Layer 1 blockchain engineered for predictable pricing, deterministic BFT finality, and the future onchain agentic economy.
        </p>
        <Link to="/learn" className="btn btn-primary" style={{ padding: '12px 32px', fontSize: '1.05rem', gap: '8px' }}>
          Explore Curriculum
          <ArrowRight size={18} />
        </Link>
      </div>

      {/* Core Technical Highlights */}
      <h2 className="text-center mb-4" style={{ fontSize: '2rem' }}>Core Network Fundamentals</h2>
      <p className="text-center mb-8" style={{ maxWidth: '600px', margin: '0 auto 40px', color: 'var(--text-secondary)' }}>
        Arc is built on top of four design pillars, bringing stability and predictability to decentralized operations.
      </p>

      <div className="grid mb-8" style={{ marginBottom: '56px' }}>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <Coins size={36} color="var(--accent-color)" style={{ marginBottom: '16px' }} />
          <h3 className="card-title" style={{ fontSize: '1.25rem' }}>Stablecoin-Native Gas</h3>
          <div className="card-content" style={{ flex: 1 }}>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: 0 }}>
              Fees are calculated and paid directly in **USDC** utilizing the Native Circle Stack, shielding users and smart contracts from gas token volatility.
            </p>
          </div>
        </div>

        <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <Zap size={36} color="var(--accent-color)" style={{ marginBottom: '16px' }} />
          <h3 className="card-title" style={{ fontSize: '1.25rem' }}>Deterministic Finality</h3>
          <div className="card-content" style={{ flex: 1 }}>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: 0 }}>
              Byzantine Fault Tolerant (BFT) consensus guarantees instant, irreversible block execution with sub-second finality.
            </p>
          </div>
        </div>

        <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <GitPullRequest size={36} color="var(--accent-color)" style={{ marginBottom: '16px' }} />
          <h3 className="card-title" style={{ fontSize: '1.25rem' }}>EVM Compatibility</h3>
          <div className="card-content" style={{ flex: 1 }}>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: 0 }}>
              Standard Solidity tools like Hardhat, Foundry, and Remix deploy without modification, allowing seamless Ethereum-native execution.
            </p>
          </div>
        </div>
      </div>

      {/* Academy Roadmap / Flow */}
      <div className="card" style={{ padding: '40px', marginBottom: '56px', backgroundColor: 'var(--surface-color)' }}>
        <h2 className="text-center mb-6" style={{ fontSize: '1.75rem', marginTop: 0 }}>Your Guided Learning Path</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center', marginTop: '32px' }}>
          
          <div style={{ flex: '1 1 200px', textAlign: 'center', padding: '16px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontWeight: '700', color: 'var(--accent-color)' }}>1</div>
            <h4 style={{ fontWeight: '600', fontSize: '1rem', marginBottom: '8px' }}>Study Modules</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>Complete the 6 curriculum lessons covering L1 architecture and developer tooling.</p>
          </div>

          <div style={{ flex: '1 1 200px', textAlign: 'center', padding: '16px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontWeight: '700', color: 'var(--accent-color)' }}>2</div>
            <h4 style={{ fontWeight: '600', fontSize: '1rem', marginBottom: '8px' }}>Take Assessments</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>Attempt dynamic quizzes built from high-quality pool questions to test your knowledge.</p>
          </div>

          <div style={{ flex: '1 1 200px', textAlign: 'center', padding: '16px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontWeight: '700', color: 'var(--accent-color)' }}>3</div>
            <h4 style={{ fontWeight: '600', fontSize: '1rem', marginBottom: '8px' }}>Earn Certification</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>Generate, share, or download a printable verified certificate scaled to your exact tier.</p>
          </div>

        </div>
      </div>

      {/* Official Links Footer/Trust Grid */}
      <h3 className="text-center mb-6">Official Ecosystem Trust Resources</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', marginBottom: '40px' }}>
        <a href="https://www.arc.io/" target="_blank" rel="noopener noreferrer" className="btn btn-outline external-link" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
          Arc Official <ExternalLink size={14} />
        </a>
        <a href="https://docs.arc.io/" target="_blank" rel="noopener noreferrer" className="btn btn-outline external-link" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
          Arc Documentation <ExternalLink size={14} />
        </a>
        <a href="https://www.arc.io/ecosystem" target="_blank" rel="noopener noreferrer" className="btn btn-outline external-link" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
          Ecosystem Directory <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}

export default Home;
