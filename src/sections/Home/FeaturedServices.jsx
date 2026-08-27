import {
  Stethoscope,
  Sparkles,
  CirclePlus,
  Baby,
  ArrowRight,
} from "lucide-react";

const FeaturedServices = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "General Dentistry",
      description:
        "Routine examinations, cleanings, fillings, and preventive care for your everyday dental health.",
    },
    {
      icon: Sparkles,
      title: "Teeth Whitening",
      description:
        "Professional whitening treatments to help you achieve a brighter, more confident smile.",
    },
    {
      icon: CirclePlus,
      title: "Dental Implants",
      description:
        "Natural-looking tooth replacement solutions designed to restore your smile and oral function.",
    },
    {
      icon: Baby,
      title: "Pediatric Dentistry",
      description:
        "Gentle and friendly dental care designed to make every child's visit comfortable and positive.",
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1550px] px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#0F766E]">
              Featured Services
            </p>

            <h2 className="mt-3 font-[Manrope] text-3xl font-extrabold leading-[1.12] tracking-[-0.04em] text-[#173B3B] sm:text-4xl lg:text-5xl">
              Comprehensive Care for
              <span className="text-[#0F766E]"> Your Smile</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-[#617171]">
              From preventive care to advanced treatments, our services are
              designed to keep your smile healthy, comfortable, and confident.
            </p>
          </div>

          <a
            href="/services"
            className="inline-flex items-center text-sm font-semibold text-[#0F766E] transition-colors hover:text-[#115E59]"
          >
            View All Services
            <ArrowRight
              size={17}
              strokeWidth={2}
              className="ml-2"
            />
          </a>
        </div>

        {/* Services */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group rounded-2xl border border-[#E3EBE9] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(23,59,59,0.08)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#E7F2F0] text-[#0F766E]">
                  <Icon
                    size={26}
                    strokeWidth={1.7}
                  />
                </div>

                <h3 className="mt-6 font-[Manrope] text-xl font-bold tracking-[-0.02em] text-[#173B3B]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#687777]">
                  {service.description}
                </p>

                <a
                  href="/services"
                  className="mt-6 inline-flex items-center text-sm font-semibold text-[#0F766E]"
                >
                  Learn More
                  <ArrowRight
                    size={15}
                    strokeWidth={2}
                    className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </a>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FeaturedServices;