import About from './components/About';
import Contact from './components/Contact';
import CursorGlow from './components/CursorGlow';
import Experience from './components/Experience';
import FloatingShapes from './components/FloatingShapes';
import Footer from './components/Footer';
import GradientMesh from './components/GradientMesh';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Tools from './components/Tools';
import usePerformanceMode from './hooks/usePerformanceMode';
import './App.css';

function App() {
  const { allowHeavyEffects } = usePerformanceMode();

  return (
    <div className="app">
      {allowHeavyEffects && <GradientMesh />}
      {allowHeavyEffects && <CursorGlow />}
      {allowHeavyEffects && <FloatingShapes />}
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Tools />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
