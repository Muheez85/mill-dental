import {
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const values = [
  {
    icon: HeartHandshake,
    title: "Compassion",
    text: "We treat every patient with empathy, patience, and genuine care.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Safety",
    text: "Your safety and confidence are at the heart of everything we do.",
  },
  {
    icon: Sparkles,
    title: "Excellence",
    text: "We continuously pursue better techniques, technology, and outcomes.",
  },
  {
    icon: Users,
    title: "Patient Focus",
    text: "We listen carefully and create care plans around your individual needs.",
  },
];

const Values = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-1200px px-5 sm:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#0F766E]">
            Why Choose Us
          </p>

          <h2 className="mt-3 font-[Manrope] text-3xl font-extrabold tracking-[-0.04em] text-[#173B3B] sm:text-4xl">
            What Makes Mill Dental Different
          </h2>

          <p className="mt-4 text-sm leading-6 text-[#617171]">
            We combine professional expertise with a personal approach to
            create a dental experience you can trust.
          </p>

        </div>

        {/* Values */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="rounded-xl border border-[#E7EEEC] bg-white p-6 transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E7F3F1] text-[#0F766E]">
                  <Icon
                    size={21}
                    strokeWidth={1.8}
                  />
                </div>

                <h3 className="mt-5 font-[Manrope] text-base font-bold text-[#173B3B]">
                  {value.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-[#687777]">
                  {value.text}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Values;