import Navigation from "@/components/Navigation.jsx";
import ProfileHeader from "@/components/ProfileHeader.jsx";
import Projects from "@/components/Projects.jsx";
import SkillsRadar from "@/components/SkillsRadar.jsx";
import Experience from "@/components/Experience.jsx";
import Education from "@/components/Education.jsx";
import ContactInfo from "@/components/ContactInfo.jsx";
import "@/styles/global.css";

const Index = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#0f172a' }}>
      <Navigation />
      
      <main style={{ paddingTop: '4rem' }}>
        <section id="home">
          <ProfileHeader />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="skills">
          <SkillsRadar />
        </section>
        
        <section id="experience">
          <Experience />
        </section>
        
        <section id="education">
          <Education />
        </section>
        
        <section id="contact">
          <ContactInfo />
        </section>
      </main>
    </div>
  );
};

export default Index;
