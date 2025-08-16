import { useState, useEffect, useRef } from "react";
import { MapPin, Users, Briefcase } from "lucide-react";

const ProfileCard = ({ icon: Icon, title, description, index, isVisible }) => (
  <div
    className={`bg-white p-6 rounded-lg shadow-md hover:transform hover:-translate-y-2 hover:shadow-xl transition-all duration-700 relative overflow-hidden group ${
      isVisible
        ? "transform rotate-0 opacity-100 scale-100"
        : "transform -rotate-3 opacity-0 scale-90"
    }`}
    style={{
      transitionDelay: `${index * 150}ms`,
    }}
  >
    {/* Animated background gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    {/* Floating icon container */}
    <div
      className={`text-green-600 mb-4 relative z-10 transition-all duration-500 ${
        isVisible
          ? "transform translate-y-0 rotate-0"
          : "transform translate-y-4 -rotate-12"
      }`}
      style={{ transitionDelay: `${index * 150 + 100}ms` }}
    >
      <div className="relative">
        <Icon className="h-10 w-10 group-hover:scale-110 transition-transform duration-300" />
        {/* Icon glow effect */}
        <div className="absolute inset-0 bg-green-200 rounded-full opacity-0 group-hover:opacity-30 group-hover:scale-150 transition-all duration-500"></div>
      </div>
    </div>

    <h3
      className={`text-xl font-semibold mb-2 relative z-10 transition-all duration-600 ${
        isVisible
          ? "transform translate-x-0 opacity-100"
          : "transform -translate-x-4 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 150 + 200}ms` }}
    >
      {title}
    </h3>

    <p
      className={`text-gray-600 relative z-10 leading-relaxed transition-all duration-600 ${
        isVisible
          ? "transform translate-x-0 opacity-100"
          : "transform translate-x-4 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 150 + 300}ms` }}
    >
      {description}
    </p>

    {/* Animated border */}
    <div
      className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-500 to-green-300 transition-all duration-700 ${
        isVisible ? "w-full" : "w-0"
      }`}
      style={{ transitionDelay: `${index * 150 + 400}ms` }}
    ></div>
  </div>
);

const ProfileDesa = () => {
  const [scrollElements, setScrollElements] = useState({
    header: false,
    subtitle: false,
    cards: false,
    statistics: false,
    backgroundElements: false,
    floatingElements: false,
  });

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef(null);
  const statisticsRef = useRef(null);
  const backgroundRef = useRef(null);
  const floatingRef = useRef(null);

  const profileData = [
    {
      icon: MapPin,
      title: "Letak Geografis",
      description:
        "Desa terletak di dataran rendah dengan ketinggian 50-100 mdpl, memiliki lahan pertanian subur dan sungai yang mengalir di bagian timur.",
    },
    {
      icon: Users,
      title: "Demografi",
      description:
        "Jumlah penduduk 2.543 jiwa, dengan mayoritas bekerja sebagai petani, pedagang, dan pengrajin kerajinan tangan.",
    },
    {
      icon: Briefcase,
      title: "Potensi Desa",
      description:
        "Hasil pertanian meliputi padi, sayuran, dan buah-buahan. UMKM berkembang di bidang kerajinan tangan dan makanan olahan.",
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
      { ref: statisticsRef, id: "statistics", delay: 800 },
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
      id="profile"
      className="py-16 bg-gray-50 relative overflow-hidden"
    >
      {/* Animated background patterns */}
      <div ref={backgroundRef} className="absolute inset-0">
        <div
          className={`absolute top-0 left-0 w-full h-full transition-all duration-1500 ease-out ${
            scrollElements.backgroundElements
              ? "transform translate-x-0 opacity-100"
              : "transform -translate-x-full opacity-0"
          }`}
        >
          <div className="w-64 h-64 bg-green-100 rounded-full absolute -top-32 -left-32 opacity-20"></div>
        </div>
        <div
          className={`absolute bottom-0 right-0 w-full h-full transition-all duration-1500 ease-out delay-300 ${
            scrollElements.backgroundElements
              ? "transform translate-x-0 opacity-100"
              : "transform translate-x-full opacity-0"
          }`}
        >
          <div className="w-96 h-96 bg-green-50 rounded-full absolute -bottom-48 -right-48 opacity-30"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header with scroll animation */}
        <div className="text-center mb-12">
          <h2
            ref={headerRef}
            className={`text-3xl font-bold text-gray-800 mb-2 transition-all duration-1000 ease-out ${
              scrollElements.header
                ? "transform scale-100 opacity-100 translate-y-0"
                : "transform scale-75 opacity-0 translate-y-8"
            }`}
          >
            Profil Desa Kandangmukti
          </h2>

          {/* Animated underline with dots */}
          <div className="relative flex items-center justify-center my-4">
            <div
              className={`transition-all duration-800 ease-out ${
                scrollElements.header
                  ? "transform scale-x-100 opacity-100"
                  : "transform scale-x-0 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <hr className="w-24 border-t-2 border-green-600" />
            </div>
            <div
              className={`absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-green-600 rounded-full transition-all duration-500 ${
                scrollElements.header
                  ? "scale-100 opacity-100"
                  : "scale-0 opacity-0"
              }`}
              style={{ transitionDelay: "400ms" }}
            ></div>
          </div>

          <p
            ref={subtitleRef}
            className={`text-gray-600 max-w-2xl mx-auto transition-all duration-1000 ease-out ${
              scrollElements.subtitle
                ? "transform translate-y-0 opacity-100"
                : "transform translate-y-6 opacity-0"
            }`}
          >
            Desa Kandangmukti terletak di Kecamatan Leles, Kabupaten Garut
            dengan potensi pertanian dan UMKM yang berkembang pesat.
          </p>
        </div>

        {/* Cards with enhanced scroll animation */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {profileData.map((item, index) => (
            <ProfileCard
              key={index}
              {...item}
              index={index}
              isVisible={scrollElements.cards}
            />
          ))}
        </div>

        {/* Statistics bar with scroll animation */}
        <div
          ref={statisticsRef}
          className={`mt-12 bg-white rounded-2xl p-6 shadow-lg transition-all duration-1000 ease-out ${
            scrollElements.statistics
              ? "transform translate-y-0 opacity-100 scale-100"
              : "transform translate-y-8 opacity-0 scale-95"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div
              className={`transition-all duration-600 ${
                scrollElements.statistics
                  ? "transform translate-y-0 opacity-100"
                  : "transform translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              <div className="text-2xl font-bold text-green-600 mb-1">
                2.543
              </div>
              <div className="text-sm text-gray-500">Total Penduduk</div>
            </div>
            <div
              className={`transition-all duration-600 ${
                scrollElements.statistics
                  ? "transform translate-y-0 opacity-100"
                  : "transform translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="text-2xl font-bold text-green-600 mb-1">15+</div>
              <div className="text-sm text-gray-500">UMKM Aktif</div>
            </div>
            <div
              className={`transition-all duration-600 ${
                scrollElements.statistics
                  ? "transform translate-y-0 opacity-100"
                  : "transform translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="text-2xl font-bold text-green-600 mb-1">85%</div>
              <div className="text-sm text-gray-500">Sektor Pertanian</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced floating decorative elements */}
      <div ref={floatingRef} className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-20 left-10 w-6 h-6 bg-green-300 rounded-full transition-all duration-1000 ${
            scrollElements.floatingElements
              ? "opacity-20 animate-bounce transform translate-y-0"
              : "opacity-0 transform translate-y-4"
          }`}
          style={{ transitionDelay: "200ms" }}
        ></div>
        <div
          className={`absolute bottom-32 right-16 w-4 h-4 bg-green-400 rounded-full transition-all duration-1000 ${
            scrollElements.floatingElements
              ? "opacity-25 animate-pulse transform translate-y-0"
              : "opacity-0 transform translate-y-4"
          }`}
          style={{ transitionDelay: "400ms" }}
        ></div>
        <div
          className={`absolute top-1/3 left-1/4 w-3 h-3 bg-green-200 rounded-full transition-all duration-1000 ${
            scrollElements.floatingElements
              ? "opacity-30 animate-bounce transform translate-y-0"
              : "opacity-0 transform translate-y-4"
          }`}
          style={{ transitionDelay: "600ms" }}
        ></div>
        <div
          className={`absolute bottom-1/4 left-10 w-5 h-5 bg-green-100 rounded-full transition-all duration-1000 ${
            scrollElements.floatingElements
              ? "opacity-20 animate-pulse transform translate-y-0"
              : "opacity-0 transform translate-y-4"
          }`}
          style={{ transitionDelay: "800ms" }}
        ></div>
      </div>
    </section>
  );
};

export default ProfileDesa;
