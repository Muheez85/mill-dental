import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Phone,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-[#f6f9fc] pt-32 pb-16 lg:pt-40 lg:pb-24">
      <div className="mx-auto max-w-[1550px] px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left Content */}
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.12em] text-[#0F766E]">
              Welcome to Mill Dental
            </p>

            <h1 className="max-w-2xl font-[Manrope] text-4xl font-extrabold leading-[1.1] tracking-[-0.04em] text-[#173B3B] sm:text-5xl lg:text-6xl">
              Quality dental care
              <br />
              for a healthier,
              <br />
              <span className="text-[#0F766E]">
                confident smile.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#617171] sm:text-lg">
              Comprehensive dental care delivered with modern technology,
              experienced professionals, and a patient-first approach.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/appointment"
                className="inline-flex items-center rounded-full bg-[#0F766E] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#115E59]"
              >
                Book an Appointment

                <ArrowRight
                  size={17}
                  strokeWidth={2}
                  className="ml-2"
                />
              </a>

              <a
                href="/services"
                className="inline-flex items-center rounded-full border border-[#D6E1DF] bg-white px-7 py-3.5 text-sm font-semibold text-[#173B3B] transition-colors hover:border-[#0F766E] hover:text-[#0F766E]"
              >
                Explore Services
              </a>
            </div>

            {/* Quick Information */}
            <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E4F1EF] text-[#0F766E]">
                  <CalendarDays size={19} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-xs font-semibold text-[#173B3B]">
                    Appointments
                  </p>

                  <p className="mt-1 text-xs text-[#718080]">
                    Easy booking
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E4F1EF] text-[#0F766E]">
                  <Clock3 size={19} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-xs font-semibold text-[#173B3B]">
                    Opening Hours
                  </p>

                  <p className="mt-1 text-xs text-[#718080]">
                    Mon - Sat
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E4F1EF] text-[#0F766E]">
                  <Phone size={19} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-xs font-semibold text-[#173B3B]">
                    Need Help?
                  </p>

                  <p className="mt-1 text-xs text-[#718080]">
                    Contact us
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-24px">
              <img
                src="/src/images/dentist-hero.jpg"
                alt="Dentist providing professional dental care"
                className="h-450px w-full object-cover sm:h-540px lg:h-620px"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute bottom-6 left-5 rounded-2xl bg-white p-5 shadow-[0_15px_45px_rgba(0,0,0,0.12)] sm:bottom-8 sm:left-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E4F1EF] text-[#0F766E]">
                  <CalendarDays size={20} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-sm font-bold text-[#173B3B]">
                    Book your visit
                  </p>

                  <p className="mt-1 text-xs text-[#718080]">
                    We're ready to help
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

// const Hero = () => {
//   return (
//     <section className="px-6 py-40">
//       <h1 className="text-5xl font-bold">
//         Mill Dental
//       </h1>

//       <p className="mt-4">
//         Your smile is our priority.
//       </p>
//     </section>
//   );
// };

// export default Hero;