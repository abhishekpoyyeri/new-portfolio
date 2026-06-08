export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <div className="hero-hello">Hi there!</div>
        <h1>
          I'm <span className="name-highlight">Abhishek P</span>.
        </h1>
        <p>
          Based in Calicut, India, I'm a Software Engineering Student.
          I love working with full-stack applications, Flutter apps, and cloud technologies.
        </p>
        <div className="hero-actions">
          <a href="mailto:abhishekpoyyeri@gmail.com" className="btn-primary">Get In Touch!</a>
        </div>
      </div>

      <div className="hero-art">
        <div className="hero-portrait">
          <img src="./pic.png" alt="Abhishek P — Software Engineering Student" loading="eager" decoding="async" fetchPriority="high" />
          <div className="hero-float hero-float-code">&lt;/&gt;</div>
          <div className="hero-float hero-float-term">&gt;_</div>
          <div className="hero-float hero-float-card">JS</div>
          <div className="hero-role">Full-Stack Ninja</div>
        </div>
      </div>
    </section>
  );
}
