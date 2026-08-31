import DoctorCard from "../../components/DoctorCard";

const TeamGrid = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Adeyemi",
      role: "Lead Dentist",
      specialty: "General & Cosmetic Dentistry",
      image: "/images/team/doctor-1.jpg",
    },
    {
      id: 2,
      name: "Dr. Michael Okafor",
      role: "Dental Surgeon",
      specialty: "Restorative & Implant Dentistry",
      image: "/images/team/doctor-2.jpg",
    },
    {
      id: 3,
      name: "Dr. Aisha Bello",
      role: "Cosmetic Dentist",
      specialty: "Cosmetic Dentistry & Smile Design",
      image: "/images/team/doctor-3.jpg",
    },
    {
      id: 4,
      name: "Dr. Daniel Williams",
      role: "Pediatric Dentist",
      specialty: "Children's & Preventive Dentistry",
      image: "/images/team/doctor-4.jpg",
    },
  ];

  return (
    <section className="bg-[#FAFCFB] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
            Our Team
          </p>

          <h2 className="font-[Manrope] text-3xl font-extrabold tracking-tight text-[#173B3B] sm:text-4xl">
            Meet the people behind your smile
          </h2>

          <p className="mt-5 text-base leading-7 text-[#687776]">
            Our experienced dental professionals are committed to providing
            thoughtful, comfortable, and personalized care for every patient.
          </p>
        </div>

        {/* Doctors */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              name={doctor.name}
              role={doctor.role}
              specialty={doctor.specialty}
              image={doctor.image}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamGrid;