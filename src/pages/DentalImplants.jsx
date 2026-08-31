import ServiceIntro from "../sections/Services/ServiceIntro";
import ServiceFeatures from "../sections/Services/ServiceFeatures";
import RelatedServices from "../sections/Services/RelatedServices";
import ServiceCTA from "../sections/Services/ServiceCTA";

const DentalImplants = () => {
  const features = [
    "Implant consultations",
    "Tooth replacement planning",
    "Single-tooth implants",
    "Implant-supported restorations",
    "Personalized treatment planning",
    "Long-term oral health support",
  ];

  const related = [
    {
      title: "Restorative Dentistry",
      link: "/services/restorative-dentistry",
    },
    {
      title: "General Dentistry",
      link: "/services/general-dentistry",
    },
    {
      title: "Cosmetic Dentistry",
      link: "/services/cosmetic-dentistry",
    },
  ];

  return (
    <main>

      <ServiceIntro
        eyebrow="Dental Implants"
        title="A Strong, Natural-Looking Replacement"
        description="Dental implants provide a modern solution for replacing missing teeth and restoring confidence, comfort, and everyday function."
        image="/src/images/dental-implant.jpg"
      />

      <ServiceFeatures
        title="Implant Care"
        description="We guide you through every stage of your implant treatment with careful planning and personalized care."
        features={features}
      />

      <RelatedServices services={related} />

      <ServiceCTA />

    </main>
  );
};

export default DentalImplants;