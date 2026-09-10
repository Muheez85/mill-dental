import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-[#F8FBFA]">
      {/* =====================================================
          PAGE HERO
      ====================================================== */}
      <section className="px-4 pb-14 pt-36 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.18em] text-[#0F766E]">
              Your Privacy
            </span>

            <h1 className="font-[Manrope] text-4xl font-extrabold tracking-[-0.04em] text-[#173B3B] sm:text-5xl lg:text-6xl">
              Privacy Policy
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#687777] sm:text-lg">
              We respect your privacy and are committed to protecting the
              personal information you share with us.
            </p>

            <p className="mt-4 text-sm text-[#82908E]">
              Last updated: August 29, 2026
            </p>
          </div>
        </div>
      </section>

      {/* policy content */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-4xl">
          <article className="rounded-3xl border border-[#E4ECE9] bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.03)] sm:p-8 lg:p-12">
            {/* INTRODUCTION */}
            <div>
              <h2 className="font-[Manrope] text-2xl font-extrabold tracking-[-0.03em] text-[#173B3B]">
                1. Introduction
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#687777] sm:text-base">
                This Privacy Policy explains how Mill Dental collects, uses,
                stores, and protects information when you visit our website,
                contact us, or use our dental services. By using our website,
                you agree to the practices described in this policy.
              </p>
            </div>

            {/* INFORMATION WE COLLECT */}
            <div className="mt-10 border-t border-[#E8EEEC] pt-10">
              <h2 className="font-[Manrope] text-2xl font-extrabold tracking-[-0.03em] text-[#173B3B]">
                2. Information We Collect
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#687777] sm:text-base">
                We may collect information that you voluntarily provide when
                you contact us, request an appointment, or communicate with our
                team.
              </p>

              <ul className="mt-4 space-y-3 pl-5 text-sm leading-7 text-[#687777] sm:text-base">
                <li className="list-disc">
                  Name and contact information.
                </li>
                <li className="list-disc">
                  Appointment and enquiry details.
                </li>
                <li className="list-disc">
                  Information you provide when communicating with our team.
                </li>
                <li className="list-disc">
                  Website usage and technical information, where applicable.
                </li>
              </ul>
            </div>

            {/* HOW WE USE INFORMATION */}
            <div className="mt-10 border-t border-[#E8EEEC] pt-10">
              <h2 className="font-[Manrope] text-2xl font-extrabold tracking-[-0.03em] text-[#173B3B]">
                3. How We Use Your Information
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#687777] sm:text-base">
                Information collected may be used to provide and manage our
                services, respond to enquiries, schedule appointments, improve
                our website, and communicate important information about your
                interactions with Mill Dental.
              </p>
            </div>

            {/* DENTAL / HEALTH INFORMATION */}
            <div className="mt-10 border-t border-[#E8EEEC] pt-10">
              <h2 className="font-[Manrope] text-2xl font-extrabold tracking-[-0.03em] text-[#173B3B]">
                4. Dental and Health Information
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#687777] sm:text-base">
                Where you provide health or dental information as part of your
                care, we handle that information responsibly and only use it
                for purposes connected with providing appropriate dental care,
                managing your appointments, and meeting applicable legal or
                professional obligations.
              </p>
            </div>

            {/* INFORMATION SHARING */}
            <div className="mt-10 border-t border-[#E8EEEC] pt-10">
              <h2 className="font-[Manrope] text-2xl font-extrabold tracking-[-0.03em] text-[#173B3B]">
                5. Sharing Your Information
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#687777] sm:text-base">
                We do not sell your personal information. Information may only
                be shared where necessary to provide our services, operate our
                website, work with trusted service providers, or comply with
                legal requirements.
              </p>
            </div>

            {/* DATA SECURITY */}
            <div className="mt-10 border-t border-[#E8EEEC] pt-10">
              <h2 className="font-[Manrope] text-2xl font-extrabold tracking-[-0.03em] text-[#173B3B]">
                6. Data Security
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#687777] sm:text-base">
                We take reasonable steps to protect the information we hold
                against unauthorised access, alteration, disclosure, or
                destruction. However, no method of transmitting or storing
                information online can be guaranteed to be completely secure.
              </p>
            </div>

            {/* COOKIES */}
            <div className="mt-10 border-t border-[#E8EEEC] pt-10">
              <h2 className="font-[Manrope] text-2xl font-extrabold tracking-[-0.03em] text-[#173B3B]">
                7. Cookies
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#687777] sm:text-base">
                Our website may use cookies or similar technologies to improve
                functionality, understand website usage, and provide a better
                experience. You can manage cookie preferences through your
                browser settings.
              </p>
            </div>

            {/* THIRD PARTY LINKS */}
            <div className="mt-10 border-t border-[#E8EEEC] pt-10">
              <h2 className="font-[Manrope] text-2xl font-extrabold tracking-[-0.03em] text-[#173B3B]">
                8. Third-Party Websites
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#687777] sm:text-base">
                Our website may contain links to third-party websites or
                services. We are not responsible for the privacy practices or
                content of websites that we do not operate.
              </p>
            </div>

            {/* YOUR RIGHTS */}
            <div className="mt-10 border-t border-[#E8EEEC] pt-10">
              <h2 className="font-[Manrope] text-2xl font-extrabold tracking-[-0.03em] text-[#173B3B]">
                9. Your Rights
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#687777] sm:text-base">
                Depending on applicable law, you may have rights relating to
                the personal information we hold about you, including the
                right to request access, correction, or deletion of certain
                information.
              </p>
            </div>

            {/* POLICY UPDATES */}
            <div className="mt-10 border-t border-[#E8EEEC] pt-10">
              <h2 className="font-[Manrope] text-2xl font-extrabold tracking-[-0.03em] text-[#173B3B]">
                10. Changes to This Policy
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#687777] sm:text-base">
                We may update this Privacy Policy from time to time to reflect
                changes to our services, website, or legal requirements. Any
                updates will be posted on this page with a revised date.
              </p>
            </div>

            {/* CONTACT */}
            <div className="mt-10 border-t border-[#E8EEEC] pt-10">
              <h2 className="font-[Manrope] text-2xl font-extrabold tracking-[-0.03em] text-[#173B3B]">
                11. Contact Us
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#687777] sm:text-base">
                If you have questions about this Privacy Policy or how your
                information is handled, please contact Mill Dental through
                the contact details provided on our website.
              </p>

              <Link
                to="/contact"
                className="mt-6 inline-flex rounded-full bg-[#0F766E] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#115E59]"
              >
                Contact Mill Dental
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;

