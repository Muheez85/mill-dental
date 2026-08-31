// import { Linkedin, Instagram } from "lucide-react";

const DoctorCard = ({ name, role, specialty, image }) => {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)]">

      {/* Doctor Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-360px w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />

        {/* Social Links */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 translate-y-3 gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <a
            href="#"
            aria-label={`${name} LinkedIn`}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#173B3B] shadow-md transition-colors hover:bg-[#0F766E] hover:text-white"
          >
            {/* <Linkedin size={16} strokeWidth={1.8} /> */}
          </a>

          <a
            href="#"
            aria-label={`${name} Instagram`}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#173B3B] shadow-md transition-colors hover:bg-[#0F766E] hover:text-white"
          >
            {/* <Instagram size={16} strokeWidth={1.8} /> */}
          </a>
        </div>
      </div>

      {/* Doctor Information */}
      <div className="px-6 py-6">
        <h3 className="font-[Manrope] text-xl font-bold text-[#173B3B]">
          {name}
        </h3>

        <p className="mt-1 text-sm font-semibold text-[#0F766E]">
          {role}
        </p>

        <p className="mt-3 text-sm leading-6 text-[#687776]">
          {specialty}
        </p>

        <a
          href="#"
          className="mt-5 inline-block text-sm font-semibold text-[#173B3B] transition-colors hover:text-[#0F766E]"
        >
          View Profile
        </a>
      </div>
    </article>
  );
};

export default DoctorCard;