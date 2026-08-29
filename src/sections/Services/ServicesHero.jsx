import { ChevronRight } from "lucide-react";

const ServicesHero = () => {
  return (
    <section className="bg-[#f7faf9] pb-14 pt-32 sm:pb-16 sm:pt-36">
      <div className="mx-auto max-w-1200px px-5 sm:px-6">
        <div className="text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#0F766E]">
            Our Services
          </p>

          <h1 className="mt-3 font-[Manrope] text-4xl font-extrabold tracking-[-0.04em] text-[#173B3B] sm:text-5xl">
            Dental Care Designed Around You
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#617171] sm:text-[15px]">
            From preventive care to advanced dental treatments, we provide
            comprehensive services to help you maintain a healthy,
            confident smile.
          </p>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs font-medium">
            <a
              href="/"
              className="text-[#0F766E] hover:text-[#115E59]"
            >
              Home
            </a>

            <ChevronRight
              size={13}
              strokeWidth={1.8}
              className="text-[#9AA8A6]"
            />

            <span className="text-[#7A8785]">
              Services
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesHero;