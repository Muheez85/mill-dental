import {
  Phone,
  Clock3,
  MapPin,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";


import emergencyImg from "../../images/emergency-dental.jpg"

const Emergency = () => {
  return (
    <section className="bg-[#f5f9f8] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-1200px px-5 sm:px-6">

        <div className="overflow-hidden rounded-2xl bg-[#0F766E]">
          <div className="grid lg:grid-cols-[1fr_0.9fr]">

            {/* Left Content */}
            <div className="px-7 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">

              {/* Label */}
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#0F766E]">
                  <ShieldCheck
                    size={14}
                    strokeWidth={2}
                  />
                </span>

                <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-white">
                  Dental Emergency Care
                </span>
              </div>

              {/* Heading */}
              <h2 className="mt-6 max-w-lg font-[Manrope] text-3xl font-extrabold leading-[1.1] tracking-[-0.04em] text-white sm:text-4xl lg:text-[44px]">
                Need Urgent
                <br />
                Dental Care?
              </h2>

              {/* Description */}
              <p className="mt-5 max-w-lg text-sm leading-6 text-white/80 sm:text-[15px]">
                Dental emergencies can happen unexpectedly. Our team is here
                to help you get prompt, professional care when you need it
                most.
              </p>

              {/* Contact Details */}
              <div className="mt-7 space-y-4">

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                    <Phone
                      size={18}
                      strokeWidth={1.8}
                    />
                  </div>

                  <div>
                    <p className="text-[11px] text-white/60">
                      Emergency Line
                    </p>

                    <a
                      href="tel:+2348000000000"
                      className="text-sm font-semibold text-white"
                    >
                      +234 800 000 0000
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                    <Clock3
                      size={18}
                      strokeWidth={1.8}
                    />
                  </div>

                  <div>
                    <p className="text-[11px] text-white/60">
                      Emergency Hours
                    </p>

                    <p className="text-sm font-semibold text-white">
                      Available 24/7
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                    <MapPin
                      size={18}
                      strokeWidth={1.8}
                    />
                  </div>

                  <div>
                    <p className="text-[11px] text-white/60">
                      Visit Our Clinic
                    </p>

                    <p className="text-sm font-semibold text-white">
                      Mill Dental Clinic
                    </p>
                  </div>
                </div>

              </div>

              {/* Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                <a
                  href="tel:+2348000000000"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0F766E] transition-colors hover:bg-[#EAF5F3]"
                >
                  <Phone
                    size={16}
                    strokeWidth={2}
                    className="mr-2"
                  />

                  Call Emergency Line
                </a>

                <Link
                  to="/appointment"
                  className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Book Appointment

                  <ArrowRight
                    size={16}
                    strokeWidth={2}
                    className="ml-2"
                  />
                </Link>

              </div>
            </div>

            {/* Right Image */}
            <div className="relative min-h-350px lg:min-h-full">

              <img
                src={emergencyImg}
                alt="Dental professional providing emergency care"
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-[#173B3B]/20" />

              {/* Floating Emergency Badge */}
              <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-white/95 p-5 shadow-[0_10px_35px_rgba(0,0,0,0.15)] backdrop-blur-sm sm:left-auto sm:max-w-280px">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E6F2F0] text-[#0F766E]">
                    <Phone
                      size={20}
                      strokeWidth={1.8}
                    />
                  </div>

                  <div>
                    <p className="text-[11px] font-medium text-[#687777]">
                      Emergency Assistance
                    </p>

                    <p className="mt-0.5 font-[Manrope] text-sm font-bold text-[#173B3B]">
                      We're here when you need us
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Emergency;