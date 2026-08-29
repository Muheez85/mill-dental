import ServicesHero from "../sections/Services/ServicesHero";
import ServiceGrid from "../sections/Services/ServiceGrid";
import ServiceIntro from "../sections/Services/ServiceIntro";
import ServiceCTA from "../sections/Services/ServiceCTA";
import ServiceFeatures from "../sections/Services/ServiceFeatures";
import RelatedServices from "../sections/Services/RelatedServices";

const Services = () => {
  return (
    <main>
      <ServicesHero />
      <ServiceIntro />
      <ServiceFeatures />
      <ServiceGrid />
      <RelatedServices />
      <ServiceCTA />
    </main>
  );
};

export default Services;