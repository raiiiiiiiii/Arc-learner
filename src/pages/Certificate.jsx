import { useEffect, useState, useRef } from 'react';
import { Award, Shield, Zap, Crown, CheckCircle, Download, Printer, Edit3 } from 'lucide-react';
import html2canvas from 'html2canvas';

function Certificate() {
  const [dateStr, setDateStr] = useState('');
  const certificateRef = useRef(null);
  const [certId, setCertId] = useState('');
  const [userName, setUserName] = useState('Arc Explorer');
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
    
    // Generate or fetch a stable Certificate ID
    let savedId = localStorage.getItem('arc_cert_id');
    if (!savedId) {
      savedId = 'ARC-' + Math.random().toString(36).substring(2, 10).toUpperCase();
      localStorage.setItem('arc_cert_id', savedId);
    }
    setCertId(savedId);

    // Fetch user name
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
        icon: CheckCircle,
        description: 'demonstrating introductory knowledge of stablecoin-native architectures and starting their developer journey.'
      };
    }

    setUserData({ score, ...levelConfig });
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

  return (
    <div style={{ maxWidth: '850px', margin: '0 auto' }}>
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
      <div className="certificate" ref={certificateRef}>
        <div className="certificate-inner">
          <div className="certificate-content">
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
              <img src="/logo.jpg" alt="Arc Logo" style={{ height: '80px', width: '80px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--border-color)' }} />
            </div>
            
            <h2 className="certificate-title">Certificate of Achievement</h2>
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
      
      <div className="text-center mt-8" style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '56px' }}>
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
