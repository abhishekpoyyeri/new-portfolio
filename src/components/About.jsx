import FadeIn from "./FadeIn.jsx";

export default function About() {
  return (
    <section className="about" id="about">
      <FadeIn className="about-box">
        <div className="about-content">
          <h2>ABOUT</h2>
          <p>
            Computer Science <span className="highlight-yellow">student</span> interested in{" "}
            <span className="highlight-blue">frontend development</span>,{" "}
            <span className="highlight-yellow">full-stack development</span>,{" "}
            <span className="highlight-blue">networking</span>,{" "}
            <span className="highlight-yellow">operating systems</span>, and{" "}
            <span className="highlight-blue">modern web technologies</span>. Hands-on experience building
            applications using <span className="highlight-yellow">React</span> and{" "}
            <span className="highlight-blue">Flutter</span>, along with backend development and
            system-level programming fundamentals. Skilled in developing{" "}
            <span className="highlight-yellow">scalable web applications</span>,{" "}
            <span className="highlight-blue">AI-powered platforms</span>, and{" "}
            <span className="highlight-yellow">real-time systems</span> using modern frameworks and databases.
            Passionate about building <span className="highlight-blue">real-world software projects</span>,
            exploring computer systems and networking concepts, and continuously learning{" "}
            <span className="highlight-yellow">emerging technologies</span>.
            <br /><br />
            I have hands-on experience with <span className="highlight-blue">AWS cloud services</span>, particularly provisioning and{" "}
            configuring <span className="highlight-yellow">EC2 instances</span> to host and operate production websites — including{" "}
            web server setup, <span className="highlight-blue">security group configuration</span>, and <span className="highlight-yellow">deployment automation</span>.
          </p>
        </div>
        <div className="about-stats">
          <div className="stat-card">
            <div className="label">Education</div>
            <div className="value">Computer Science Engineering, DSEC</div>
          </div>
          <div className="stat-card">
            <div className="label">Location</div>
            <div className="value">Calicut, Kerala</div>
          </div>
          <div className="stat-card">
            <div className="label">Status</div>
            <div className="value">Open for Collaboration & Job Opportunities</div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
