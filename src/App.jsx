import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import TechStack from "./components/TechStack.jsx";
import Skills from "./components/Skills.jsx";
import About from "./components/About.jsx";
import Journey from "./components/Journey.jsx";
import Projects from "./components/Projects.jsx";
import Cta from "./components/Cta.jsx";
import Footer from "./components/Footer.jsx";
import { GradientDots } from "./components/ui/gradient-dots";

export default function App() {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main">Skip to main content</a>
      <GradientDots className="site-bg" backgroundColor="var(--light)" />
      <div className="app-content" id="main">
        <Navbar />
        <Hero />
        <TechStack />
        <Skills />
        <About />
        <Journey />
        <Projects />
        <Cta />
        <Footer />
      </div>
    </div>
  );
}
