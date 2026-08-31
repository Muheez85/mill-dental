import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import GeneralDentistry from "./pages/GeneralDentistry";
import CosmeticDentistry from "./pages/CosmeticDentistry";
import RestorativeDentistry from "./pages/RestorativeDentistry";
import DentalImplants from "./pages/DentalImplants";
import PediatricDentistry from "./pages/PediatricDentistry";

import Team from "./pages/Team";
import FAQ from "./pages/FAQ";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials.jsx";
import Terms from "./pages/Terms.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";

import Contact from "./pages/Contact.jsx";


import Appointment from "./pages/Appointment.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/services/general-dentistry"
          element={<GeneralDentistry />}
        />
        <Route
          path="/services/cosmetic-dentistry"
          element={<CosmeticDentistry />}
        />

        <Route
          path="/services/restorative-dentistry"
          element={<RestorativeDentistry />}
        />
        <Route
          path="/services/dental-implants"
          element={<DentalImplants />}
        />
        <Route
          path="/services/pediatric-dentistry"
          element={<PediatricDentistry />}
        />
         <Route path="/team" element={<Team />} />
         <Route path="/faq" element={<FAQ />} />
         <Route path="/gallery" element={<Gallery/>} />
         <Route path="/testimonials" element={<Testimonials />} />   
         <Route path="/privacy" element={<PrivacyPolicy />} />       
         <Route path="/terms" element={<Terms/>} />


          
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;