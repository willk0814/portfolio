// Import React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Particle Component for Background
import ParticleComponent from "./Components/ParticleBg/ParticleComponent";

// Import NavBar Component
import NavBar from "./Components/NavBar";

// Import Created Page Components
import TitlePage from "./Components/Pages/TitlePage";
import SkillsPage from "./Components/Pages/SkillsPage";
import EducationPage from "./Components/Pages/EducationPage"
import ExperiencePage from "./Components/Pages/ExperiencePage";
import ProjectsPage from "./Components/Pages/ProjectPage/ProjectsPage";
import ContactMe from "./Components/Pages/ContactMe";


function App() {
  return (
    <Router >
      <div className='relative'>
        <ParticleComponent />
        <div className='relative'>
          <NavBar />
          <Routes>
            <Route path="/" index element={<TitlePage/>} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactMe />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
