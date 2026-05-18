import { useEffect, useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Award, Shield, Zap, Crown, CheckCircle, Download, Printer, Edit3, Lock, Share2, Clipboard, ChevronRight } from 'lucide-react';
import html2canvas from 'html2canvas';

const lessonsList = [
  'what-is-arc',
  'stablecoin-native-l1',
  'performance-finality-evm',
  'arc-app-kit',
  'ecosystem-use-cases',
  'future-onchain-finance'
];

function Certificate() {
  const navigate = useNavigate();
  const certificateRef = useRef(null);
  
  const [dateStr, setDateStr] = useState('');
  const [certId, setCertId] = useState('');
  const [userName, setUserName] = useState('Arc Explorer');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [completedCount, setCompletedCount] = useState(0);
  const [hasTakenQuiz, setHasTakenQuiz] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);
  const [celebrate, setCelebrate] = useState(false);
  
  const [userData, setUserData] = useState({
    score: 0,
    levelName: 'Arc Novice',
    levelClass: 'level-novice',
    icon: Award,
    description: 'demonstrating an introductory understanding of the Arc Ecosystem.'
  });

  useEffect(() => {
    // 1. Calculate lesson completion status
    let completedLessons = 0;
    lessonsList.forEach((id) => {
      if (localStorage.getItem(`arc_completed_${id}`) === 'true') {
        completedLessons++;
      }
    });
    setCompletedCount(completedLessons);

    // 2. Check quiz completion
    const scoreStr = localStorage.getItem('arc_score');
    const hasQuiz = scoreStr !== null;
    setHasTakenQuiz(hasQuiz);

    const score = parseInt(scoreStr || '0');
    
    // 3. Overall unlock condition
    const unlocked = completedLessons === lessonsList.length && hasQuiz;
    setIsUnlocked(unlocked);

    if (unlocked) {
      // Trigger unlock celebration animation
      setCelebrate(true);
      const timer = setTimeout(() => setCelebrate(false), 3000);
      
      const today = new Date();
      setDateStr(today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));

      // Fetch or generate stable Certificate ID
      let savedId = localStorage.getItem('arc_cert_id');
      if (!savedId) {
        savedId = 'ARC-' + Math.random().toString(36).substring(2, 10).toUpperCase();
        localStorage.setItem('arc_cert_id', savedId);
      }
      setCertId(savedId);

      const savedName = localStorage.getItem('arc_user_name') || 'Arc Explorer';
      setUserName(savedName);

      let levelConfig = {};
      if (score >= 15) {
        levelConfig = {
          levelName: 'Arc Master',
          levelClass: 'level-master',
          icon: Crown,
          description: 'demonstrating elite mastery and profound expertise in the Arc Network, stablecoin-native Layer 1 systems, and advanced agentic infrastructure.'
        };
      } else if (score >= 10) {
        levelConfig = {
          levelName: 'Arc Expert',
          levelClass: 'level-expert',
          icon: Zap,
          description: 'demonstrating advanced proficiency and deep technical understanding of predictable USDC-denominated transaction markets and EVM integrations.'
        };
      } else if (score >= 5) {
        levelConfig = {
          levelName: 'Arc Scholar',
          levelClass: 'level-scholar',
          icon: Shield,
          description: 'demonstrating solid foundational understanding of Byzantine Fault Tolerant consensus finality, EVM tooling, and stablecoin fee alignment.'
        };
      } else {
        levelConfig = {
          levelName: 'Arc Novice',
          levelClass: 'level-novice',
          icon: Award,
          description: 'demonstrating introductory knowledge of stablecoin-native architectures and starting their developer journey.'
        };
      }

      setUserData({ score, ...levelConfig });
      return () => clearTimeout(timer);
    }
  }, []);

  const handleNameChange = (e) => {
    const val = e.target.value;
    setUserName(val);
    localStorage.setItem('arc_user_name', val);
  };

  const handleDownload = async () => {
    if (!certificateRef.current) return;
    
    try {
      const canvas = await html2canvas(certificateRef.current, {
        scale: 2, // High resolution
        useCORS: true,
        backgroundColor: '#ffffff'
      });
      
      const image = canvas.toDataURL('image/png', 1.0);
      const link = document.createElement('a');
      link.download = `Arc-Academy-Certificate-${userData.levelName.replace(' ', '-')}.png`;
      link.href = image;
      link.click();
    } catch (error) {
      console.error("Error generating certificate image:", error);
    }
  };

  const handleShare = () => {
    const shareText = `🎓 I just graduated from the Arc Explorer Academy as an ${userData.levelName} with a score of ${userData.score}/20!\n\nVerified Certificate Serial ID: ${certId}\nStudy predictable L1 systems at https://www.arc.io/`;
    navigator.clipboard.writeText(shareText);
    setShareCopied(true);
    setTimeout(() => setShareCopied(false), 3000);
  };

  // --- LOCKED STATE UI ---
  if (!isUnlocked) {
    return (
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ display: 'inline-flex', padding: '16px', borderRadius: '50%', backgroundColor: '#f3f4f6', border: '1px solid var(--border-color)', marginBottom: '16px' }}>
            <Lock size={40} color="var(--text-secondary)" />
          </div>
          <h1 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '12px' }}>Certificate Locked</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Complete the academy curriculum and verify your knowledge by taking the final assessment to unlock your official Certificate of Achievement.
          </p>
        </div>

        <div className="card" style={{ padding: '24px', marginBottom: '32px' }}>
          <h3 style={{ fontSize: '1.15rem', marginBottom: '20px', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>
            Academy Graduation Checklist
          </h3>

          {/* Lessons Completion Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {completedCount === lessonsList.length ? (
                  <CheckCircle size={22} color="var(--success-color)" />
                ) : (
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', border: '2px solid var(--border-color)' }}></div>
                )}
              </div>
              <div>
                <h4 style={{ fontSize: '0.95rem', margin: 0, fontWeight: '600' }}>Study All Lessons</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                  Read through all 6 core curriculum modules.
                </p>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: '700', color: completedCount === lessonsList.length ? 'var(--success-color)' : 'var(--text-secondary)' }}>
                {completedCount} / 6 Completed
              </span>
            </div>
          </div>

          {/* Assessment Quiz Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {hasTakenQuiz ? (
                  <CheckCircle size={22} color="var(--success-color)" />
                ) : (
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', border: '2px solid var(--border-color)' }}></div>
                )}
              </div>
              <div>
                <h4 style={{ fontSize: '0.95rem', margin: 0, fontWeight: '600' }}>Final Assessment Quiz</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                  Attempt the 20-question comprehensive network exam.
                </p>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: '700', color: hasTakenQuiz ? 'var(--success-color)' : 'var(--text-secondary)' }}>
                {hasTakenQuiz ? 'Completed' : 'Locked'}
              </span>
            </div>
          </div>
        </div>

        {/* Locked CTA Section */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {completedCount < lessonsList.length ? (
            <Link to="/learn" className="btn btn-primary" style={{ padding: '12px 28px', gap: '8px' }}>
              Resume Learning Curriculum <ChevronRight size={16} />
            </Link>
          ) : (
            <Link to="/quiz" className="btn btn-primary" style={{ padding: '12px 28px', gap: '8px', backgroundColor: 'var(--success-color)' }}>
              Take Graduation Quiz <ChevronRight size={16} />
            </Link>
          )}
        </div>
      </div>
    );
  }

  // --- UNLOCKED / SUCCESS STATE UI ---
  return (
    <div style={{ maxWidth: '850px', margin: '0 auto' }} className={celebrate ? "unlock-celebration" : ""}>
      
      {/* Dynamic Confetti / Congrats Alert */}
      <div className="card" style={{ padding: '24px', marginBottom: '32px', backgroundColor: '#ecfdf5', borderColor: '#a7f3d0', borderLeft: '5px solid var(--success-color)' }}>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <div style={{ padding: '8px', borderRadius: '50%', backgroundColor: '#d1fae5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Crown size={28} color="var(--success-color)" />
          </div>
          <div>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '1.2rem', color: '#065f46' }}>Congratulations, Graduate!</h3>
            <p style={{ margin: 0, color: '#047857', fontSize: '0.95rem' }}>
              You have completed all curriculum modules and passed the dynamic final assessment. Your certificate is unlocked!
            </p>
          </div>
        </div>
      </div>

      <h1 className="text-center mb-4">Your Academic Certificate</h1>
      <p className="text-center mb-8" style={{ color: 'var(--text-secondary)' }}>
        Verify your credentials, customize your certificate recipient name below, and download or print your customized high-resolution credentials.
      </p>

      {/* Interactive Name Customization */}
      <div className="card" style={{ padding: '20px', marginBottom: '32px', borderLeft: '4px solid var(--accent-color)' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <div style={{ padding: '6px', borderRadius: '50%', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Edit3 size={20} color="var(--accent-color)" />
            </div>
            <div>
              <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: '600' }}>Customize Recipient Name</h4>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>This name will automatically render on your printed certificate.</span>
            </div>
          </div>
          <div style={{ flex: '1 1 200px', maxWidth: '300px' }}>
            <input 
              type="text" 
              value={userName} 
              onChange={handleNameChange}
              placeholder="Enter your name..."
              style={{
                width: '100%',
                padding: '10px 14px',
                border: '1px solid var(--border-color)',
                borderRadius: '6px',
                fontSize: '0.95rem',
                backgroundColor: 'var(--bg-color)',
                color: 'var(--text-primary)',
                outline: 'none',
                transition: 'border-color 0.2s'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
            />
          </div>
        </div>
      </div>
      
      {/* Certificate Frame */}
      <div className="certificate" ref={certificateRef} style={{ animation: celebrate ? 'unlockedScaleUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards' : 'none' }}>
        <div className="certificate-inner">
          <div className="certificate-content">
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
              <img src="/logo.jpg" alt="Arc Logo" style={{ height: '80px', width: '80px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--border-color)' }} />
            </div>
            
            <h2 className="certificate-title" style={{ fontSize: '2.4rem', letterSpacing: '0.08em' }}>Certificate of Achievement</h2>
            <p className="certificate-subtitle">This document proudly certifies that</p>
            
            <div className="certificate-name" style={{ wordBreak: 'break-word', minHeight: '90px' }}>
              {userName}
            </div>
            
            <div style={{ margin: '32px 0' }}>
              <span className={`certificate-level ${userData.levelClass}`}>
                Level: {userData.levelName}
              </span>
            </div>
            
            <p style={{ fontSize: '1.125rem', maxWidth: '650px', margin: '0 auto', color: 'var(--text-primary)', lineHeight: '1.8' }}>
              Has successfully completed the required curriculum and assessments with a <strong>score of {userData.score} / 20</strong>, {userData.description}
            </p>
            
            <div className="certificate-date" style={{ marginTop: '24px' }}>
              Officially issued on {dateStr}
            </div>
            
            <div style={{ marginTop: '56px', display: 'flex', justifyContent: 'space-between', padding: '0 40px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ borderBottom: '2px solid var(--border-color)', width: '220px', height: '40px', marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: '"Brush Script MT", cursive', fontSize: '1.75rem', color: 'var(--accent-color)', opacity: 0.8 }}>Arc Academy</span>
                </div>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Head of Education</span>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{ borderBottom: '2px solid var(--border-color)', width: '220px', height: '40px', marginBottom: '12px', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                  <Award size={32} color="var(--border-color)" style={{ marginBottom: '-16px' }} />
                </div>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Certificate ID: {certId}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-8" style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '56px', flexWrap: 'wrap' }}>
        <button className="btn btn-outline" onClick={() => window.print()} style={{ padding: '12px 32px', fontSize: '1.1rem' }}>
          <Printer size={20} />
          Print
        </button>
        
        <button className="btn btn-primary" onClick={handleDownload} style={{ padding: '12px 32px', fontSize: '1.1rem' }}>
          <Download size={20} />
          Download Image
        </button>
        
        <button className="btn btn-outline" onClick={handleShare} style={{ padding: '12px 32px', fontSize: '1.1rem', backgroundColor: shareCopied ? '#ecfdf5' : 'transparent', borderColor: shareCopied ? 'var(--success-color)' : 'var(--border-color)', color: shareCopied ? 'var(--success-color)' : 'inherit' }}>
          {shareCopied ? (
            <>
              <CheckCircle size={20} /> Copied!
            </>
          ) : (
            <>
              <Share2 size={20} /> Share
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default Certificate;
