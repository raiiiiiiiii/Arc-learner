import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Star, Award, CheckCircle, Circle, ArrowRight, Lightbulb } from 'lucide-react';

const lessons = [
  { id: 'what-is-arc', title: 'Introduction to Arc: The Economic OS' },
  { id: 'stablecoin-native-l1', title: 'Stablecoin-Native Layer 1 & USDC Fees' },
  { id: 'performance-finality-evm', title: 'BFT Finality & EVM Compatibility' },
  { id: 'arc-app-kit', title: 'The Arc App Kit & Developer Tooling' },
  { id: 'ecosystem-use-cases', title: 'Arc Ecosystem & Practical Use Cases' },
  { id: 'future-onchain-finance', title: 'Why Arc Matters for Modern Finance' }
];

function Dashboard() {
  const [stats, setStats] = useState({
    lessonsCount: 0,
    score: 0
  });
  const [completedStatus, setCompletedStatus] = useState({});
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

    const score = parseInt(localStorage.getItem('arc_score') || '0');

    setStats({
      lessonsCount: completedCount,
      score: score
    });
    setCompletedStatus(status);
    setNextLesson(nextL);
  }, []);

  // Determine the next step recommendation
  let nextStepTitle = "";
  let nextStepText = "";
  let nextStepLink = "";
  let nextStepButtonText = "";

  if (stats.lessonsCount < lessons.length) {
    nextStepTitle = "Resume Your Curriculum";
    nextStepText = `You have completed ${stats.lessonsCount} of ${lessons.length} modules. Complete the remaining lessons to unlock the full potential of the Arc Academy.`;
    nextStepLink = nextLesson ? `/learn/${nextLesson.id}` : "/learn";
    nextStepButtonText = "Resume Next Module";
  } else if (stats.score === 0) {
    nextStepTitle = "Take the Academy Assessment";
    nextStepText = "Congratulations on finishing the entire curriculum! Test your technical knowledge in our dynamic assessment quiz to earn your Certificate.";
    nextStepLink = "/quiz";
    nextStepButtonText = "Start Academy Quiz";
  } else if (stats.score < 10) {
    nextStepTitle = "Improve Your Score";
    nextStepText = `You completed the quiz with a score of ${stats.score}/20. Retake the quiz to achieve higher knowledge tiers (Scholar, Expert, Master) on your Certificate.`;
    nextStepLink = "/quiz";
    nextStepButtonText = "Retake Academy Quiz";
  } else {
    nextStepTitle = "Claim Your Academy Certification";
    nextStepText = `Outstanding achievement! With a score of ${stats.score}/20, you qualify for a premium ${stats.score >= 15 ? 'Arc Master' : 'Arc Expert'} Certificate.`;
    nextStepLink = "/certificate";
    nextStepButtonText = "View & Download Certificate";
  }

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <h1 className="mb-4">Your Progress Dashboard</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', fontSize: '1.1rem' }}>
        Track your module completions, quiz high scores, and access next-step recommendations to complete your academic certification.
      </p>

      {/* Progress Cards */}
      <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', marginBottom: '32px' }}>
        <div className="stat-card" style={{ padding: '24px' }}>
          <BookOpen size={36} color="var(--accent-color)" style={{ margin: '0 auto 12px' }} />
          <div className="stat-value" style={{ fontSize: '2.5rem' }}>{stats.lessonsCount} / {lessons.length}</div>
          <div className="stat-label">Modules Completed</div>
        </div>
        <div className="stat-card" style={{ padding: '24px' }}>
          <Star size={36} color="var(--accent-color)" style={{ margin: '0 auto 12px' }} />
          <div className="stat-value" style={{ fontSize: '2.5rem' }}>{stats.score} <span style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', fontWeight: '500' }}>/ 20</span></div>
          <div className="stat-label">Quiz High Score</div>
        </div>
      </div>

      {/* Guided Next Steps Alert */}
      <div className="card" style={{ padding: '24px', marginBottom: '40px', backgroundColor: '#eff6ff', borderColor: '#bfdbfe', borderLeft: '5px solid var(--accent-color)' }}>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
          <div style={{ padding: '6px', borderRadius: '50%', backgroundColor: '#dbeafe', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Lightbulb size={24} color="var(--accent-color)" />
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '1.15rem', color: '#1e40af' }}>Recommended Next Step: {nextStepTitle}</h3>
            <p style={{ margin: '0 0 16px 0', color: '#1e3a8a', fontSize: '0.95rem', lineHeight: '1.6' }}>{nextStepText}</p>
            <Link to={nextStepLink} className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
              {nextStepButtonText} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Detailed Module List */}
      <h2 className="mb-6" style={{ fontSize: '1.5rem' }}>Curriculum Module Details</h2>
      <div className="card" style={{ padding: '0', overflow: 'hidden', marginBottom: '40px' }}>
        <div style={{ padding: '16px 24px', borderBottom: '1px solid var(--border-color)', backgroundColor: '#f9fafb', display: 'flex', justifyContent: 'space-between', fontWeight: '600', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          <span>MODULE TITLE</span>
          <span>STATUS</span>
        </div>
        <div>
          {lessons.map((lesson, index) => {
            const isCompleted = completedStatus[lesson.id];
            return (
              <div key={lesson.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', borderBottom: index < lessons.length - 1 ? '1px solid var(--border-color)' : 'none', transition: 'background-color 0.2s' }} className="table-row-hover">
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--accent-color)', width: '24px' }}>0{index + 1}</span>
                  <Link to={`/learn/${lesson.id}`} style={{ fontWeight: '500', color: 'var(--text-primary)', textDecoration: 'none' }} className="nav-link">
                    {lesson.title}
                  </Link>
                </div>
                <div>
                  {isCompleted ? (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--success-color)', fontSize: '0.9rem', fontWeight: '600' }}>
                      <CheckCircle size={16} /> Completed
                    </span>
                  ) : (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                      <Circle size={16} color="var(--border-color)" /> Not Started
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
