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
  const [currentIndex21, setCurrentIndex21] = useState(0);
  const [currentIndex22, setCurrentIndex22] = useState(0);
  const [currentIndex23, setCurrentIndex23] = useState(0);
  const [currentIndex24, setCurrentIndex24] = useState(0);
  const [currentIndex25, setCurrentIndex25] = useState(0);
  const [currentIndex26, setCurrentIndex26] = useState(0);
  const [currentIndex27, setCurrentIndex27] = useState(0);
  const [currentIndex28, setCurrentIndex28] = useState(0);
  const [currentIndex29, setCurrentIndex29] = useState(0);
  const [currentIndex30, setCurrentIndex30] = useState(0);
  const [currentIndex31, setCurrentIndex31] = useState(0);
  const [currentIndex32, setCurrentIndex32] = useState(0);
  const [currentIndex33, setCurrentIndex33] = useState(0);
  const [currentIndex34, setCurrentIndex34] = useState(0);
  const [currentIndex35, setCurrentIndex35] = useState(0);
  const [isPlaying21, setIsPlaying21] = useState(true);
  const [isPlaying22, setIsPlaying22] = useState(true);
  const [isPlaying23, setIsPlaying23] = useState(true);
  const [isPlaying24, setIsPlaying24] = useState(true);
  const [isPlaying25, setIsPlaying25] = useState(true);
  const [isPlaying26, setIsPlaying26] = useState(true);
  const [isPlaying27, setIsPlaying27] = useState(true);
  const [isPlaying28, setIsPlaying28] = useState(true);
  const [isPlaying29, setIsPlaying29] = useState(true);
  const [isPlaying30, setIsPlaying30] = useState(true);
  const [isPlaying31, setIsPlaying31] = useState(true);
  const [isPlaying32, setIsPlaying32] = useState(true);
  const [isPlaying33, setIsPlaying33] = useState(true);
  const [isPlaying34, setIsPlaying34] = useState(true);
  const [isPlaying35, setIsPlaying35] = useState(true);

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
      title: "PERSIAPAN KARNAVAL",
      image: "./FotoDaySiklus4/Day21/1.JPG",
      alt: "Kegiatan Otw Karnaval",
      description:
        "Persiapan karnaval di Alun-Alun Leles dilakukan untuk menyambut dan memperingati Hari Kemerdekaan. Kegiatan ini menjadi ajang kebersamaan sekaligus menumbuhkan semangat nasionalisme melalui partisipasi aktif masyarakat dalam memeriahkan peringatan 17 Agustus.",
    },
    {
      title: "BIMBINGAN BELAJAR",
      image: "./FotoDaySiklus4/Day21/2.JPG",
      alt: "KBM",
      description:
        "Program bimbingan belajar di posko dilaksanakan untuk mendukung pendidikan anak-anak sekitar dengan memberikan pendampingan dalam mengerjakan tugas sekolah, memperdalam pemahaman materi, serta menumbuhkan semangat belajar dalam suasana yang menyenangkan.",
    },
  ];

  const galleryItems2 = [
    {
      title: "LOKA KARYA",
      image: "./FotoDaySiklus4/Day22/1.jpg",
      alt: "Loka Karya",
      description:
        "Lokakarya pembukaan KKN UNIGA 2025 dihadiri sebagai bentuk sinergi dan kolaborasi dalam pengabdian masyarakat. Kegiatan ini menjadi ajang untuk mempererat kerja sama lintas perguruan tinggi serta memperkuat komitmen dalam memberikan manfaat nyata bagi masyarakat.",
    },
    {
      title: "MENYEBAR UNDANGAN",
      image: "./FotoDaySiklus4/Day22/2.JPG",
      alt: "Undangan",
      description:
        "Penyebaran undangan dilakukan kepada pihak MUI dan tokoh terkait sebagai persiapan kegiatan pelatihan pemulasaran jenazah. Langkah ini bertujuan untuk memastikan keterlibatan berbagai pihak sehingga kegiatan dapat berjalan dengan lancar dan memberikan manfaat bagi masyarakat.",
    },
    {
      title: "PEMBUATAN PATUNG IKAN DI RW 01",
      image: "./FotoDaySiklus4/Day22/3.JPG",
      alt: "Patung Ikan",
      description:
        "Kegiatan pembuatan patung ikan dilakukan sebagai bagian dari persiapan karnaval untuk memperingati Hari Kemerdekaan. Pembuatan patung ini melibatkan kerja sama tim dan kreativitas dalam memanfaatkan bahan sederhana menjadi karya hias yang menarik.",
    },
  ];

  const galleryItems3 = [
    {
      title: "PEMULASARAN JENAZAH",
      image: "./FotoDaySiklus4/Day23/1.JPG",
      alt: "Pemulasaran Jenazah",
      description:
        "Program pemulasaran jenazah dilaksanakan sebagai bentuk edukasi keagamaan yang melibatkan kolaborasi bersama beberapa kelompok KKN, dengan tujuan menambah wawasan masyarakat terkait tata cara perawatan jenazah sesuai syariat Islam.",
    },
    {
      title: "PENGAJIAN RUTIN",
      image: "./FotoDaySiklus4/Day23/2.JPG",
      alt: "Pengajian Rutin",
      description:
        "Kegiatan pengajian rutin dilaksanakan setiap malam Kamis di Masjid Al-Manshur sebagai sarana memperdalam ilmu agama serta mempererat ukhuwah antarwarga.",
    },
  ];
  const galleryItems4 = [
    {
      title: "KUNJUNGAN SPI",
      image: "./FotoDaySiklus4/Day24/1.JPG",
      alt: "SPI",
      description:
        "Kunjungan dari pihak LP2M melalui Satuan Pengawas Internal (SPI) sebagai bentuk monitoring dan evaluasi terhadap pelaksanaan program KKN di Desa Kandang Mukti.",
    },
    {
      title: "PEMBUATAN KOSTUM GARUDA",
      image: "./FotoDaySiklus4/Day24/2.JPG",
      alt: "Kostum Garuda",
      description:
        "Kegiatan pembuatan kostum garuda sebagai persiapan untuk mengikuti acara karnaval di Alun-alun Leles, yang melibatkan partisipasi aktif warga dan mahasiswa dalam mendukung kreativitas seni dan budaya.",
    },
    {
      title: "BIMBINGAN BELAJAR",
      image: "./FotoDaySiklus4/Day24/3.jpg",
      alt: "Bimbel",
      description:
        "Kegiatan bimbingan belajar rutin yang bertujuan untuk membantu anak-anak dalam meningkatkan pemahaman pelajaran, sekaligus menumbuhkan semangat belajar melalui pendampingan dan motivasi dari mahasiswa KKN. ",
    },
    {
      title: "PROSES PEMBUATAN PATUNG IKAN",
      image: "./FotoDaySiklus4/Day24/4.jpg",
      alt: "Patung Ikan",
      description:
        "Mahasiswa KKN SISDAMAS 121 Desa Kandangmukti bersama warga setempat melakukan pembuatan patung ikan sebagai persiapan untuk acara karnaval desa. Kegiatan ini menjadi bentuk kolaborasi kreatif antara mahasiswa dan masyarakat dalam mendukung semaraknya perayaan desa sekaligus mempererat kebersamaan.",
    },
  ];
  const galleryItems5 = [
    {
      title: "PEMBUATAN HANTU RIMBA",
      image: "./FotoDaySiklus4/Day25/1.JPG",
      alt: "Hantu Rimba",
      description:
        "Mahasiswa KKN SISDAMAS 121 Desa Kandangmukti bersama warga RW 06 berkreasi dalam pembuatan kostum hantu rimba untuk memeriahkan acara karnaval desa. Kegiatan ini tidak hanya melibatkan kreativitas dan keterampilan, tetapi juga mempererat kerja sama antarwarga dalam persiapan perayaan bersama.",
    },
    {
      title: "PENYEBARAN POSTER",
      image: "./FotoDaySiklus4/Day25/2.JPG",
      alt: "Poster",
      description:
        "Kegiatan penyebaran poster yang dilakukan mahasiswa KKN di Desa Kandangmukti dalam rangka menyosialisasikan acara peringatan Hari Kemerdekaan 17 Agustus. Tujuannya agar masyarakat lebih mengetahui dan berpartisipasi dalam kegiatan yang akan diselenggarakan.",
    },
    {
      title: "PEMBUATAN KOSTUM",
      image: "./FotoDaySiklus4/Day25/3.JPG",
      alt: "Kostum",
      description:
        "Mahasiswa KKN bersama warga berkolaborasi dalam pembuatan kostum merak RW 01 yang akan digunakan untuk kegiatan karnaval. Kegiatan ini tidak hanya melibatkan kreativitas, tetapi juga mempererat kebersamaan antarwarga.",
    },
    {
      title: "DISKUSI 17 AGUSTUS",
      image: "./FotoDaySiklus4/Day25/4.JPG",
      alt: "Diskusi",
      description:
        "Mahasiswa KKN bersama warga RW 01 mengadakan rapat persiapan dalam rangka perayaan Hari Kemerdekaan 17 Agustus. Diskusi ini membahas berbagai agenda kegiatan, pembagian tugas, serta kebutuhan teknis agar acara dapat berjalan dengan lancar dan meriah.",
    },
    {
      title: "PROSES PEMBUATAN PATUNG IKAN",
      image: "./FotoDaySiklus4/Day25/5.JPG",
      alt: "Proses",
      description:
        "Mahasiswa KKN bersama warga Desa Kandangmukti bergotong royong dalam pembuatan patung ikan sebagai properti karnaval 17 Agustus. Kegiatan ini menunjukkan semangat kebersamaan dan kreativitas warga dalam mempersiapkan perayaan Hari Kemerdekaan.",
    },
    {
      title: "PROSES PEMBUATAN PATUNG PERAHU",
      image: "./FotoDaySiklus4/Day25/6.JPG",
      alt: "Proses",
      description:
        "Mahasiswa KKN Sisdama 121 bersama warga RW 06 bergotong royong membuat perahu hias untuk karnaval 17 Agustus. Proses ini menjadi bentuk nyata kolaborasi dan kekompakan masyarakat dalam menyambut Hari Kemerdekaan dengan penuh kreativitas.",
    },
  ];
  const galleryItems6 = [
    {
      title: "MEMPERSIAPKAN HADIAH",
      image: "./FotoDaySiklus4/Day26/1.JPG",
      alt: "Hadiah",
      description:
        "Mahasiswa KKN Sisdama 121 bersama warga RW 01 mempersiapkan hadiah untuk berbagai perlombaan dalam rangka perayaan 17 Agustus. Kegiatan ini dilakukan dengan penuh kebersamaan agar acara berjalan meriah serta memberikan motivasi kepada peserta lomba.",
    },
    {
      title: "PROSES PEMBUATAN KOSTUM",
      image: "./FotoDaySiklus4/Day26/2.JPG",
      alt: "Kostum",
      description:
        "Mahasiswa KKN Sisdama 121 bersama warga RW 01 menyiapkan dan membuat kostum untuk karnaval. Proses ini dilakukan secara gotong royong dengan penuh semangat, sebagai bentuk kreativitas dan partisipasi dalam memeriahkan perayaan 17 Agustus.",
    },
  ];
  const galleryItems7 = [
    {
      title: "ACARA 17 AGUSTUS",
      image: "./FotoDaySiklus4/Day27/1.JPG",
      alt: "Acara 17 Agustusan",
      description:
        "Mahasiswa KKN Sisdama 121 bersama warga Desa Kandang Mukti turut berpartisipasi dalam karnaval peringatan Hari Kemerdekaan 17 Agustus yang dilaksanakan di Alun-alun Leles. Acara ini menjadi puncak dari berbagai persiapan yang telah dilakukan, sekaligus sebagai wujud kebersamaan dan semangat nasionalisme.",
    },
    {
      title: "DOORPRIZE KUPON",
      image: "./FotoDaySiklus4/Day27/2.JPG",
      alt: "Doorprize",
      description:
        "Kegiatan doorprize kupon yang dilaksanakan di lapangan Desa Kandang Mukti berlangsung meriah dengan antusiasme masyarakat yang tinggi. Acara ini menjadi penutup rangkaian peringatan 17 Agustus sekaligus ajang kebersamaan antara mahasiswa KKN Sisdama 121 dan warga desa.",
    },
  ];
  const galleryItems8 = [
    {
      title: "PELAKSANAAN LOMBA AGUSTUSAN",
      image: "./FotoDaySiklus4/Day28/1.JPG",
      alt: "Lomba",
      description:
        "Lomba 17 Agustus di RW 01 berlangsung meriah dengan partisipasi aktif anak-anak dan warga sekitar. Berbagai permainan tradisional diadakan untuk memeriahkan suasana, sekaligus menumbuhkan rasa kebersamaan serta semangat juang di kalangan masyarakat Desa Kandang Mukti.",
    },
    {
      title: "PEMBAGIAN HADIAH",
      image: "./FotoDaySiklus4/Day28/2.JPG",
      alt: "Hadiah",
      description:
        "Mahasiswa KKN SISDAMAS 121 Desa Kandangmukti turut serta dalam kegiatan pembagian hadiah lomba 17 Agustus yang diselenggarakan di RW 01. Acara ini dilaksanakan di rumah ibu RW 01, sebagai bentuk apresiasi kepada anak-anak dan warga yang berpartisipasi dalam berbagai perlombaan, sekaligus menambah semarak peringatan Hari Kemerdekaan.",
    },
  ];

  const galleryItems9 = [
    {
      title: "PELAKSANAAN DIGITAL MARKETING",
      image: "./FotoDaySiklus4/Day29/1.jpg",
      alt: "Digital Marketing",
      description:
        "Mahasiswa KKN SISDAMAS 121 Desa Kandangmukti melaksanakan kegiatan Digital Marketing bersama beberapa pelaku UMKM. Kegiatan ini bertujuan untuk membantu meningkatkan jangkauan pemasaran produk lokal melalui media digital, sehingga para pelaku usaha dapat lebih mudah dikenal masyarakat luas dan meningkatkan daya saing usaha.",
    },
  ];
  const galleryItems10 = [
    {
      title: "SEMINAR ECO-ENZYME",
      image: "./FotoDaySiklus4/Day30/1.jpeg",
      alt: "Eco-Enzyme",
      description:
        "KKN SISDAMAS 121 Desa Kandangmukti menyelenggarakan Seminar Eco-Enzyme di SMKS Al-Farisi. Kegiatan ini bertujuan untuk memberikan edukasi kepada siswa mengenai manfaat dan pemanfaatan eco-enzyme sebagai solusi ramah lingkungan dalam mengelola limbah organik serta menjaga kelestarian alam.",
    },
    {
      title: "KBM TERAKHIR MADRASAH AL-IHYA",
      image: "./FotoDaySiklus4/Day30/2.JPG",
      alt: "Madrasah",
      description:
        "Kegiatan KKN SISDAMAS 121 Desa Kandangmukti ditutup dengan proses belajar mengajar terakhir di Madrasah Diniyah Takmiliyah Al-Ihya. Mahasiswa berbagi ilmu, pengalaman, dan kebersamaan dengan para santri, sekaligus menjadi momen perpisahan penuh kesan selama kegiatan pengabdian berlangsung.",
    },
  ];
  const galleryItems11 = [
    {
      title: "LOMBA AGUSTUSAN",
      image: "./FotoDaySiklus4/Day31/1.JPG",
      alt: "agustusan",
      description:
        "Dalam rangka memperingati Hari Kemerdekaan Indonesia, KKN SISDAMAS 121 Desa Kandangmukti turut serta memeriahkan suasana dengan mengadakan berbagai lomba 17 Agustus. Anak-anak dan masyarakat setempat antusias mengikuti lomba, mulai dari balap karung hingga makan kerupuk, yang semakin menambah kebersamaan dan keceriaan warga desa.",
    },
    {
      title: "UJIAN BIMBEL",
      image: "./FotoDaySiklus4/Day31/2.JPG",
      alt: "bimbel",
      description:
        "Sebagai penutup kegiatan bimbingan belajar, KKN SISDAMAS 121 Desa Kandangmukti melaksanakan ujian Calistung dan Bahasa Inggris di posko. Ujian ini bertujuan untuk mengevaluasi sejauh mana pemahaman dan perkembangan anak-anak selama mengikuti bimbingan, sekaligus memberikan pengalaman belajar yang menyenangkan dan bermanfaat.",
    },
  ];
  const galleryItems12 = [
    {
      title: "LOMBA AGUSTUSAN",
      image: "./FotoDaySiklus4/Day32/1.jpg",
      alt: "agustus",
      description:
        "Dalam rangka memeriahkan Hari Kemerdekaan Indonesia, KKN SISDAMAS 121 Desa Kandangmukti menyelenggarakan berbagai perlombaan di RW 06. Kegiatan ini mencakup lomba memasukkan keranjang ke dalam kawat dan makan kerupuk, yang diikuti dengan antusias oleh anak-anak dan warga sekitar. Suasana penuh semangat dan kebersamaan menambah keceriaan peringatan 17 Agustus.",
    },
  ];
  const galleryItems13 = [
    {
      title: "LOMBA AGUSTUSAN",
      image: "./FotoDaySiklus4/Day33/1.JPG",
      alt: "agustusan",
      description:
        "Dalam memeriahkan HUT RI, KKN SISDAMAS 121 Desa Kandangmukti mengadakan perlombaan seru, yaitu balap karung menggunakan helm dan lomba mengambil koin dengan mulut. Kedua lomba ini sukses menghadirkan tawa, keceriaan, serta mempererat kebersamaan warga dalam semangat kemerdekaan.",
    },
  ];
  const galleryItems14 = [
    {
      title: "PENUTUPAN KKN",
      image: "./FotoDaySiklus4/Day34/1.JPG",
      alt: "penutupan",
      description:
        "Kegiatan penutupan Kuliah Kerja Nyata (KKN) Sisdama 121 Desa Kandangmukti dilaksanakan di aula kantor desa. Acara ini menjadi momen kebersamaan terakhir antara mahasiswa KKN dengan perangkat desa dan warga, sebagai penutup dari rangkaian kegiatan yang telah terlaksana dengan baik.",
    },
    {
      title: "PEMBAGIAN HADIAH BIMBEL",
      image: "./FotoDaySiklus4/Day34/2.JPG",
      alt: "bimbel",
      description:
        "Sebagai bentuk apresiasi kepada anak-anak yang mengikuti Bimbingan Belajar, mahasiswa KKN SISDAMAS 121 Desa Kandang Mukti membagikan hadiah dan sertifikat di posko. Kegiatan ini tidak hanya menjadi penutup rangkaian bimbel, tetapi juga memberikan motivasi kepada anak-anak agar terus semangat belajar dan meningkatkan prestasi mereka.",
    },
    {
      title: "LOMBA AGUSTUSAN",
      image: "./FotoDaySiklus4/Day34/3.JPG",
      alt: "agustusan",
      description:
        "Dalam rangka memeriahkan Hari Kemerdekaan Republik Indonesia ke-78, mahasiswa KKN SISDAMAS 121 Desa Kandang Mukti turut serta menyelenggarakan lomba pukul gantung air di RW 06. Kegiatan ini diikuti dengan penuh antusias oleh anak-anak dan masyarakat sekitar. Selain memberikan hiburan, lomba juga menumbuhkan semangat kebersamaan dan kekompakan warga desa.",
    },
  ];

  const galleryItems15 = [
    {
      title: "LOMBA AGUSTUSAN",
      image: "./FotoDaySiklus4/Day35/1.JPG",
      alt: "agustusan",
      description:
        "Sebagai bagian dari perayaan HUT RI ke-78, mahasiswa KKN SISDAMAS 121 Desa Kandang Mukti turut serta dalam penyelenggaraan lomba panjat pinang di RW 06. Perlombaan yang selalu dinanti ini berlangsung meriah dengan penuh semangat kebersamaan, tawa, dan sorak sorai warga. Selain menjadi hiburan, lomba panjat pinang juga menumbuhkan semangat sportivitas serta mempererat hubungan antarwarga.",
    },
    {
      title: "PEMBAGIAN HADIAH DAN SERTIFIKAT",
      image: "./FotoDaySiklus4/Day35/2.JPG",
      alt: "madrasah",
      description:
        "Sebagai bentuk apresiasi atas partisipasi dan semangat belajar para santri, tim KKN SISDAMAS 121 Desa Kandang Mukti melaksanakan kegiatan pembagian hadiah serta penyerahan sertifikat kepada Madrasah Al-Ihya. Momen ini menjadi wujud penghargaan sekaligus motivasi bagi para santri untuk terus berprestasi dan meningkatkan semangat belajar.",
    },
    {
      title: "PEMBAGIAN HADIAH 17 AGUSTUS",
      image: "./FotoDaySiklus4/Day35/3.jpg",
      alt: "agustusan",
      description:
        "Sebagai penutup rangkaian perayaan HUT RI ke-78, tim KKN SISDAMAS 121 Desa Kandang Mukti bersama warga melaksanakan acara pembagian hadiah bagi para pemenang lomba 17 Agustusan.",
    },
    {
      title: "PENAYANGAN AFTER MOVIE",
      image: "./FotoDaySiklus4/Day35/4.jpeg",
      alt: "after movie",
      description:
        "Setelah pembagian hadiah perlombaan 17 Agustus di RW 06, tim KKN 121 Desa Kandangmukti melaksanakan penayangan after movie yang menampilkan momen kebersamaan dan semangat warga selama KKN 35 hari.",
    },
  ];

  // Auto-slide functions
  useEffect(() => {
    if (!isPlaying21) return;
    const interval = setInterval(() => {
      setCurrentIndex21((prev) =>
        prev === galleryItems.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying21, galleryItems.length]);

  useEffect(() => {
    if (!isPlaying22) return;
    const interval = setInterval(() => {
      setCurrentIndex22((prev) =>
        prev === galleryItems2.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying22, galleryItems2.length]);

  useEffect(() => {
    if (!isPlaying23) return;
    const interval = setInterval(() => {
      setCurrentIndex23((prev) =>
        prev === galleryItems3.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying23, galleryItems3.length]);

  useEffect(() => {
    if (!isPlaying24) return;
    const interval = setInterval(() => {
      setCurrentIndex24((prev) =>
        prev === galleryItems4.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying24, galleryItems4.length]);

  useEffect(() => {
    if (!isPlaying25) return;
    const interval = setInterval(() => {
      setCurrentIndex25((prev) =>
        prev === galleryItems5.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying25, galleryItems5.length]);

  useEffect(() => {
    if (!isPlaying26) return;
    const interval = setInterval(() => {
      setCurrentIndex26((prev) =>
        prev === galleryItems6.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying26, galleryItems6.length]);

  useEffect(() => {
    if (!isPlaying27) return;
    const interval = setInterval(() => {
      setCurrentIndex27((prev) =>
        prev === galleryItems7.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying27, galleryItems7.length]);

  useEffect(() => {
    if (!isPlaying28) return;
    const interval = setInterval(() => {
      setCurrentIndex28((prev) =>
        prev === galleryItems8.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying28, galleryItems8.length]);

  useEffect(() => {
    if (!isPlaying29) return;
    const interval = setInterval(() => {
      setCurrentIndex29((prev) =>
        prev === galleryItems9.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying29, galleryItems9.length]);

  useEffect(() => {
    if (!isPlaying30) return;
    const interval = setInterval(() => {
      setCurrentIndex30((prev) =>
        prev === galleryItems10.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying30, galleryItems10.length]);

  useEffect(() => {
    if (!isPlaying31) return;
    const interval = setInterval(() => {
      setCurrentIndex31((prev) =>
        prev === galleryItems11.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying31, galleryItems11.length]);

  useEffect(() => {
    if (!isPlaying32) return;
    const interval = setInterval(() => {
      setCurrentIndex32((prev) =>
        prev === galleryItems12.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying32, galleryItems12.length]);

  useEffect(() => {
    if (!isPlaying33) return;
    const interval = setInterval(() => {
      setCurrentIndex33((prev) =>
        prev === galleryItems13.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying33, galleryItems13.length]);

  useEffect(() => {
    if (!isPlaying34) return;
    const interval = setInterval(() => {
      setCurrentIndex34((prev) =>
        prev === galleryItems14.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying34, galleryItems14.length]);

  useEffect(() => {
    if (!isPlaying35) return;
    const interval = setInterval(() => {
      setCurrentIndex35((prev) =>
        prev === galleryItems15.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying35, galleryItems15.length]);

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
            currentIndex21,
            setCurrentIndex21,
            isPlaying21,
            () => setIsPlaying21(!isPlaying21),
            "Day 21",
            0
          )}

          {renderCarousel(
            galleryItems2,
            currentIndex22,
            setCurrentIndex22,
            isPlaying22,
            () => setIsPlaying22(!isPlaying22),
            "Day 22",
            1
          )}

          {renderCarousel(
            galleryItems3,
            currentIndex23,
            setCurrentIndex23,
            isPlaying23,
            () => setIsPlaying23(!isPlaying23),
            "Day 23",
            3
          )}

          {renderCarousel(
            galleryItems4,
            currentIndex24,
            setCurrentIndex24,
            isPlaying24,
            () => setIsPlaying24(!isPlaying24),
            "Day 24",
            4
          )}

          {renderCarousel(
            galleryItems5,
            currentIndex25,
            setCurrentIndex25,
            isPlaying25,
            () => setIsPlaying25(!isPlaying25),
            "Day 25",
            5
          )}

          {renderCarousel(
            galleryItems6,
            currentIndex26,
            setCurrentIndex26,
            isPlaying26,
            () => setIsPlaying26(!isPlaying26),
            "Day 26",
            6
          )}

          {renderCarousel(
            galleryItems7,
            currentIndex27,
            setCurrentIndex27,
            isPlaying27,
            () => setIsPlaying27(!isPlaying27),
            "Day 27",
            7
          )}

          {renderCarousel(
            galleryItems8,
            currentIndex28,
            setCurrentIndex28,
            isPlaying28,
            () => setIsPlaying28(!isPlaying28),
            "Day 28",
            8
          )}

          {renderSinglePhoto(galleryItems9, "Day 29", 9)}

          {renderCarousel(
            galleryItems10,
            currentIndex30,
            setCurrentIndex30,
            isPlaying30,
            () => setIsPlaying30(!isPlaying30),
            "Day 30",
            10
          )}

          {renderCarousel(
            galleryItems11,
            currentIndex31,
            setCurrentIndex31,
            isPlaying31,
            () => setIsPlaying31(!isPlaying31),
            "Day 31",
            11
          )}

          {renderSinglePhoto(galleryItems12, "Day 32", 12)}

          {renderSinglePhoto(galleryItems13, "Day 33", 13)}

          {renderCarousel(
            galleryItems14,
            currentIndex34,
            setCurrentIndex34,
            isPlaying34,
            () => setIsPlaying34(!isPlaying34),
            "Day 34",
            14
          )}

          {renderCarousel(
            galleryItems15,
            currentIndex35,
            setCurrentIndex35,
            isPlaying35,
            () => setIsPlaying35(!isPlaying35),
            "Day 35",
            15
          )}
        </div>
      </div>
    </section>
  );
};

export default GalleryHarian1;
