import { useState, useEffect, useRef } from "react";

const ProgramCard = ({
  image,
  alt,
  title,
  description,
  date,
  participants,
  index,
  isVisible,
}) => (
  <div
    className={`bg-gray-50 rounded-lg overflow-hidden shadow-md hover:transform hover:-translate-y-2 hover:shadow-xl transition-all duration-700 relative group ${
      isVisible
        ? "transform translate-y-0 opacity-100 scale-100 rotate-0"
        : "transform translate-y-12 opacity-0 scale-90 rotate-1"
    }`}
    style={{
      transitionDelay: `${index * 200}ms`,
    }}
  >
    {/* Animated background overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

    <div className="relative h-48 overflow-hidden group">
      <img
        src={image}
        alt={alt}
        className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
          isVisible
            ? "transform scale-100 opacity-100"
            : "transform scale-105 opacity-0"
        }`}
        style={{ transitionDelay: `${index * 200 + 100}ms` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Image overlay animation */}
      <div
        className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-600/20 to-transparent transition-all duration-800 ${
          isVisible
            ? "transform translate-x-full opacity-0"
            : "transform translate-x-0 opacity-100"
        }`}
        style={{ transitionDelay: `${index * 200 + 300}ms` }}
      ></div>
    </div>

    <div className="p-6 relative z-20">
      <h3
        className={`text-xl font-semibold mb-2 transition-all duration-600 ${
          isVisible
            ? "transform translate-x-0 opacity-100"
            : "transform -translate-x-6 opacity-0"
        }`}
        style={{ transitionDelay: `${index * 200 + 400}ms` }}
      >
        {title}
      </h3>
      <p
        className={`text-gray-600 mb-4 leading-relaxed transition-all duration-600 ${
          isVisible
            ? "transform translate-x-0 opacity-100"
            : "transform translate-x-6 opacity-0"
        }`}
        style={{ transitionDelay: `${index * 200 + 500}ms` }}
      >
        {description}
      </p>
      <div
        className={`flex items-center text-sm text-gray-500 transition-all duration-600 ${
          isVisible
            ? "transform translate-y-0 opacity-100"
            : "transform translate-y-4 opacity-0"
        }`}
        style={{ transitionDelay: `${index * 200 + 600}ms` }}
      >
        <span className="flex items-center">
          <svg
            className="w-4 h-4 mr-1 text-green-600 transition-transform duration-300 group-hover:scale-110"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          {date}
        </span>
        <span className="mx-2">•</span>
        <span className="flex items-center">
          <svg
            className="w-4 h-4 mr-1 text-green-600 transition-transform duration-300 group-hover:scale-110"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          {participants}
        </span>
      </div>
    </div>

    {/* Animated bottom border */}
    <div
      className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-500 to-green-300 transition-all duration-800 ${
        isVisible ? "w-full opacity-100" : "w-0 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 200 + 700}ms` }}
    ></div>
  </div>
);

const ProgramUnggulan = () => {
  const [scrollElements, setScrollElements] = useState({
    backgroundElements: false,
    header: false,
    subtitle: false,
    cards: false,
    floatingElements: false,
  });

  const sectionRef = useRef(null);
  const backgroundRef = useRef(null);
  const headerRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef(null);
  const floatingRef = useRef(null);

  const programs = [
    {
      image:
        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/001ffebc-5b05-44d9-a9f9-d3afea31b877.png",
      alt: "Pelatihan pembuatan pupuk organik dengan bahan lokal",
      title: "Pelatihan Pembuatan Pupuk Organik",
      description:
        "Mengajarkan warga membuat pupuk dari bahan lokal untuk mengurangi biaya pertanian dan meningkatkan hasil panen.",
      date: "25 Juli 2023",
      participants: "30 Peserta",
    },
    {
      image:
        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8d587e40-b086-4c5b-a5ed-9febd82ed0bc.png",
      alt: "Workshop pemasaran digital produk UMKM desa",
      title: "Pelatihan Pemasaran Digital",
      description:
        "Memberikan pengetahuan tentang cara memasarkan produk UMKM melalui media sosial dan marketplace.",
      date: "1 Agustus 2023",
      participants: "15 UMKM",
    },
    {
      image:
        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/df9fd54e-830b-4cfb-b985-771d60426754.png",
      alt: "Pembuatan taman bacaan di balai desa",
      title: "Pembangunan Taman Bacaan",
      description:
        "Menyediakan sarana literasi untuk anak-anak dan remaja dengan koleksi buku pendidikan dan keterampilan.",
      date: "10 Agustus 2023",
      participants: "150+ Buku",
    },
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elementId = entry.target.dataset.scrollElement;

          setScrollElements((prev) => ({
            ...prev,
            [elementId]: true,
          }));
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Elements with staggered observation timing
    const elements = [
      { ref: backgroundRef, id: "backgroundElements", delay: 0 },
      { ref: headerRef, id: "header", delay: 200 },
      { ref: subtitleRef, id: "subtitle", delay: 400 },
      { ref: cardsRef, id: "cards", delay: 600 },
      { ref: floatingRef, id: "floatingElements", delay: 1000 },
    ];

    elements.forEach(({ ref, id, delay }) => {
      if (ref.current) {
        ref.current.dataset.scrollElement = id;

        // Add staggered observation
        setTimeout(() => {
          observer.observe(ref.current);
        }, delay);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="programs"
      className="py-16 bg-white relative overflow-hidden"
    >
      {/* Enhanced background decorative elements */}
      <div ref={backgroundRef} className="absolute inset-0">
        <div
          className={`absolute top-10 left-10 w-32 h-32 bg-green-600 rounded-full opacity-5 transition-all duration-1500 ${
            scrollElements.backgroundElements
              ? "transform scale-100 rotate-0"
              : "transform scale-0 rotate-45"
          }`}
        ></div>
        <div
          className={`absolute bottom-20 right-20 w-24 h-24 bg-green-400 rounded-full opacity-5 transition-all duration-1500 delay-300 ${
            scrollElements.backgroundElements
              ? "transform scale-100 rotate-0"
              : "transform scale-0 -rotate-45"
          }`}
        ></div>
        <div
          className={`absolute top-1/2 left-1/4 w-16 h-16 bg-green-300 rounded-full opacity-5 transition-all duration-1500 delay-600 ${
            scrollElements.backgroundElements
              ? "transform scale-100 rotate-0"
              : "transform scale-0 rotate-90"
          }`}
        ></div>
        <div
          className={`absolute top-1/3 right-1/3 w-20 h-20 bg-green-200 rounded-full opacity-5 transition-all duration-1500 delay-900 ${
            scrollElements.backgroundElements
              ? "transform scale-100 rotate-0"
              : "transform scale-0 -rotate-90"
          }`}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2
            ref={headerRef}
            className={`text-3xl font-bold text-gray-800 mb-2 transition-all duration-1000 ease-out ${
              scrollElements.header
                ? "transform translate-y-0 opacity-100 scale-100"
                : "transform -translate-y-8 opacity-0 scale-90"
            }`}
          >
            Program Unggulan KKN
          </h2>

          <div
            className={`transition-all duration-800 ease-out ${
              scrollElements.header
                ? "transform scale-x-100 opacity-100"
                : "transform scale-x-0 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <hr className="w-24 mx-auto my-4 border-t-2 border-green-600" />
          </div>

          <p
            ref={subtitleRef}
            className={`text-gray-600 max-w-2xl mx-auto transition-all duration-1000 ease-out ${
              scrollElements.subtitle
                ? "transform translate-y-0 opacity-100"
                : "transform translate-y-6 opacity-0"
            }`}
          >
            Berikut adalah program-program unggulan yang telah kami laksanakan
            selama KKN di Desa Mandiri dengan dampak positif bagi masyarakat.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              {...program}
              index={index}
              isVisible={scrollElements.cards}
            />
          ))}
        </div>

        {/* Enhanced floating elements */}
        <div ref={floatingRef} className="absolute inset-0 pointer-events-none">
          {/* Animated dots group - top right */}
          <div
            className={`absolute top-20 right-10 transition-all duration-1000 ${
              scrollElements.floatingElements
                ? "opacity-30 transform translate-y-0"
                : "opacity-0 transform -translate-y-4"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="w-2 h-2 bg-green-500 rounded-full mb-2 animate-pulse"></div>
            <div
              className="w-2 h-2 bg-green-400 rounded-full mb-2 animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="w-2 h-2 bg-green-300 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          {/* Additional floating elements */}
          <div
            className={`absolute bottom-32 left-10 w-3 h-3 bg-green-400 rounded-full transition-all duration-1000 ${
              scrollElements.floatingElements
                ? "opacity-25 animate-bounce transform translate-y-0"
                : "opacity-0 transform translate-y-4"
            }`}
            style={{ transitionDelay: "400ms" }}
          ></div>

          <div
            className={`absolute top-1/3 right-20 w-4 h-4 bg-green-300 rounded-full transition-all duration-1000 ${
              scrollElements.floatingElements
                ? "opacity-20 animate-pulse transform translate-y-0"
                : "opacity-0 transform translate-y-4"
            }`}
            style={{ transitionDelay: "600ms" }}
          ></div>

          <div
            className={`absolute bottom-1/4 right-1/4 w-2 h-2 bg-green-600 rounded-full transition-all duration-1000 ${
              scrollElements.floatingElements
                ? "opacity-30 animate-bounce transform translate-y-0"
                : "opacity-0 transform translate-y-4"
            }`}
            style={{ transitionDelay: "800ms" }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default ProgramUnggulan;
