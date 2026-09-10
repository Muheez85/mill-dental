import {
  Stethoscope,
  Sparkles,
  ShieldCheck,
  Smile,
  Baby,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Stethoscope,
    title: "General Dentistry",
    description:
      "Routine dental care, examinations, cleanings, fillings, and preventive treatments for long-term oral health.",
    link: "/services/general-dentistry",
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    description:
      "Enhance the appearance of your smile with personalized cosmetic treatments designed around your goals.",
    link: "/services/cosmetic-dentistry",
  },
  {
    icon: ShieldCheck,
    title: "Restorative Dentistry",
    description:
      "Restore damaged or missing teeth and improve the function, health, and appearance of your smile.",
    link: "/services/restorative-dentistry",
  },
  {
    icon: Smile,
    title: "Dental Implants",
    description:
      "Modern tooth replacement solutions designed to restore confidence, comfort, and natural function.",
    link: "/services/dental-implants",
  },
  {
    icon: Baby,
    title: "Pediatric Dentistry",
    description:
      "Gentle and friendly dental care designed to help children develop healthy habits from an early age.",
    link: "/services/pediatric-dentistry",
  },
];

const ServiceGrid = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-1200px px-5 sm:px-6">

        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#0F766E]">
            What We Offer
          </p>

          <h2 className="mt-3 font-[Manrope] text-3xl font-extrabold tracking-[-0.04em] text-[#173B3B] sm:text-4xl">
            Comprehensive Dental Services
          </h2>

          <p className="mt-4 text-sm leading-6 text-[#617171]">
            Professional dental care delivered with modern techniques and
            a patient-first approach.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group rounded-2xl border border-[#E5ECEA] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(0,0,0,0.07)]"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E7F3F1] text-[#0F766E]">
                  <Icon
                    size={22}
                    strokeWidth={1.8}
                  />
                </div>

                <h3 className="mt-6 font-[Manrope] text-lg font-bold text-[#173B3B]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#687777]">
                  {service.description}
                </p>

                <Link
                  to={service.link}
                  className="mt-6 inline-flex items-center text-sm font-semibold text-[#0F766E]"
                >
                  Learn More

                  <ArrowRight
                    size={15}
                    strokeWidth={1.8}
                    className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>

              </article>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;