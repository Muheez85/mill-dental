import {
  Award,
  HeartHandshake,
  Users,
  ShieldCheck,
} from "lucide-react";
import aboutImage from  "../../images/about-intro.jpg"

const AboutIntro = () => {
  const highlights = [
    {
      icon: Award,
      title: "Experienced Professionals",
      text: "Our dental team brings years of experience and a commitment to excellent patient care.",
    },
    {
      icon: HeartHandshake,
      title: "Patient-Centered Care",
      text: "We take the time to understand your needs and create treatment plans around you.",
    },
    {
      icon: Users,
      title: "A Caring Team",
      text: "From your first visit to ongoing treatment, our team is here to make you comfortable.",
    },
    {
      icon: ShieldCheck,
      title: "Safe & Modern Care",
      text: "We combine modern techniques with high standards of hygiene and patient safety.",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-1200px px-5 sm:px-6">

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={aboutImage}
                alt="Mill Dental team providing patient care"
                className="h-350px w-full object-cover sm:h-430px"
              />
            </div>

            {/* Experience Card */}
            <div className="absolute bottom-5 left-5 rounded-xl bg-white px-5 py-4 shadow-[0_10px_35px_rgba(0,0,0,0.12)] sm:left-7">
              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E7F3F1] text-[#0F766E]">
                  <Award
                    size={20}
                    strokeWidth={1.8}
                  />
                </div>

                <div>
                  <p className="font-[Manrope] text-lg font-extrabold text-[#173B3B]">
                    10+
                  </p>

                  <p className="text-[10px] text-[#687777]">
                    Years of Experience
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Content */}
          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#0F766E]">
              Who We Are
            </p>

            <h2 className="mt-3 font-[Manrope] text-3xl font-extrabold leading-[1.12] tracking-[-0.04em] text-[#173B3B] sm:text-4xl">
              Modern Dentistry With
              <span className="text-[#0F766E]">
                {" "}a Human Touch
              </span>
            </h2>

            <p className="mt-5 text-sm leading-6 text-[#617171]">
              At Mill Dental, we believe dental care should be more than
              simply treating a problem. It should be about helping you feel
              comfortable, confident, and cared for throughout your entire
              dental journey.
            </p>

            <p className="mt-3 text-sm leading-6 text-[#617171]">
              Our team combines professional expertise, modern dental
              technology, and a personalized approach to deliver quality care
              for patients of all ages.
            </p>

            {/* Highlights */}
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex gap-3"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E7F3F1] text-[#0F766E]">
                      <Icon
                        size={19}
                        strokeWidth={1.8}
                      />
                    </div>

                    <div>
                      <h3 className="font-[Manrope] text-sm font-bold text-[#173B3B]">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-[#687777]">
                        {item.text}
                      </p>
                    </div>
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

export default AboutIntro;