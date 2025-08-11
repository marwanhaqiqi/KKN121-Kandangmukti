import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const GalleryItem = ({ title, image, alt, description }) => (
  <div className="bg-gray-50 rounded-lg overflow-hidden">
    <div className="md:flex">
      <div className="md:w-1/3">
        <img src={image} alt={alt} className="w-full h-64 object-cover" />
      </div>
      <div className="p-6 md:w-2/3 -mt-3">
        <h4 className="text-lg font-semibold mb-2">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

const Gallery = () => {
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [currentIndex3, setCurrentIndex3] = useState(0);
  const [currentIndex4, setCurrentIndex4] = useState(0);
  const [isPlaying1, setIsPlaying1] = useState(true);
  const [isPlaying2, setIsPlaying2] = useState(true);
  const [isPlaying3, setIsPlaying3] = useState(true);
  const [isPlaying4, setIsPlaying4] = useState(true);

  const galleryItems = [
    {
      title: "Kunjungan",
      image: "./Day1/1.jpg",
      alt: "Kegiatan perkenalan dengan perangkat desa",
      description:
        "Sebagai bentuk awal pelaksanaan program KKN SISDAMAS 121 di Desa Kandang Mukti, mahasiswa melaksanakan kunjungan dan silaturahmi kepada Bapak Kepala Desa beserta jajaran perangkat desa.",
    },
    {
      title: "Observasi",
      image: "./Day1/2.jpg",
      alt: "Survey ke rumah-rumah warga",
      description:
        "Pada kegiatan observasi ini, tim KKN SISDAMAS 121 Desa Kandang Mukti melakukan peninjauan langsung ke lapangan kerja bersama Bapak Kepala Dusun Dua.",
    },
    {
      title: "Pra Pembukaan",
      image: "./Day1/3.jpg",
      alt: "Penyusunan program kerja utama",
      description:
        "Kegiatan pra pembukaan menjadi langkah awal dalam pelaksanaan KKN SISDAMAS 121, 122, dan 123 di Desa Kandang Mukti.",
    },
  ];

  const galleryItems2 = [
    {
      title: "Pembukaan",
      image: "./Day2/1.jpg",
      alt: "Kegiatan pembukaan",
      description:
        "Kegiatan pembukaan resmi KKN SISDAMAS 121 dilaksanakan di Kantor Desa Kandangmukti sebagai langkah awal dimulainya program pengabdian masyarakat oleh para mahasiswa.",
    },
    {
      title: "Observasi",
      image: "./Day2/2.JPG",
      alt: "Survey ke Sekolah",
      description:
        "Kegiatan observasi ini merupakan langkah awal tim KKN SISDAMAS 121 dalam memahami kondisi dan kebutuhan pendidikan di SDN 01 Kandangmukti.",
    },
    {
      title: "Observasi",
      image: "./Day2/3.jpg",
      alt: "Survey Madrasah",
      description:
        "Observasi di Madrasah Al Ihya menjadi salah satu langkah awal penting dalam memahami kondisi dan kebutuhan Madrasah Al-Ihya di Desa Kandangmukti.",
    },
  ];

  const galleryItems3 = [
    {
      title: "Mengajar",
      image: "./Day3/1.jpg",
      alt: "Kegiatan Mengajar",
      description:
        "Kegiatan mengajar ini menjadi momen berharga dalam proses pengabdian tim KKN SISDAMAS 121 di SDN 01 Kandangmukti.",
    },
    {
      title: "Bimbel",
      image: "./Day3/2.jpg",
      alt: "Kegiatan Bimbel",
      description:
        "Kegiatan bimbingan belajar (bimbel) ini menjadi wadah interaksi positif antara tim KKN SISDAMAS 121 dan anak-anak di Desa Kandangmukti.",
    },
    {
      title: "Mengaji",
      image: "./Day3/3.JPG",
      alt: "Kegiatan Mengaji",
      description:
        "Kegiatan mengaji dan mengajar Al-Qur’an di Madrasah Al-Ihya menjadi salah satu bentuk kontribusi spiritual tim KKN SISDAMAS 121 dalam mendampingi pendidikan keagamaan masyarakat.",
    },
  ];

  const galleryItems4 = [
    {
      title: "Mengajar",
      image: "./Day4/1.JPG",
      alt: "Kegiatan Mengajar",
      description:
        "Kegiatan belajar mengajar di hari kedua di SDN 01 Kandangmukti berlangsung dengan antusiasme yang tinggi. Tim KKN SISDAMAS 121 tidak hanya menyampaikan materi pelajaran, tetapi juga menciptakan suasana kelas yang interaktif dan menyenangkan.",
    },
    {
      title: "Mengaji",
      image: "./Day4/2.JPG",
      alt: "Kegiatan Mengaji",
      description:
        "Kegiatan mengaji di Madrasah Al-Ihya, suasana kekeluargaan dan kedekatan emosional semakin terasa antara tim KKN dan para santri. Kegiatan belajar mengaji berlangsung dengan semangat dan keceriaan anak-anak yang membuat proses pembelajaran terasa ringan dan menyenangkan.",
    },
  ];

  // Auto-slide Day 1
  useEffect(() => {
    if (!isPlaying1) return;
    const interval = setInterval(() => {
      setCurrentIndex1((prev) =>
        prev === galleryItems.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying1, galleryItems.length]);

  // Auto-slide Day 2
  useEffect(() => {
    if (!isPlaying2) return;
    const interval = setInterval(() => {
      setCurrentIndex2((prev) =>
        prev === galleryItems2.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying2, galleryItems2.length]);

  // Auto-slide Day 3
  useEffect(() => {
    if (!isPlaying3) return;
    const interval = setInterval(() => {
      setCurrentIndex3((prev) =>
        prev === galleryItems3.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying3, galleryItems3.length]);

  // Auto-slide Day 4
  useEffect(() => {
    if (!isPlaying4) return;
    const interval = setInterval(() => {
      setCurrentIndex4((prev) =>
        prev === galleryItems4.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying4, galleryItems4.length]);

  const renderCarousel = (
    items,
    currentIndex,
    setIndex,
    isPlaying,
    togglePlayPause,
    day
  ) => {
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
          // Geser ke kanan
          setIndex(currentIndex === items.length - 1 ? 0 : currentIndex + 1);
        } else {
          // Geser ke kiri
          setIndex(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
        }
      }
    };

    return (
      <div
        className="relative max-w-4xl mx-auto mb-8"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="text-center mb-6">
          <h3 className="text-3xl font-bold text-gray-800 mb-2">{day}</h3>
          <div className="w-16 h-1 bg-green-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {items.map((item, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <GalleryItem {...item} />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() =>
            setIndex(currentIndex === 0 ? items.length - 1 : currentIndex - 1)
          }
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/40 hover:bg-white rounded-full p-2 shadow-md"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        <button
          onClick={() =>
            setIndex(currentIndex === items.length - 1 ? 0 : currentIndex + 1)
          }
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/40 hover:bg-white rounded-full p-2 shadow-md"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>

        <button
          onClick={togglePlayPause}
          className="absolute bottom-4 right-4 bg-green-600 hover:bg-green-700 text-white rounded-full p-2 shadow-md"
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
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Galeri Kegiatan Harian
          </h2>
          <hr className="w-24 mx-auto my-4 border-t-2 border-green-600" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dokumentasi harian kegiatan KKN dari hari ke-1 sampai hari ke-35 di
            Desa Kandangmukti.
          </p>
        </div>

        {renderCarousel(
          galleryItems,
          currentIndex1,
          setCurrentIndex1,
          isPlaying1,
          () => setIsPlaying1(!isPlaying1),
          "Day 1"
        )}

        {renderCarousel(
          galleryItems2,
          currentIndex2,
          setCurrentIndex2,
          isPlaying2,
          () => setIsPlaying2(!isPlaying2),
          "Day 2"
        )}
        {renderCarousel(
          galleryItems3,
          currentIndex3,
          setCurrentIndex3,
          isPlaying3,
          () => setIsPlaying3(!isPlaying3),
          "Day 3"
        )}
        {renderCarousel(
          galleryItems4,
          currentIndex4,
          setCurrentIndex4,
          isPlaying4,
          () => setIsPlaying4(!isPlaying4),
          "Day 4"
        )}
      </div>
    </section>
  );
};

export default Gallery;
