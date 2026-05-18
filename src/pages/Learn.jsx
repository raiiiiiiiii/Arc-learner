import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Play, ArrowRight, BookOpen, Clock, Award } from 'lucide-react';

const lessons = [
  {
    id: 'what-is-arc',
    title: 'Introduction to Arc: The Economic OS',
    summary: "Understand Arc's identity as a stablecoin-native Layer 1 designed to enable a seamless agentic economy.",
    readingTime: '4 min'
  },
  {
    id: 'stablecoin-native-l1',
    title: 'Stablecoin-Native Layer 1 & USDC Fees',
    summary: 'Discover why a stablecoin-native gas architecture changes the game for consumer apps and builders.',
    readingTime: '5 min'
  },
  {
    id: 'performance-finality-evm',
    title: 'BFT Finality & EVM Compatibility',
    summary: "Learn about Arc's Byzantine consensus engine providing sub-second block finality with full EVM support.",
    readingTime: '5 min'
  },
  {
    id: 'arc-app-kit',
    title: 'The Arc App Kit & Developer Tooling',
    summary: 'Explore the pre-built UI components and SDKs that let you build and deploy seamless user experiences.',
    readingTime: '4 min'
  },
  {
    id: 'ecosystem-use-cases',
    title: 'Arc Ecosystem & Practical Use Cases',
    summary: 'Study real-world applications including retail e-commerce, global micropayments, and autonomous AI agents.',
    readingTime: '5 min'
  },
  {
    id: 'future-onchain-finance',
    title: 'Why Arc Matters for Modern Finance',
    summary: 'Evaluate the strategic advantages Arc brings to decentralized finance, bringing mainstream trust.',
    readingTime: '4 min'
  }
];

function Learn() {
  const [completedStatus, setCompletedStatus] = useState({});
  const [percentCompleted, setPercentCompleted] = useState(0);
  const [nextLesson, setNextLesson] = useState(null);

  useEffect(() => {
    const status = {};
    let completedCount = 0;
    let foundNext = false;
    let nextL = null;

    lessons.forEach((lesson) => {
      const isCompleted = localStorage.getItem(`arc_completed_${lesson.id}`) === 'true';
      status[lesson.id] = isCompleted;
      if (isCompleted) {
        completedCount++;
      } else if (!foundNext) {
        nextL = lesson;
        foundNext = true;
      }
    });

    setCompletedStatus(status);
    setPercentCompleted(Math.round((completedCount / lessons.length) * 100));
    setNextLesson(nextL);
  }, []);

  return (
    <div>
      <h1 className="text-center mb-4">Academy Curriculum</h1>
      <p className="text-center mb-8" style={{ maxWidth: '650px', margin: '0 auto 40px', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6' }}>
        Master the foundational and advanced concepts of the Arc stablecoin-native Layer 1. Complete all 6 curriculum modules below to qualify for your customized assessment and certificate.
      </p>

      {/* Progress Dashboard Card */}
      <div className="card" style={{ padding: '24px', marginBottom: '40px', backgroundColor: 'var(--surface-color)' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
          <div>
            <h3 style={{ margin: 0, fontSize: '1.25rem' }}>Your Curriculum Progress</h3>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              {lessons.filter(l => completedStatus[l.id]).length} of {lessons.length} Modules Completed
            </span>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            {nextLesson ? (
              <Link to={`/learn/${nextLesson.id}`} className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
                <Play size={16} /> Resume: {nextLesson.title.split(':')[0]}
              </Link>
            ) : (
              <Link to="/quiz" className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.9rem', backgroundColor: 'var(--success-color)' }}>
                <Award size={16} /> Take Final Quiz
              </Link>
            )}
          </div>
        </div>

        <div className="progress-bar-container" style={{ marginBottom: 0 }}>
          <div className="progress-bar" style={{ width: `${percentCompleted}%` }}></div>
        </div>
      </div>

      {/* Lessons Grid */}
      <div className="grid">
        {lessons.map((lesson, index) => {
          const isCompleted = completedStatus[lesson.id];
          return (
            <div key={lesson.id} className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--accent-color)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Module {index + 1}
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <Clock size={12} /> {lesson.readingTime}
                </span>
              </div>
              
              <h2 className="card-title" style={{ fontSize: '1.25rem', marginBottom: '12px', lineHeight: '1.4', minHeight: '52px' }}>
                {lesson.title}
              </h2>
              
              <div className="card-content" style={{ flex: 1 }}>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: 0 }}>
                  {lesson.summary}
                </p>
              </div>

              <div className="card-actions" style={{ marginTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {isCompleted ? (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: 'var(--success-color)', fontSize: '0.9rem', fontWeight: '600' }}>
                    <CheckCircle size={16} /> Completed
                  </span>
                ) : (
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Not Started</span>
                )}
                
                <Link to={`/learn/${lesson.id}`} className={isCompleted ? "btn btn-outline" : "btn btn-primary"} style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
                  {isCompleted ? "Review" : "Start Module"} <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Learn;
