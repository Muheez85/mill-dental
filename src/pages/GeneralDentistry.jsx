import ServiceIntro from "../sections/Services/ServiceIntro";
import ServiceFeatures from "../sections/Services/ServiceFeatures";
import RelatedServices from "../sections/Services/RelatedServices";
import ServiceCTA from "../sections/Services/ServiceCTA";

import generaImg from "../images/general-dentistry.jpg"

const GeneralDentistry = () => {
  const features = [
    "Comprehensive dental examinations",
    "Professional dental cleaning",
    "Routine oral health check-ups",
    "Dental fillings",
    "Preventive dental care",
    "Oral health education",
  ];

  const related = [
    {
      title: "Cosmetic Dentistry",
      link: "/services/cosmetic-dentistry",
    },
    {
      title: "Restorative Dentistry",
      link: "/services/restorative-dentistry",
    },
    {
      title: "Dental Implants",
      link: "/services/dental-implants",
    },
  ];

  return (
    <main>

      <ServiceIntro
        eyebrow="General Dentistry"
        title="Complete Care for a Healthy Smile"
        description="Our general dentistry services focus on keeping your teeth and gums healthy through preventive care, regular examinations, and personalized treatments."
        image={generaImg}
      />

      <ServiceFeatures
        title="General Dental Care"
        description="We provide essential dental treatments designed to protect your oral health and prevent future problems."
        features={features}
      />

      <RelatedServices services={related} />

      <ServiceCTA />

    </main>
  );
};

export default GeneralDentistry;