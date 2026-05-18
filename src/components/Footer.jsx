function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Arc Explorer Academy. An educational platform for the Arc ecosystem.</p>
      <div style={{ marginTop: '8px', display: 'flex', justifyContent: 'center', gap: '16px' }}>
        <a href="https://www.arc.io/" target="_blank" rel="noopener noreferrer" className="external-link">Arc Official Site</a>
        <a href="https://docs.arc.io/" target="_blank" rel="noopener noreferrer" className="external-link">Documentation</a>
        <a href="https://www.arc.io/ecosystem" target="_blank" rel="noopener noreferrer" className="external-link">Ecosystem</a>
      </div>
    </footer>
  );
}

export default Footer;
