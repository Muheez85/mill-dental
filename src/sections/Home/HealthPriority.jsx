import {
  HeartPulse,
  ShieldCheck,
  Clock3,
  ArrowRight,
} from "lucide-react";
import piorityImg from "../../images/health-piority.jpg"
import { Link } from "react-router-dom";


const HealthPriority = () => {
  const features = [
    {
      icon: HeartPulse,
      title: "Personalized Care",
      text: "Every treatment plan is tailored to your individual needs and goals.",
    },
    {
      icon: ShieldCheck,
      title: "Quality & Safety",
      text: "We maintain high standards of hygiene, safety, and professional care.",
    },
    {
      icon: Clock3,
      title: "Care When You Need It",
      text: "Our team is committed to making quality dental care accessible and convenient.",
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-1200px px-5 sm:px-6">

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={piorityImg}
                alt="Dentist caring for a patient"
                className="h-360px w-full object-cover sm:h-430px"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-5 right-5 rounded-xl bg-white px-5 py-4 shadow-[0_10px_35px_rgba(0,0,0,0.12)] sm:right-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E5F1EF] text-[#0F766E]">
                  <HeartPulse
                    size={19}
                    strokeWidth={1.8}
                  />
                </div>

                <div>
                  <p className="text-[10px] font-medium uppercase tracking-wide text-[#718080]">
                    Patient First
                  </p>

                  <p className="mt-0.5 font-[Manrope] text-sm font-bold text-[#173B3B]">
                    Your Smile Matters
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#0F766E]">
              Your Health Matters
            </p>

            <h2 className="mt-3 font-[Manrope] text-3xl font-extrabold leading-[1.12] tracking-[-0.04em] text-[#173B3B] sm:text-4xl lg:text-[44px]">
              Your Health Is
              <span className="text-[#0F766E]">
                {" "}Our Priority
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-6 text-[#617171]">
              At Mill Dental, we believe exceptional dental care begins with
              listening to you. Our team combines expertise, modern technology,
              and a compassionate approach to make every visit comfortable
              and worthwhile.
            </p>

            {/* Features */}
            <div className="mt-7 space-y-5">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="flex gap-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E8F3F1] text-[#0F766E]">
                      <Icon
                        size={20}
                        strokeWidth={1.8}
                      />
                    </div>

                    <div>
                      <h3 className="font-[Manrope] text-base font-bold text-[#173B3B]">
                        {feature.title}
                      </h3>

                      <p className="mt-1 text-sm leading-5 text-[#687777]">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <Link
              href="/about"
              className="mt-8 inline-flex items-center rounded-full bg-[#0F766E] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#115E59]"
            >
              Learn More About Us

              <ArrowRight
                size={16}
                strokeWidth={2}
                className="ml-2"
              />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HealthPriority;