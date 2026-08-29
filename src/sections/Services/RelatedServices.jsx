import { ArrowRight } from "lucide-react";

const RelatedServices = ({ services = [] }) => {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-1200px px-5 sm:px-6">

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#0F766E]">
            Explore More
          </p>

          <h2 className="mt-3 font-[Manrope] text-3xl font-extrabold tracking-[-0.04em] text-[#173B3B] sm:text-4xl">
            Related Services
          </h2>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (
            <a
              key={service.title}
              href={service.link}
              className="group flex items-center justify-between rounded-xl border border-[#E5ECEA] p-5 transition-all hover:border-[#0F766E] hover:shadow-[0_8px_25px_rgba(0,0,0,0.05)]"
            >
              <span className="font-[Manrope] text-sm font-bold text-[#173B3B]">
                {service.title}
              </span>

              <ArrowRight
                size={17}
                strokeWidth={1.8}
                className="text-[#0F766E] transition-transform group-hover:translate-x-1"
              />
            </a>
          ))}

        </div>
      </div>
    </section>
  );
};

export default RelatedServices;