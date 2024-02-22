// Import React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Particle Component for Background
import ParticleComponent from "./ParticleBg/ParticleComponent";

// Import Created Components
import NavBar from "./Components/NavBar";
import TitlePage from "./Components/Pages/TitlePage";

// Resume Page Components to be deleted
import SkillsPage from "./Components/Pages/SkillsPage";
import EducationPage from "./Components/Pages/EducationPage"
import ExperiencePage from "./Components/Pages/ExperiencePage";

// Single Resume Page
import ResumePage from "./Components/Pages/ResumePage/ResumePage";

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
