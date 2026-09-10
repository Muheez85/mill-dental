import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import doctor1 from "../../images/doctor-1.jpg";
import doctor2 from "../../images/doctor-2.jpg";
import doctor3 from "../../images/doctor-3.jpg";

const doctors = [
  {
    name: "Dr. Sarah Williams",
    role: "Lead Dentist",
    image: doctor1,
  },
  {
    name: "Dr. Michael Anderson",
    role: "Cosmetic Dentist",
    image: doctor2,
  },
  {
    name: "Dr. Emily Carter",
    role: "Restorative Dentist",
    image: doctor3,
  },
  {
    name: "Dr. James Wilson",
    role: "Orthodontist",
    image: doctor1,
  },
];

const Team = () => {
  return (
    <section className="bg-[#f7faf9] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-1200px px-5 sm:px-6">

        {/* Header */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

          <div className="max-w-xl">

            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#0F766E]">
              Our Team
            </p>

            <h2 className="mt-3 font-[Manrope] text-3xl font-extrabold tracking-[-0.04em] text-[#173B3B] sm:text-4xl">
              Meet the People Behind
              <span className="text-[#0F766E]"> Your Smile</span>
            </h2>

            <p className="mt-4 text-sm leading-6 text-[#617171]">
              Our dedicated dental professionals work together to provide
              personalized and comfortable care for every patient.
            </p>

          </div>

          <Link
            to="/team"
            className="flex w-fit items-center text-sm font-semibold text-[#0F766E]"
          >
            Meet Our Full Team

            <ArrowRight
              size={16}
              strokeWidth={1.8}
              className="ml-2"
            />
          </Link>

        </div>

        {/* Team Grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {doctors.map((doctor) => (
            <article
              key={doctor.name}
              className="overflow-hidden rounded-xl bg-white shadow-[0_5px_20px_rgba(0,0,0,0.05)]"
            >

              <div className="h-260px overflow-hidden bg-[#e9efee]">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-5">

                <h3 className="font-[Manrope] text-base font-bold text-[#173B3B]">
                  {doctor.name}
                </h3>

                <p className="mt-1 text-xs font-medium text-[#0F9AB7]">
                  {doctor.role}
                </p>

                <Link
                  to="/team"
                  className="mt-4 inline-flex items-center text-xs font-semibold text-[#0F766E]"
                >
                  View Profile

                  <ArrowRight
                    size={14}
                    strokeWidth={1.8}
                    className="ml-1.5"
                  />
                </Link>

              </div>

            </article>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Team;
