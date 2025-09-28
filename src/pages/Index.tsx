import Navigation from "@/components/Navigation";
import ProfileHeader from "@/components/ProfileHeader";
import Projects from "@/components/Projects";
import SkillsRadar from "@/components/SkillsRadar";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import ContactInfo from "@/components/ContactInfo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
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
