import {
  Target,
  Eye,
  HeartPulse,
  ArrowRight,
} from "lucide-react";

const MissionVision = () => {
  return (
    <section className="bg-[#f7faf9] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-1200px px-5 sm:px-6">

        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#0F766E]">
            Our Purpose
          </p>

          <h2 className="mt-3 font-[Manrope] text-3xl font-extrabold leading-tight tracking-[-0.04em] text-[#173B3B] sm:text-4xl">
            Driven by Care,
            <span className="text-[#0F766E]"> Guided by Purpose</span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-[#617171]">
            Everything we do at Mill Dental is centered around delivering
            thoughtful, reliable, and patient-focused dental care.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-5 md:grid-cols-2">

          {/* Mission */}
          <div className="rounded-2xl bg-white p-7 shadow-[0_6px_25px_rgba(0,0,0,0.05)] sm:p-8">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E5F1EF] text-[#0F766E]">
              <Target
                size={23}
                strokeWidth={1.8}
              />
            </div>

            <h3 className="mt-5 font-[Manrope] text-xl font-bold text-[#173B3B]">
              Our Mission
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#617171]">
              Our mission is to provide high-quality dental care in a
              comfortable and welcoming environment. We aim to make every
              patient feel heard, respected, and confident about their oral
              health.
            </p>

            <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-[#0F766E]">
              <HeartPulse size={15} />
              Patient-first care
            </div>
          </div>

          {/* Vision */}
          <div className="rounded-2xl bg-[#0F766E] p-7 shadow-[0_6px_25px_rgba(0,0,0,0.05)] sm:p-8">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
              <Eye
                size={23}
                strokeWidth={1.8}
              />
            </div>

            <h3 className="mt-5 font-[Manrope] text-xl font-bold text-white">
              Our Vision
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/75">
              We envision a future where everyone can access modern,
              compassionate dental care and feel empowered to maintain a
              healthy, confident smile for life.
            </p>

            <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-white">
              <ArrowRight size={15} />
              Better smiles, better lives
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;