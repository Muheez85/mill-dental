import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <section className="bg-[#f7faf9] pt-32 pb-14 sm:pt-36 sm:pb-16">
      <div className="mx-auto max-w-1200px px-5 sm:px-6">

        <div className="text-center">

          {/* Label */}
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#0F766E]">
            About Us
          </p>

          {/* Heading */}
          <h1 className="mt-3 font-[Manrope] text-4xl font-extrabold tracking-[-0.04em] text-[#173B3B] sm:text-5xl lg:text-[52px]">
            About Mill Dental
          </h1>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#617171] sm:text-[15px]">
            Discover a modern approach to dental care built around your
            comfort, confidence, and long-term oral health.
          </p>

          {/* Breadcrumb */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs font-medium">
            <Link
              to="/"
              className="text-[#0F766E] transition-colors hover:text-[#115E59]"
            >
              Home
            </Link>

            <ChevronRight
              size={13}
              strokeWidth={1.8}
              className="text-[#9AA8A6]"
            />

            <span className="text-[#7A8785]">
              About
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutHero;