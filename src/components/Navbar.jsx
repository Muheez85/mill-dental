import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6 lg:px-8">
      
      <nav className="mx-auto max-w-[1550px] rounded-[40px] bg-white px-6 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.08)] lg:px-7">

        {/* Main Navbar */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2.5"
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

          {/* Desktop Navigation */}
          <div className="hidden items-center lg:flex">

            <a
              href="/"
              className="px-4 py-3 text-[15px] font-semibold text-[#0F766E]"
            >
              Home
            </a>

            <a
              href="/about"
              className="px-4 py-3 text-[15px] font-semibold text-[#526565] transition-colors hover:text-[#0F766E]"
            >
              About
            </a>

            {/* Services */}
            <a
              href="/services"
              className="flex items-center gap-1 px-4 py-3 text-[15px] font-semibold text-[#526565] transition-colors hover:text-[#0F766E]"
            >
              Services
              <ChevronDown size={15} strokeWidth={1.8} />
            </a>

            <a
              href="/team"
              className="px-4 py-3 text-[15px] font-semibold text-[#526565] transition-colors hover:text-[#0F766E]"
            >
              Our Team
            </a>

            {/* More */}
            <button
              type="button"
              className="flex items-center gap-1 px-4 py-3 text-[15px] font-semibold text-[#526565] transition-colors hover:text-[#0F766E]"
            >
              More
              <ChevronDown size={15} strokeWidth={1.8} />
            </button>

            <a
              href="/contact"
              className="px-4 py-3 text-[15px] font-semibold text-[#526565] transition-colors hover:text-[#0F766E]"
            >
              Contact
            </a>

          </div>

          {/* Appointment */}
          <a
            href="/appointment"
            className="hidden rounded-full bg-[#0F766E] px-7 py-3 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-[#115E59] lg:block"
          >
            Appointment
          </a>

          {/* Mobile Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E4EAE8] text-[#173B3B] transition-colors hover:border-[#0F766E] hover:text-[#0F766E] lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X size={21} strokeWidth={1.8} />
            ) : (
              <Menu size={21} strokeWidth={1.8} />
            )}
          </button>

        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="mt-4 border-t border-[#E8EEEC] pt-3 lg:hidden">

            <div className="flex flex-col">

              <a
                href="/"
                onClick={() => setIsOpen(false)}
                className="border-b border-[#E8EEEC] py-4 text-sm font-semibold text-[#0F766E]"
              >
                Home
              </a>

              <a
                href="/about"
                onClick={() => setIsOpen(false)}
                className="border-b border-[#E8EEEC] py-4 text-sm font-semibold text-[#526565]"
              >
                About
              </a>

              <a
                href="/services"
                onClick={() => setIsOpen(false)}
                className="border-b border-[#E8EEEC] py-4 text-sm font-semibold text-[#526565]"
              >
                Services
              </a>

              <a
                href="/team"
                onClick={() => setIsOpen(false)}
                className="border-b border-[#E8EEEC] py-4 text-sm font-semibold text-[#526565]"
              >
                Our Team
              </a>

              <a
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="border-b border-[#E8EEEC] py-4 text-sm font-semibold text-[#526565]"
              >
                Contact
              </a>

              <a
                href="/appointment"
                onClick={() => setIsOpen(false)}
                className="mt-5 rounded-full bg-[#0F766E] px-6 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-[#115E59]"
              >
                Appointment
              </a>

            </div>

          </div>
        )}

      </nav>
    </header>
  );
};

export default Navbar;