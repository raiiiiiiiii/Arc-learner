import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Menu } from 'lucide-react';
import { useState } from 'react';

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/" className="logo">
          <img src="/logo.jpg" alt="Arc Logo" className="logo-img" style={{ height: '32px', width: '32px', borderRadius: '50%', objectFit: 'cover' }} />
          Arc Explorer Academy
        </Link>
        
        <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          <Menu size={24} />
        </button>

        <div className={`nav-links ${menuOpen ? 'mobile-open' : ''}`}>
          <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
          <Link to="/learn" className={`nav-link ${isActive('/learn')}`}>Learn</Link>
          <Link to="/ecosystem" className={`nav-link ${isActive('/ecosystem')}`}>Ecosystem</Link>
          <Link to="/quiz" className={`nav-link ${isActive('/quiz')}`}>Quiz</Link>
          <Link to="/dashboard" className={`nav-link ${isActive('/dashboard')}`}>Dashboard</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
