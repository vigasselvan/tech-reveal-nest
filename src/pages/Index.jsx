import Navigation from '../components/Navigation.jsx';
import ProfileHeader from '../components/ProfileHeader.jsx';
import Projects from '../components/Projects.jsx';
import SkillsRadar from '../components/SkillsRadar.jsx';
import Experience from '../components/Experience.jsx';
import Education from '../components/Education.jsx';
import ContactInfo from '../components/ContactInfo.jsx';
import ScrollToTop from '../components/ScrollToTop.jsx';

const Index = () => {
  return (
    <div className="portfolio">
      <Navigation />
      <main style={{ paddingTop: '5rem' }}>
        <ProfileHeader />
        <Projects />
        <SkillsRadar />
        <Experience />
        <Education />
        <ContactInfo />
      </main>
      <ScrollToTop />
    </div>
  );
};

export default Index;
