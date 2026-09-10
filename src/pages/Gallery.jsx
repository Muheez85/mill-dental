
import { useState } from "react";
import {  Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";

import gallery1 from "../images/dental-gallery-1.jpg";
import gallery2 from "../images/dental-gallery-2.jpg";
import gallery3 from "../images/dental-gallery-3.jpg";
import gallery4 from "../images/dental-gallery-4.jpg";
import gallery5 from "../images/dental-gallery-5.jpg";
import gallery6 from "../images/dental-gallery-6.jpg";
import gallery7 from "../images/dental-gallery-7.jpg";
import gallery8 from "../images/dental-gallery-8.jpg";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Clinic", "Treatments", "Smiles"];

const galleryItems = [
  {
    id: 1,
    category: "Clinic",
    title: "Our Modern Dental Clinic",
    image: gallery1,
    size: "large",
  },
  {
    id: 2,
    category: "Treatments",
    title: "Professional Dental Care",
    image: gallery2,
    size: "normal",
  },
  {
    id: 3,
    category: "Smiles",
    title: "Confident, Healthy Smiles",
    image: gallery3,
    size: "normal",
  },
  {
    id: 4,
    category: "Clinic",
    title: "Comfortable Treatment Rooms",
    image: gallery4,
    size: "normal",
  },
  {
    id: 5,
    category: "Treatments",
    title: "Modern Dental Technology",
    image: gallery5,
    size: "normal",
  },
  {
    id: 6,
    category: "Smiles",
    title: "A Smile Worth Sharing",
    image: gallery6,
    size: "large",
  },
  {
    id: 7,
    category: "Clinic",
    title: "Designed Around Your Comfort",
    image: gallery7,
    size: "normal",
  },
  {
    id: 8,
    category: "Treatments",
    title: "Expert Dental Treatment",
    image: gallery8,
    size: "normal",
  },
];
  const filteredItems =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <main className="min-h-screen bg-[#F8FBFA]">
      {/* =====================================================
          PAGE HERO
      ====================================================== */}
      <section className="px-4 pb-14 pt-36 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.18em] text-[#0F766E]">
              Our Gallery
            </span>

            <h1 className="font-[Manrope] text-4xl font-extrabold tracking-[-0.04em] text-[#173B3B] sm:text-5xl lg:text-6xl">
              A closer look at Mill Dental
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#687777] sm:text-lg">
              Take a look inside our clinic, explore our approach to dental
              care, and see the environment we've created to make every visit
              comfortable.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          GALLERY
      ====================================================== */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          {/* FILTERS */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveFilter(category)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                  activeFilter === category
                    ? "bg-[#0F766E] text-white shadow-sm"
                    : "bg-white text-[#526565] hover:bg-[#EAF5F2] hover:text-[#0F766E]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* IMAGE GRID */}
         <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
  {filteredItems.map((item) => (
    <div
      key={item.id}
      className={`group relative overflow-hidden rounded-3xl bg-[#EAF5F2] ${
        item.size === "large"
          ? "sm:row-span-2 min-h-125"
          : "min-h-87.5"
      }`}
    >
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-linear-to-t from-[#173B3B]/85 via-[#173B3B]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* CONTENT */}
                <div className="absolute inset-x-0 bottom-0 translate-y-4 p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#A9D9D0]">
                        {item.category}
                      </span>

                      <h2 className="mt-2 font-[Manrope] text-xl font-bold text-white">
                        {item.title}
                      </h2>
                    </div>

                    {/* <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#173B3B]">
                      <ArrowUpRight size={18} strokeWidth={1.8} />
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* EMPTY STATE */}
          {filteredItems.length === 0 && (
            <div className="flex flex-col items-center justify-center rounded-3xl bg-white px-6 py-16 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF5F2] text-[#0F766E]">
                <ImageIcon size={24} strokeWidth={1.8} />
              </div>

              <h2 className="mt-5 font-[Manrope] text-xl font-bold text-[#173B3B]">
                No images found
              </h2>

              <p className="mt-2 text-sm text-[#687777]">
                Try selecting another category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2rem bg-[#EAF5F2] px-6 py-12 text-center sm:px-10 sm:py-16">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#0F766E]">
              Your Smile Starts Here
            </span>

            <h2 className="mx-auto mt-4 max-w-2xl font-[Manrope] text-3xl font-extrabold tracking-[-0.04em] text-[#173B3B] sm:text-4xl">
              Ready to make your next visit different?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#687777] sm:text-base">
              Get the dental care you deserve in a modern, comfortable
              environment designed around you.
            </p>

            <Link
              to="/appointment"
              className="mt-7 inline-flex rounded-full bg-[#0F766E] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#115E59]"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;

