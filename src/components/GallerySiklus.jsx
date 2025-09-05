import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Play, ExternalLink } from "lucide-react";

const siklusData = [
  {
    id: 1,
    title: "Siklus 1",
    description:
      "Tim KKN SISDAMAS 121 Desa Kandangmukti melaksanakan kegiatan pendidikan, keagamaan, dan kesehatan lingkungan di Desa Kandang Mukti. Kegiatan meliputi mengajar PJOK di SDN 01 Kandangmukti, mengajar ngaji di Madrasah Al-Ihya, dan rembug warga untuk membahas program kesehatan lingkungan.",
    image: "./BGSiklus/BG1.png",
    link: "/gallery-harian1",
    videoUrl: "https://youtube.com/shorts/st5EMaWlAdk?si=4hjRvioB69FMsFsn",
  },
  {
    id: 2,
    title: "Siklus 2",
    description:
      "Tim KKN SISDAMAS 121 Desa Kandangmukti melaksanakan program di bidang pendidikan, kesehatan, lingkungan, dan pemberdayaan masyarakat. Kegiatan meliputi sosialisasi PHBS, Jum'at Bersih, pembuatan Taman Tanaman Obat, observasi bersama Bumdes, serta verifikasi dan sosialisasi data desa guna mendukung pembangunan yang tepat sasaran.",
    image: "./BGSiklus/BG2.png",
    link: "/gallery-harian2",
    videoUrl: "https://youtu.be/bEEbTnis4SA?si=d-676MwxWSeo5hsz",
  },
  {
    id: 3,
    title: "Siklus 3",
    description:
      "Tim KKN SISDAMAS 121 Desa Kandangmukti melaksanakan program pendidikan, kesehatan, sosial, dan pemberdayaan masyarakat untuk mendukung pengetahuan, kebersihan, serta kemandirian desa.",
    image: "./BGSiklus/BG3.png",
    link: "/gallery-harian3",
    videoUrl: "https://youtube.com/shorts/qZYvdKFjnzs?si=-GsBkRiojr7Cm9EW",
  },
  {
    id: 4,
    title: "Siklus 4",
    description:
      "KKN SISDAMAS 121 Desa Kandang Mukti berfokus pada perayaan HUT RI ke-78 melalui karnaval, lomba, dan kegiatan sosial, serta ditutup dengan pembagian hadiah dan penayangan after movie.",
    image: "./BGSiklus/BG4.png",
    link: "/gallery-harian4",
    videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID_SIKLUS_4", // Ganti dengan URL video yang sebenarnya
  },
];

const GallerySiklus = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [titleVisible, setTitleVisible] = useState(false);
  const [videoSectionVisible, setVideoSectionVisible] = useState(false);
  const titleRef = useRef(null);
  const videoRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute("data-index");
            if (index === "title") {
              setTitleVisible(true);
            } else if (index === "video") {
              setVideoSectionVisible(true);
            } else {
              // Delay untuk efek step-by-step
              setTimeout(
                () => {
                  setVisibleItems(
                    (prev) => new Set([...prev, parseInt(index)])
                  );
                },
                parseInt(index) * 200
              ); // 200ms delay untuk setiap item
            }
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    // Observe title
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    // Observe video section
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    // Observe items
    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="siklus" className="container mx-auto px-4 py-6 md:py-8">
      <div
        ref={titleRef}
        data-index="title"
        className={`text-center mb-6 md:mb-8 transition-all duration-1000 transform ${
          titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Dokumentasi Per Siklus
        </h2>
      </div>

      {/* Video Rekap Section */}
      <div
        ref={videoRef}
        data-index="video"
        className={`text-center mb-6 md:mb-8 transition-all duration-1000 transform ${
          videoSectionVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div
          className={`max-w-2xl md:max-w-3xl mx-auto transition-all duration-800 transform ${
            videoSectionVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{
            transitionDelay: videoSectionVisible ? "200ms" : "0ms",
          }}
        >
          <h3
            className={`text-lg md:text-xl font-semibold text-gray-800 mb-3 transition-all duration-700 ${
              videoSectionVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-4"
            }`}
            style={{
              transitionDelay: videoSectionVisible ? "400ms" : "0ms",
            }}
          >
            Video Rekap Kegiatan KKN
          </h3>
          <div
            className={`w-12 h-0.5 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full mb-4 md:mb-5 transition-all duration-700 transform ${
              videoSectionVisible
                ? "opacity-100 scale-x-100"
                : "opacity-0 scale-x-0"
            }`}
            style={{
              transitionDelay: videoSectionVisible ? "600ms" : "0ms",
            }}
          />
          <div
            className={`relative bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl overflow-hidden shadow-2xl transition-all duration-800 transform ${
              videoSectionVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-6 scale-95"
            }`}
            style={{
              transitionDelay: videoSectionVisible ? "800ms" : "0ms",
            }}
          >
            {/* YouTube Embed - Ganti VIDEO_ID dengan ID video YouTube yang sebenarnya */}
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/F0d8JJUNkqo?si=uFL93gG9dfIeKlgj"
                title="Video Rekap KKN SISDAMAS 121 Desa Kandangmukti"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Overlay untuk fallback atau thumbnail custom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none rounded-lg">
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-white text-xs md:text-sm font-medium">
                  Rangkuman lengkap kegiatan KKN SISDAMAS 121 di Desa
                  Kandangmukti
                </p>
              </div>
            </div>
          </div>

          {/* Link ke channel YouTube */}
          <div
            className={`mt-3 transition-all duration-700 ${
              videoSectionVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{
              transitionDelay: videoSectionVisible ? "1000ms" : "0ms",
            }}
          >
            <a
              href="https://www.youtube.com/@KandangmuktiKKN121"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium transition-all duration-300 hover:scale-105"
            >
              <ExternalLink className="w-4 h-4" />
              Kunjungi Channel YouTube Kami
            </a>
          </div>
        </div>
      </div>

      {/* Grid Siklus */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20 px-4 md:px-40">
        {siklusData.map((siklus, index) => (
          <div
            key={siklus.id}
            ref={(el) => (itemRefs.current[index] = el)}
            data-index={index}
            className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-1000 transform ${
              visibleItems.has(index)
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-12 scale-95"
            } hover:transform hover:-translate-y-1 hover:scale-105 hover:shadow-xl`}
            style={{
              transitionDelay: visibleItems.has(index) ? "0ms" : "0ms",
            }}
          >
            <div className="relative overflow-hidden">
              <img
                src={siklus.image}
                alt={siklus.title}
                className={`w-full h-58 object-cover transition-transform duration-700 ${
                  visibleItems.has(index) ? "scale-100" : "scale-110"
                }`}
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-500 ${
                  visibleItems.has(index) ? "opacity-100" : "opacity-0"
                }`}
              ></div>
            </div>
            <div className="p-3 md:p-4">
              <h3
                className={`text-lg md:text-xl font-semibold text-gray-800 mb-2 transition-all duration-700 ${
                  visibleItems.has(index)
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-4"
                }`}
                style={{
                  transitionDelay: visibleItems.has(index) ? "300ms" : "0ms",
                }}
              >
                {siklus.title}
              </h3>
              <p
                className={`text-gray-600 text-xs md:text-sm mb-3 md:mb-4 transition-all duration-700 ${
                  visibleItems.has(index)
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-4"
                }`}
                style={{
                  transitionDelay: visibleItems.has(index) ? "500ms" : "0ms",
                }}
              >
                {siklus.description}
              </p>

              {/* Button Group dengan Video dan Gallery */}
              <div
                className={`flex gap-2 transition-all duration-700 ${
                  visibleItems.has(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: visibleItems.has(index) ? "700ms" : "0ms",
                }}
              >
                <Link
                  to={siklus.link}
                  className="flex-1 text-center px-3 md:px-4 py-2 bg-gradient-to-r from-blue-600 to-green-600 text-white text-sm md:text-base rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-500 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  Lihat Gallery
                </Link>
                <a
                  href={siklus.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-3 md:px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm md:text-base rounded-lg transition-all duration-500 shadow-md hover:shadow-lg transform hover:scale-105"
                  title="Tonton Video Rekap"
                >
                  <Play className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySiklus;
