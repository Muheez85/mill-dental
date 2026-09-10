import {
  CalendarDays,
  Phone,
  ArrowRight,
} from "lucide-react";


import { Link } from "react-router-dom";

const AboutCTA = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-1200px px-5 sm:px-6">

        <div className="relative overflow-hidden rounded-2xl bg-[#0F766E] px-7 py-10 sm:px-10 lg:px-14 lg:py-12">

          {/* Decorative circles */}
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/10" />

          <div className="absolute -bottom-24 right-20 h-56 w-56 rounded-full border border-white/10" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            {/* Text */}
            <div className="max-w-2xl">

              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/65">
                Start Your Dental Journey
              </p>

              <h2 className="mt-3 font-[Manrope] text-3xl font-extrabold leading-tight tracking-[-0.035em] text-white sm:text-4xl">
                Ready to Take Better Care
                <br className="hidden sm:block" />
                of Your Smile?
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-white/75">
                Whether you need a routine check-up or a complete smile
                transformation, our team is ready to help.
              </p>

            </div>

            {/* Buttons */}
            <div className="relative flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">

              <Link
                to="/appointment"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0F766E] transition-colors hover:bg-[#EAF5F3]"
              >
                <CalendarDays
                  size={16}
                  strokeWidth={1.8}
                  className="mr-2"
                />

                Book an Appointment
              </Link>

              <a
                href="tel:+2348000000000"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Phone
                  size={16}
                  strokeWidth={1.8}
                  className="mr-2"
                />

                Call Us

                <ArrowRight
                  size={15}
                  strokeWidth={1.8}
                  className="ml-2"
                />
              </a>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;