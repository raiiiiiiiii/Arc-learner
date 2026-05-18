import { useEffect, useState, useRef } from 'react';
import { Award, Shield, Zap, Crown, CheckCircle, Download, Printer } from 'lucide-react';
import html2canvas from 'html2canvas';

function Certificate() {
  const [dateStr, setDateStr] = useState('');
  const certificateRef = useRef(null);
  const [userData, setUserData] = useState({
    score: 0,
    levelName: 'Arc Novice',
    levelClass: 'level-novice',
    icon: Award,
    description: 'demonstrating an introductory understanding of the Arc Ecosystem.'
  });
  
  useEffect(() => {
    const today = new Date();
    setDateStr(today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));

    const score = parseInt(localStorage.getItem('arc_score') || '0');
    
    let levelConfig = {};
    if (score >= 15) {
      levelConfig = {
        levelName: 'Arc Master',
        levelClass: 'level-master',
        icon: Crown,
        description: 'demonstrating elite mastery and profound expertise in the Arc Network, Agentic Economy, and advanced Web3 infrastructure.'
      };
    } else if (score >= 10) {
      levelConfig = {
        levelName: 'Arc Expert',
        levelClass: 'level-expert',
        icon: Zap,
        description: 'demonstrating advanced proficiency and deep technical understanding of the Arc Ecosystem and its core mechanics.'
      };
    } else if (score >= 5) {
      levelConfig = {
        levelName: 'Arc Scholar',
        levelClass: 'level-scholar',
        icon: Shield,
        description: 'demonstrating a solid foundational understanding of the Arc Network and Web3 integration.'
      };
    } else {
      levelConfig = {
        levelName: 'Arc Novice',
        levelClass: 'level-novice',
        icon: CheckCircle,
        description: 'demonstrating introductory knowledge and beginning their journey into the Arc Ecosystem.'
      };
    }

    setUserData({ score, ...levelConfig });
  }, []);

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

  const IconComponent = userData.icon;

  return (
    <div>
      <h1 className="text-center mb-8">Your Achievement</h1>
      
      <div className="certificate" ref={certificateRef}>
        <div className="certificate-inner">
          <div className="certificate-content">
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
              <img src="/logo.jpg" alt="Arc Logo" style={{ height: '80px', width: '80px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--border-color)' }} />
            </div>
            
            <h2 className="certificate-title">Certificate of Achievement</h2>
            <p className="certificate-subtitle">This document proudly certifies that</p>
            
            <div className="certificate-name">
              Arc Explorer
            </div>
            
            <div style={{ margin: '32px 0' }}>
              <span className={`certificate-level ${userData.levelClass}`}>
                Level: {userData.levelName}
              </span>
            </div>
            
            <p style={{ fontSize: '1.125rem', maxWidth: '650px', margin: '0 auto', color: 'var(--text-primary)', lineHeight: '1.8' }}>
              Has successfully completed the required curriculum and assessments with a <strong>score of {userData.score}</strong>, {userData.description}
            </p>
            
            <div className="certificate-date">
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
                <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Certificate ID: {Math.random().toString(36).substring(2, 10).toUpperCase()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-8" style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
        <button className="btn btn-outline" onClick={() => window.print()} style={{ padding: '12px 32px', fontSize: '1.1rem' }}>
          <Printer size={20} />
          Print
        </button>
        <button className="btn btn-primary" onClick={handleDownload} style={{ padding: '12px 32px', fontSize: '1.1rem' }}>
          <Download size={20} />
          Download Image
        </button>
      </div>
    </div>
  );
}

export default Certificate;
