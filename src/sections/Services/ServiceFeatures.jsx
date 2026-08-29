import {
  CheckCircle2,
} from "lucide-react";

const ServiceFeatures = ({
  title = "What We Provide",
  description = "",
  features = [],
}) => {
  return (
    <section className="bg-[#f7faf9] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-1200px px-5 sm:px-6">

        <div className="max-w-2xl">

          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#0F766E]">
            Our Approach
          </p>

          <h2 className="mt-3 font-[Manrope] text-3xl font-extrabold tracking-[-0.04em] text-[#173B3B] sm:text-4xl">
            {title}
          </h2>

          {description && (
            <p className="mt-4 text-sm leading-6 text-[#617171]">
              {description}
            </p>
          )}

        </div>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-start gap-3 rounded-xl bg-white p-5"
            >
              <CheckCircle2
                size={19}
                strokeWidth={1.8}
                className="mt-0.5 shrink-0 text-[#0F766E]"
              />

              <span className="text-sm font-medium leading-6 text-[#526565]">
                {feature}
              </span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ServiceFeatures;
