import ServiceIntro from "../sections/Services/ServiceIntro";
import ServiceFeatures from "../sections/Services/ServiceFeatures";
import RelatedServices from "../sections/Services/RelatedServices";
import ServiceCTA from "../sections/Services/ServiceCTA";
import pediatricImg from "../images/pediatric-dental.jpg";


const PediatricDentistry = () => {
  const features = [
    "Children's dental examinations",
    "Preventive dental care",
    "Dental cleaning",
    "Cavity prevention",
    "Oral health education",
    "Friendly dental visits",
  ];

  const related = [
    {
      title: "General Dentistry",
      link: "/services/general-dentistry",
    },
    {
      title: "Cosmetic Dentistry",
      link: "/services/cosmetic-dentistry",
    },
    {
      title: "Restorative Dentistry",
      link: "/services/restorative-dentistry",
    },
  ];

  return (
    <main>

      <ServiceIntro
        eyebrow="Pediatric Dentistry"
        title="Gentle Dental Care for Growing Smiles"
        description="We create a friendly and comfortable environment where children can develop positive dental habits and enjoy healthier smiles."
        image={pediatricImg}
        reverse
      />

      <ServiceFeatures
        title="Children's Dental Care"
        description="Our approach focuses on prevention, education, comfort, and building healthy habits from an early age."
        features={features}
      />

      <RelatedServices services={related} />

      <ServiceCTA />

    </main>
  );
};

export default PediatricDentistry;
