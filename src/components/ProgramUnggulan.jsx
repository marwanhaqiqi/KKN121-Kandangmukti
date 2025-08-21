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
    className={`bg-gray-50 rounded-lg overflow-hidden shadow-md hover:transform hover:-translate-y-2 hover:shadow-xl transition-all duration-700 relative group max-w-xs mx-auto ${
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

    {/* Smaller Instagram feed size image container */}
    <div
      className="relative w-full overflow-hidden group"
      style={{ aspectRatio: "1", height: "200px" }}
    >
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

    {/* Responsive content section with reduced padding */}
    <div className="p-3 sm:p-4 relative z-20">
      <h3
        className={`text-base sm:text-lg font-semibold mb-2 transition-all duration-600 leading-tight ${
          isVisible
            ? "transform translate-x-0 opacity-100"
            : "transform -translate-x-6 opacity-0"
        }`}
        style={{ transitionDelay: `${index * 200 + 400}ms` }}
      >
        {title}
      </h3>
      <p
        className={`text-gray-600 mb-3 leading-relaxed text-xs sm:text-sm transition-all duration-600 ${
          isVisible
            ? "transform translate-x-0 opacity-100"
            : "transform translate-x-6 opacity-0"
        }`}
        style={{ transitionDelay: `${index * 200 + 500}ms` }}
      >
        {description}
      </p>
      <div
        className={`flex flex-col text-xs text-gray-500 gap-1 transition-all duration-600 ${
          isVisible
            ? "transform translate-y-0 opacity-100"
            : "transform translate-y-4 opacity-0"
        }`}
        style={{ transitionDelay: `${index * 200 + 600}ms` }}
      >
        <span className="flex items-center">
          <svg
            className="w-3 h-3 mr-1 text-green-600 transition-transform duration-300 group-hover:scale-110"
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
        <span className="flex items-center">{participants}</span>
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

const ProgramSections = () => {
  const [scrollElements, setScrollElements] = useState({
    backgroundElements: false,
    unggulanHeader: false,
    unggulanSubtitle: false,
    unggulanCards: false,
    kolaborasiHeader: false,
    kolaborasiSubtitle: false,
    kolaborasiCards: false,
    floatingElements: false,
  });

  const sectionRef = useRef(null);
  const backgroundRef = useRef(null);
  const unggulanHeaderRef = useRef(null);
  const unggulanSubtitleRef = useRef(null);
  const unggulanCardsRef = useRef(null);
  const kolaborasiHeaderRef = useRef(null);
  const kolaborasiSubtitleRef = useRef(null);
  const kolaborasiCardsRef = useRef(null);
  const floatingRef = useRef(null);

  const programsUnggulan = [
    {
      image: "./FotoProgram/bimbel.jpg",
      alt: "Program bimbingan belajar untuk anak-anak",
      title: "Bimbingan Belajar (Bimbel)",
      description:
        "Program pendampingan belajar untuk anak-anak desa guna meningkatkan kualitas pendidikan dan prestasi akademik mereka.",
      date: "28 Juli - 22 Agustus 2025",
    },
    {
      image: "./FotoProgram/phbs.jpg",
      alt: "Perilaku Hidup Bersih dan Sehat di RW 02",
      title: "Perilaku Hidup Bersih dan Sehat (PHBS)",
      description:
        "Program edukasi kesehatan masyarakat untuk meningkatkan kesadaran tentang pentingnya pola hidup sehat di lingkungan RW 02.",
      date: "05 Agustus 2025",
    },
    {
      image: "./FotoProgram/belom.png",
      alt: "Workshop pembuatan ekoenzim ramah lingkungan",
      title: "Ekoenzim",
      description:
        "Pelatihan pembuatan ekoenzim dari limbah organik sebagai solusi ramah lingkungan untuk pembersih alami dan pupuk cair.",
      date: "20 Agustus 2025",
    },
    {
      image: "./FotoProgram/belom.png",
      alt: "Pembuatan dan pemasangan plang sampah",
      title: "Plang Sampah",
      description:
        "Inisiatif pemasangan plang penanda tempat sampah untuk meningkatkan kesadaran masyarakat dalam pengelolaan sampah yang baik.",
      date: "?",
    },
  ];

  const programsKolaborasi = [
    {
      image: "./FotoProgram/pemulasaran.JPG",
      alt: "Kolaborasi dengan Puskesmas untuk program kesehatan",
      title: "Pemulasaran Jenazah",
      description:
        "Program Pemulasaran Jenazah adalah kolaborasi KKN 121, 122, dan 123 di Masjid Al-Ihya yang mengedukasi masyarakat tentang tata cara perawatan jenazah sesuai syariat Islam.",
      date: "13 Agustus 2025",
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
      { ref: unggulanHeaderRef, id: "unggulanHeader", delay: 200 },
      { ref: unggulanSubtitleRef, id: "unggulanSubtitle", delay: 400 },
      { ref: unggulanCardsRef, id: "unggulanCards", delay: 600 },
      { ref: kolaborasiHeaderRef, id: "kolaborasiHeader", delay: 800 },
      { ref: kolaborasiSubtitleRef, id: "kolaborasiSubtitle", delay: 1000 },
      { ref: kolaborasiCardsRef, id: "kolaborasiCards", delay: 1200 },
      { ref: floatingRef, id: "floatingElements", delay: 1400 },
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
    <div className="bg-white">
      {/* Program Unggulan Section */}
      <section
        ref={sectionRef}
        id="programs"
        className="py-12 sm:py-16 bg-white relative overflow-hidden"
      >
        {/* Enhanced background decorative elements */}
        <div ref={backgroundRef} className="absolute inset-0">
          <div
            className={`absolute top-10 left-4 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 bg-green-600 rounded-full opacity-5 transition-all duration-1500 ${
              scrollElements.backgroundElements
                ? "transform scale-100 rotate-0"
                : "transform scale-0 rotate-45"
            }`}
          ></div>
          <div
            className={`absolute bottom-20 right-4 sm:right-20 w-20 h-20 sm:w-24 sm:h-24 bg-green-400 rounded-full opacity-5 transition-all duration-1500 delay-300 ${
              scrollElements.backgroundElements
                ? "transform scale-100 rotate-0"
                : "transform scale-0 -rotate-45"
            }`}
          ></div>
          <div
            className={`absolute top-1/2 left-1/4 w-12 h-12 sm:w-16 sm:h-16 bg-green-300 rounded-full opacity-5 transition-all duration-1500 delay-600 ${
              scrollElements.backgroundElements
                ? "transform scale-100 rotate-0"
                : "transform scale-0 rotate-90"
            }`}
          ></div>
          <div
            className={`absolute top-1/3 right-1/3 w-16 h-16 sm:w-20 sm:h-20 bg-green-200 rounded-full opacity-5 transition-all duration-1500 delay-900 ${
              scrollElements.backgroundElements
                ? "transform scale-100 rotate-0"
                : "transform scale-0 -rotate-90"
            }`}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <h2
              ref={unggulanHeaderRef}
              className={`text-2xl sm:text-3xl font-bold text-gray-800 mb-2 transition-all duration-1000 ease-out ${
                scrollElements.unggulanHeader
                  ? "transform translate-y-0 opacity-100 scale-100"
                  : "transform -translate-y-8 opacity-0 scale-90"
              }`}
            >
              Program Unggulan KKN
            </h2>

            <div
              className={`transition-all duration-800 ease-out ${
                scrollElements.unggulanHeader
                  ? "transform scale-x-100 opacity-100"
                  : "transform scale-x-0 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <hr className="w-20 sm:w-24 mx-auto my-4 border-t-2 border-green-600" />
            </div>

            <p
              ref={unggulanSubtitleRef}
              className={`text-gray-600 max-w-2xl mx-auto px-4 text-sm sm:text-base transition-all duration-1000 ease-out ${
                scrollElements.unggulanSubtitle
                  ? "transform translate-y-0 opacity-100"
                  : "transform translate-y-6 opacity-0"
              }`}
            >
              Program-program utama yang telah kami laksanakan dengan fokus pada
              pemberdayaan masyarakat dan pengembangan desa yang berkelanjutan.
            </p>
          </div>

          {/* Grid layout optimized for 4 items in one row */}
          <div
            ref={unggulanCardsRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
          >
            {programsUnggulan.map((program, index) => (
              <ProgramCard
                key={index}
                {...program}
                index={index}
                isVisible={scrollElements.unggulanCards}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Program Kolaborasi Section */}
      <section className="py-12 sm:py-16 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <h2
              ref={kolaborasiHeaderRef}
              className={`text-2xl sm:text-3xl font-bold text-gray-800 mb-2 transition-all duration-1000 ease-out ${
                scrollElements.kolaborasiHeader
                  ? "transform translate-y-0 opacity-100 scale-100"
                  : "transform -translate-y-8 opacity-0 scale-90"
              }`}
            >
              Program Kolaborasi
            </h2>

            <div
              className={`transition-all duration-800 ease-out ${
                scrollElements.kolaborasiHeader
                  ? "transform scale-x-100 opacity-100"
                  : "transform scale-x-0 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <hr className="w-20 sm:w-24 mx-auto my-4 border-t-2 border-blue-600" />
            </div>

            <p
              ref={kolaborasiSubtitleRef}
              className={`text-gray-600 max-w-2xl mx-auto px-4 text-sm sm:text-base transition-all duration-1000 ease-out ${
                scrollElements.kolaborasiSubtitle
                  ? "transform translate-y-0 opacity-100"
                  : "transform translate-y-6 opacity-0"
              }`}
            >
              Program kerjasama dengan berbagai pihak untuk menciptakan sinergi
              yang lebih kuat dalam pembangunan dan kemajuan Desa Kandangmukti.
            </p>
          </div>

          {/* Grid layout for collaboration programs */}
          <div
            ref={kolaborasiCardsRef}
            className="grid grid-cols-1 lg:grid-cols-1"
          >
            {programsKolaborasi.map((program, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg overflow-hidden shadow-md hover:transform hover:-translate-y-2 hover:shadow-xl transition-all duration-700 relative group max-w-xs mx-auto ${
                  scrollElements.kolaborasiCards
                    ? "transform translate-y-0 opacity-100 scale-100 rotate-0"
                    : "transform translate-y-12 opacity-0 scale-90 rotate-1"
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`,
                }}
              >
                {/* Blue gradient overlay for collaboration theme */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

                <div
                  className="relative w-full overflow-hidden group bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center"
                  style={{ aspectRatio: "1", height: "200px" }}
                >
                  {program.image ? (
                    <img
                      src={program.image}
                      alt={program.alt}
                      className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                        scrollElements.kolaborasiCards
                          ? "transform scale-100 opacity-100"
                          : "transform scale-105 opacity-0"
                      }`}
                      style={{ transitionDelay: `${index * 200 + 100}ms` }}
                    />
                  ) : (
                    <svg
                      className="w-16 h-16 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20v-2a3 3 0 015.356-1.857M7 20H2v-2a3 3 0 005.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  )}
                </div>

                <div className="p-3 sm:p-4 relative z-20">
                  <h3
                    className={`text-base sm:text-lg font-semibold mb-2 transition-all duration-600 leading-tight ${
                      scrollElements.kolaborasiCards
                        ? "transform translate-x-0 opacity-100"
                        : "transform -translate-x-6 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 200 + 400}ms` }}
                  >
                    {program.title}
                  </h3>
                  <p
                    className={`text-gray-600 mb-3 leading-relaxed text-xs sm:text-sm transition-all duration-600 ${
                      scrollElements.kolaborasiCards
                        ? "transform translate-x-0 opacity-100"
                        : "transform translate-x-6 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 200 + 500}ms` }}
                  >
                    {program.description}
                  </p>
                  <div
                    className={`flex flex-col text-xs text-gray-500 gap-1 transition-all duration-600 ${
                      scrollElements.kolaborasiCards
                        ? "transform translate-y-0 opacity-100"
                        : "transform translate-y-4 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 200 + 600}ms` }}
                  >
                    <span className="flex items-center">
                      <svg
                        className="w-3 h-3 mr-1 text-blue-600 transition-transform duration-300 group-hover:scale-110"
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
                      {program.date}
                    </span>
                    <span className="flex items-center">
                      {program.participants}
                    </span>
                  </div>
                </div>

                {/* Blue bottom border for collaboration theme */}
                <div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-blue-300 transition-all duration-800 ${
                    scrollElements.kolaborasiCards
                      ? "w-full opacity-100"
                      : "w-0 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 200 + 700}ms` }}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced floating elements */}
        <div ref={floatingRef} className="absolute inset-0 pointer-events-none">
          <div
            className={`absolute top-16 sm:top-20 right-4 sm:right-10 transition-all duration-1000 ${
              scrollElements.floatingElements
                ? "opacity-30 transform translate-y-0"
                : "opacity-0 transform -translate-y-4"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mb-1.5 sm:mb-2 animate-pulse"></div>
            <div
              className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full mb-1.5 sm:mb-2 animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-300 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          <div
            className={`absolute bottom-24 sm:bottom-32 left-4 sm:left-10 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-400 rounded-full transition-all duration-1000 ${
              scrollElements.floatingElements
                ? "opacity-25 animate-bounce transform translate-y-0"
                : "opacity-0 transform translate-y-4"
            }`}
            style={{ transitionDelay: "400ms" }}
          ></div>
        </div>
      </section>
    </div>
  );
};

export default ProgramSections;
