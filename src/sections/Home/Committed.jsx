import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const Committed = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1550px] px-6 lg:px-8">

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="src/images/committed-dental.jpg"
                alt="Mill Dental professional providing dental care"
                className="h-420px w-full object-cover sm:h-500px lg:h-560px"
              />
            </div>

            {/* Experience Card */}
            <div className="absolute bottom-6 right-6 rounded-xl bg-white px-6 py-5 shadow-[0_10px_40px_rgba(0,0,0,0.12)] sm:bottom-8 sm:right-8">
              <p className="font-[Manrope] text-3xl font-extrabold text-[#0F766E]">
                10+
              </p>

              <p className="mt-1 text-sm font-medium text-[#526565]">
                Years of Experience
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-xl">

            {/* Small Heading */}
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#0F766E]">
              Committed to Excellence
            </p>

            {/* Main Heading */}
            <h2 className="mt-4 font-[Manrope] text-3xl font-extrabold leading-[1.15] tracking-[-0.035em] text-[#173B3B] sm:text-4xl lg:text-5xl">
              Dedicated to Your
              <span className="text-[#0F766E]">
                {" "}Dental Health
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-base leading-7 text-[#617171]">
              At Mill Dental, we are committed to providing exceptional
              dental care in a comfortable and welcoming environment.
              Our team combines experience, compassion, and modern
              technology to give every patient the care they deserve.
            </p>

            <p className="mt-4 text-base leading-7 text-[#617171]">
              From routine preventive care to advanced dental treatments,
              we take a personalized approach to helping you maintain a
              healthy and confident smile.
            </p>

            {/* Features */}
            <div className="mt-7 space-y-4">

              <div className="flex items-start gap-3">
                <CheckCircle2
                  size={20}
                  strokeWidth={1.8}
                  className="mt-0.5 shrink-0 text-[#0F766E]"
                />

                <p className="text-sm leading-6 text-[#526565]">
                  Patient-focused and personalized dental care
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2
                  size={20}
                  strokeWidth={1.8}
                  className="mt-0.5 shrink-0 text-[#0F766E]"
                />

                <p className="text-sm leading-6 text-[#526565]">
                  Modern technology and advanced treatment options
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2
                  size={20}
                  strokeWidth={1.8}
                  className="mt-0.5 shrink-0 text-[#0F766E]"
                />

                <p className="text-sm leading-6 text-[#526565]">
                  Experienced professionals who put your comfort first
                </p>
              </div>

            </div>

            {/* Button */}
            <a
              href="/about"
              className="mt-8 inline-flex items-center rounded-full bg-[#0F766E] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#115E59]"
            >
              Learn More About Us

              <ArrowRight
                size={17}
                strokeWidth={2}
                className="ml-2"
              />
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Committed;