import {
  ShieldCheck,
  UserRoundCheck,
  Microscope,
  HeartHandshake,
} from "lucide-react";


import whychooseImg from "../../images/why-choose-us.jpg"


const WhyChooseUs = () => {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "Trusted Dental Care",
      description:
        "We provide dependable dental care with your comfort, safety, and long-term oral health in mind.",
    },
    {
      icon: UserRoundCheck,
      title: "Experienced Professionals",
      description:
        "Our dental team combines experience and modern techniques to deliver personalized treatment.",
    },
    {
      icon: Microscope,
      title: "Modern Technology",
      description:
        "We use modern dental technology to support accurate diagnosis and effective treatment.",
    },
    {
      icon: HeartHandshake,
      title: "Patient-Centered Approach",
      description:
        "Every treatment is planned around your needs, concerns, comfort, and individual goals.",
    },
  ];

  return (
    <section className="bg-[#f7faf9] py-20 lg:py-28">
      <div className="mx-auto max-w-[1550px] px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

          {/* Left */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#0F766E]">
              Why Choose Mill Dental
            </p>

            <h2 className="mt-4 max-w-xl font-[Manrope] text-3xl font-extrabold leading-[1.12] tracking-[-0.04em] text-[#173B3B] sm:text-4xl lg:text-5xl">
              Dental Care Built Around
              <span className="text-[#0F766E]">
                {" "}You
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-[#617171]">
              Choosing the right dental practice is about more than
              treatment. At Mill Dental, we combine professional expertise,
              modern technology, and genuine care to create a comfortable
              experience for every patient.
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl">
              <img
                src={whychooseImg}
                alt="Dental professional caring for a patient"
                className="h-280px w-full object-cover sm:h-340px"
              />
            </div>
          </div>

          {/* Right */}
          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <article
                  key={reason.title}
                  className="rounded-2xl border border-[#E1EAE7] bg-white p-7"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E5F1EF] text-[#0F766E]">
                    <Icon size={25} strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-6 font-[Manrope] text-lg font-bold text-[#173B3B]">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#687777]">
                    {reason.description}
                  </p>
                </article>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;