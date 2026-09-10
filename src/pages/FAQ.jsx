
import { useState } from "react";
import { Plus, Minus, CalendarCheck } from "lucide-react";
import { Link } from "react-router-dom";


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How often should I visit the dentist?",
      answer:
        "We generally recommend a dental check-up every six months. However, your ideal visit schedule depends on your oral health, dental history, and individual needs. During your appointment, we'll recommend a schedule that's right for you.",
    },
    {
      question: "What should I expect during my first visit?",
      answer:
        "Your first visit usually includes a discussion about your dental history, a comprehensive examination, and an assessment of your teeth and gums. Where necessary, we may recommend X-rays or other diagnostic procedures before discussing your treatment options.",
    },
    {
      question: "Do you offer cosmetic dentistry?",
      answer:
        "Yes. We offer a range of cosmetic treatments designed to improve the appearance of your smile, including teeth whitening, cosmetic restorations, and other smile-enhancing treatments.",
    },
    {
      question: "Are dental treatments painful?",
      answer:
        "Our team takes your comfort seriously. Modern dental techniques and local anesthesia allow many treatments to be completed with little or no discomfort. We'll always explain the procedure and make sure you're comfortable before we begin.",
    },
    {
      question: "Do you treat children?",
      answer:
        "Yes. We provide dental care for children and encourage parents to introduce their children to regular dental visits early. Our approach is designed to make dental appointments comfortable and positive for younger patients.",
    },
    {
      question: "What should I do if I have a dental emergency?",
      answer:
        "If you're experiencing severe tooth pain, swelling, a knocked-out tooth, or another urgent dental problem, contact us as soon as possible. We'll help assess the situation and advise you on the appropriate next step.",
    },
    {
      question: "Do you offer teeth whitening?",
      answer:
        "Yes. We provide professional teeth whitening options to help improve the brightness of your smile. During your consultation, we'll assess your teeth and recommend the most suitable option for you.",
    },
    {
      question: "How can I book an appointment?",
      answer:
        "You can book an appointment through our online appointment page or contact our clinic directly. Simply choose a convenient time and we'll take care of the rest.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-[#F8FBFA]">
      {/* =====================================================
          PAGE HERO
      ====================================================== */}
      <section className="px-4 pb-16 pt-36 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.18em] text-[#0F766E]">
              FAQs
            </span>

            <h1 className="font-[Manrope] text-4xl font-extrabold tracking-[-0.04em] text-[#173B3B] sm:text-5xl lg:text-6xl">
              Frequently Asked Questions
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#687777] sm:text-lg">
              Find answers to some of the most common questions about our
              dental services, appointments, treatments, and patient care.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ SECTION
      ====================================================== */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          {/* LEFT SIDE */}
          <div className="lg:pt-3">
            <div className="rounded-3xl bg-[#EAF5F2] p-7 sm:p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0F766E] text-white">
                <CalendarCheck size={23} strokeWidth={1.8} />
              </div>

              <h2 className="mt-6 font-[Manrope] text-2xl font-extrabold tracking-[-0.03em] text-[#173B3B] sm:text-3xl">
                Have more questions?
              </h2>

              <p className="mt-4 text-sm leading-6 text-[#607171] sm:text-base">
                If you can't find the answer you're looking for, our dental
                team is happy to help. Get in touch with us or schedule an
                appointment to discuss your needs.
              </p>

              <Link
                to="/appointment"
                className="mt-7 inline-flex items-center justify-center rounded-full bg-[#0F766E] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#115E59]"
              >
                Book an Appointment
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE — ACCORDION */}
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border bg-white transition-all duration-200 ${
                    isOpen
                      ? "border-[#B9D8D2] shadow-[0_8px_25px_rgba(15,118,110,0.06)]"
                      : "border-[#E5ECEA]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-sm font-bold leading-6 sm:text-base ${
                        isOpen ? "text-[#0F766E]" : "text-[#173B3B]"
                      }`}
                    >
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                        isOpen
                          ? "bg-[#0F766E] text-white"
                          : "bg-[#F0F5F3] text-[#526565]"
                      }`}
                    >
                      {isOpen ? (
                        <Minus size={16} strokeWidth={2} />
                      ) : (
                        <Plus size={16} strokeWidth={2} />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                      <div className="border-t border-[#E8EEEC] pt-4">
                        <p className="text-sm leading-7 text-[#687777]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-2rem bg-[#173B3B] px-6 py-12 text-center sm:px-10 sm:py-16">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#8ED1C4]">
              Your Smile Matters
            </span>

            <h2 className="mx-auto mt-4 max-w-2xl font-[Manrope] text-3xl font-extrabold tracking-[-0.04em] text-white sm:text-4xl">
              Ready to take the next step?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#C5D5D2] sm:text-base">
              Whether you need a routine check-up or you're considering a new
              treatment, we're here to help you keep your smile healthy.
            </p>

            <Link
              to="/appointment"
              className="mt-7 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#173B3B] transition-colors hover:bg-[#EAF5F2]"
            >
              Schedule Your Visit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQ;
