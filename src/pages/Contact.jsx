import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  Send,
//   Instagram,
//   Facebook,
} from "lucide-react";

const Contact = () => {
  return (
    <main className="min-h-screen bg-[#F8FBFA]">
      {/* =====================================================
          PAGE HERO
      ====================================================== */}
      <section className="px-4 pb-14 pt-36 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.18em] text-[#0F766E]">
              Get In Touch
            </span>

            <h1 className="font-[Manrope] text-4xl font-extrabold tracking-[-0.04em] text-[#173B3B] sm:text-5xl lg:text-6xl">
              We'd love to hear from you
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#687777] sm:text-lg">
              Have a question, need more information about a treatment, or
              ready to book your next dental visit? Our team is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT CONTENT
      ====================================================== */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* =================================================
              CONTACT INFORMATION
          ================================================== */}
          <div className="rounded-2rem bg-[#173B3B] p-7 sm:p-9 lg:p-10">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#8ED1C4]">
              Contact Details
            </span>

            <h2 className="mt-4 font-[Manrope] text-2xl font-extrabold tracking-[-0.03em] text-white sm:text-3xl">
              Let's start a conversation
            </h2>

            <p className="mt-4 text-sm leading-6 text-[#C5D5D2]">
              Whether you're looking for routine dental care or have questions
              about a treatment, feel free to reach out to our team.
            </p>

            {/* CONTACT ITEMS */}
            <div className="mt-9 space-y-6">
              {/* ADDRESS */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#8ED1C4]">
                  <MapPin size={20} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#8ED1C4]">
                    Visit Us
                  </p>

                  <p className="mt-1 text-sm leading-6 text-white">
                    24 Mill Street
                    <br />
                    City Centre
                  </p>
                </div>
              </div>

              {/* PHONE */}
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

              {/* EMAIL */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#8ED1C4]">
                  <Mail size={20} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#8ED1C4]">
                    Email Us
                  </p>

                  <a
                    href="mailto:hello@milldental.com"
                    className="mt-1 block text-sm text-white transition-colors hover:text-[#8ED1C4]"
                  >
                    hello@milldental.com
                  </a>
                </div>
              </div>

              {/* HOURS */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#8ED1C4]">
                  <Clock3 size={20} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#8ED1C4]">
                    Opening Hours
                  </p>

                  <p className="mt-1 text-sm leading-6 text-white">
                    Monday – Friday: 8:00 AM – 5:00 PM
                    <br />
                    Saturday: 9:00 AM – 2:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* SOCIALS */}
            <div className="mt-10 border-t border-white/10 pt-7">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#8ED1C4]">
                Follow Us
              </p>

              <div className="mt-4 flex gap-3">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white hover:text-[#173B3B]"
                >
                  {/* <Instagram size={18} strokeWidth={1.8} /> */}
                </a>

                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white hover:text-[#173B3B]"
                >
                  {/* <Facebook size={18} strokeWidth={1.8} /> */}
                </a>
              </div>
            </div>
          </div>

          {/* =================================================
              CONTACT FORM
          ================================================== */}
          <div className="rounded-2rem border border-[#E4ECE9] bg-white p-7 shadow-[0_8px_30px_rgba(0,0,0,0.03)] sm:p-9 lg:p-10">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#0F766E]">
                Send A Message
              </span>

              <h2 className="mt-3 font-[Manrope] text-2xl font-extrabold tracking-[-0.03em] text-[#173B3B] sm:text-3xl">
                How can we help?
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#687777]">
                Fill out the form and our team will get back to you as soon as
                possible.
              </p>
            </div>

            <form className="mt-8 space-y-5">
              {/* NAME + EMAIL */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-[#173B3B]"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-[#DDE7E4] bg-[#FAFCFB] px-4 py-3.5 text-sm text-[#173B3B] outline-none transition-all placeholder:text-[#9AA7A5] focus:border-[#0F766E] focus:ring-4 focus:ring-[#0F766E]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-[#173B3B]"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-[#DDE7E4] bg-[#FAFCFB] px-4 py-3.5 text-sm text-[#173B3B] outline-none transition-all placeholder:text-[#9AA7A5] focus:border-[#0F766E] focus:ring-4 focus:ring-[#0F766E]/10"
                  />
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

                <input
                  id="phone"
                  type="tel"
                  placeholder="Your phone number"
                  className="w-full rounded-xl border border-[#DDE7E4] bg-[#FAFCFB] px-4 py-3.5 text-sm text-[#173B3B] outline-none transition-all placeholder:text-[#9AA7A5] focus:border-[#0F766E] focus:ring-4 focus:ring-[#0F766E]/10"
                />
              </div>

              {/* SUBJECT */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold text-[#173B3B]"
                >
                  Subject
                </label>

                <select
                  id="subject"
                  defaultValue=""
                  className="w-full appearance-none rounded-xl border border-[#DDE7E4] bg-[#FAFCFB] px-4 py-3.5 text-sm text-[#687777] outline-none transition-all focus:border-[#0F766E] focus:ring-4 focus:ring-[#0F766E]/10"
                >
                  <option value="" disabled>
                    Select a subject
                  </option>
                  <option value="appointment">Appointment</option>
                  <option value="general">General Enquiry</option>
                  <option value="treatment">Treatment Information</option>
                  <option value="emergency">Dental Emergency</option>
                </select>
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-[#173B3B]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="5"
                  placeholder="Tell us how we can help..."
                  className="w-full resize-none rounded-xl border border-[#DDE7E4] bg-[#FAFCFB] px-4 py-3.5 text-sm text-[#173B3B] outline-none transition-all placeholder:text-[#9AA7A5] focus:border-[#0F766E] focus:ring-4 focus:ring-[#0F766E]/10"
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0F766E] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#115E59] sm:w-auto"
              >
                Send Message
                <Send size={17} strokeWidth={1.8} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAP
      ====================================================== */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-2rem border border-[#E4ECE9] bg-white">
            <div className="flex min-h-320px items-center justify-center bg-[#EAF5F2] px-6 py-16 text-center">
              <div>
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#0F766E] shadow-sm">
                  <MapPin size={25} strokeWidth={1.8} />
                </div>

                <h2 className="mt-5 font-[Manrope] text-2xl font-extrabold text-[#173B3B]">
                  Find Mill Dental
                </h2>

                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#687777]">
                  24 Mill Street, City Centre. Add your Google Maps embed here
                  once the clinic's exact location is confirmed.
                </p>

                <a
                  href="#"
                  className="mt-5 inline-flex rounded-full bg-[#173B3B] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0F766E]"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2rem bg-[#EAF5F2] px-6 py-12 text-center sm:px-10 sm:py-16">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#0F766E]">
              Need An Appointment?
            </span>

            <h2 className="mx-auto mt-4 max-w-2xl font-[Manrope] text-3xl font-extrabold tracking-[-0.04em] text-[#173B3B] sm:text-4xl">
              Let's get your smile taken care of
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#687777] sm:text-base">
              Book a visit with our team and take the next step towards
              healthier, more confident teeth.
            </p>

            <a
              href="/appointment"
              className="mt-7 inline-flex rounded-full bg-[#0F766E] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#115E59]"
            >
              Book an Appointment
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;

