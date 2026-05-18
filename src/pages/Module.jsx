import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ArrowRight, ExternalLink, BookOpen, Clock, ShieldCheck } from 'lucide-react';

const lessonData = {
  'what-is-arc': {
    title: 'Introduction to Arc: The Economic OS',
    readingTime: '4 min read',
    summary: "Learn about Arc's identity as a stablecoin-native Layer 1 designed to enable a seamless agentic economy and predictable onchain operations.",
    content: (
      <>
        <h3>The Evolution of Decentralized Blockchains</h3>
        <p>
          Traditional Layer 1 blockchains require a volatile native utility token (such as ETH, SOL, or AVAX) to facilitate gas fee payments and transaction execution. While this model aligns validator incentives, it introduces massive economic friction. Subscription services, corporate pay-as-you-go structures, and mainstream consumer applications struggle to operate when transaction costs fluctuate constantly based on speculative market pricing.
        </p>
        <p>
          <strong>Arc redefines this paradigm.</strong> It is built from the ground up as a stablecoin-native Layer 1 blockchain network, serving as a robust, predictable "Economic OS" for modern developers, enterprises, and autonomous onchain agents.
        </p>

        <h3>Stablecoin-Native Gas Architecture</h3>
        <p>
          At its core, Arc is designed to use fiat-pegged stablecoins (specifically USDC) for all computational transactions. This means that gas costs are measured and paid directly in USDC. Speculative market fluctuations in underlying gas tokens no longer disrupt the daily operation of your decentralized application.
        </p>

        <h3>Key Architectural Pillar Summary</h3>
        <ul>
          <li><strong>EVM Compatibility:</strong> Full compliance with the Ethereum Virtual Machine (EVM), allowing standard Solidity smart contracts to deploy seamlessly.</li>
          <li><strong>BFT Consensus Finality:</strong> High-throughput consensus providing deterministic sub-second block finality.</li>
          <li><strong>Stablecoin Gas:</strong> Native integration with USDC for fee payment via the Native Circle Stack, ensuring predictable transaction modeling.</li>
        </ul>
      </>
    ),
    resources: [
      { label: 'Official Arc Website', url: 'https://www.arc.io/' },
      { label: 'Official Arc Documentation', url: 'https://docs.arc.io/' }
    ]
  },
  'stablecoin-native-l1': {
    title: 'Stablecoin-Native Layer 1 & Predictable Gas Fees',
    readingTime: '5 min read',
    summary: 'Discover why a stablecoin-native gas architecture changes the game for consumer apps, developers, and autonomous economic agents.',
    content: (
      <>
        <h3>The Volatile Fee Problem</h3>
        <p>
          On standard networks, gas fees rise and fall unpredictably based on network demand and underlying token prices. A simple swap that costs $0.05 today might cost $5.00 tomorrow during high network congestion. This volatility makes it impossible for developers to offer web2-like subscription experiences or sub-cent micropayments, and prevents CFOs from accurately budgeting onchain operating costs.
        </p>

        <h3>USDC-Denominated Gas</h3>
        <p>
          Arc solves this by leveraging the <strong>Native Circle Stack</strong> to allow users and smart contracts to pay for transaction fees directly in USDC at the protocol layer. When a transaction is submitted, the gas cost is calculated in real USDC values, meaning a transfer is always cheap and predictable (e.g. exactly $0.01).
        </p>

        <h3>Benefits of Predictable Fees</h3>
        <p>
          By having predictable gas costs paid in a global stablecoin:
        </p>
        <ul>
          <li><strong>Easy Onboarding:</strong> Users don't need to purchase or hold a separate, volatile L1 asset just to interact with a web3 application.</li>
          <li><strong>Reliable Cost Modeling:</strong> Developers and businesses can treat transaction fees as fixed, predictable operational expenses (SaaS-like billing models).</li>
          <li><strong>AI Agent Friendliness:</strong> Autonomous agents can operate onchain using a single account balance denominated in a stable, recognizable fiat-equivalent currency.</li>
        </ul>
      </>
    ),
    resources: [
      { label: 'Arc Ecosystem Overview', url: 'https://www.arc.io/ecosystem' },
      { label: 'Arc Gas Mechanics', url: 'https://docs.arc.io/' }
    ]
  },
  'performance-finality-evm': {
    title: 'Deterministic BFT Finality & EVM Compatibility',
    readingTime: '5 min read',
    summary: "Learn about Arc's high-performance consensus engine and seamless developer onboarding via Ethereum Virtual Machine compatibility.",
    content: (
      <>
        <h3>What is Deterministic Finality?</h3>
        <p>
          Traditional Proof-of-Work and some Proof-of-Stake systems operate under *probabilistic finality*. This means that when you send a transaction, you must wait for multiple subsequent blocks to be added to the chain to be sure your transaction won't be reverted (e.g., waiting 12 blocks on Ethereum).
        </p>
        <p>
          <strong>Arc uses a Byzantine Fault Tolerant (BFT) consensus mechanism</strong> that provides deterministic, sub-second block finality. The moment a transaction is processed by the validator set, it is finalized instantly and irreversibly. There is no risk of block reorgs or double-spending, which is a critical requirement for merchant payments, retail checkouts, and high-frequency trading.
        </p>

        <h3>Full EVM Compatibility</h3>
        <p>
          Arc achieves high-velocity performance while maintaining 100% EVM compatibility. This means that:
        </p>
        <ul>
          <li><strong>Zero Code Changes:</strong> Existing Ethereum dApps, Solidity smart contracts, and ERC-standard tokens can be deployed to Arc without editing a single line of code.</li>
          <li><strong>Standard Developer Tools:</strong> Developers can continue using Hardhat, Foundry, Remix, ethers.js, viem, and MetaMask seamlessly.</li>
          <li><strong>Interoperability:</strong> Easily bridge tokens and assets between Ethereum, other EVM chains, and Arc.</li>
        </ul>
      </>
    ),
    resources: [
      { label: 'Arc Developer Docs', url: 'https://docs.arc.io/' },
      { label: 'Consensus Technical Specs', url: 'https://docs.arc.io/' }
    ]
  },
  'arc-app-kit': {
    title: 'The Arc App Kit & Developer Tooling',
    readingTime: '4 min read',
    summary: 'Explore the suite of pre-built UI modules and developer SDKs that let you build and deploy seamless user experiences on Arc in minutes.',
    content: (
      <>
        <h3>Accelerating Time-to-Market</h3>
        <p>
          Building clean, intuitive user interfaces for blockchain applications is notoriously difficult. Developers often spend weeks configuring wallet connection states, handling custom RPC errors, rendering transaction loaders, and calculating gas fees.
        </p>
        <p>
          The <strong>Arc App Kit</strong> is a comprehensive collection of pre-built, responsive UI components and developer SDKs designed specifically for the Arc L1 network. By dropping the App Kit into your frontend, you instantly get access to high-quality, production-ready components.
        </p>

        <h3>Core Features of the Arc App Kit</h3>
        <ul>
          <li><strong>Pre-built Connectors:</strong> Polished, multi-wallet connect widgets that handle network-switching automatically.</li>
          <li><strong>Transaction Status Loaders:</strong> Interactive, user-friendly modals that guide users through transaction approval, pending states, and instant finality confirmations.</li>
          <li><strong>Native Gas Estimation:</strong> Accurate, real-time USDC fee displays built into payment buttons, ensuring full transparent pricing for users.</li>
        </ul>
        <p>
          With the Arc App Kit, developers can build a fully functional, stablecoin-powered payment dApp in just an afternoon instead of weeks of custom UI engineering.
        </p>
      </>
    ),
    resources: [
      { label: 'Arc App Kit SDK', url: 'https://docs.arc.io/' },
      { label: 'Developer Quickstart Guide', url: 'https://docs.arc.io/' }
    ]
  },
  'ecosystem-use-cases': {
    title: 'Arc Ecosystem & Practical Use Cases',
    readingTime: '5 min read',
    summary: "Study the real-world applications of Arc's unique architecture, including global micropayments, retail e-commerce, and enterprise compliance.",
    content: (
      <>
        <h3>Unlocking New Onchain Business Models</h3>
        <p>
          Arc's combination of predictable sub-cent USDC-denominated gas fees and instant block finality makes standard business models viable onchain for the very first time. Under traditional gas systems, these use cases are economically impossible:
        </p>

        <h3>1. Global Retail E-Commerce</h3>
        <p>
          Traditional card networks charge merchants 1.5% to 3.5% per transaction, plus flat fees. On Arc, a merchant can accept instant USDC payments from any wallet globally. The transaction settles instantly (sub-second finality) and the gas fee is paid seamlessly in USDC, costing less than a penny. This significantly increases profit margins for high-volume retail merchants.
        </p>

        <h3>2. Micro-Transactions & Pay-As-You-Go APIs</h3>
        <p>
          Content creators can charge users $0.05 per article read, or $0.01 per second of video streamed. Software companies can charge sub-cent fees for API calls. Because transactions settle instantly and gas fees are deterministic and incredibly low, micro-payments are finally practical.
        </p>

        <h3>3. AI Agent Economies</h3>
        <p>
          Onchain AI agents can interact, trade, and pay each other continuously. Because gas is paid directly in USDC (the global benchmark stablecoin), AI agents can manage single unified balances without needing to hold separate volatile utility assets just to pay for network processing.
        </p>
      </>
    ),
    resources: [
      { label: 'Arc Ecosystem Directory', url: 'https://www.arc.io/ecosystem' },
      { label: 'Micropayment Architectures', url: 'https://docs.arc.io/' }
    ]
  },
  'future-onchain-finance': {
    title: 'Why Arc Matters for Modern Onchain Finance',
    readingTime: '4 min read',
    summary: 'Evaluate the strategic advantages Arc brings to decentralized finance, bringing predictability and mainstream trust to onchain systems.',
    content: (
      <>
        <h3>Mainstream Web3 Adoption</h3>
        <p>
          For decentralized finance (DeFi) to scale to millions of active users and institutions, it must look and feel like standard internet finance: predictable, fast, secure, and denominated in recognized units of value.
        </p>
        <p>
          Arc bridges the massive gap between the volatile, complex web3 ecosystem and the highly structured world of traditional finance. By setting the gas token to native USDC at the consensus layer, Arc provides the fundamental stability required by mainstream enterprises.
        </p>

        <h3>CFO & Enterprise Friendly</h3>
        <p>
          On traditional networks, companies have to purchase volatile cryptocurrencies, set up complex custody/treasury protocols, and continually buy and sell utility tokens to ensure their server scripts don't run out of gas. This is a regulatory and accounting nightmare.
        </p>
        <p>
          <strong>Arc allows complete financial alignment:</strong>
        </p>
        <ul>
          <li><strong>Clean Accounting:</strong> Every single transaction fee is directly recorded and accounted for in USDC—matching standard corporate accounting practices.</li>
          <li><strong>Zero Treasury Volatility:</strong> Companies do not have to hold speculative utility tokens on their balance sheets to pay for L1 database operations.</li>
          <li><strong>Mainstream Trust:</strong> High speed, low friction, and predictable pricing build absolute trust for retail users and enterprise systems alike.</li>
        </ul>
      </>
    ),
    resources: [
      { label: 'Arc Vision Paper', url: 'https://www.arc.io/' },
      { label: 'Institutional Infrastructure', url: 'https://docs.arc.io/' }
    ]
  }
};

const lessonIds = Object.keys(lessonData);

function Module() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isCompleted, setIsCompleted] = useState(false);
  
  const lesson = lessonData[id];

  useEffect(() => {
    if (!lesson) {
      navigate('/learn');
      return;
    }
    const completedStatus = localStorage.getItem(`arc_completed_${id}`) === 'true';
    setIsCompleted(completedStatus);
  }, [id, lesson, navigate]);

  if (!lesson) return null;

  const currentIndex = lessonIds.indexOf(id);
  const nextLessonId = currentIndex < lessonIds.length - 1 ? lessonIds[currentIndex + 1] : null;

  const markCompleted = () => {
    localStorage.setItem(`arc_completed_${id}`, 'true');
    const completedCount = lessonIds.filter(lid => localStorage.getItem(`arc_completed_${lid}`) === 'true').length;
    localStorage.setItem('arc_completed_lessons', completedCount.toString());
    setIsCompleted(true);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ marginBottom: '24px' }}>
        <Link to="/learn" className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
          <ArrowLeft size={16} /> Back to Curriculum
        </Link>
      </div>

      <div className="card" style={{ padding: '40px', marginBottom: '32px' }}>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '16px', fontWeight: '500' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <BookOpen size={16} color="var(--accent-color)" /> Module {currentIndex + 1}
          </span>
          <span>•</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Clock size={16} /> {lesson.readingTime}
          </span>
          {isCompleted && (
            <>
              <span>•</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: 'var(--success-color)', fontWeight: '600' }}>
                <CheckCircle size={16} /> Completed
              </span>
            </>
          )}
        </div>

        <h1 style={{ fontSize: '2.25rem', marginBottom: '20px', lineHeight: '1.3' }}>{lesson.title}</h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', marginBottom: '32px', borderLeft: '4px solid var(--accent-color)', paddingLeft: '16px', lineHeight: '1.6' }}>
          {lesson.summary}
        </p>

        <div className="lesson-content-body" style={{ color: 'var(--text-primary)', lineHeight: '1.8', fontSize: '1.05rem' }}>
          {lesson.content}
        </div>

        <div style={{ borderTop: '1px solid var(--border-color)', marginTop: '40px', paddingTop: '32px' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={20} color="var(--accent-color)" /> Official Trusted Resources
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {lesson.resources.map((res, i) => (
              <a key={i} href={res.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline external-link" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
                {res.label} <ExternalLink size={14} />
              </a>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-color)', marginTop: '40px', paddingTop: '32px' }}>
          {!isCompleted ? (
            <button className="btn btn-primary" onClick={markCompleted} style={{ padding: '12px 24px' }}>
              <CheckCircle size={18} /> Mark as Completed
            </button>
          ) : (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--success-color)', fontWeight: '600' }}>
              <CheckCircle size={24} /> Module Completed!
            </span>
          )}

          {nextLessonId ? (
            <Link to={`/learn/${nextLessonId}`} className="btn btn-secondary" style={{ padding: '12px 24px' }}>
              Next Module <ArrowRight size={18} />
            </Link>
          ) : (
            <Link to="/quiz" className="btn btn-primary" style={{ padding: '12px 24px', backgroundColor: 'var(--success-color)' }}>
              Proceed to Academy Quiz <ArrowRight size={18} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Module;
