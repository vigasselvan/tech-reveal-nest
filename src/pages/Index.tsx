import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import SkillsRadar from "@/components/SkillsRadar";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <section id="home">
          <Hero />
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
          <ContactForm />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
