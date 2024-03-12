// Import React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Background
// import ParticleComponent from "./Components/Backgrounds/ParticleBg/ParticleComponent";
import BackgroundContainer from "./Components/Backgrounds/PictureBg/BackgroundContainer";

// Import NavBar Component
import NavBar from "./Components/NavBar/NavBar";

// Import Created Page Components
import TitlePage from "./Components/Pages/TitlePage";
import SkillsPage from "./Components/Pages/SkillsPage";
import EducationPage from "./Components/Pages/EducationPage"
import ExperiencePage from "./Components/Pages/ExperiencePage";
import ContactMe from "./Components/Pages/ContactMe";

// Import Project Page with animation carddsd
import ProjectPage from "./Components/Pages/Projects/ProjectPage"

// Import Analytics from Vercel
import { Analytics } from "@vercel/analytics/react"


function App() {
  return (
    <Router>
      <Analytics />
      <BackgroundContainer />
      <div className='relative'>
        
          <NavBar />
          <Routes>
            <Route path="/" index element={<TitlePage/>} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/contact" element={<ContactMe />} />
          </Routes>
        
      </div>
    </Router>
  );
}

export default App;
