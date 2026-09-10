import {
  Star,
  ArrowRight,
  CalendarDays,
  Stethoscope,
} from "lucide-react";

import doctor1 from "../../images/doctor-1.jpg"
import doctor2 from "../../images/doctor-2.jpg"
import doctor3 from "../../images/doctor-3.jpg"
import { Link } from "react-router-dom";

const FindDoctor = () => {
  const doctors = [
    {
      name: "Dr. Sarah Williams",
      specialty: "General Dentist",
      image: doctor1,
      rating: "4.9",
      reviews: "124",
    },
    {
      name: "Dr. Michael Anderson",
      specialty: "Cosmetic Dentist",
      image: doctor2,
      rating: "4.8",
      reviews: "98",
    },
    {
      name: "Dr. Emily Carter",
      specialty: "Restorative Dentist",
      image: doctor3,
      rating: "4.9",
      reviews: "116",
    },
  ];

  return (
    <section className="bg-[#f6f9fc] py-20 lg:py-28">
      <div className="mx-auto max-w-[1550px] px-6 lg:px-8">

        {/* Heading */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#0F766E]">
              Find a Doctor
            </p>

            <h2 className="mt-3 font-[Manrope] text-3xl font-extrabold leading-[1.12] tracking-[-0.04em] text-[#173B3B] sm:text-4xl lg:text-5xl">
              Meet Our
              <span className="text-[#0F766E]"> Dental Specialists</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-[#617171]">
              Our experienced dental professionals are here to provide
              personalized care and help you achieve your healthiest smile.
            </p>
          </div>

          <Link
            a="/doctors"
            className="inline-flex items-center text-sm font-semibold text-[#0F766E]"
          >
            View All Doctors
            <ArrowRight
              size={17}
              strokeWidth={2}
              className="ml-2"
            />
          </Link>
        </div>

        {/* Doctors */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <article
              key={doctor.name}
              className="group overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(23,59,59,0.06)]"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-360px w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-[#173B3B]/80 via-[#173B3B]/30 to-transparent px-6 pb-5 pt-20">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={14}
                        fill="currentColor"
                        strokeWidth={1.5}
                        className="text-white"
                      />
                    ))}

                    <span className="ml-2 text-xs font-medium text-white">
                      {doctor.rating} ({doctor.reviews})
                    </span>
                  </div>
                </div>
              </div>

              {/* Doctor Info */}
              <div className="p-6">
                <h3 className="font-[Manrope] text-xl font-bold text-[#173B3B]">
                  {doctor.name}
                </h3>

                <div className="mt-2 flex items-center gap-2 text-sm text-[#0F766E]">
                  <Stethoscope
                    size={16}
                    strokeWidth={1.8}
                  />

                  <span>{doctor.specialty}</span>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-[#E8EEEC] pt-5">
                  <Link
                    to="/appointment"
                    className="inline-flex items-center text-sm font-semibold text-[#0F766E]"
                  >
                    Book Appointment
                    <CalendarDays
                      size={15}
                      strokeWidth={1.8}
                      className="ml-2"
                    />
                  </Link>

                  <Link
                    to="/doctors"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#DDE7E5] text-[#526565] transition-colors hover:border-[#0F766E] hover:text-[#0F766E]"
                    aria-label={`View ${doctor.name}`}
                  >
                    <ArrowRight
                      size={16}
                      strokeWidth={1.8}
                    />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FindDoctor;