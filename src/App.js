// Import Particle Component for Background
import ParticleComponent from "./ParticleBg/ParticleComponent";

// Import Created Components
import NavBar from "./ContentPages/NavBar";
import TitlePage from "./ContentPages/TitlePage";
import IntroductionPage from "./ContentPages/IntroductionPage";
import SkillsPage from "./ContentPages/SkillsPage";
import EducationPage from "./ContentPages/EducationPage"
import ExperiencePage from "./ContentPages/ExperiencePage";
import ProjectsPage from "./ContentPages/ProjectPage_v2/ProjectsPage";
// import ProjectList from "./ContentPages/ProjectPage/ProjectList"
import ContactMe from "./ContentPages/ContactMe";


function App() {
  return (
    <div className='relative'>
      <ParticleComponent />
      <div className='relative'>

        <NavBar />
        <TitlePage />
        <IntroductionPage />
        <SkillsPage />
        <EducationPage />
        <ExperiencePage />
        <ProjectsPage />
        {/* <ProjectList /> */}
        <ContactMe />

      </div>
    </div>
  );
}

export default App;
