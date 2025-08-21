import { useState, useEffect, useRef } from "react";

const SupervisorCard = ({
  image,
  alt,
  name,
  title,
  nip,
  faculty,
  expertise,
  isVisible,
  index,
}) => (
  <div
    className={`bg-white rounded-lg shadow-md p-8 text-center hover:transform hover:-translate-y-2 hover:shadow-xl transition-all duration-700 relative overflow-hidden group max-w-md mx-auto ${
      isVisible
        ? "transform scale-100 opacity-100 rotate-0"
        : "transform scale-75 opacity-0 rotate-3"
    }`}
    style={{
      transitionDelay: `${index * 200}ms`,
    }}
  >
    {/* Animated background gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    {/* Corner decoration */}
    <div
      className={`absolute top-0 right-0 w-8 h-8 transition-all duration-700 ${
        isVisible
          ? "transform rotate-0 opacity-100"
          : "transform rotate-45 opacity-0"
      }`}
      style={{
        transitionDelay: `${index * 200 + 600}ms`,
      }}
    >
      <div className="w-full h-full bg-gradient-to-bl from-blue-200 to-transparent rounded-bl-full"></div>
    </div>

    {/* Profile image */}
    <div
      className={`w-40 h-40 mx-auto mb-6 overflow-hidden rounded-full border-4 border-blue-100 relative group-hover:border-blue-200 transition-all duration-700 ${
        isVisible ? "transform scale-100" : "transform scale-0"
      }`}
      style={{
        transitionDelay: `${index * 200 + 100}ms`,
      }}
    >
      <div className="absolute inset-0 bg-blue-200 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500"></div>
      <img
        src={image}
        alt={alt}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 relative z-10"
      />
    </div>

    {/* Name */}
    <h3
      className={`text-2xl font-bold mb-2 relative z-10 transition-all duration-600 text-gray-800 ${
        isVisible
          ? "transform translate-x-0 opacity-100"
          : "transform -translate-x-4 opacity-0"
      }`}
      style={{
        transitionDelay: `${index * 200 + 200}ms`,
      }}
    >
      {name}
    </h3>

    {/* Title */}
    <div
      className={`mb-3 relative z-10 transition-all duration-600 ${
        isVisible
          ? "transform translate-x-0 opacity-100"
          : "transform translate-x-4 opacity-0"
      }`}
      style={{
        transitionDelay: `${index * 200 + 300}ms`,
      }}
    >
      <span className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold group-hover:bg-blue-100 group-hover:text-blue-800 transition-all duration-300 border border-blue-200">
        {title}
      </span>
    </div>

    {/* NIP */}
    <p
      className={`text-gray-600 text-sm mb-3 relative z-10 transition-all duration-600 font-medium ${
        isVisible
          ? "transform translate-y-0 opacity-100"
          : "transform translate-y-3 opacity-0"
      }`}
      style={{
        transitionDelay: `${index * 200 + 400}ms`,
      }}
    >
      NIP: {nip}
    </p>

    {/* Faculty */}
    <p
      className={`text-gray-700 text-sm mb-3 relative z-10 transition-all duration-600 ${
        isVisible
          ? "transform translate-y-0 opacity-100"
          : "transform translate-y-3 opacity-0"
      }`}
      style={{
        transitionDelay: `${index * 200 + 450}ms`,
      }}
    >
      {faculty}
    </p>

    {/* Expertise */}
    <div
      className={`relative z-10 transition-all duration-600 ${
        isVisible
          ? "transform translate-y-0 opacity-100"
          : "transform translate-y-4 opacity-0"
      }`}
      style={{
        transitionDelay: `${index * 200 + 500}ms`,
      }}
    >
      <span className="text-xs text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full">
        {expertise}
      </span>
    </div>

    {/* Bottom accent */}
    <div
      className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-800 ${
        isVisible ? "w-full opacity-100" : "w-0 opacity-0"
      }`}
      style={{
        transitionDelay: `${index * 200 + 600}ms`,
      }}
    ></div>
  </div>
);

const TeamMemberCard = ({
  image,
  alt,
  name,
  role,
  faculty,
  major,
  igUrl,
  logbookUrl,
  index,
  isVisible,
}) => (
  <div
    className={`bg-white rounded-lg shadow-md p-6 text-center hover:transform hover:-translate-y-2 hover:shadow-xl transition-all duration-700 relative overflow-hidden group ${
      isVisible
        ? "transform scale-100 opacity-100 rotate-0"
        : "transform scale-75 opacity-0 rotate-3"
    }`}
    style={{
      transitionDelay: `${Math.floor(index / 4) * 150 + (index % 4) * 100}ms`,
    }}
  >
    {/* Animated background gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-transparent to-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    {/* Animated corner decorations */}
    <div
      className={`absolute top-0 left-0 w-6 h-6 transition-all duration-700 ${
        isVisible
          ? "transform rotate-0 opacity-100"
          : "transform -rotate-45 opacity-0"
      }`}
      style={{
        transitionDelay: `${Math.floor(index / 4) * 150 + (index % 4) * 100 + 600}ms`,
      }}
    >
      <div className="w-full h-full bg-gradient-to-br from-green-200 to-transparent rounded-br-full"></div>
    </div>

    {/* Profile image with enhanced effects */}
    <div
      className={`w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-green-100 relative group-hover:border-green-200 transition-all duration-700 ${
        isVisible ? "transform scale-100" : "transform scale-0"
      }`}
      style={{
        transitionDelay: `${Math.floor(index / 4) * 150 + (index % 4) * 100 + 100}ms`,
      }}
    >
      {/* Multiple ripple effects */}
      <div className="absolute inset-0 bg-green-200 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500"></div>
      <div className="absolute inset-0 bg-green-300 rounded-full opacity-0 group-hover:opacity-10 group-hover:scale-125 transition-all duration-700 delay-100"></div>

      {igUrl ? (
        <a
          href={igUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 block"
        >
          <img
            src={image}
            alt={alt}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </a>
      ) : (
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 relative z-10"
        />
      )}
    </div>

    {/* Name with slide animation */}
    <h3
      className={`text-xl font-semibold mb-1 relative z-10 transition-all duration-600 ${
        isVisible
          ? "transform translate-x-0 opacity-100"
          : "transform -translate-x-4 opacity-0"
      }`}
      style={{
        transitionDelay: `${Math.floor(index / 4) * 150 + (index % 4) * 100 + 200}ms`,
      }}
    >
      {name}
    </h3>

    {/* Role with enhanced styling and animation */}
    <div
      className={`mb-3 relative z-10 transition-all duration-600 ${
        isVisible
          ? "transform translate-x-0 opacity-100"
          : "transform translate-x-4 opacity-0"
      }`}
      style={{
        transitionDelay: `${Math.floor(index / 4) * 150 + (index % 4) * 100 + 300}ms`,
      }}
    >
      <span className="inline-block px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium group-hover:bg-green-100 group-hover:text-green-800 transition-all duration-300 border border-green-200">
        {role}
      </span>
    </div>

    {/* Faculty info with staggered animation */}
    <p
      className={`text-gray-600 text-sm mb-1 relative z-10 transition-all duration-600 ${
        isVisible
          ? "transform translate-y-0 opacity-100"
          : "transform translate-y-3 opacity-0"
      }`}
      style={{
        transitionDelay: `${Math.floor(index / 4) * 150 + (index % 4) * 100 + 400}ms`,
      }}
    >
      {faculty}
    </p>

    <p
      className={`text-gray-600 text-sm mb-4 relative z-10 transition-all duration-600 ${
        isVisible
          ? "transform translate-y-0 opacity-100"
          : "transform translate-y-3 opacity-0"
      }`}
      style={{
        transitionDelay: `${Math.floor(index / 4) * 150 + (index % 4) * 100 + 450}ms`,
      }}
    >
      {major}
    </p>

    {/* Logbook link with enhanced animation */}
    {logbookUrl && (
      <a
        href={logbookUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-block text-sm text-green-600 hover:text-green-700 relative z-10 transition-all duration-600 group/link ${
          isVisible
            ? "transform translate-y-0 opacity-100"
            : "transform translate-y-4 opacity-0"
        }`}
        style={{
          transitionDelay: `${Math.floor(index / 4) * 150 + (index % 4) * 100 + 500}ms`,
        }}
      >
        <span className="flex items-center justify-center gap-2 px-3 py-1 rounded-lg border border-green-200 hover:border-green-300 hover:bg-green-50 group-hover/link:gap-3 transition-all duration-300">
          <span className="text-lg">📖</span>
          <span className="font-medium">Logbook</span>
        </span>
      </a>
    )}

    {/* Animated bottom accent */}
    <div
      className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-400 to-green-600 transition-all duration-800 ${
        isVisible ? "w-full opacity-100" : "w-0 opacity-0"
      }`}
      style={{
        transitionDelay: `${Math.floor(index / 4) * 150 + (index % 4) * 100 + 600}ms`,
      }}
    ></div>
  </div>
);

const TimKKN = () => {
  const [scrollElements, setScrollElements] = useState({
    backgroundElements: false,
    supervisorHeader: false,
    supervisorSubtitle: false,
    supervisorCard: false,
    header: false,
    subtitle: false,
    teamGrid: false,
    statistics: false,
    floatingElements: false,
  });

  const sectionRef = useRef(null);
  const backgroundRef = useRef(null);
  const supervisorHeaderRef = useRef(null);
  const supervisorSubtitleRef = useRef(null);
  const supervisorCardRef = useRef(null);
  const headerRef = useRef(null);
  const subtitleRef = useRef(null);
  const teamGridRef = useRef(null);
  const statisticsRef = useRef(null);
  const floatingRef = useRef(null);

  // Data Dosen Pembimbing Lapangan
  const supervisor = {
    image: "./Profile/DPL.jpeg",
    alt: "Foto Dosen Pembimbing Lapangan KKN",
    name: "Dr. H. Dendi Yuda S.,M.Ag.",
    title: "Dosen Pembimbing Lapangan",
    nip: "198501012010121001",
    faculty: "Fakultas Tarbiyah dan Keguruan",
    expertise: "Pendidikan dan Pengembangan Masyarakat",
  };

  const teamMembers = [
    {
      image: "./Profile/15.png",
      alt: "Foto anggota tim KKN dengan nama Palah Suwandi",
      name: "Palah Suwandi",
      role: "Ketua",
      faculty: "Fakultas Dakwah dan Komunikasi",
      major: "Ilmu Komunikasi Jurnalistik",
      igUrl: "https://instagram.com/palahswnd",
      logbookUrl: "https://example.com/logbook/palah",
    },
    {
      image: "./Profile/14.png",
      alt: "Foto anggota tim KKN dengan nama Salma Syahnur Fadhila",
      name: "Salma Syahnur Fadhila",
      role: "Bendahara",
      faculty: "Fakultas Ekonomi dan Bisnis Islam",
      major: "Manajemen",
      igUrl: "https://instagram.com/salmasyfad",
      logbookUrl: "https://example.com/logbook/salma",
    },
    {
      image: "./Profile/13.png",
      alt: "Foto anggota tim KKN dengan nama Wilda Tsalisa Jamilatussolihah",
      name: "Wilda Tsalisa Jamilatussolihah",
      role: "Sekretaris",
      faculty: "Fakultas Ilmu Sosial dan Ilmu Politik",
      major: "Administrasi Publik",
      igUrl: "https://instagram.com/wildatsalisaa__",
      logbookUrl: "https://example.com/logbook/wilda",
    },
    {
      image: "./Profile/2.png",
      alt: "Foto anggota tim KKN dengan nama Zahra Katlya Isfarayani",
      name: "Zahra Katlya Isfarayani",
      role: "Acara",
      faculty: "Fakultas Tarbiyah dan Keguruan",
      major: "Tadris Bahasa Indonesia",
      igUrl: "https://instagram.com/rayazki",
      logbookUrl: "https://example.com/logbook/katlya",
    },
    {
      image: "./Profile/4.png",
      alt: "Foto anggota tim KKN dengan nama Syhadad Nabil Mudzafar",
      name: "Syhadad Nabil Mudzafar",
      role: "Acara",
      faculty: "Fakultas Tarbiyah dan Keguruan",
      major: "Pendidikan Agama Islam",
      igUrl: "https://instagram.com/inabilwetrust",
      logbookUrl: "https://example.com/logbook/syhadad",
    },
    {
      image: "./Profile/3.png",
      alt: "Foto anggota tim KKN dengan nama Saffanah Ulya Safitri",
      name: "Saffanah Ulya Safitri",
      role: "Acara",
      faculty: "Fakultas Ushuluddin",
      major: "Ilmu Hadist",
      igUrl: "https://instagram.com/saffaulya",
      logbookUrl: "https://example.com/logbook/saffa",
    },
    {
      image: "./Profile/1.png",
      alt: "Foto anggota tim KKN dengan nama Muhammad Khoerul Abdi",
      name: "Muhammad Khoerul Abdi",
      role: "Acara",
      faculty: "Fakultas Syari'ah dan Hukum",
      major: "Perbandingan Madzhab dan Hukum",
      igUrl: "https://instagram.com/abdichullo",
      logbookUrl: "https://example.com/logbook/abdi",
    },
    {
      image: "./Profile/11.png",
      alt: "Foto anggota tim KKN dengan nama Muhammad Akhdan Ruwanda",
      name: "Muhammad Akhdan Ruwanda",
      role: "Mobile Support",
      faculty: "Fakultas Ushuluddin",
      major: "Studi Agama-Agama",
      igUrl: "https://instagram.com/aakhdan_rvw",
      logbookUrl: "https://example.com/logbook/akhdan",
    },
    {
      image: "./Profile/12.png",
      alt: "Foto anggota tim KKN dengan nama Gallung Marwan Haqiqi Hafidz",
      name: "Gallung Marwan Haqiqi Hafidz",
      role: "Mobile Support",
      faculty: "Fakultas Sains dan Teknologi",
      major: "Teknik Informatika",
      igUrl: "https://instagram.com/marwansyah_003",
      logbookUrl: "https://example.com/logbook/marwan",
    },
    {
      image: "./Profile/9.png",
      alt: "Foto anggota tim KKN dengan nama Salma Naila",
      name: "Salma Naila",
      role: "Publikasi dan Dokumentasi",
      faculty: "Fakultas Tarbiyah dan Keguruan ",
      major: "Pendidikan Bahasa Inggris",
      igUrl: "https://instagram.com/simply.naylaa_",
      logbookUrl: "https://example.com/logbook/naila",
    },
    {
      image: "./Profile/10.png",
      alt: "Foto anggota tim KKN dengan nama Yulia Nurjanah",
      name: "Yulia Nurjanah",
      role: "Publikasi dan Dokumentasi",
      faculty: "Fakultas Dakwah dan Komunikasi",
      major: "Bimbingan Konseling Islam",
      igUrl: "https://instagram.com/yuliathetic",
      logbookUrl: "https://example.com/logbook/yulia",
    },
    {
      image: "./Profile/8.png",
      alt: "Foto anggota tim KKN dengan nama Kyla Alzena Rashida",
      name: "Kyla Alzena Rashida",
      role: "Publikasi dan Dokumentasi",
      faculty: "Fakultas Ekonomi dan Bisnis Islam",
      major: "Manajemen Keuangan Syari'ah",
      igUrl: "https://instagram.com/kylarsd",
      logbookUrl: "https://example.com/logbook/kyla",
    },
    {
      image: "./Profile/7.png",
      alt: "Foto anggota tim KKN dengan nama Naufal Anggoro",
      name: "Naufal Anggoro",
      role: "Logistik Konsumsi",
      faculty: "Fakultas Adab dan Humaniora",
      major: "Sejarah Peradaban Islam",
      igUrl: "https://instagram.com/naufalanggr__",
      logbookUrl: "https://example.com/logbook/naufal",
    },
    {
      image: "./Profile/6.png",
      alt: "Foto anggota tim KKN dengan nama Mia Salastri",
      name: "Mia Salastri",
      role: "Logistik Konsumsi",
      faculty: "Fakultas Tarbiyah dan Keguruan",
      major: "Pendidikan Kimia",
      igUrl: "https://instagram.com/miaaasalastri",
      logbookUrl: "https://example.com/logbook/mia",
    },
    {
      image: "./Profile/5.png",
      alt: "Foto anggota tim KKN dengan nama Zahra Azalea Putri",
      name: "Zahra Azalea Putri",
      role: "Logistik Konsumsi",
      faculty: "Fakultas Adab dan Humaniora",
      major: "Sastra Inggris",
      igUrl: "https://instagram.com/zaleahra",
      logbookUrl: "https://example.com/logbook/azalea",
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
      { ref: supervisorHeaderRef, id: "supervisorHeader", delay: 200 },
      { ref: supervisorSubtitleRef, id: "supervisorSubtitle", delay: 400 },
      { ref: supervisorCardRef, id: "supervisorCard", delay: 600 },
      { ref: headerRef, id: "header", delay: 800 },
      { ref: subtitleRef, id: "subtitle", delay: 1000 },
      { ref: teamGridRef, id: "teamGrid", delay: 1200 },
      { ref: statisticsRef, id: "statistics", delay: 1400 },
      { ref: floatingRef, id: "floatingElements", delay: 1600 },
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
      id="team"
      className="py-16 bg-gray-50 relative overflow-hidden"
    >
      {/* Enhanced animated background elements */}
      <div ref={backgroundRef} className="absolute inset-0">
        <div
          className={`absolute top-10 left-0 w-72 h-72 bg-gradient-to-r from-blue-100 to-transparent rounded-full opacity-30 transition-all duration-2000 ease-out ${
            scrollElements.backgroundElements
              ? "transform translate-x-0 scale-100"
              : "transform -translate-x-full scale-75"
          }`}
        ></div>
        <div
          className={`absolute bottom-10 right-0 w-96 h-96 bg-gradient-to-l from-green-50 to-transparent rounded-full opacity-20 transition-all duration-2000 ease-out ${
            scrollElements.backgroundElements
              ? "transform translate-x-0 scale-100"
              : "transform translate-x-full scale-75"
          }`}
          style={{ transitionDelay: "300ms" }}
        ></div>
        <div
          className={`absolute top-1/3 left-1/3 w-48 h-48 bg-gradient-to-r from-blue-200/20 to-transparent rounded-full transition-all duration-2000 ease-out ${
            scrollElements.backgroundElements
              ? "transform scale-100 rotate-0"
              : "transform scale-0 rotate-45"
          }`}
          style={{ transitionDelay: "600ms" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Dosen Pembimbing Lapangan Section */}
        <div className="mb-20">
          {/* Supervisor header */}
          <div className="text-center mb-12">
            <h2
              ref={supervisorHeaderRef}
              className={`text-3xl font-bold text-gray-800 mb-2 transition-all duration-1000 ease-out ${
                scrollElements.supervisorHeader
                  ? "transform translate-y-0 opacity-100 scale-100"
                  : "transform -translate-y-8 opacity-0 scale-95"
              }`}
            >
              Dosen Pembimbing Lapangan
            </h2>

            <div
              className={`transition-all duration-800 ease-out ${
                scrollElements.supervisorHeader
                  ? "transform scale-x-100 opacity-100"
                  : "transform scale-x-0 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <hr className="w-24 mx-auto my-4 border-t-2 border-blue-600" />
            </div>

            <p
              ref={supervisorSubtitleRef}
              className={`text-gray-600 max-w-2xl mx-auto transition-all duration-1000 ease-out ${
                scrollElements.supervisorSubtitle
                  ? "transform translate-y-0 opacity-100"
                  : "transform translate-y-6 opacity-0"
              }`}
            >
              Dosen pembimbing yang mendampingi dan membimbing tim KKN dalam
              pelaksanaan program pengabdian masyarakat di Desa Kandangmukti.
            </p>
          </div>

          {/* Supervisor card */}
          <div ref={supervisorCardRef} className="flex justify-center">
            <SupervisorCard
              {...supervisor}
              isVisible={scrollElements.supervisorCard}
              index={0}
            />
          </div>
        </div>

        {/* Tim KKN Section */}
        <div>
          {/* Enhanced header with scroll animation */}
          <div className="text-center mb-12">
            <h2
              ref={headerRef}
              className={`text-3xl font-bold text-gray-800 mb-2 transition-all duration-1000 ease-out ${
                scrollElements.header
                  ? "transform translate-y-0 opacity-100 scale-100"
                  : "transform -translate-y-8 opacity-0 scale-95"
              }`}
            >
              Tim KKN Desa Kandangmukti
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
              Berikut adalah anggota tim KKN yang telah berkontribusi dalam
              pelaksanaan program di Desa Kandangmukti dengan penuh dedikasi.
            </p>
          </div>

          {/* Enhanced team grid with scroll animation */}
          <div
            ref={teamGridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={index}
                {...member}
                index={index}
                isVisible={scrollElements.teamGrid}
              />
            ))}
          </div>

          {/* Enhanced team statistics with scroll animation */}
          <div
            ref={statisticsRef}
            className={`mt-16 bg-gradient-to-r from-green-600 via-green-700 to-green-600 rounded-2xl p-8 text-white relative overflow-hidden transition-all duration-1000 ease-out ${
              scrollElements.statistics
                ? "transform translate-y-0 opacity-100 scale-100"
                : "transform translate-y-12 opacity-0 scale-95"
            }`}
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center relative z-10">
              <div
                className={`transition-all duration-700 ${
                  scrollElements.statistics
                    ? "transform translate-y-0 opacity-100"
                    : "transform translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="text-3xl font-bold mb-2 text-green-100">15</div>
                <div className="text-green-200 font-medium">Total Anggota</div>
              </div>
              <div
                className={`transition-all duration-700 ${
                  scrollElements.statistics
                    ? "transform translate-y-0 opacity-100"
                    : "transform translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                <div className="text-3xl font-bold mb-2 text-green-100">7</div>
                <div className="text-green-200 font-medium">
                  Fakultas Berbeda
                </div>
              </div>
              <div
                className={`transition-all duration-700 ${
                  scrollElements.statistics
                    ? "transform translate-y-0 opacity-100"
                    : "transform translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <div className="text-3xl font-bold mb-2 text-green-100">33</div>
                <div className="text-green-200 font-medium">
                  Hari Pengabdian
                </div>
              </div>
              <div
                className={`transition-all duration-700 ${
                  scrollElements.statistics
                    ? "transform translate-y-0 opacity-100"
                    : "transform translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                <div className="text-3xl font-bold mb-2 text-green-100">
                  100%
                </div>
                <div className="text-green-200 font-medium">Dedikasi Tim</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced floating decorative elements */}
      <div ref={floatingRef} className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-1/4 right-10 w-4 h-4 bg-green-400 rounded-full transition-all duration-1000 ${
            scrollElements.floatingElements
              ? "opacity-30 animate-pulse transform translate-y-0"
              : "opacity-0 transform translate-y-4"
          }`}
          style={{ transitionDelay: "200ms" }}
        ></div>
        <div
          className={`absolute bottom-1/3 left-20 w-3 h-3 bg-blue-500 rounded-full transition-all duration-1000 ${
            scrollElements.floatingElements
              ? "opacity-25 animate-bounce transform translate-y-0"
              : "opacity-0 transform translate-y-4"
          }`}
          style={{ transitionDelay: "400ms" }}
        ></div>
        <div
          className={`absolute top-2/3 right-1/4 w-5 h-5 bg-green-300 rounded-full transition-all duration-1000 ${
            scrollElements.floatingElements
              ? "opacity-20 animate-pulse transform translate-y-0"
              : "opacity-0 transform translate-y-4"
          }`}
          style={{ transitionDelay: "600ms" }}
        ></div>
        <div
          className={`absolute bottom-1/4 left-1/3 w-2 h-2 bg-blue-600 rounded-full transition-all duration-1000 ${
            scrollElements.floatingElements
              ? "opacity-35 animate-bounce transform translate-y-0"
              : "opacity-0 transform translate-y-4"
          }`}
          style={{ transitionDelay: "800ms" }}
        ></div>
      </div>
    </section>
  );
};

export default TimKKN;
