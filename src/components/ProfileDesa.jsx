import { useState, useEffect, useRef } from "react";
import { MapPin, Users, Briefcase, Camera, Mountain, Leaf } from "lucide-react";

const ProfileCard = ({ icon: Icon, title, description, index, isVisible }) => (
  <div
    className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-700 relative overflow-hidden group ${
      isVisible
        ? "transform rotate-0 opacity-100 scale-100"
        : "transform -rotate-3 opacity-0 scale-90"
    }`}
    style={{
      transitionDelay: `${index * 150}ms`,
    }}
  >
    {/* Header section with icon and gradient background */}
    <div className="relative bg-gradient-to-br from-green-400 via-emerald-400 to-teal-400 p-6 sm:p-8">
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-300/50 to-emerald-300/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Floating geometric shapes */}
      <div className="absolute top-2 right-2 w-16 h-16 bg-white/10 rounded-full opacity-30 group-hover:scale-110 transition-transform duration-500"></div>
      <div className="absolute bottom-2 left-2 w-8 h-8 bg-white/20 rotate-45 opacity-40 group-hover:rotate-90 transition-transform duration-700"></div>

      {/* Main icon - centered and larger */}
      <div
        className={`flex items-center justify-center mb-4 transition-all duration-500 ${
          isVisible
            ? "transform translate-y-0 rotate-0 opacity-100"
            : "transform translate-y-4 -rotate-12 opacity-0"
        } group-hover:scale-110`}
        style={{ transitionDelay: `${index * 150 + 100}ms` }}
      >
        <div className="bg-white/90 p-4 sm:p-5 rounded-full shadow-lg backdrop-blur-sm group-hover:bg-white transition-all duration-300">
          <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-green-600 group-hover:text-green-700 transition-colors duration-300" />
        </div>
      </div>

      {/* Title in header */}
      <h3
        className={`text-lg sm:text-xl font-bold text-center text-white mb-2 transition-all duration-600 ${
          isVisible
            ? "transform translate-y-0 opacity-100"
            : "transform translate-y-4 opacity-0"
        } group-hover:scale-105`}
        style={{ transitionDelay: `${index * 150 + 200}ms` }}
      >
        {title}
      </h3>

      {/* Animated border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 transition-all duration-500 rounded-t-xl"></div>
    </div>

    {/* Content section - responsive padding */}
    <div className="p-4 sm:p-6 relative">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <p
        className={`text-sm sm:text-base text-gray-600 relative z-10 leading-relaxed text-center transition-all duration-600 group-hover:text-gray-700 ${
          isVisible
            ? "transform translate-y-0 opacity-100"
            : "transform translate-y-4 opacity-0"
        }`}
        style={{ transitionDelay: `${index * 150 + 300}ms` }}
      >
        {description}
      </p>

      {/* Animated bottom accent */}
      <div
        className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-500 via-emerald-400 to-teal-300 transition-all duration-700 ${
          isVisible ? "w-full" : "w-0"
        }`}
        style={{ transitionDelay: `${index * 150 + 400}ms` }}
      ></div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-green-300 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-500 animate-pulse"></div>
      <div className="absolute bottom-4 left-4 w-3 h-3 bg-emerald-300 rounded-full opacity-0 group-hover:opacity-40 transition-all duration-700 animate-bounce"></div>
    </div>

    {/* Ripple effect on hover */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
      <div className="absolute inset-0 bg-green-400 rounded-xl animate-ping"></div>
    </div>
  </div>
);

const StatCard = ({ number, label, index, isVisible }) => (
  <div
    className={`relative transition-all duration-600 ${
      isVisible
        ? "transform translate-y-0 opacity-100"
        : "transform translate-y-4 opacity-0"
    }`}
    style={{ transitionDelay: `${index * 100}ms` }}
  >
    <div className="relative group">
      {/* Glowing background */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg opacity-0 group-hover:opacity-20 transition-all duration-500 transform group-hover:scale-105"></div>

      <div className="relative p-4 text-center">
        <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform duration-300">
          {number}
        </div>
        <div className="text-xs sm:text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
          {label}
        </div>

        {/* Animated underline */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-3/4 h-0.5 bg-green-400 transition-all duration-500"></div>
      </div>
    </div>
  </div>
);

const ProfileDesa = () => {
  const [scrollElements, setScrollElements] = useState({
    mapTitle: false,
    header: false,
    subtitle: false,
    cards: false,
    statistics: false,
    backgroundElements: false,
    floatingElements: false,
    heroImage: false,
  });

  const sectionRef = useRef(null);
  const mapTitleRef = useRef(null);
  const headerRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef(null);
  const statisticsRef = useRef(null);
  const backgroundRef = useRef(null);
  const floatingRef = useRef(null);
  const heroImageRef = useRef(null);

  const profileData = [
    {
      icon: MapPin,
      title: "Letak Geografis",
      description:
        "Desa Kandangmukti di Kecamatan Leles, Garut, memiliki luas 167,5 hektar pada ketinggian 700 mdpl dengan suhu sejuk 21°C. Lokasinya strategis, berbatasan dengan Desa Hegarsari, Perhutani, Salamnunggal, dan Cipancar.",
    },
    {
      icon: Users,
      title: "Demografi",
      description:
        "Penduduk berjumlah 4.574 jiwa dengan 1.444 KK, seluruhnya beragama Islam. Mayoritas bekerja sebagai buruh tani, petani, karyawan pabrik, dan pedagang.",
    },
    {
      icon: Briefcase,
      title: "Potensi Desa",
      description:
        "Kandangmukti unggul di bidang pertanian, buah-buahan, dan peternakan ayam, sapi, serta domba. Usaha perikanan kolam, perdagangan, dan koperasi juga mendukung ekonomi desa.",
    },
  ];

  const statisticsData = [
    { number: "4.574", label: "Total Penduduk" },
    { number: "250+", label: "UMKM Aktif" },
    { number: "75%", label: "Sektor Pertanian" },
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
      { ref: mapTitleRef, id: "mapTitle", delay: 50 },
      { ref: heroImageRef, id: "heroImage", delay: 100 },
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
      className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 via-green-50/30 to-gray-50 relative overflow-hidden"
    >
      {/* Enhanced animated background patterns */}
      <div ref={backgroundRef} className="absolute inset-0">
        {/* Large decorative circles - responsive sizes */}
        <div
          className={`absolute top-0 left-0 w-full h-full transition-all duration-2000 ease-out ${
            scrollElements.backgroundElements
              ? "transform translate-x-0 opacity-100"
              : "transform -translate-x-full opacity-0"
          }`}
        >
          <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full absolute -top-32 -left-32 sm:-top-40 sm:-left-40 md:-top-48 md:-left-48 opacity-40 animate-pulse"></div>
          <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-gradient-to-r from-green-200 to-teal-200 rounded-full absolute top-16 left-16 sm:top-20 sm:left-20 opacity-30 animate-bounce"></div>
        </div>
        <div
          className={`absolute bottom-0 right-0 w-full h-full transition-all duration-2000 ease-out delay-300 ${
            scrollElements.backgroundElements
              ? "transform translate-x-0 opacity-100"
              : "transform translate-x-full opacity-0"
          }`}
        >
          <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-gradient-to-l from-green-50 to-emerald-50 rounded-full absolute -bottom-28 -right-28 sm:-bottom-36 sm:-right-36 md:-bottom-40 md:-right-40 opacity-50 animate-pulse"></div>
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-gradient-to-l from-green-100 to-teal-100 rounded-full absolute bottom-24 right-24 sm:bottom-28 sm:right-28 md:bottom-32 md:right-32 opacity-40"></div>
        </div>

        {/* Geometric patterns - responsive */}
        <div className="absolute inset-0">
          <div
            className={`absolute top-1/4 right-1/4 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border-2 border-green-200 rotate-45 transition-all duration-1500 ${
              scrollElements.backgroundElements
                ? "opacity-30 animate-spin"
                : "opacity-0"
            }`}
            style={{ transitionDelay: "500ms", animationDuration: "20s" }}
          ></div>
          <div
            className={`absolute bottom-1/3 left-1/3 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-2 border-emerald-200 transition-all duration-1500 ${
              scrollElements.backgroundElements
                ? "opacity-40 animate-pulse"
                : "opacity-0"
            }`}
            style={{ transitionDelay: "700ms" }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Map title section */}
        <div className="text-center mb-8 sm:mb-12">
          <h2
            ref={mapTitleRef}
            className={`text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3 sm:mb-4 transition-all duration-1000 ease-out ${
              scrollElements.mapTitle
                ? "transform scale-100 opacity-100 translate-y-0"
                : "transform scale-75 opacity-0 translate-y-8"
            }`}
          >
            Peta Dusun 2 Desa Kandangmukti
          </h2>

          {/* Enhanced animated underline with multiple elements */}
          <div className="relative flex items-center justify-center my-4 sm:my-6">
            <div
              className={`transition-all duration-800 ease-out ${
                scrollElements.mapTitle
                  ? "transform scale-x-100 opacity-100"
                  : "transform scale-x-0 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <hr
                className="w-24 sm:w-32 border-t-2 sm:border-t-4 border-gradient-to-r from-green-400 to-emerald-400"
                style={{
                  borderImage: "linear-gradient(90deg, #10b981, #34d399) 1",
                }}
              />
            </div>

            {/* Multiple decorative dots - responsive sizes */}
            <div className="absolute flex items-center space-x-1 sm:space-x-2">
              <div
                className={`w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full transition-all duration-500 ${
                  scrollElements.mapTitle
                    ? "scale-100 opacity-100 animate-pulse"
                    : "scale-0 opacity-0"
                }`}
                style={{ transitionDelay: "400ms" }}
              ></div>
              <div
                className={`w-3 h-3 sm:w-4 sm:h-4 bg-emerald-500 rounded-full transition-all duration-500 ${
                  scrollElements.mapTitle
                    ? "scale-100 opacity-100"
                    : "scale-0 opacity-0"
                }`}
                style={{ transitionDelay: "500ms" }}
              ></div>
              <div
                className={`w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full transition-all duration-500 ${
                  scrollElements.mapTitle
                    ? "scale-100 opacity-100 animate-pulse"
                    : "scale-0 opacity-0"
                }`}
                style={{ transitionDelay: "600ms" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Hero image section - Instagram feed size, responsive */}
        <div
          ref={heroImageRef}
          className={`relative mb-12 sm:mb-16 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto transition-all duration-1500 ${
            scrollElements.heroImage
              ? "transform translate-y-0 opacity-100 scale-100"
              : "transform translate-y-8 opacity-0 scale-95"
          }`}
        >
          <div className="relative aspect-square w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
            <img
              src="./PetaDusun2.jpg"
              alt="Kandangmukti Village Map"
              className="w-full h-full object-cover"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

            {/* Hero content - responsive text */}
            <div className="absolute inset-0 flex items-center justify-center text-center text-white p-3 sm:p-4 md:p-6 lg:p-8"></div>

            {/* Animated border */}
            <div
              className="absolute inset-0 border-2 sm:border-3 md:border-4 border-transparent animate-pulse rounded-xl sm:rounded-2xl"
              style={{
                borderImage:
                  "linear-gradient(45deg, #10b981, #34d399, #6ee7b7, #10b981) 1",
                animationDuration: "3s",
              }}
            ></div>
          </div>
        </div>

        {/* Header with enhanced animations - responsive text */}
        <div className="text-center mb-8 sm:mb-12">
          <h2
            ref={headerRef}
            className={`text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3 sm:mb-4 transition-all duration-1000 ease-out ${
              scrollElements.header
                ? "transform scale-100 opacity-100 translate-y-0"
                : "transform scale-75 opacity-0 translate-y-8"
            }`}
          >
            Profil Desa Kandangmukti
          </h2>

          {/* Enhanced animated underline with multiple elements */}
          <div className="relative flex items-center justify-center my-4 sm:my-6">
            <div
              className={`transition-all duration-800 ease-out ${
                scrollElements.header
                  ? "transform scale-x-100 opacity-100"
                  : "transform scale-x-0 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <hr
                className="w-24 sm:w-32 border-t-2 sm:border-t-4 border-gradient-to-r from-green-400 to-emerald-400"
                style={{
                  borderImage: "linear-gradient(90deg, #10b981, #34d399) 1",
                }}
              />
            </div>

            {/* Multiple decorative dots - responsive sizes */}
            <div className="absolute flex items-center space-x-1 sm:space-x-2">
              <div
                className={`w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full transition-all duration-500 ${
                  scrollElements.header
                    ? "scale-100 opacity-100 animate-pulse"
                    : "scale-0 opacity-0"
                }`}
                style={{ transitionDelay: "400ms" }}
              ></div>
              <div
                className={`w-3 h-3 sm:w-4 sm:h-4 bg-emerald-500 rounded-full transition-all duration-500 ${
                  scrollElements.header
                    ? "scale-100 opacity-100"
                    : "scale-0 opacity-0"
                }`}
                style={{ transitionDelay: "500ms" }}
              ></div>
              <div
                className={`w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full transition-all duration-500 ${
                  scrollElements.header
                    ? "scale-100 opacity-100 animate-pulse"
                    : "scale-0 opacity-0"
                }`}
                style={{ transitionDelay: "600ms" }}
              ></div>
            </div>
          </div>

          <p
            ref={subtitleRef}
            className={`text-gray-700 max-w-2xl sm:max-w-3xl mx-auto text-base sm:text-lg leading-relaxed transition-all duration-1000 ease-out px-4 sm:px-0 ${
              scrollElements.subtitle
                ? "transform translate-y-0 opacity-100"
                : "transform translate-y-6 opacity-0"
            }`}
          >
            Desa Kandangmukti terletak di Kecamatan Leles, Kabupaten Garut
            dengan potensi pertanian dan UMKM yang berkembang pesat serta
            keindahan alam yang memukau.
          </p>
        </div>

        {/* Enhanced cards with Instagram feed sizing - responsive grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12"
        >
          {profileData.map((item, index) => (
            <ProfileCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              index={index}
              isVisible={scrollElements.cards}
            />
          ))}
        </div>

        {/* Enhanced statistics section - responsive */}
        <div
          ref={statisticsRef}
          className={`bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl sm:shadow-2xl border border-green-100 transition-all duration-1000 ease-out ${
            scrollElements.statistics
              ? "transform translate-y-0 opacity-100 scale-100"
              : "transform translate-y-8 opacity-0 scale-95"
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {statisticsData.map((stat, index) => (
              <StatCard
                key={index}
                number={stat.number}
                label={stat.label}
                index={index}
                isVisible={scrollElements.statistics}
              />
            ))}
          </div>

          {/* Progress bar animation */}
          <div className="mt-6 sm:mt-8 relative">
            <div
              className={`h-1 sm:h-2 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 rounded-full transition-all duration-2000 ease-out ${
                scrollElements.statistics ? "w-full" : "w-0"
              }`}
              style={{ transitionDelay: "500ms" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Enhanced floating decorative elements - responsive positioning */}
      <div ref={floatingRef} className="absolute inset-0 pointer-events-none">
        {/* Animated floating particles - responsive sizes */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 sm:w-2 sm:h-2 bg-green-300 rounded-full transition-all duration-1000 ${
              scrollElements.floatingElements
                ? `opacity-${20 + i * 5} animate-bounce transform translate-y-0`
                : "opacity-0 transform translate-y-4"
            }`}
            style={{
              top: `${20 + i * 10}%`,
              left: `${10 + i * 12}%`,
              transitionDelay: `${i * 200}ms`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + i * 0.3}s`,
            }}
          ></div>
        ))}

        {/* Floating icons - responsive sizes */}
        <div
          className={`absolute top-24 right-12 sm:top-32 sm:right-20 text-green-300 transition-all duration-1000 ${
            scrollElements.floatingElements
              ? "opacity-30 animate-float transform translate-y-0"
              : "opacity-0 transform translate-y-4"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <Leaf
            className="h-6 w-6 sm:h-8 sm:w-8 animate-spin"
            style={{ animationDuration: "10s" }}
          />
        </div>

        <div
          className={`absolute bottom-32 left-12 sm:bottom-40 sm:left-20 text-emerald-300 transition-all duration-1000 ${
            scrollElements.floatingElements
              ? "opacity-25 animate-bounce transform translate-y-0"
              : "opacity-0 transform translate-y-4"
          }`}
          style={{ transitionDelay: "1000ms" }}
        >
          <Camera className="h-4 w-4 sm:h-6 sm:w-6" />
        </div>

        <div
          className={`absolute top-1/2 left-8 sm:left-16 text-teal-300 transition-all duration-1000 ${
            scrollElements.floatingElements
              ? "opacity-20 animate-pulse transform translate-y-0"
              : "opacity-0 transform translate-y-4"
          }`}
          style={{ transitionDelay: "1200ms" }}
        >
          <Mountain className="h-5 w-5 sm:h-7 sm:w-7" />
        </div>
      </div>

      {/* Custom CSS animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ProfileDesa;
