import ServiceIntro from "../sections/Services/ServiceIntro";
import ServiceFeatures from "../sections/Services/ServiceFeatures";
import RelatedServices from "../sections/Services/RelatedServices";
import ServiceCTA from "../sections/Services/ServiceCTA";
import cosmeticImg from "../images/cosmetic-dentistry.jpg";



import cosmetic from "../images/cosmetic-dentistry.jpg"
const CosmeticDentistry = () => {
  const features = [
    "Smile assessments",
    "Teeth whitening",
    "Cosmetic restorations",
    "Smile enhancement treatments",
    "Personalized cosmetic planning",
    "Natural-looking results",
  ];

  const related = [
    {
      title: "General Dentistry",
      link: "/services/general-dentistry",
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
        eyebrow="Cosmetic Dentistry"
        title="A Smile You Can Feel Confident About"
        description="Our cosmetic dentistry treatments are designed to enhance the appearance of your smile while keeping your results natural and personalized."
        image={cosmeticImg}
      />

      <ServiceFeatures
        title="Cosmetic Treatment Options"
        description="We combine modern techniques with careful planning to create a smile that suits you."
        features={features}
      />

      <RelatedServices services={related} />

      <ServiceCTA />

    </main>
  );
};

export default CosmeticDentistry;
