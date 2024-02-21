// Import React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Particle Component for Background
import ParticleComponent from "./ParticleBg/ParticleComponent";

// Import Created Components
import NavBar from "./ContentPages/NavBar";
import TitlePage from "./ContentPages/TitlePage";

// Resume Page Components to be deleted
import SkillsPage from "./ContentPages/SkillsPage";
import EducationPage from "./ContentPages/EducationPage"
import ExperiencePage from "./ContentPages/ExperiencePage";

// Single Resume Page
import ResumePage from "./ContentPages/ResumePage/ResumePage";

import ProjectsPage from "./ContentPages/ProjectPage/ProjectsPage";
import ContactMe from "./ContentPages/ContactMe";


function App() {
  return (
    <Router >
      <div className='relative'>
        <ParticleComponent />
        <div className='relative'>
          <NavBar />
          <Routes>
            <Route path="/" index element={<TitlePage/>} />
            <Route path="/resume" element={<ResumePage />} />
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
