import ServiceIntro from "../sections/Services/ServiceIntro";
import ServiceFeatures from "../sections/Services/ServiceFeatures";
import RelatedServices from "../sections/Services/RelatedServices";
import ServiceCTA from "../sections/Services/ServiceCTA";

import  restorativeImg from "../images/restorative-dentistry.jpg"


const RestorativeDentistry = () => {
  const features = [
    "Damaged tooth restoration",
    "Dental crowns",
    "Dental bridges",
    "Tooth-colored fillings",
    "Broken tooth treatment",
    "Functional smile restoration",
  ];
  const related = [
    {
      title: "General Dentistry",
      link: "/services/general-dentistry",
    },
    {
      title: "Dental Implants",
      link: "/services/dental-implants",
    },
    {
      title: "Cosmetic Dentistry",
      link: "/services/cosmetic-dentistry",
    },
  ];

  return (
    <main>

      <ServiceIntro
        eyebrow="Restorative Dentistry"
        title="Restore Your Smile and Oral Function"
        description="Our restorative treatments help repair damaged or weakened teeth and restore the health, strength, and function of your smile."
        image={restorativeImg}
        reverse
      />

      <ServiceFeatures
        title="Restorative Care"
        description="From minor repairs to more comprehensive restoration, we develop treatment plans based on your individual needs."
        features={features}
      />

      <RelatedServices services={related} />

      <ServiceCTA />

    </main>
  );
};

export default RestorativeDentistry;