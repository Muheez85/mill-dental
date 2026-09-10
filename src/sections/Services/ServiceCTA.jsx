import {
  CalendarDays,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const ServiceCTA = () => {
  return (
    <section className="bg-white px-5 pb-16 sm:px-6 sm:pb-20">
      <div className="mx-auto max-w-1200px">

        <div className="overflow-hidden rounded-2xl bg-[#0F766E] px-7 py-10 sm:px-10 lg:px-14 lg:py-12">

          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-2xl">

              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/65">
                Your Smile Matters
              </p>

              <h2 className="mt-3 font-[Manrope] text-3xl font-extrabold tracking-[-0.035em] text-white sm:text-4xl">
                Ready to Take the Next Step?
              </h2>

              <p className="mt-4 text-sm leading-6 text-white/75">
                Schedule an appointment with our dental team and let us help
                you choose the right care for your smile.
              </p>

            </div>

            <Link
              to="/appointment"
              className="inline-flex w-fit shrink-0 items-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#0F766E] transition-colors hover:bg-[#EAF5F3]"
            >
              <CalendarDays
                size={17}
                strokeWidth={1.8}
                className="mr-2"
              />

              Book an Appointment

              <ArrowRight
                size={15}
                strokeWidth={1.8}
                className="ml-2"
              />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ServiceCTA;