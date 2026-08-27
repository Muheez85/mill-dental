import {
  Award,
  ShieldCheck,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

const Accreditation = () => {
  const accreditations = [
    {
      icon: Award,
      title: "Accredited Care",
      description:
        "Our practice follows recognized standards designed to maintain a high level of dental care.",
    },
    {
      icon: ShieldCheck,
      title: "Quality & Safety",
      description:
        "We prioritize patient safety, hygiene, and quality throughout every treatment.",
    },
    {
      icon: BadgeCheck,
      title: "Trusted Professionals",
      description:
        "Our experienced dental professionals are committed to delivering reliable, patient-focused care.",
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1550px] px-6 lg:px-8">

        <div className="rounded-3xl bg-[#f1f7f6] px-6 py-10 sm:px-10 lg:px-14 lg:py-12">

          <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.5fr]">

            {/* Left Content */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#0F766E]">
                Quality You Can Trust
              </p>

              <h2 className="mt-3 font-[Manrope] text-3xl font-extrabold leading-tight tracking-[-0.035em] text-[#173B3B] sm:text-4xl">
                Committed to
                <br />
                <span className="text-[#0F766E]">
                  Excellence
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-6 text-[#617171]">
                At Mill Dental, we maintain high standards of professional
                care, safety, and patient experience in everything we do.
              </p>

              <a
                href="/about"
                className="mt-6 inline-flex items-center text-sm font-semibold text-[#0F766E] transition-colors hover:text-[#115E59]"
              >
                Learn About Our Standards

                <ArrowRight
                  size={16}
                  strokeWidth={2}
                  className="ml-2"
                />
              </a>
            </div>

            {/* Accreditation Items */}
            <div className="grid gap-4 sm:grid-cols-3">

              {accreditations.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-white p-5 shadow-[0_6px_25px_rgba(23,59,59,0.05)]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E2F0EE] text-[#0F766E]">
                      <Icon
                        size={21}
                        strokeWidth={1.8}
                      />
                    </div>

                    <h3 className="mt-5 font-[Manrope] text-base font-bold text-[#173B3B]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-[#718080]">
                      {item.description}
                    </p>
                  </div>
                );
              })}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Accreditation;