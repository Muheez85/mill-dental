import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [openMobileMenu, setOpenMobileMenu] = useState(null);

  const toggleMobileMenu = (menu) => {
    setOpenMobileMenu(openMobileMenu === menu ? null : menu);
  };

  const closeMobile = () => {
    setIsOpen(false);
    setOpenMobileMenu(null);
  };

  return (
    <header className="px-4 pt-4 sm:px-6 lg:px-8">

      <nav className="fixed left-1/2 top-4 z-50 flex w-[calc(100%-2rem)] -translate-x-1/2 items-center justify-between rounded-[40px] bg-white px-5 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.08)] sm:px-6 lg:px-7">

        {/* =====================================================
            LOGO
        ====================================================== */}
        <a
          href="/"
          className="flex shrink-0 items-center gap-2.5"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0F766E]">
            <span className="font-[Manrope] text-lg font-extrabold text-white">
              M
            </span>
          </div>

          <div className="leading-none">
            <span className="block font-[Manrope] text-[22px] font-extrabold tracking-[-0.03em] text-[#173B3B]">
              Mill
            </span>

            <span className="mt-0.5 block text-[8px] font-bold tracking-[0.32em] text-[#0F766E]">
              DENTAL
            </span>
          </div>
        </a>

        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}
        <div className="hidden items-center lg:flex">

          {/* HOME */}
          <a
            href="/"
            className="px-4 py-3 text-[15px] font-semibold text-[#0F766E]"
          >
            Home
          </a>

          {/* ABOUT */}
          <a
            href="/about"
            className="px-4 py-3 text-[15px] font-semibold text-[#526565] transition-colors hover:text-[#0F766E]"
          >
            About
          </a>

          {/* =================================================
              SERVICES DROPDOWN
          ================================================== */}
          <div className="group relative">

            <button
              type="button"
              className="flex items-center gap-1 px-4 py-3 text-[15px] font-semibold text-[#526565] transition-colors hover:text-[#0F766E]"
            >
              Services

              <ChevronDown
                size={15}
                strokeWidth={1.8}
                className="transition-transform duration-200 group-hover:rotate-180"
              />
            </button>

            <div className="invisible absolute left-1/2 top-full w-56 -translate-x-1/2 translate-y-2 rounded-2xl bg-white p-2 opacity-0 shadow-[0_12px_35px_rgba(0,0,0,0.10)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

              <a
                href="/services"
                className="block rounded-xl px-4 py-3 text-sm font-semibold text-[#173B3B] transition-colors hover:bg-[#F0F7F5] hover:text-[#0F766E]"
              >
                All Services
              </a>

              <a
                href="/services/general-dentistry"
                className="block rounded-xl px-4 py-3 text-sm text-[#526565] transition-colors hover:bg-[#F0F7F5] hover:text-[#0F766E]"
              >
                General Dentistry
              </a>

              <a
                href="/services/cosmetic-dentistry"
                className="block rounded-xl px-4 py-3 text-sm text-[#526565] transition-colors hover:bg-[#F0F7F5] hover:text-[#0F766E]"
              >
                Cosmetic Dentistry
              </a>

              <a
                href="/services/restorative-dentistry"
                className="block rounded-xl px-4 py-3 text-sm text-[#526565] transition-colors hover:bg-[#F0F7F5] hover:text-[#0F766E]"
              >
                Restorative Dentistry
              </a>

              <a
                href="/services/dental-implants"
                className="block rounded-xl px-4 py-3 text-sm text-[#526565] transition-colors hover:bg-[#F0F7F5] hover:text-[#0F766E]"
              >
                Dental Implants
              </a>

              <a
                href="/services/pediatric-dentistry"
                className="block rounded-xl px-4 py-3 text-sm text-[#526565] transition-colors hover:bg-[#F0F7F5] hover:text-[#0F766E]"
              >
                Pediatric Dentistry
              </a>

            </div>
          </div>

          {/* OUR TEAM */}
          <a
            href="/team"
            className="px-4 py-3 text-[15px] font-semibold text-[#526565] transition-colors hover:text-[#0F766E]"
          >
            Our Team
          </a>

          {/* =================================================
              MORE DROPDOWN
          ================================================== */}
          <div className="group relative">

            <button
              type="button"
              className="flex items-center gap-1 px-4 py-3 text-[15px] font-semibold text-[#526565] transition-colors hover:text-[#0F766E]"
            >
              More

              <ChevronDown
                size={15}
                strokeWidth={1.8}
                className="transition-transform duration-200 group-hover:rotate-180"
              />
            </button>

            <div className="invisible absolute left-1/2 top-full w-52 -translate-x-1/2 translate-y-2 rounded-2xl bg-white p-2 opacity-0 shadow-[0_12px_35px_rgba(0,0,0,0.10)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

              <a
                href="/faq"
                className="block rounded-xl px-4 py-3 text-sm text-[#526565] transition-colors hover:bg-[#F0F7F5] hover:text-[#0F766E]"
              >
                FAQ
              </a>

              <a
                href="/gallery"
                className="block rounded-xl px-4 py-3 text-sm text-[#526565] transition-colors hover:bg-[#F0F7F5] hover:text-[#0F766E]"
              >
                Gallery
              </a>

              <a
                href="/testimonials"
                className="block rounded-xl px-4 py-3 text-sm text-[#526565] transition-colors hover:bg-[#F0F7F5] hover:text-[#0F766E]"
              >
                Testimonials
              </a>

              <a
                href="/privacy"
                className="block rounded-xl px-4 py-3 text-sm text-[#526565] transition-colors hover:bg-[#F0F7F5] hover:text-[#0F766E]"
              >
                Privacy Policy
              </a>

              <a
                href="/terms"
                className="block rounded-xl px-4 py-3 text-sm text-[#526565] transition-colors hover:bg-[#F0F7F5] hover:text-[#0F766E]"
              >
                Terms & Conditions
              </a>

            </div>
          </div>

          {/* CONTACT */}
          <a
            href="/contact"
            className="px-4 py-3 text-[15px] font-semibold text-[#526565] transition-colors hover:text-[#0F766E]"
          >
            Contact
          </a>

        </div>

        {/* =====================================================
            DESKTOP APPOINTMENT
        ====================================================== */}
        <a
          href="/appointment"
          className="hidden shrink-0 rounded-full bg-[#0F766E] px-7 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#115E59] lg:block"
        >
          Appointment
        </a>

        {/* =====================================================
            MOBILE MENU BUTTON
        ====================================================== */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E4EAE8] text-[#173B3B] transition-colors hover:border-[#0F766E] hover:text-[#0F766E] lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <X size={21} strokeWidth={1.8} />
          ) : (
            <Menu size={21} strokeWidth={1.8} />
          )}
        </button>

      </nav>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}
      {isOpen && (
        <div className="fixed left-1/2 top-88px z-40 max-h-[calc(100vh-105px)] w-[calc(100%-2rem)] -translate-x-1/2 overflow-y-auto rounded-3xl bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.10)] lg:hidden">

          <div className="flex flex-col">

            {/* HOME */}
            <a
              href="/"
              onClick={closeMobile}
              className="border-b border-[#E8EEEC] py-4 text-sm font-semibold text-[#0F766E]"
            >
              Home
            </a>

            {/* ABOUT */}
            <a
              href="/about"
              onClick={closeMobile}
              className="border-b border-[#E8EEEC] py-4 text-sm font-semibold text-[#526565]"
            >
              About
            </a>

            {/* =================================================
                MOBILE SERVICES
            ================================================== */}
            <div className="border-b border-[#E8EEEC]">

              <button
                type="button"
                onClick={() => toggleMobileMenu("services")}
                className="flex w-full items-center justify-between py-4 text-sm font-semibold text-[#526565]"
              >
                Services

                <ChevronDown
                  size={16}
                  strokeWidth={1.8}
                  className={`transition-transform duration-200 ${
                    openMobileMenu === "services"
                      ? "rotate-180 text-[#0F766E]"
                      : ""
                  }`}
                />
              </button>

              {openMobileMenu === "services" && (
                <div className="mb-3 ml-3 border-l border-[#DCE7E4] pl-4">

                  <a
                    href="/services"
                    onClick={closeMobile}
                    className="block py-2.5 text-sm font-semibold text-[#0F766E]"
                  >
                    All Services
                  </a>

                  <a
                    href="/services/general-dentistry"
                    onClick={closeMobile}
                    className="block py-2.5 text-sm text-[#687777]"
                  >
                    General Dentistry
                  </a>

                  <a
                    href="/services/cosmetic-dentistry"
                    onClick={closeMobile}
                    className="block py-2.5 text-sm text-[#687777]"
                  >
                    Cosmetic Dentistry
                  </a>

                  <a
                    href="/services/restorative-dentistry"
                    onClick={closeMobile}
                    className="block py-2.5 text-sm text-[#687777]"
                  >
                    Restorative Dentistry
                  </a>

                  <a
                    href="/services/dental-implants"
                    onClick={closeMobile}
                    className="block py-2.5 text-sm text-[#687777]"
                  >
                    Dental Implants
                  </a>

                  <a
                    href="/services/pediatric-dentistry"
                    onClick={closeMobile}
                    className="block py-2.5 text-sm text-[#687777]"
                  >
                    Pediatric Dentistry
                  </a>

                </div>
              )}
            </div>

            {/* OUR TEAM */}
            <a
              href="/team"
              onClick={closeMobile}
              className="border-b border-[#E8EEEC] py-4 text-sm font-semibold text-[#526565]"
            >
              Our Team
            </a>

            {/* =================================================
                MOBILE MORE
            ================================================== */}
            <div className="border-b border-[#E8EEEC]">

              <button
                type="button"
                onClick={() => toggleMobileMenu("more")}
                className="flex w-full items-center justify-between py-4 text-sm font-semibold text-[#526565]"
              >
                More

                <ChevronDown
                  size={16}
                  strokeWidth={1.8}
                  className={`transition-transform duration-200 ${
                    openMobileMenu === "more"
                      ? "rotate-180 text-[#0F766E]"
                      : ""
                  }`}
                />
              </button>

              {openMobileMenu === "more" && (
                <div className="mb-3 ml-3 border-l border-[#DCE7E4] pl-4">

                  <a
                    href="/faq"
                    onClick={closeMobile}
                    className="block py-2.5 text-sm text-[#687777]"
                  >
                    FAQ
                  </a>

                  <a
                    href="/gallery"
                    onClick={closeMobile}
                    className="block py-2.5 text-sm text-[#687777]"
                  >
                    Gallery
                  </a>

                  <a
                    href="/testimonials"
                    onClick={closeMobile}
                    className="block py-2.5 text-sm text-[#687777]"
                  >
                    Testimonials
                  </a>

                  <a
                    href="/privacy"
                    onClick={closeMobile}
                    className="block py-2.5 text-sm text-[#687777]"
                  >
                    Privacy Policy
                  </a>

                  <a
                    href="/terms"
                    onClick={closeMobile}
                    className="block py-2.5 text-sm text-[#687777]"
                  >
                    Terms & Conditions
                  </a>

                </div>
              )}
            </div>

            {/* CONTACT */}
            <a
              href="/contact"
              onClick={closeMobile}
              className="border-b border-[#E8EEEC] py-4 text-sm font-semibold text-[#526565]"
            >
              Contact
            </a>

            {/* APPOINTMENT */}
            <a
              href="/appointment"
              onClick={closeMobile}
              className="mt-5 rounded-full bg-[#0F766E] px-6 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-[#115E59]"
            >
              Appointment
            </a>

          </div>
        </div>
      )}

    </header>
  );
};

export default Navbar;