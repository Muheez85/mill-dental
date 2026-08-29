import AboutHero from "../sections/About/AboutHero";
import AboutIntro from "../sections/About/AboutIntro";
import MissionVision from "../sections/About/MissionVision";
import Values from "../sections/About/Values";
import Team from "../sections/About/Team";
import AboutCTA from "../sections/About/AboutCTA";
// import Footer from "../components/Footer";

const About = () => {
  return (
    <main>
      <AboutHero />
      <AboutIntro />
      <MissionVision />
      <Values />
      <Team />
      <AboutCTA />
      {/* <Footer /> */}
    </main>
  );
};

export default About;