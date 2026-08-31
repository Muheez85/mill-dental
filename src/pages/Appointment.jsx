import {
  CalendarDays,
  Clock3,
  MapPin,
  Phone,
  UserRound,
  Mail,
  Stethoscope,
} from "lucide-react";

const Appointment = () => {
  return (
    <main className="min-h-screen bg-[#F8FBFA]">
      {/* =====================================================
          PAGE HERO
      ====================================================== */}
      <section className="px-4 pb-14 pt-36 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.18em] text-[#0F766E]">
              Book Your Visit
            </span>

            <h1 className="font-[Manrope] text-4xl font-extrabold tracking-[-0.04em] text-[#173B3B] sm:text-5xl lg:text-6xl">
              Schedule an appointment
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#687777] sm:text-lg">
              Take the first step towards a healthier smile. Choose your
              preferred treatment and appointment time, and our team will get
              back to you to confirm your visit.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          APPOINTMENT SECTION
      ====================================================== */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          {/* =================================================
              LEFT INFORMATION
          ================================================== */}
          <div className="rounded-2rem bg-[#173B3B] p-7 sm:p-9 lg:p-10">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#8ED1C4]">
              Mill Dental
            </span>

            <h2 className="mt-4 font-[Manrope] text-2xl font-extrabold tracking-[-0.03em] text-white sm:text-3xl">
              Your smile deserves great care.
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#C5D5D2]">
              Tell us what you need and when you'd like to visit. Our team
              will review your request and contact you to confirm your
              appointment.
            </p>

            {/* CONTACT DETAILS */}
            <div className="mt-9 space-y-6">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#8ED1C4]">
                  <CalendarDays size={20} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#8ED1C4]">
                    Appointments
                  </p>

                  <p className="mt-1 text-sm leading-6 text-white">
                    Monday – Friday
                    <br />
                    8:00 AM – 5:00 PM
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#8ED1C4]">
                  <Clock3 size={20} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#8ED1C4]">
                    Saturday
                  </p>

                  <p className="mt-1 text-sm leading-6 text-white">
                    9:00 AM – 2:00 PM
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#8ED1C4]">
                  <Phone size={20} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#8ED1C4]">
                    Call Us
                  </p>

                  <a
                    href="tel:+2348000000000"
                    className="mt-1 block text-sm text-white transition-colors hover:text-[#8ED1C4]"
                  >
                    +234 800 000 0000
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#8ED1C4]">
                  <MapPin size={20} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#8ED1C4]">
                    Location
                  </p>

                  <p className="mt-1 text-sm leading-6 text-white">
                    24 Mill Street
                    <br />
                    City Centre
                  </p>
                </div>
              </div>
            </div>

            {/* SMALL NOTE */}
            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-start gap-3">
                <Stethoscope
                  size={19}
                  className="mt-0.5 shrink-0 text-[#8ED1C4]"
                  strokeWidth={1.8}
                />

                <p className="text-xs leading-6 text-[#C5D5D2]">
                  Appointment requests are subject to availability. Our team
                  will contact you to confirm your selected date and time.
                </p>
              </div>
            </div>
          </div>

          {/* =================================================
              APPOINTMENT FORM
          ================================================== */}
          <div className="rounded-2rem border border-[#E4ECE9] bg-white p-7 shadow-[0_8px_30px_rgba(0,0,0,0.03)] sm:p-9 lg:p-10">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#0F766E]">
                Appointment Request
              </span>

              <h2 className="mt-3 font-[Manrope] text-2xl font-extrabold tracking-[-0.03em] text-[#173B3B] sm:text-3xl">
                Tell us about your visit
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#687777]">
                Complete the form below and we'll contact you to confirm your
                appointment.
              </p>
            </div>

            <form className="mt-8 space-y-5">
              {/* NAME + EMAIL */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-sm font-semibold text-[#173B3B]"
                  >
                    Full Name
                  </label>

                  <div className="relative">
                    <UserRound
                      size={17}
                      strokeWidth={1.8}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#91A09D]"
                    />

                    <input
                      id="fullName"
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-xl border border-[#DDE7E4] bg-[#FAFCFB] py-3.5 pl-11 pr-4 text-sm text-[#173B3B] outline-none transition-all placeholder:text-[#9AA7A5] focus:border-[#0F766E] focus:ring-4 focus:ring-[#0F766E]/10"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-[#173B3B]"
                  >
                    Email Address
                  </label>

                  <div className="relative">
                    <Mail
                      size={17}
                      strokeWidth={1.8}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#91A09D]"
                    />

                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-[#DDE7E4] bg-[#FAFCFB] py-3.5 pl-11 pr-4 text-sm text-[#173B3B] outline-none transition-all placeholder:text-[#9AA7A5] focus:border-[#0F766E] focus:ring-4 focus:ring-[#0F766E]/10"
                    />
                  </div>
                </div>
              </div>

              {/* PHONE */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-[#173B3B]"
                >
                  Phone Number
                </label>

                <div className="relative">
                  <Phone
                    size={17}
                    strokeWidth={1.8}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#91A09D]"
                  />

                  <input
                    id="phone"
                    type="tel"
                    placeholder="Your phone number"
                    className="w-full rounded-xl border border-[#DDE7E4] bg-[#FAFCFB] py-3.5 pl-11 pr-4 text-sm text-[#173B3B] outline-none transition-all placeholder:text-[#9AA7A5] focus:border-[#0F766E] focus:ring-4 focus:ring-[#0F766E]/10"
                  />
                </div>
              </div>

              {/* SERVICE */}
              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-semibold text-[#173B3B]"
                >
                  Dental Service
                </label>

                <select
                  id="service"
                  defaultValue=""
                  className="w-full appearance-none rounded-xl border border-[#DDE7E4] bg-[#FAFCFB] px-4 py-3.5 text-sm text-[#687777] outline-none transition-all focus:border-[#0F766E] focus:ring-4 focus:ring-[#0F766E]/10"
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  <option value="general">
                    General Dentistry
                  </option>

                  <option value="cosmetic">
                    Cosmetic Dentistry
                  </option>

                  <option value="restorative">
                    Restorative Dentistry
                  </option>

                  <option value="implants">
                    Dental Implants
                  </option>

                  <option value="pediatric">
                    Pediatric Dentistry
                  </option>

                  <option value="consultation">
                    Dental Consultation
                  </option>
                </select>
              </div>

              {/* DATE + TIME */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="date"
                    className="mb-2 block text-sm font-semibold text-[#173B3B]"
                  >
                    Preferred Date
                  </label>

                  <div className="relative">
                    <CalendarDays
                      size={17}
                      strokeWidth={1.8}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#91A09D]"
                    />

                    <input
                      id="date"
                      type="date"
                      className="w-full rounded-xl border border-[#DDE7E4] bg-[#FAFCFB] py-3.5 pl-11 pr-4 text-sm text-[#687777] outline-none transition-all focus:border-[#0F766E] focus:ring-4 focus:ring-[#0F766E]/10"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="time"
                    className="mb-2 block text-sm font-semibold text-[#173B3B]"
                  >
                    Preferred Time
                  </label>

                  <div className="relative">
                    <Clock3
                      size={17}
                      strokeWidth={1.8}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#91A09D]"
                    />

                    <select
                      id="time"
                      defaultValue=""
                      className="w-full appearance-none rounded-xl border border-[#DDE7E4] bg-[#FAFCFB] py-3.5 pl-11 pr-4 text-sm text-[#687777] outline-none transition-all focus:border-[#0F766E] focus:ring-4 focus:ring-[#0F766E]/10"
                    >
                      <option value="" disabled>
                        Select a time
                      </option>

                      <option value="morning">8:00 AM – 10:00 AM</option>
                      <option value="midmorning">10:00 AM – 12:00 PM</option>
                      <option value="afternoon">12:00 PM – 2:00 PM</option>
                      <option value="late-afternoon">
                        2:00 PM – 5:00 PM
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-[#173B3B]"
                >
                  Additional Information
                </label>

                <textarea
                  id="message"
                  rows="5"
                  placeholder="Tell us anything we should know about your visit..."
                  className="w-full resize-none rounded-xl border border-[#DDE7E4] bg-[#FAFCFB] px-4 py-3.5 text-sm text-[#173B3B] outline-none transition-all placeholder:text-[#9AA7A5] focus:border-[#0F766E] focus:ring-4 focus:ring-[#0F766E]/10"
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="w-full rounded-full bg-[#0F766E] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#115E59]"
              >
                Request Appointment
              </button>

              <p className="text-center text-xs leading-5 text-[#8A9896]">
                By submitting this form, you agree to our{" "}
                <a
                  href="/privacy"
                  className="font-semibold text-[#0F766E] hover:underline"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* =====================================================
          BOTTOM NOTE
      ====================================================== */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2rem bg-[#EAF5F2] px-6 py-10 text-center sm:px-10">
            <h2 className="font-[Manrope] text-2xl font-extrabold tracking-[-0.03em] text-[#173B3B]">
              Need help choosing a treatment?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#687777]">
              Not sure which service is right for you? That's okay. Book a
              consultation and our dental team can help you understand your
              options.
            </p>

            <a
              href="/contact"
              className="mt-5 inline-flex rounded-full bg-[#173B3B] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0F766E]"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Appointment;

