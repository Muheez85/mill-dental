const TeamHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#F1F8F6]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        
        <div className="max-w-3xl">
          {/* Small Label */}
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
            Our Team
          </p>

          {/* Heading */}
          <h1 className="font-[Manrope] text-4xl font-extrabold leading-[1.1] tracking-tight text-[#173B3B] sm:text-5xl lg:text-6xl">
            Meet the team behind your smile
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#687776] sm:text-lg">
            Get to know the experienced dental professionals dedicated to
            making every visit comfortable, personal, and focused on your
            long-term oral health.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamHero;