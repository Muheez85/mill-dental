import {
  Smile,
  HeartPulse,
  Sparkles,
  Baby,
  ScanLine,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedDepartments = () => {
  const departments = [
    {
      icon: Smile,
      title: "General Dentistry",
      description:
        "Complete dental care for routine checkups, cleanings, fillings, and everyday oral health needs.",
    },
    {
      icon: Sparkles,
      title: "Cosmetic Dentistry",
      description:
        "Personalized treatments designed to improve the appearance of your smile and boost your confidence.",
    },
    {
      icon: HeartPulse,
      title: "Restorative Dentistry",
      description:
        "Restore damaged or missing teeth with comfortable treatments focused on function and long-term health.",
    },
    {
      icon: Baby,
      title: "Children's Dentistry",
      description:
        "Gentle, friendly dental care that helps children build healthy habits and feel comfortable at the dentist.",
    },
    {
      icon: ScanLine,
      title: "Dental Diagnostics",
      description:
        "Modern diagnostic techniques help our team identify dental concerns early and plan the right treatment.",
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1550px] px-6 lg:px-8">

        {/* Heading */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#0F766E]">
              Our Departments
            </p>

            <h2 className="mt-3 font-[Manrope] text-3xl font-extrabold leading-[1.15] tracking-[-0.035em] text-[#173B3B] sm:text-4xl lg:text-5xl">
              Specialized Care for
              <span className="text-[#0F766E]"> Every Smile</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-[#617171]">
              Explore our dental departments and discover comprehensive
              treatment options designed around your individual needs.
            </p>
          </div>

          <a
            href="/departments"
            className="inline-flex w-fit shrink-0 items-center text-sm font-semibold text-[#0F766E] transition-colors hover:text-[#115E59]"
          >
            View All Departments
            <ArrowRight
              size={17}
              strokeWidth={2}
              className="ml-2"
            />
          </a>
        </div>

        {/* Department Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {departments.map((department) => {
            const Icon = department.icon;

            return (
              <article
                key={department.title}
                className="group relative overflow-hidden rounded-2xl border border-[#E4ECEA] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#C8DDDA] hover:shadow-[0_16px_45px_rgba(23,59,59,0.08)]"
              >
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#E8F3F1] text-[#0F766E] transition-all duration-300 group-hover:bg-[#0F766E] group-hover:text-white">
                  <Icon
                    size={26}
                    strokeWidth={1.7}
                  />
                </div>

                {/* Content */}
                <h3 className="mt-6 font-[Manrope] text-xl font-bold tracking-[-0.02em] text-[#173B3B]">
                  {department.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#687777]">
                  {department.description}
                </p>

                {/* Link */}
                <Link
                  to="/departments"
                  className="mt-6 inline-flex items-center text-sm font-semibold text-[#0F766E]"
                >
                  Explore Department
                  <ArrowRight
                    size={15}
                    strokeWidth={2}
                    className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default FeaturedDepartments;