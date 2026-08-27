import Hero from "../sections/Home/Hero";
import Committed from "../sections/Home/Committed";
import Accreditation from "../sections/Home/Accreditation";
import FeaturedDepartments from "../sections/Home/FeaturedDepartments";
import WhyChooseUs from "../sections/Home/WhyChooseUs";
import FeaturedServices from "../sections/Home/FeaturedServices";
import FindDoctor from "../sections/Home/FindDoctor";
import HealthPriority from "../sections/Home/HealthPriority";
import Emergency from "../sections/Home/Emergency";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <main>
      <Hero />
      <Committed />
      <Accreditation />
      <FeaturedDepartments /> 
      < WhyChooseUs />
      < FeaturedServices />
      <FindDoctor />
      <HealthPriority />
    <Emergency />
    <Footer /> 
    </main>
  );
};

export default Home;