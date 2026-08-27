import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Our Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "General Dentistry", href: "/services" },
    { name: "Cosmetic Dentistry", href: "/services" },
    { name: "Restorative Dentistry", href: "/services" },
    { name: "Pediatric Dentistry", href: "/services" },
    { name: "Dental Implants", href: "/services" },
  ];

  return (
    <footer className="bg-[#0B2424] text-white">

      {/* =========================
          MAIN FOOTER
      ========================== */}
      <div className="mx-auto max-w-1200px px-5 py-14 sm:px-6 lg:py-16">

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.1fr]">

          {/* =========================
              BRAND
          ========================== */}
          <div>

            {/* Logo */}
            <a
              href="/"
              className="flex w-fit items-center gap-2.5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0F766E]">
                <span className="font-[Manrope] text-lg font-extrabold text-white">
                  M
                </span>
              </div>

              <div className="leading-none">
                <span className="block font-[Manrope] text-[22px] font-extrabold tracking-[-0.03em] text-white">
                  Mill
                </span>

                <span className="mt-1 block text-[8px] font-bold tracking-[0.32em] text-[#57C5B8]">
                  DENTAL
                </span>
              </div>
            </a>

            {/* Description */}
            <p className="mt-5 max-w-290px text-sm leading-6 text-white/60">
              Providing compassionate, modern dental care designed around
              your comfort, confidence, and long-term oral health.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-2">

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[11px] font-semibold text-white/60 transition-colors hover:border-[#0F766E] hover:bg-[#0F766E] hover:text-white"
              >
                f
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[11px] font-semibold text-white/60 transition-colors hover:border-[#0F766E] hover:bg-[#0F766E] hover:text-white"
              >
                ig
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[11px] font-semibold text-white/60 transition-colors hover:border-[#0F766E] hover:bg-[#0F766E] hover:text-white"
              >
                in
              </a>

              <a
                href="#"
                aria-label="X"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[11px] font-semibold text-white/60 transition-colors hover:border-[#0F766E] hover:bg-[#0F766E] hover:text-white"
              >
                X
              </a>

            </div>
          </div>

          {/* =========================
              QUICK LINKS
          ========================== */}
          <div>
            <h3 className="font-[Manrope] text-sm font-bold text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-[#57C5B8]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* =========================
              SERVICES
          ========================== */}
          <div>
            <h3 className="font-[Manrope] text-sm font-bold text-white">
              Our Services
            </h3>

            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-sm text-white/60 transition-colors hover:text-[#57C5B8]"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* =========================
              CONTACT
          ========================== */}
          <div>
            <h3 className="font-[Manrope] text-sm font-bold text-white">
              Contact Us
            </h3>

            <div className="mt-5 space-y-4">

              {/* Address */}
              <div className="flex gap-3">
                <MapPin
                  size={17}
                  strokeWidth={1.7}
                  className="mt-0.5 shrink-0 text-[#57C5B8]"
                />

                <p className="text-sm leading-5 text-white/60">
                  Mill Dental Clinic
                  <br />
                  Your City, Nigeria
                </p>
              </div>

              {/* Phone */}
              <a
                href="tel:+2348000000000"
                className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white"
              >
                <Phone
                  size={17}
                  strokeWidth={1.7}
                  className="shrink-0 text-[#57C5B8]"
                />

                +234 800 000 0000
              </a>

              {/* Email */}
              <a
                href="mailto:hello@milldental.com"
                className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white"
              >
                <Mail
                  size={17}
                  strokeWidth={1.7}
                  className="shrink-0 text-[#57C5B8]"
                />

                hello@milldental.com
              </a>

              {/* Opening Hours */}
              <div className="flex gap-3">
                <Clock3
                  size={17}
                  strokeWidth={1.7}
                  className="mt-0.5 shrink-0 text-[#57C5B8]"
                />

                <div className="text-sm leading-5 text-white/60">
                  <p>Mon – Fri: 8:00 AM – 6:00 PM</p>
                  <p>Saturday: 9:00 AM – 3:00 PM</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* =========================
          BOTTOM BAR
      ========================== */}
      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-1200px flex-col gap-4 px-5 py-5 sm:px-6 md:flex-row md:items-center md:justify-between">

          {/* Copyright */}
          <p className="text-xs text-white/45">
            © {new Date().getFullYear()} Mill Dental. All rights reserved.
          </p>

          {/* Bottom Links */}
          <div className="flex flex-wrap items-center gap-5">

            <a
              href="/privacy"
              className="text-xs text-white/45 transition-colors hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="text-xs text-white/45 transition-colors hover:text-white"
            >
              Terms & Conditions
            </a>

            {/* Back To Top */}
            <a
              href="#"
              aria-label="Back to top"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-[#0F766E] hover:bg-[#0F766E] hover:text-white"
            >
              <ArrowUp
                size={15}
                strokeWidth={1.8}
              />
            </a>

          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;