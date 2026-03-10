import { AboutMe } from '../section/About';
import { ContactMe } from '../section/Contact';
import { Experience } from '../section/Experience';
import { Footer } from '../section/Footer';
import { Hero } from '../section/Hero';
import { NavBar } from '../section/NavBar';
import { Projects } from '../section/Projects';
import { Skills } from '../section/Skill';

export const LandingPage = () => {
  return (
    <div className="w-dvw">
      <NavBar />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Experience />
      <ContactMe />
      <Footer />
    </div>
  );
};
