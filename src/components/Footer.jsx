export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">AB</div>
          <p>Software Engineering Student based in Calicut, India. Building full-stack applications with passion and precision.</p>
        </div>
        <div className="footer-col">
          <h4>Navigation</h4>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </div>
        <div className="footer-col">
          <h4>Connect</h4>
          <a href="https://github.com/abhishekpoyyeri" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/abhishekpoyyeri/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="#">Twitter</a>
          <a href="mailto:abhishekpoyyeri@gmail.com">Email</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-text">© 2026 ABHISHEK P. BUILT WITH BRUTALISM ✦</div>
        <div className="social-links">
          <a href="https://github.com/abhishekpoyyeri" className="social-link" target="_blank" rel="noopener noreferrer" title="GitHub">GH</a>
          <a href="https://www.linkedin.com/in/abhishekpoyyeri/" className="social-link" target="_blank" rel="noopener noreferrer" title="LinkedIn">LI</a>
          <a href="#" className="social-link" title="Twitter">TW</a>
          <a href="mailto:abhishekpoyyeri@gmail.com" className="social-link" title="Email">@</a>
        </div>
      </div>
    </footer>
  );
}
