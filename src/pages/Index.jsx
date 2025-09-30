import Navigation from '../components/Navigation.jsx';
import ProfileHeader from '../components/ProfileHeader.jsx';
import Projects from '../components/Projects.jsx';
import SkillsRadar from '../components/SkillsRadar.jsx';
import Experience from '../components/Experience.jsx';
import Education from '../components/Education.jsx';
import ContactInfo from '../components/ContactInfo.jsx';

const Index = () => {
  return (
    <div className="portfolio">
      <Navigation />
      <main>
        <ProfileHeader />
        <Projects />
        <SkillsRadar />
        <Experience />
        <Education />
        <ContactInfo />
      </main>
    </div>
  );
};

export default Index;
