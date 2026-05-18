import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Star, Award } from 'lucide-react';

function Dashboard() {
  const [stats, setStats] = useState({
    lessons: 0,
    score: 0
  });

  useEffect(() => {
    const completedLessons = parseInt(localStorage.getItem('arc_completed_lessons') || '0');
    const score = parseInt(localStorage.getItem('arc_score') || '0');
    
    setStats({
      lessons: completedLessons,
      score: score
    });
  }, []);

  return (
    <div>
      <h1 className="mb-8">Your Progress</h1>

      <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
        <div className="stat-card">
          <BookOpen size={32} color="var(--accent-color)" style={{ margin: '0 auto 12px' }} />
          <div className="stat-value">{stats.lessons}</div>
          <div className="stat-label">Completed Lessons</div>
        </div>
        <div className="stat-card">
          <Star size={32} color="var(--accent-color)" style={{ margin: '0 auto 12px' }} />
          <div className="stat-value">{stats.score}</div>
          <div className="stat-label">Total Score</div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '16px', marginTop: '32px' }}>
        <Link to="/learn" className="btn btn-primary">
          Continue Learning
        </Link>
        <Link to="/certificate" className="btn btn-outline">
          <Award size={20} />
          View Certificate
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
