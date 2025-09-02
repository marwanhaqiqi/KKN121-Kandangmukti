import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const GalleryItem = ({
  title,
  image,
  alt,
  description,
  isVisible,
  delay = 0,
  itemIndex = 0,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const [descVisible, setDescVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      // Step 1: Container appears
      setTimeout(() => {
        setImageLoaded(true);
      }, delay + 300);

      // Step 2: Title appears
      setTimeout(() => {
        setTitleVisible(true);
      }, delay + 600);

      // Step 3: Description appears
      setTimeout(() => {
        setDescVisible(true);
      }, delay + 900);
    }
  }, [isVisible, delay]);

  return (
    <div
      className={`rounded-lg overflow-hidden transition-all duration-1000 transform ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-12 scale-95"
      }`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="md:flex">
        <div className="md:w-1/3 overflow-hidden">
          <div
            className={`transition-all duration-800 transform ${
              imageLoaded
                ? "opacity-100 translate-x-0 scale-100"
                : "opacity-0 -translate-x-8 scale-105"
            }`}
          >
            <img
              src={image}
              alt={alt}
              className="w-full h-64 object-cover transition-all duration-1200 hover:scale-105"
            />
          </div>
        </div>
        <div className="p-6 md:w-2/3 -mt-3">
          <h4
            className={`text-lg font-semibold mb-2 transition-all duration-800 transform ${
              titleVisible
                ? "opacity-100 translate-x-0 translate-y-0"
                : "opacity-0 translate-x-12 translate-y-4"
            }`}
          >
            {title}
          </h4>
          <p
            className={`text-gray-600 transition-all duration-800 transform ${
              descVisible
                ? "opacity-100 translate-x-0 translate-y-0"
                : "opacity-0 translate-x-16 translate-y-6"
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const GalleryHarian1 = () => {
  const [currentIndex17, setCurrentIndex17] = useState(0);
  const [currentIndex18, setCurrentIndex18] = useState(0);
  const [currentIndex19, setCurrentIndex19] = useState(0);
  const [currentIndex20, setCurrentIndex20] = useState(0);
  const [isPlaying17, setIsPlaying17] = useState(true);
  const [isPlaying18, setIsPlaying18] = useState(true);
  const [isPlaying19, setIsPlaying19] = useState(true);
  const [isPlaying20, setIsPlaying20] = useState(true);

  // Animation states
  const [headerVisible, setHeaderVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [sectionTitlesVisible, setSectionTitlesVisible] = useState(new Set());
  const [sectionContentVisible, setSectionContentVisible] = useState(new Set());
  const [sectionButtonsVisible, setSectionButtonsVisible] = useState(new Set());
  const headerRef = useRef(null);
  const sectionRefs = useRef([]);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target.getAttribute("data-element");
            const index = entry.target.getAttribute("data-index");

            if (element === "header") {
              setHeaderVisible(true);
            } else if (element === "section" && index !== null) {
              const sectionIndex = parseInt(index);

              // Step 1: Section becomes visible
              setTimeout(() => {
                setVisibleSections((prev) => new Set([...prev, sectionIndex]));
              }, sectionIndex * 100);

              // Step 2: Title appears
              setTimeout(
                () => {
                  setSectionTitlesVisible(
                    (prev) => new Set([...prev, sectionIndex])
                  );
                },
                sectionIndex * 100 + 300
              );

              // Step 3: Content appears
              setTimeout(
                () => {
                  setSectionContentVisible(
                    (prev) => new Set([...prev, sectionIndex])
                  );
                },
                sectionIndex * 100 + 600
              );

              // Step 4: Buttons appear
              setTimeout(
                () => {
                  setSectionButtonsVisible(
                    (prev) => new Set([...prev, sectionIndex])
                  );
                },
                sectionIndex * 100 + 1200
              );
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -5% 0px",
      }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const galleryItems = [
    {
      title: "PENYULUHAN KE POSYANDU",
      image: "./FotoDaySiklus3/Day17/1.JPG",
      alt: "phbs",
      description:
        "Mahasiswa KKN SISDAMAS 121 Desa Kandang Mukti melaksanakan penyuluhan di Posyandu RW 02 sebagai bentuk pengabdian kepada masyarakat, dengan memberikan edukasi tentang kesehatan ibu dan anak, gizi seimbang, serta pola hidup bersih dan sehat yang disampaikan melalui diskusi interaktif dan media edukasi sederhana.",
    },
    {
      title: "MENGUNJUNGI UMKM",
      image: "./FotoDaySiklus3/Day17/2.jpg",
      alt: "umkm",
      description:
        "Mahasiswa KKN SISDAMAS 121 Desa Kandang Mukti melakukan kunjungan ke UMKM lokal di wilayah desa sebagai bentuk dukungan terhadap pengembangan usaha masyarakat. Kegiatan ini bertujuan untuk mengenal lebih dekat proses produksi, mendengarkan tantangan yang dihadapi pelaku usaha, serta memberikan masukan yang dapat membantu peningkatan kualitas dan keberlanjutan usaha UMKM setempat.",
    },
    {
      title: "PENGAJIAN",
      image: "./FotoDaySiklus3/Day17/3.JPG",
      alt: "ngaji",
      description:
        "Mahasiswa KKN SISDAMAS 121 Desa Kandang Mukti turut berpartisipasi dalam kegiatan pengajian malam hari di Masjid Al-Manshur sebagai sarana mempererat silaturahmi dengan masyarakat sekaligus meningkatkan keimanan dan pemahaman keagamaan. Melalui kegiatan ini, diharapkan tercipta kebersamaan antara mahasiswa dan warga dalam membangun kehidupan yang religius serta harmonis di lingkungan desa.",
    },
  ];

  const galleryItems2 = [
    {
      title: "BIMBEL",
      image: "./FotoDaySiklus3/Day18/1.JPG",
      alt: "bimbel",
      description:
        "Mahasiswa KKN SISDAMAS 121 Desa Kandang Mukti rutin mengadakan kegiatan bimbingan belajar (bimbel) di Posko KKN 121 sebagai upaya mendukung peningkatan kualitas pendidikan anak-anak di desa. Melalui kegiatan ini, mahasiswa membantu siswa dalam memahami pelajaran sekolah, memberikan motivasi belajar, serta menumbuhkan semangat dan kepercayaan diri anak-anak agar lebih siap menghadapi tantangan pendidikan di masa depan.",
    },
    {
      title: "KBM DI MDTA AL-IHYA",
      image: "./FotoDaySiklus3/Day18/2.JPG",
      alt: "madrasah",
      description:
        "Mahasiswa KKN SISDAMAS 121 Desa Kandang Mukti melaksanakan kegiatan belajar mengajar rutin di Madrasah Diniyah Takmiliyah Al-Ihya sebagai bentuk kontribusi dalam mendukung pendidikan keagamaan anak-anak. Melalui kegiatan ini, mahasiswa membantu proses pembelajaran, memberikan motivasi, serta menanamkan nilai-nilai religius agar para siswa semakin semangat dalam menuntut ilmu dan berakhlak mulia.",
    },
  ];

  const galleryItems3 = [
    {
      title: "JUM'AT BERSIH",
      image: "./FotoDaySiklus3/Day19/1.JPG",
      alt: "jumsih",
      description:
        "Mahasiswa KKN SISDAMAS 121 Desa Kandang Mukti turut berpartisipasi dalam kegiatan Jumat Bersih bersama warga sebagai bentuk kepedulian terhadap kebersihan dan kenyamanan lingkungan. Melalui kegiatan gotong royong ini, mahasiswa dan masyarakat bergandengan tangan membersihkan area sekitar desa, sekaligus menumbuhkan semangat kebersamaan serta kesadaran pentingnya menjaga lingkungan yang sehat dan asri.",
    },
    {
      title: "KUNJUNGAN PRODUKSI BENDERA",
      image: "./FotoDaySiklus3/Day19/2.png",
      alt: "kunjungan",
      description:
        "Mahasiswa KKN SISDAMAS 121 Desa Kandang Mukti melakukan kunjungan ke lokasi produksi bendera sebagai bentuk observasi dan dukungan terhadap persiapan menyambut Hari Kemerdekaan 17 Agustus. Kegiatan ini tidak hanya bertujuan untuk mengenal proses produksi bendera, tetapi juga sebagai wujud apresiasi terhadap pelaku usaha lokal yang berkontribusi dalam memenuhi kebutuhan masyarakat menjelang perayaan kemerdekaan.",
    },
    {
      title: "RAPAT KOORDINASI 17 AGUSTUS",
      image: "./FotoDaySiklus3/Day19/3.png",
      alt: "rapat",
      description:
        "Mahasiswa KKN SISDAMAS 121 Desa Kandang Mukti mengikuti rapat koordinasi bersama Kepala Desa dan perangkat desa dalam rangka membahas persiapan kegiatan peringatan Hari Kemerdekaan 17 Agustus. Diskusi ini menjadi wadah untuk menyusun agenda, membagi peran, serta memastikan jalannya rangkaian acara berjalan lancar dengan melibatkan partisipasi aktif masyarakat.",
    },
  ];
  const galleryItems4 = [
    {
      title: "SURVEY LOKASI PERLOMBAAN",
      image: "./FotoDaySiklus3/Day20/1.JPG",
      alt: "survey",
      description:
        "Mahasiswa KKN SISDAMAS 121 Desa Kandang Mukti melakukan survei lapangan untuk persiapan perlombaan dalam rangka peringatan Hari Kemerdekaan 17 Agustus. Kegiatan ini bertujuan untuk memastikan kondisi lokasi, menentukan area kegiatan, serta mempersiapkan kebutuhan teknis agar seluruh rangkaian perlombaan dapat berjalan lancar dan meriah bersama masyarakat desa.",
    },
    {
      title: "DISKUSI PROGRAM KERJA",
      image: "./FotoDaySiklus3/Day20/2.JPG",
      alt: "diskusi",
      description:
        "Mahasiswa KKN SISDAMAS 121 Desa Kandang Mukti melaksanakan diskusi bersama kelompok KKN Uniga untuk membahas program kerja yang akan dijalankan. Melalui kegiatan ini, kedua kelompok dapat saling bertukar ide, menyusun strategi, dan berkoordinasi agar setiap program dapat terlaksana dengan baik serta memberikan manfaat yang lebih optimal bagi masyarakat desa.",
    },
    {
      title: "DISKUSI 17 AGUSTUS",
      image: "./FotoDaySiklus3/Day20/3.JPG",
      alt: "diskusi",
      description:
        "KKN SISDAMAS 121 melaksanakan pelatihan UMKM, gotong royong, dan penghijauan di Desa Kandang Mukti. Kegiatan ini bertujuan meningkatkan kemandirian ekonomi, menjaga kebersihan lingkungan, dan menciptakan ruang hijau desa. Selain itu, tim juga mengikuti rapat persiapan perayaan 17 Agustus bersama warga RW 1 untuk mempererat kebersamaan. Seluruh kegiatan berjalan lancar dengan partisipasi aktif masyarakat.",
    },
  ];

  // Auto-slide functions
  useEffect(() => {
    if (!isPlaying17) return;
    const interval = setInterval(() => {
      setCurrentIndex17((prev) =>
        prev === galleryItems.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying17, galleryItems.length]);

  useEffect(() => {
    if (!isPlaying18) return;
    const interval = setInterval(() => {
      setCurrentIndex18((prev) =>
        prev === galleryItems2.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying18, galleryItems2.length]);

  useEffect(() => {
    if (!isPlaying19) return;
    const interval = setInterval(() => {
      setCurrentIndex19((prev) =>
        prev === galleryItems3.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying19, galleryItems3.length]);

  useEffect(() => {
    if (!isPlaying20) return;
    const interval = setInterval(() => {
      setCurrentIndex20((prev) =>
        prev === galleryItems4.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying20, galleryItems4.length]);

  // Render single photo with step-by-step animation
  const renderSinglePhoto = (items, day, sectionIndex) => {
    const isVisible = visibleSections.has(sectionIndex);
    const titleVisible = sectionTitlesVisible.has(sectionIndex);
    const contentVisible = sectionContentVisible.has(sectionIndex);

    return (
      <div
        ref={(el) => (sectionRefs.current[sectionIndex] = el)}
        data-element="section"
        data-index={sectionIndex}
        className="max-w-4xl mx-auto mb-8"
      >
        <div
          className={`text-center mb-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h3
            className={`text-3xl font-bold text-gray-800 mb-2 transition-all duration-800 transform ${
              titleVisible
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-75 translate-y-8"
            }`}
          >
            {day}
          </h3>
          <div
            className={`w-16 h-1 bg-green-600 mx-auto rounded-full transition-all duration-700 transform ${
              titleVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          ></div>
        </div>

        <div
          className={`rounded-lg shadow-lg overflow-hidden transition-all duration-1000 transform ${
            contentVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-95"
          }`}
        >
          <GalleryItem {...items[0]} isVisible={contentVisible} delay={0} />
        </div>
      </div>
    );
  };

  // Render carousel with step-by-step animation
  const renderCarousel = (
    items,
    currentIndex,
    setIndex,
    isPlaying,
    togglePlayPause,
    day,
    sectionIndex
  ) => {
    const isVisible = visibleSections.has(sectionIndex);
    const titleVisible = sectionTitlesVisible.has(sectionIndex);
    const contentVisible = sectionContentVisible.has(sectionIndex);
    const buttonsVisible = sectionButtonsVisible.has(sectionIndex);

    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      touchEndX = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          setIndex(currentIndex === items.length - 1 ? 0 : currentIndex + 1);
        } else {
          setIndex(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
        }
      }
    };

    return (
      <div
        ref={(el) => (sectionRefs.current[sectionIndex] = el)}
        data-element="section"
        data-index={sectionIndex}
        className="relative max-w-4xl mx-auto mb-8"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Step 1: Section container appears */}
        <div
          className={`text-center mb-6 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Step 2: Title appears */}
          <h3
            className={`text-3xl font-bold text-gray-800 mb-2 transition-all duration-800 transform ${
              titleVisible
                ? "opacity-100 scale-100 translate-y-0 rotate-0"
                : "opacity-0 scale-75 translate-y-8 -rotate-3"
            }`}
          >
            {day}
          </h3>
          <div
            className={`w-16 h-1 bg-green-600 mx-auto rounded-full transition-all duration-700 transform ${
              titleVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          ></div>
        </div>

        {/* Step 3: Content appears */}
        <div
          className={`relative overflow-hidden rounded-lg shadow-lg transition-all duration-1000 transform ${
            contentVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-12 scale-95"
          }`}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {items.map((item, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <GalleryItem
                  {...item}
                  isVisible={contentVisible}
                  delay={index * 200}
                  itemIndex={index}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Step 4: Navigation Buttons appear */}
        <button
          onClick={() =>
            setIndex(currentIndex === 0 ? items.length - 1 : currentIndex - 1)
          }
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/40 hover:bg-white rounded-full p-2 shadow-md transition-all duration-800 hover:scale-110 hover:shadow-lg hover:-translate-x-1 ${
            buttonsVisible
              ? "opacity-100 translate-x-0 rotate-0"
              : "opacity-0 -translate-x-8 -rotate-45"
          }`}
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        <button
          onClick={() =>
            setIndex(currentIndex === items.length - 1 ? 0 : currentIndex + 1)
          }
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/40 hover:bg-white rounded-full p-2 shadow-md transition-all duration-800 hover:scale-110 hover:shadow-lg hover:translate-x-1 ${
            buttonsVisible
              ? "opacity-100 translate-x-0 rotate-0"
              : "opacity-0 translate-x-8 rotate-45"
          }`}
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>

        <button
          onClick={togglePlayPause}
          className={`absolute bottom-4 right-4 bg-green-600 hover:bg-green-700 text-white rounded-full p-2 shadow-md transition-all duration-800 hover:scale-110 hover:shadow-xl hover:-translate-y-1 ${
            buttonsVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-75"
          }`}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5" />
          )}
        </button>
      </div>
    );
  };

  return (
    <section className="py-16 bg-white min-h-screen overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Section with Animation */}
        <div
          ref={headerRef}
          data-element="header"
          className={`text-center mb-12 sticky top-0 bg-white z-10 py-4 transition-all duration-1000 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2
            className={`text-3xl font-bold text-gray-800 mb-2 transition-all duration-700 ${
              headerVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            style={{
              transitionDelay: headerVisible ? "200ms" : "0ms",
            }}
          >
            Galeri Kegiatan Harian Siklus 3
          </h2>
          <hr
            className={`w-24 mx-auto my-4 border-t-2 border-green-600 transition-all duration-700 transform ${
              headerVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
            style={{
              transitionDelay: headerVisible ? "400ms" : "0ms",
            }}
          />
          <p
            className={`text-gray-600 max-w-2xl mx-auto transition-all duration-700 ${
              headerVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{
              transitionDelay: headerVisible ? "600ms" : "0ms",
            }}
          >
            Dokumentasi harian kegiatan KKN di Siklus 3 dari hari ke-17 sampai
            hari ke-20 di Desa Kandangmukti.
          </p>
        </div>

        {/* Gallery Content */}
        <div className="space-y-12">
          {renderCarousel(
            galleryItems,
            currentIndex17,
            setCurrentIndex17,
            isPlaying17,
            () => setIsPlaying17(!isPlaying17),
            "Day 17",
            0
          )}

          {renderCarousel(
            galleryItems2,
            currentIndex18,
            setCurrentIndex18,
            isPlaying18,
            () => setIsPlaying18(!isPlaying18),
            "Day 18",
            1
          )}

          {renderCarousel(
            galleryItems3,
            currentIndex19,
            setCurrentIndex19,
            isPlaying19,
            () => setIsPlaying19(!isPlaying19),
            "Day 19",
            2
          )}

          {renderCarousel(
            galleryItems4,
            currentIndex20,
            setCurrentIndex20,
            isPlaying20,
            () => setIsPlaying20(!isPlaying20),
            "Day 20",
            3
          )}
        </div>
      </div>
    </section>
  );
};

export default GalleryHarian1;
