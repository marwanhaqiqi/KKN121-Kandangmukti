import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const GalleryItem = ({ title, image, alt, description }) => (
  <div className="rounded-lg overflow-hidden">
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

const GalleryHarian1 = () => {
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [currentIndex3, setCurrentIndex3] = useState(0);
  const [currentIndex4, setCurrentIndex4] = useState(0);
  const [currentIndex5, setCurrentIndex5] = useState(0);
  const [currentIndex6, setCurrentIndex6] = useState(0);
  const [currentIndex7, setCurrentIndex7] = useState(0);
  const [currentIndex8, setCurrentIndex8] = useState(0);
  const [currentIndex9, setCurrentIndex9] = useState(0);
  const [currentIndex10, setCurrentIndex10] = useState(0);
  const [isPlaying1, setIsPlaying1] = useState(true);
  const [isPlaying2, setIsPlaying2] = useState(true);
  const [isPlaying3, setIsPlaying3] = useState(true);
  const [isPlaying4, setIsPlaying4] = useState(true);
  const [isPlaying5, setIsPlaying5] = useState(true);
  const [isPlaying6, setIsPlaying6] = useState(true);
  const [isPlaying7, setIsPlaying7] = useState(true);
  const [isPlaying8, setIsPlaying8] = useState(true);
  const [isPlaying9, setIsPlaying9] = useState(true);
  const [isPlaying10, setIsPlaying10] = useState(true);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const galleryItems = [
    {
      title: "KUNJUNGAN",
      image: "./Day1/1.jpg",
      alt: "Kegiatan perkenalan dengan perangkat desa",
      description:
        "Sebagai bentuk awal pelaksanaan program KKN SISDAMAS 121 di Desa Kandang Mukti, mahasiswa melaksanakan kunjungan dan silaturahmi kepada Bapak Kepala Desa beserta jajaran perangkat desa.",
    },
    {
      title: "OBSERVASI",
      image: "./Day1/2.jpg",
      alt: "Survey ke rumah-rumah warga",
      description:
        "Pada kegiatan observasi ini, tim KKN SISDAMAS 121 Desa Kandang Mukti melakukan peninjauan langsung ke lapangan kerja bersama Bapak Kepala Dusun Dua.",
    },
    {
      title: "PRA PEMBUKAAN",
      image: "./Day1/3.jpg",
      alt: "Penyusunan program kerja utama",
      description:
        "Kegiatan pra pembukaan menjadi langkah awal dalam pelaksanaan KKN SISDAMAS 121, 122, dan 123 di Desa Kandang Mukti.",
    },
  ];

  const galleryItems2 = [
    {
      title: "PEMBUKAAN",
      image: "./Day2/1.jpg",
      alt: "Kegiatan pembukaan",
      description:
        "Kegiatan pembukaan resmi KKN SISDAMAS 121 dilaksanakan di Kantor Desa Kandangmukti sebagai langkah awal dimulainya program pengabdian masyarakat oleh para mahasiswa.",
    },
    {
      title: "OBSERVASI",
      image: "./Day2/2.JPG",
      alt: "Survey ke Sekolah",
      description:
        "Kegiatan observasi ini merupakan langkah awal tim KKN SISDAMAS 121 dalam memahami kondisi dan kebutuhan pendidikan di SDN 01 Kandangmukti.",
    },
    {
      title: "OBSERVASI",
      image: "./Day2/3.jpg",
      alt: "Survey Madrasah",
      description:
        "Observasi di Madrasah Al Ihya menjadi salah satu langkah awal penting dalam memahami kondisi dan kebutuhan Madrasah Al-Ihya di Desa Kandangmukti.",
    },
  ];

  const galleryItems3 = [
    {
      title: "MENGAJAR",
      image: "./Day3/1.jpg",
      alt: "Kegiatan Mengajar",
      description:
        "Kegiatan mengajar ini menjadi momen berharga dalam proses pengabdian tim KKN SISDAMAS 121 di SDN 01 Kandangmukti.",
    },
    {
      title: "BIMBEL",
      image: "./Day3/2.jpg",
      alt: "Kegiatan Bimbel",
      description:
        "Kegiatan bimbingan belajar (bimbel) ini menjadi wadah interaksi positif antara tim KKN SISDAMAS 121 dan anak-anak di Desa Kandangmukti.",
    },
    {
      title: "MENGAJI",
      image: "./Day3/3.JPG",
      alt: "Kegiatan Mengaji",
      description:
        "Kegiatan mengaji dan mengajar Al-Qur'an di Madrasah Al-Ihya menjadi salah satu bentuk kontribusi spiritual tim KKN SISDAMAS 121 dalam mendampingi pendidikan keagamaan masyarakat.",
    },
  ];

  const galleryItems4 = [
    {
      title: "MENGAJAR",
      image: "./Day4/1.JPG",
      alt: "Kegiatan Mengajar",
      description:
        "Kegiatan belajar mengajar di SDN 01 Kandangmukti berlangsung dengan antusiasme yang tinggi. Tim KKN SISDAMAS 121 tidak hanya menyampaikan materi pelajaran, tetapi juga menciptakan suasana kelas yang interaktif dan menyenangkan.",
    },
    {
      title: "MENGAJI",
      image: "./Day4/2.JPG",
      alt: "Kegiatan Mengaji",
      description:
        "Kegiatan mengaji di Madrasah Al-Ihya, suasana kekeluargaan dan kedekatan emosional semakin terasa antara tim KKN dan para santri. Kegiatan belajar mengaji berlangsung dengan semangat dan keceriaan anak-anak yang membuat proses pembelajaran terasa ringan dan menyenangkan.",
    },
  ];

  const galleryItems5 = [
    {
      title: "JUM'AT BERSIH",
      image: "./Day5/1.jpg",
      alt: "Kegiatan Jumsih",
      description:
        "Kegiatan Jum'at Bersih menjadi momen untuk mempererat hubungan antara tim KKN SISDAMAS 121 dan warga sekitar. Bersama-sama, mereka melakukan kerja bakti membersihkan area sekitar posko, mulai dari menyapu jalan hingga merapikan lingkungan.",
    },
    {
      title: "MENGAJAR",
      image: "./Day5/2.JPG",
      alt: "Kegiatan Mengajar",
      description:
        "Kegiatan mengajar menjadi salah satu agenda rutin tim KKN SISDAMAS 121 di SDN 01 Kandangmukti. Dengan penuh semangat dan senyum ramah, para anggota tim membagikan ilmu serta motivasi kepada siswa-siswi, menciptakan suasana belajar yang interaktif dan menyenangkan.",
    },
    {
      title: "MENGAJI",
      image: "./Day5/3.jpg",
      alt: "Kegiatan Mengaji",
      description:
        "Kegiatan mengaji di Madrasah Al-Ihya menjadi rutinitas yang dijalankan tim KKN SISDAMAS 121 bersama anak-anak desa. Dalam suasana penuh kekhidmatan, mereka belajar membaca Al-Qur'an dan memahami nilai-nilai agama.",
    },
  ];

  const galleryItems6 = [
    {
      title: "MENGAJAR",
      image: "./Day6/1.JPG",
      alt: "Kegiatan ngajar",
      description:
        "Kegiatan mengajar di SDN 01 Kandang Mukti menjadi salah satu agenda rutin tim KKN SISDAMAS 121. Melalui interaksi langsung di kelas, para mahasiswa berbagi ilmu dan pengalaman dengan para siswa, sekaligus membangkitkan semangat belajar.",
    },
    {
      title: "RUTINAN YASINAN",
      image: "./Day6/2.JPG",
      alt: "Kegiatan rutinan",
      description:
        "Rutinitas yasinan menjadi salah satu momen kebersamaan antara tim KKN SISDAMAS 121 dan warga Desa Kandang Mukti. Bersama-sama membaca Surat Yasin di masjid, kegiatan ini tidak hanya mempererat tali silaturahmi, tetapi juga menumbuhkan rasa persaudaraan dan memperkokoh ikatan spiritual di tengah masyarakat.",
    },
  ];

  const galleryItems7 = [
    {
      title: "KUNJUNGAN BERSAMA",
      image: "./Day7/1.JPG",
      alt: "Kegiatan Kunjungan",
      description:
        "Kegiatan kunjungan bersama ke RT 1 RW 2 menjadi momen penting untuk bersilaturahmi sekaligus berdiskusi dengan warga setempat. Melalui musyawarah, tim KKN SISDAMAS 121 mendengarkan aspirasi dan masukan dari masyarakat, serta mempererat hubungan kekeluargaan.",
    },
  ];

  const galleryItems8 = [
    {
      title: "KUNJUNGAN KE SD",
      image: "./Day8/1.JPG",
      alt: "Kegiatan Kunjungan",
      description:
        "Kunjungan kali ini merupakan momen pamitan tim KKN SISDAMAS 121 Desa Kandang Mukti kepada SDN 01 Kandangmukti. Setelah beberapa waktu mendampingi kegiatan belajar di sekolah, tim KKN berpamitan kepada bapak kepala sekolah, guru, dan siswa.",
    },
    {
      title: "BIMBEL",
      image: "./Day8/2.png",
      alt: "Kegiatan Bimbel",
      description:
        "Kegiatan bimbingan belajar Bahasa Inggris ini menjadi salah satu agenda rutin tim KKN SISDAMAS 121 Desa Kandang Mukti. Dengan suasana santai dan penuh keakraban, anak-anak dibimbing untuk memahami kosa kata, tata bahasa, dan percakapan sederhana.",
    },
  ];

  const galleryItems9 = [
    {
      title: "FOTO BERSAMA",
      image: "./Day9/1.JPG",
      alt: "Kegiatan Fotbar",
      description:
        "Momen kebersamaan yang hangat antara tim KKN SISDAMAS 121 Desa Kandang Mukti dan para guru SDN 01 Kandangmukti. Foto ini diambil sebagai kenang-kenangan atas kerja sama yang telah terjalin selama kegiatan KKN, sekaligus menjadi simbol persahabatan dan silaturahmi yang akan selalu diingat.",
    },
    {
      title: "PERSIAPAN LOMBA",
      image: "./Day9/2.JPG",
      alt: "Kegiatan Persiapan Lomba",
      description:
        "Tim KKN SISDAMAS 121 Desa Kandang Mukti mendampingi siswa dalam persiapan Lomba Festival Tunas Bahasa Ibu. Kegiatan ini berfokus pada pelatihan, pengarahan materi, dan simulasi lomba, agar peserta lebih percaya diri dan siap tampil maksimal di ajang tersebut.",
    },
    {
      title: "MENGAJI",
      image: "./Day9/3.JPG",
      alt: "Kegiatan Mengaji",
      description:
        "Kegiatan mengajar ngaji di Madrasah Al-Ihya menjadi salah satu program rutin tim KKN SISDAMAS 121 Desa Kandang Mukti. Dengan penuh kesabaran, para mahasiswa membimbing anak-anak dalam membaca Al-Qur’an, memperbaiki tajwid, dan memahami makna ayat, sekaligus menanamkan nilai-nilai keislaman sejak dini.",
    },
  ];

  const galleryItems10 = [
    {
      title: "REMBUG WARGA",
      image: "./Day10/1.JPG",
      alt: "Kegiatan Rembug Warga",
      description:
        "Rembug warga menjadi ajang diskusi antara tim KKN SISDAMAS 121 Desa Kandang Mukti dan masyarakat setempat untuk membahas program kerja serta kebutuhan desa. Dalam suasana penuh keakraban, warga menyampaikan aspirasi, ide, dan harapan, yang kemudian menjadi bahan penting dalam perencanaan kegiatan KKN agar lebih tepat sasaran dan bermanfaat bagi desa.",
    },
    {
      title: "MENGAJAR",
      image: "./Day10/2.JPG",
      alt: "Kegiatan Mengajar",
      description:
        "Tim KKN SISDAMAS 121 Desa Kandang Mukti turut serta mengajar mata pelajaran PJOK untuk siswa kelas 1 di SDN 01 Kandangmukti. Kegiatan ini tidak hanya melatih keterampilan fisik dan motorik anak-anak, tetapi juga menumbuhkan semangat sportivitas, kerja sama, dan kebersamaan di antara siswa.",
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

  // Auto-slide Day 5
  useEffect(() => {
    if (!isPlaying5) return;
    const interval = setInterval(() => {
      setCurrentIndex5((prev) =>
        prev === galleryItems5.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying5, galleryItems5.length]);

  // Auto-slide Day 6
  useEffect(() => {
    if (!isPlaying6) return;
    const interval = setInterval(() => {
      setCurrentIndex6((prev) =>
        prev === galleryItems6.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying6, galleryItems6.length]);

  // Auto-slide Day 7
  useEffect(() => {
    if (!isPlaying7) return;
    const interval = setInterval(() => {
      setCurrentIndex7((prev) =>
        prev === galleryItems7.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying7, galleryItems7.length]);

  // Auto-slide Day 8
  useEffect(() => {
    if (!isPlaying8) return;
    const interval = setInterval(() => {
      setCurrentIndex8((prev) =>
        prev === galleryItems8.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying8, galleryItems8.length]);

  // Auto-slide Day 9
  useEffect(() => {
    if (!isPlaying9) return;
    const interval = setInterval(() => {
      setCurrentIndex9((prev) =>
        prev === galleryItems9.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying9, galleryItems9.length]);

  // Auto-slide Day 10
  useEffect(() => {
    if (!isPlaying10) return;
    const interval = setInterval(() => {
      setCurrentIndex10((prev) =>
        prev === galleryItems10.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying10, galleryItems10.length]);

  // Render single photo view (tanpa carousel)
  const renderSinglePhoto = (items, day) => {
    return (
      <div className="max-w-4xl mx-auto mb-8">
        <div className="text-center mb-6">
          <h3 className="text-3xl font-bold text-gray-800 mb-2">{day}</h3>
          <div className="w-16 h-1 bg-green-600 mx-auto rounded-full"></div>
        </div>

        <div className="rounded-lg shadow-lg overflow-hidden">
          <GalleryItem {...items[0]} />
        </div>
      </div>
    );
  };

  // Render carousel view (untuk multiple photos)
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
    <section className="py-16 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header Section - Fixed positioning */}
        <div className="text-center mb-12 sticky top-0 bg-white z-10 py-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Galeri Kegiatan Harian Siklus 1
          </h2>
          <hr className="w-24 mx-auto my-4 border-t-2 border-green-600" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dokumentasi harian kegiatan KKN di Siklus 1 dari hari ke-1 sampai
            hari ke-10 di Desa Kandangmukti.
          </p>
        </div>

        {/* Gallery Content */}
        <div className="space-y-12">
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

          {renderCarousel(
            galleryItems5,
            currentIndex5,
            setCurrentIndex5,
            isPlaying5,
            () => setIsPlaying5(!isPlaying5),
            "Day 5"
          )}

          {renderCarousel(
            galleryItems6,
            currentIndex6,
            setCurrentIndex6,
            isPlaying6,
            () => setIsPlaying6(!isPlaying6),
            "Day 6"
          )}

          {/* Day 7 menggunakan single photo karena hanya 1 foto */}
          {renderSinglePhoto(galleryItems7, "Day 7")}

          {renderCarousel(
            galleryItems8,
            currentIndex8,
            setCurrentIndex8,
            isPlaying8,
            () => setIsPlaying8(!isPlaying8),
            "Day 8"
          )}

          {renderCarousel(
            galleryItems9,
            currentIndex9,
            setCurrentIndex9,
            isPlaying9,
            () => setIsPlaying9(!isPlaying9),
            "Day 9"
          )}

          {renderCarousel(
            galleryItems10,
            currentIndex10,
            setCurrentIndex10,
            isPlaying10,
            () => setIsPlaying10(!isPlaying10),
            "Day 10"
          )}
        </div>
      </div>
    </section>
  );
};

export default GalleryHarian1;
