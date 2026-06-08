import FadeIn from "./FadeIn.jsx";

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="section-header" style={{ padding: 0, marginBottom: "40px" }}>
        <div className="section-title">Expertise</div>
      </div>
      <div className="skills-grid">
        <FadeIn>
          <div className="card">
            <div className="card-icon">
              <span className="material-icons-outlined">code</span>
            </div>
            <h3>Programming Languages &amp; Technologies</h3>
            <ul>
              <li>C</li>
              <li>C++</li>
              <li>Java</li>
              <li>Python</li>
              <li>Go</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React (JSX &amp; TSX)</li>
              <li>Flutter</li>
              <li>SQL</li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="card">
            <div className="card-icon">
              <span className="material-icons-outlined">dns</span>
            </div>
            <h3>Backend Development</h3>
            <ul>
              <li>Django</li>
              <li>Node.js</li>
              <li>Flask</li>
              <li>FastAPI</li>
              <li>Express.js</li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="card">
            <div className="card-icon">
              <span className="material-icons-outlined">storage</span>
            </div>
            <h3>Database Skills</h3>
            <ul>
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>SQLite</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="card">
            <div className="card-icon">
              <span className="material-icons-outlined">cloud</span>
            </div>
            <h3>Server &amp; Deployment</h3>
            <ul>
              <li>Linux Basics</li>
              <li>Nginx</li>
              <li>Apache</li>
              <li>Docker</li>
              <li>CI/CD Pipelines</li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="card">
            <div className="card-icon">
              <span className="material-icons-outlined">build</span>
            </div>
            <h3>Tools &amp; Platforms</h3>
            <ul>
              <li>Git</li>
              <li>GitHub</li>
              <li>VS Code</li>
              <li>Firebase</li>
              <li>Supabase</li>
              <li>Windows</li>
              <li>Linux Environment</li>
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
