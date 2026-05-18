import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Award, ArrowRight, CheckCircle2, XCircle, HelpCircle } from 'lucide-react';

const allQuestions = [
  { id: 1, question: "What is the primary purpose of the Arc network?", options: ["To serve as an Economic OS for Web3", "To provide a social media platform", "To host decentralized video streaming", "To function purely as a cryptocurrency exchange"], correctAnswer: 0 },
  { id: 2, question: "How does the Agentic Economy model in Arc differ from traditional DeFi?", options: ["It relies on manual human execution for all trades", "It only allows fiat currency transactions", "It utilizes autonomous agents capable of complex economic decision-making", "It removes smart contracts entirely"], correctAnswer: 2 },
  { id: 3, question: "What is the role of the Native Circle Stack in the Arc ecosystem?", options: ["It is a UI framework for building frontends", "It is exclusively a cross-chain bridge to Ethereum", "It is a hardware wallet", "It provides deeply integrated infrastructure for native stablecoin gas and settlement"], correctAnswer: 3 },
  { id: 4, question: "Which consensus mechanism optimization is heavily utilized by high-throughput networks like Arc?", options: ["Proof of Work (PoW)", "Byzantine Fault Tolerant (BFT) fast-finality consensus", "Proof of Capacity", "Proof of Burn"], correctAnswer: 1 },
  { id: 5, question: "In the context of Arc's architecture, what solves the state bloat issue?", options: ["Increasing the block size indefinitely", "Stateless clients and zero-knowledge proofs", "Storing all data on a centralized AWS server", "Deleting old wallets automatically"], correctAnswer: 1 },
  { id: 6, question: "How do Arc's autonomous agents handle cross-chain interoperability?", options: ["Through trustless multi-party computation (MPC) and relay protocols", "By wrapping tokens manually", "By requiring users to use centralized exchanges", "They do not support cross-chain"], correctAnswer: 0 },
  { id: 7, question: "What security standard does Arc enforce for its core smart contract libraries?", options: ["Basic unit testing only", "Manual code review by a single developer", "Formal verification and dynamic invariant testing", "No security standards"], correctAnswer: 2 },
  { id: 8, question: "How does Arc manage MEV (Maximal Extractable Value) on its network?", options: ["It encourages front-running for higher fees", "By banning all decentralized exchanges", "MEV doesn't exist on Arc", "Through encrypted mempools and fair ordering protocols"], correctAnswer: 3 },
  { id: 9, question: "What is the primary advantage of Arc's dynamic fee market?", options: ["It adjusts base fees algorithmically based on network congestion while burning a portion", "Fees are always zero", "It allows validators to charge arbitrary rates", "It requires users to bid blindly"], correctAnswer: 0 },
  { id: 10, question: "In Arc's Developer SDK, what does the 'Agentic Hook' do?", options: ["It fishes for private keys", "It hooks the user's browser to mine crypto", "It allows smart contracts to trigger off-chain autonomous agents securely", "It is a marketing tool"], correctAnswer: 2 },
  { id: 11, question: "What cryptographic primitive does Arc use for privacy-preserving identity verification?", options: ["MD5 hashing", "Base64 encoding", "Caesar Cipher", "Zero-Knowledge Succinct Non-Interactive Arguments of Knowledge (zk-SNARKs)"], correctAnswer: 3 },
  { id: 12, question: "How is governance typically structured in the mature phase of the Arc network?", options: ["A single CEO makes all decisions", "A fully decentralized DAO utilizing liquid democracy and quadratic voting", "Only developers can vote", "Governance is locked permanently"], correctAnswer: 1 },
  { id: 13, question: "What guarantees finality in Arc's consensus layer?", options: ["Waiting for 6 block confirmations", "Byzantine Fault Tolerant (BFT) fast finality consensus", "Probabilistic finality over 24 hours", "Finality is never guaranteed"], correctAnswer: 1 },
  { id: 14, question: "Which programming paradigm is most aligned with writing secure Arc smart contracts?", options: ["Functional programming with strict type safety and formal semantics", "Object-Oriented Programming", "Procedural scripting", "Unstructured Assembly"], correctAnswer: 0 },
  { id: 15, question: "How does Arc's data availability (DA) layer function?", options: ["It stores everything on a single hard drive", "It deletes data after 30 days", "It uses data availability sampling (DAS) and erasure coding", "It relies entirely on IPFS with no guarantees"], correctAnswer: 2 },
  { id: 16, question: "What is the purpose of the 'Slashing' mechanism in Arc's validator network?", options: ["To lower transaction fees", "To reduce the token supply arbitrarily", "To cut the network's power usage", "To penalize malicious or negligent validators by destroying a portion of their stake"], correctAnswer: 3 },
  { id: 17, question: "How do Layer 2 rollups on Arc prove the validity of their off-chain execution?", options: ["They just ask users to trust them", "By submitting cryptographic validity proofs (zk-Rollups) or relying on fraud proofs (Optimistic Rollups)", "By publishing all transactions to Twitter", "They execute all transactions on Layer 1 anyway"], correctAnswer: 1 },
  { id: 18, question: "What is an 'Economic Abstraction' in the Arc ecosystem?", options: ["A theory about inflation", "Hiding the blockchain from the user", "The ability to pay network transaction fees in any supported token, not just the native currency", "A tax on developers"], correctAnswer: 2 },
  { id: 19, question: "Which attack vector is specifically mitigated by Arc's reentrancy guards at the protocol level?", options: ["Recursive call exploits where a contract is drained before its state updates", "DDoS attacks", "Phishing emails", "51% attacks"], correctAnswer: 0 },
  { id: 20, question: "What does the concept of 'Account Abstraction' enable on Arc?", options: ["Deleting your account", "Abstract art NFTs", "Hiding account balances completely", "Smart contract wallets with programmable logic, like social recovery and multi-sig"], correctAnswer: 3 }
];

function Quiz() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Shuffle and pick all 20 questions for the comprehensive exam
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    setQuestions(shuffled);
  }, []);

  if (questions.length === 0) return <div style={{ textAlign: 'center', padding: '40px' }}>Loading...</div>;

  const handleAnswerClick = (index) => {
    if (isAnswered) return;
    
    setSelectedAnswer(index);
    setIsAnswered(true);
    
    if (index === questions[currentQuestion].correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      // Finished all 20 questions. Let's record the final high score.
      const prevHighScore = parseInt(localStorage.getItem('arc_score') || '0');
      if (score > prevHighScore) {
        localStorage.setItem('arc_score', score.toString());
      }
      
      // Navigate to dashboard
      navigate('/dashboard');
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentQ = questions[currentQuestion];

  return (
    <div className="quiz-container" style={{ padding: '32px', maxWidth: '680px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '1.25rem', margin: 0, fontWeight: '700' }}>Academy Assessment</h2>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '600' }}>
          SCORE: {score} / {questions.length}
        </span>
      </div>
      
      <div className="progress-bar-container" style={{ height: '6px', marginBottom: '16px' }}>
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '32px', fontWeight: '500' }}>
        <span>Question {currentQuestion + 1} of {questions.length}</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
          <HelpCircle size={14} /> Comprehensive L1 Exam
        </span>
      </div>

      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '24px', lineHeight: '1.5', color: 'var(--text-primary)', fontWeight: '600' }}>
          {currentQ.question}
        </h3>
        
        <div className="options-list">
          {currentQ.options.map((option, index) => {
            let className = "option-btn";
            if (isAnswered) {
              if (index === currentQ.correctAnswer) {
                className += " correct";
              } else if (index === selectedAnswer) {
                className += " wrong";
              }
            } else if (selectedAnswer === index) {
              className += " selected";
            }

            return (
              <button
                key={index}
                className={className}
                onClick={() => handleAnswerClick(index)}
                disabled={isAnswered}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 20px',
                  fontSize: '0.95rem',
                  lineHeight: '1.4'
                }}
              >
                <span>{option}</span>
                {isAnswered && index === currentQ.correctAnswer && <CheckCircle2 size={18} color="var(--success-color)" />}
                {isAnswered && index === selectedAnswer && index !== currentQ.correctAnswer && <XCircle size={18} color="#ef4444" />}
              </button>
            );
          })}
        </div>
      </div>

      {isAnswered && (
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '24px' }}>
          <button className="btn btn-primary" onClick={handleNext} style={{ padding: '12px 28px', gap: '8px' }}>
            {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish & Save Score'}
            <ArrowRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
