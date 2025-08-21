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
  const [currentIndex11, setCurrentIndex11] = useState(0);
  const [currentIndex12, setCurrentIndex12] = useState(0);
  const [currentIndex13, setCurrentIndex13] = useState(0);
  const [currentIndex14, setCurrentIndex14] = useState(0);
  const [currentIndex15, setCurrentIndex15] = useState(0);
  const [currentIndex16, setCurrentIndex16] = useState(0);
  const [isPlaying11, setIsPlaying11] = useState(true);
  const [isPlaying12, setIsPlaying12] = useState(true);
  const [isPlaying13, setIsPlaying13] = useState(true);
  const [isPlaying14, setIsPlaying14] = useState(true);
  const [isPlaying15, setIsPlaying15] = useState(true);
  const [isPlaying16, setIsPlaying16] = useState(true);

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
      title: "JUMSIH BERSAMA RW 01",
      image: "./FotoDaySiklus2/Day11/1.JPG",
      alt: "Kegiatan jumsih",
      description:
        "Kegiatan Jum’at Bersih (Jumsih) bersama warga RW 01 menjadi wujud kepedulian terhadap kebersihan lingkungan sekitar. Melalui gotong royong, mahasiswa KKN SISDAMAS 121 dan masyarakat bekerja sama membersihkan area sekitar demi menciptakan lingkungan yang sehat, nyaman, dan asri.",
    },
    {
      title: "KBM DI SDN 01 KANDANGMUKTI",
      image: "./FotoDaySiklus2/Day11/2.JPG",
      alt: "KBM",
      description:
        "Mahasiswa KKN SISDAMAS 121 turut serta dalam kegiatan Belajar Mengajar di SDN 01 Kandangmukti. Melalui kegiatan ini, mahasiswa membantu guru dalam menyampaikan materi pelajaran kepada siswa, sekaligus memberikan pengalaman belajar yang interaktif dan menyenangkan.",
    },
    {
      title: "BIMBEL BAHASA INGGRIS",
      image: "./FotoDaySiklus2/Day11/3.JPG",
      alt: "Bimbel",
      description:
        "Kegiatan Bimbingan Belajar Bahasa Inggris bersama anak-anak menjadi salah satu program KKN SISDAMAS 121 di Desa Kandangmukti. Melalui bimbingan ini, mahasiswa membantu anak-anak dalam memahami kosakata, tata bahasa, serta praktik percakapan sederhana. Suasana belajar dibuat santai dan menyenangkan sehingga anak-anak lebih bersemangat dalam mempelajari Bahasa Inggris.",
    },
    {
      title: "KBM DI MDTA AL-IHYA",
      image: "./FotoDaySiklus2/Day11/4.JPG",
      alt: "KBM",
      description:
        "Kegiatan Belajar Mengajar di Madrasah Diniyah Takmiliyah Al-Ihya menjadi salah satu bentuk pengabdian mahasiswa KKN SISDAMAS 121 di Desa Kandangmukti. Dalam kegiatan ini, mahasiswa turut serta membantu proses pembelajaran agama, seperti membaca Al-Qur’an, akhlak, serta pengetahuan dasar keislaman. Anak-anak terlihat antusias dan bersemangat dalam mengikuti pelajaran yang dibawakan dengan metode interaktif.",
    },
  ];

  const galleryItems2 = [
    {
      title: "BRIEFING LOMBA",
      image: "./FotoDaySiklus2/Day12/1.JPG",
      alt: "Lomba",
      description:
        "Kegiatan briefing ini dilaksanakan sebagai persiapan untuk Lomba Bahasa Tunas Ibu se-Kecamatan Leles. Mahasiswa KKN SISDAMAS 121 Desa Kandangmukti bersama pihak terkait melakukan diskusi intensif mengenai teknis perlombaan, pembagian tugas, serta strategi pelaksanaan acara agar berjalan lancar.",
    },
    {
      title: "OBSERVASI BUMDES",
      image: "./FotoDaySiklus2/Day12/2.jpeg",
      alt: "Bumdes",
      description:
        "Kegiatan observasi ini dilakukan bersama pihak Bumdes untuk membahas potensi, perencanaan, serta pengelolaan usaha desa. Fokus utama diskusi mencakup pengembangan kandang ayam petelur dan sistem budidaya ikan (Budisys) yang sedang dijalankan.",
    },
    {
      title: "DISKUSI TANAMAN OBAT BERSAMA IBU PKK RW 06",
      image: "./FotoDaySiklus2/Day12/3.jpeg",
      alt: "Diskusi",
      description:
        "Kegiatan ini merupakan diskusi bersama Ibu-ibu PKK RW 06 terkait rencana pembuatan Taman Tanaman Obat. Melalui pertemuan ini, mahasiswa KKN SISDAMAS 121 Desa Kandangmukti bertukar gagasan mengenai jenis tanaman obat yang dapat dibudidayakan, manfaatnya bagi kesehatan keluarga, serta cara perawatannya.",
    },
  ];

  const galleryItems3 = [
    {
      title: "EKSEKUSI PEMBUATAN TAMAN TANAMAN OBAT",
      image: "./FotoDaySiklus2/Day13/1.png",
      alt: "Kegiatan Kunjungan",
      description:
        "Setelah melalui tahap diskusi, mahasiswa KKN SISDAMAS 121 Desa Kandangmukti melaksanakan eksekusi pembuatan Taman Tanaman Obat. Kegiatan ini dilakukan di area Kantor Desa Kandangmukti dengan memanfaatkan bahan sederhana seperti bambu dan polybag.",
    },
  ];

  const galleryItems4 = [
    {
      title: "VERIFIKASI DATA KE KANTOR DESA",
      image: "./FotoDaySiklus2/Day14/1.JPG",
      alt: "Verif Data",
      description:
        "Mahasiswa KKN SISDAMAS 121 Desa Kandangmukti melakukan verifikasi data ke Kantor Desa sebagai bagian dari proses pemetaan desa pada siklus 2. Kegiatan ini bertujuan untuk memastikan keakuratan data yang akan digunakan dalam perencanaan program desa sehingga hasil pemetaan dapat lebih tepat sasaran dan bermanfaat bagi masyarakat.",
    },
    {
      title: "SOSIALISASI DAN PENYULUHAN PEMETAAN WILAYAH DI DUSUN 02",
      image: "./FotoDaySiklus2/Day14/2.JPG",
      alt: "Kegiatan Pemeteaan",
      description:
        "Mahasiswa KKN SISDAMAS 121 Desa Kandangmukti melaksanakan sosialisasi door to door kepada warga Dusun 02. Kegiatan ini bertujuan untuk melakukan verifikasi dan aktualisasi data pemetaan wilayah. Dengan adanya penyuluhan ini, masyarakat dapat memahami pentingnya data yang akurat dalam mendukung pembangunan desa yang lebih terarah dan sesuai kebutuhan warga.",
    },
  ];

  const galleryItems5 = [
    {
      title: "PENYULUHAN PHBS DI POSYANDU RW 01",
      image: "./FotoDaySiklus2/Day15/1.JPG",
      alt: "Kegiatan PHBS",
      description:
        "Mahasiswa KKN SISDAMAS 121 Desa Kandangmukti melaksanakan kegiatan sosialisasi dan penyuluhan mengenai Perilaku Hidup Bersih dan Sehat (PHBS) di Posyandu RW 01. Kegiatan ini bertujuan untuk meningkatkan kesadaran masyarakat, khususnya para ibu dan anak, tentang pentingnya menjaga kebersihan diri dan lingkungan guna menciptakan pola hidup yang lebih sehat dan mencegah berbagai penyakit.",
    },
    {
      title: "PENDAMPINGAN PESERTA LOMBA FESTIVAL TUNAS BAHASA IBU 2025",
      image: "./FotoDaySiklus2/Day15/2.jpeg",
      alt: "Kegiatan Lomba",
      description:
        "Mahasiswa KKN SISDAMAS 121 Desa Kandangmukti mendampingi siswa SDN 01 Kandangmukti dalam mengikuti berbagai cabang perlombaan pada Festival Tunas Bahasa Ibu (FTBI) 2025 tingkat Kecamatan Leles. Kegiatan ini bertujuan untuk memberikan dukungan, bimbingan, serta motivasi agar para siswa lebih percaya diri dalam menampilkan kemampuan berbahasa dan berkarya, sekaligus menumbuhkan kecintaan terhadap bahasa ibu sebagai identitas budaya serta memperkuat semangat kompetisi sehat antar sekolah.",
    },
    {
      title: "KBM DI MDTA AL-IHYA",
      image: "./FotoDaySiklus2/Day15/3.JPG",
      alt: "Kegiatan Mengaji",
      description:
        "Mahasiswa KKN SISDAMAS 121 Desa Kandangmukti turut serta dalam kegiatan belajar mengajar rutin di Madrasah Diniyah Takmiliyah Al-Ihya. Kegiatan ini bertujuan untuk mendukung proses pembelajaran agama bagi para santri, khususnya dalam memperdalam ilmu Al-Qur’an, fiqih, serta akhlak.",
    },
  ];

  const galleryItems6 = [
    {
      title: "KBM MAPEL PJOK PRAKTEK DI SDN 01 KANDANGMUKTI",
      image: "./FotoDaySiklus2/Day16/1.JPG",
      alt: "Kegiatan ngajar",
      description:
        "Mahasiswa KKN SISDAMAS 121 Desa Kandangmukti melaksanakan kegiatan pembelajaran praktik mata pelajaran PJOK bersama siswa SDN 01 Kandangmukti. Kegiatan ini tidak hanya melatih keterampilan fisik dan motorik anak, tetapi juga menumbuhkan semangat kebersamaan, sportivitas, serta gaya hidup aktif dan sehat.",
    },
    {
      title: "KBM DI MDTA AL-IHYA",
      image: "./FotoDaySiklus2/Day16/2.JPG",
      alt: "Kegiatan Mengaji",
      description:
        "Mahasiswa KKN SISDAMAS 121 Desa Kandangmukti ikut serta dalam kegiatan pembelajaran rutin di Madrasah Diniyah Takmiliyah Al-Ihya dengan mendampingi santri dalam membaca, menulis, serta memahami pelajaran agama.",
    },
  ];

  // Auto-slide functions
  useEffect(() => {
    if (!isPlaying11) return;
    const interval = setInterval(() => {
      setCurrentIndex11((prev) =>
        prev === galleryItems.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying11, galleryItems.length]);

  useEffect(() => {
    if (!isPlaying12) return;
    const interval = setInterval(() => {
      setCurrentIndex12((prev) =>
        prev === galleryItems2.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying12, galleryItems2.length]);

  useEffect(() => {
    if (!isPlaying13) return;
    const interval = setInterval(() => {
      setCurrentIndex13((prev) =>
        prev === galleryItems3.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying13, galleryItems3.length]);

  useEffect(() => {
    if (!isPlaying14) return;
    const interval = setInterval(() => {
      setCurrentIndex14((prev) =>
        prev === galleryItems4.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying14, galleryItems4.length]);

  useEffect(() => {
    if (!isPlaying15) return;
    const interval = setInterval(() => {
      setCurrentIndex15((prev) =>
        prev === galleryItems5.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying15, galleryItems5.length]);

  useEffect(() => {
    if (!isPlaying16) return;
    const interval = setInterval(() => {
      setCurrentIndex16((prev) =>
        prev === galleryItems6.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying16, galleryItems6.length]);

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
            Galeri Kegiatan Harian Siklus 2
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
            Dokumentasi harian kegiatan KKN di Siklus 2 dari hari ke-11 sampai
            hari ke-16 di Desa Kandangmukti.
          </p>
        </div>

        {/* Gallery Content */}
        <div className="space-y-12">
          {renderCarousel(
            galleryItems,
            currentIndex11,
            setCurrentIndex11,
            isPlaying11,
            () => setIsPlaying11(!isPlaying11),
            "Day 11",
            0
          )}

          {renderCarousel(
            galleryItems2,
            currentIndex12,
            setCurrentIndex12,
            isPlaying12,
            () => setIsPlaying12(!isPlaying12),
            "Day 12",
            1
          )}

          {renderSinglePhoto(galleryItems3, "Day 13", 2)}

          {renderCarousel(
            galleryItems4,
            currentIndex14,
            setCurrentIndex14,
            isPlaying14,
            () => setIsPlaying14(!isPlaying14),
            "Day 14",
            3
          )}

          {renderCarousel(
            galleryItems5,
            currentIndex15,
            setCurrentIndex15,
            isPlaying15,
            () => setIsPlaying15(!isPlaying15),
            "Day 15",
            4
          )}

          {renderCarousel(
            galleryItems6,
            currentIndex16,
            setCurrentIndex16,
            isPlaying16,
            () => setIsPlaying16(!isPlaying16),
            "Day 16",
            5
          )}
        </div>
      </div>
    </section>
  );
};

export default GalleryHarian1;
