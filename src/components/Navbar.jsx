import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen]);

  return (
    <nav role="navigation" aria-label="Primary navigation">
      <a href="#home" className="logo">AB</a>
      <div
        className={`nav-links ${isOpen ? 'open' : ''}`}
        id="navLinks"
        aria-hidden={!isOpen}
      >
        <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        <a href="#journey" onClick={() => setIsOpen(false)}>Journey</a>
        <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
        <a href="mailto:abhishekpoyyeri@gmail.com" className="btn-primary">Get In Touch</a>
        <a href="https://www.linkedin.com/in/abhishekpoyyeri/" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ background: 'var(--light)', color: 'var(--dark)', boxShadow: 'var(--shadow-sm)' }}>LinkedIn</a>
      </div>
      <button
        className="menu-toggle"
        id="menuToggle"
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
        aria-controls="navLinks"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}
