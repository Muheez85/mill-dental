
import { Quote, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      treatment: "General Dentistry",
      text: "From the moment I walked in, the team made me feel completely comfortable. Everything was explained clearly, and the whole experience was much easier than I expected.",
    },
    {
      name: "Michael Anderson",
      treatment: "Dental Implants",
      text: "I had been putting off getting my dental implant for a long time. The team at Mill Dental made the process simple, professional, and reassuring from start to finish.",
    },
    {
      name: "Emily Carter",
      treatment: "Cosmetic Dentistry",
      text: "I absolutely love my smile now. The attention to detail was incredible, and the team took the time to understand exactly what I wanted before starting my treatment.",
    },
    {
      name: "Daniel Williams",
      treatment: "Routine Check-up",
      text: "I've finally found a dental clinic I actually look forward to visiting. The environment is welcoming, the staff are friendly, and everything feels very well organised.",
    },
    {
      name: "Olivia Brown",
      treatment: "Teeth Whitening",
      text: "The results exceeded my expectations. My teeth look noticeably brighter, and the whole appointment was comfortable and professionally handled.",
    },
    {
      name: "James Wilson",
      treatment: "Restorative Dentistry",
      text: "The care I received was excellent. I appreciated how patient the dentist was in answering all my questions and explaining every stage of my treatment.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F8FBFA]">
      {/* =====================================================
          PAGE HERO
      ====================================================== */}
      <section className="px-4 pb-14 pt-36 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.18em] text-[#0F766E]">
              Patient Stories
            </span>

            <h1 className="font-[Manrope] text-4xl font-extrabold tracking-[-0.04em] text-[#173B3B] sm:text-5xl lg:text-6xl">
              What our patients say
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#687777] sm:text-lg">
              Great dental care is about more than treatment. It's about
              creating an experience where every patient feels comfortable,
              heard, and cared for.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          TESTIMONIALS
      ====================================================== */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          {/* TOP RATING */}
          <div className="mb-10 flex flex-col items-center justify-between gap-6 rounded-3xl bg-white px-6 py-7 shadow-[0_8px_30px_rgba(0,0,0,0.04)] sm:flex-row sm:px-8">
            <div>
              <p className="text-sm font-semibold text-[#687777]">
                Trusted by our patients
              </p>

              <div className="mt-2 flex items-center gap-3">
                <span className="font-[Manrope] text-3xl font-extrabold text-[#173B3B]">
                  4.9
                </span>

                <div>
                  <div className="flex gap-1 text-[#F4B740]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={17}
                        fill="currentColor"
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>

                  <p className="mt-1 text-xs text-[#82908E]">
                    Patient satisfaction
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-md text-sm leading-6 text-[#687777] sm:text-right">
              <p>
                We believe the best measure of our work is how our patients
                feel about the care they receive.
              </p>
            </div>
          </div>

          {/* TESTIMONIAL GRID */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="group flex h-full flex-col rounded-3xl border border-[#E4ECE9] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9DED9] hover:shadow-[0_15px_35px_rgba(15,118,110,0.07)] sm:p-7"
              >
                {/* QUOTE ICON */}
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EAF5F2] text-[#0F766E] transition-colors group-hover:bg-[#0F766E] group-hover:text-white">
                    <Quote size={20} strokeWidth={1.8} />
                  </div>

                  <div className="flex gap-1 text-[#F4B740]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={14}
                        fill="currentColor"
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>
                </div>

                {/* TESTIMONIAL TEXT */}
                <p className="mt-7 flex-1 text-sm leading-7 text-[#5F706E] sm:text-[15px]">
                  "{testimonial.text}"
                </p>

                {/* PATIENT */}
                <div className="mt-7 border-t border-[#E8EEEC] pt-5">
                  <h2 className="font-[Manrope] text-sm font-bold text-[#173B3B]">
                    {testimonial.name}
                  </h2>

                  <p className="mt-1 text-xs font-medium text-[#0F766E]">
                    {testimonial.treatment}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-2rem bg-[#173B3B] px-6 py-12 sm:px-10 sm:py-16">
            {/* DECORATIVE CIRCLE */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
            <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full border border-white/10" />

            <div className="relative mx-auto max-w-2xl text-center">
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#8ED1C4]">
                Your Smile Matters
              </span>

              <h2 className="mt-4 font-[Manrope] text-3xl font-extrabold tracking-[-0.04em] text-white sm:text-4xl">
                Ready to start your own smile story?
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#C5D5D2] sm:text-base">
                Join patients who trust Mill Dental for thoughtful,
                professional dental care.
              </p>

              <Link
                to="/appointment"
                className="mt-7 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#173B3B] transition-colors hover:bg-[#EAF5F2]"
              >
                Book an Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Testimonials;

