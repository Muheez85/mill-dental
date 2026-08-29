const ServiceIntro = ({
  eyebrow,
  title,
  description,
  image,
  reverse = false,
}) => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-1200px px-5 sm:px-6">

        <div
          className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >

          {/* Image */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src={image}
              alt={title}
              className="h-350px w-full object-cover sm:h-450px"
            />
          </div>

          {/* Content */}
          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#0F766E]">
              {eyebrow}
            </p>

            <h2 className="mt-3 font-[Manrope] text-3xl font-extrabold leading-tight tracking-[-0.04em] text-[#173B3B] sm:text-4xl">
              {title}
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#617171]">
              {description}
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceIntro;