import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const siklusData = [
  {
    id: 1,
    title: "Siklus 1",
    description:
      "Tim KKN SISDAMAS 121 melaksanakan kegiatan pendidikan, keagamaan, dan kesehatan lingkungan di Desa Kandang Mukti. Kegiatan meliputi mengajar PJOK di SDN 01 Kandangmukti, mengajar ngaji di Madrasah Al-Ihya, dan rembug warga untuk membahas program kesehatan lingkungan.",
    image: "./BGSiklus/BG1.png",
    link: "/gallery-harian1",
  },
  {
    id: 2,
    title: "Siklus 2",
    description:
      "Tim KKN SISDAMAS 121 Desa Kandangmukti melaksanakan program di bidang pendidikan, kesehatan, lingkungan, dan pemberdayaan masyarakat. Kegiatan meliputi sosialisasi PHBS, Jum’at Bersih, pembuatan Taman Tanaman Obat, observasi bersama Bumdes, serta verifikasi dan sosialisasi data desa guna mendukung pembangunan yang tepat sasaran.",
    image: "./BGSiklus/BG2.png",
    link: "/gallery-harian2",
  },
  {
    id: 3,
    title: "Siklus 3",
    description:
      "Siklus 3 berisi kegiatan penutupan KKN, pameran hasil kerja, serta evaluasi program bersama warga.",
    image: "./BGSiklus/BG3.png",
    link: "/gallery-harian3",
  },
  {
    id: 4,
    title: "Siklus 4",
    description:
      "Siklus 4 merupakan evaluasi dan dokumentasi akhir dari seluruh program KKN yang telah dilaksanakan di Desa Kandangmukti.",
    image: "./FotoProgram/belom.png",
    link: "/gallery-harian4",
  },
];

const GallerySiklus = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute("data-index");
            if (index === "title") {
              setTitleVisible(true);
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

      {/* Grid responsive: 1 kolom di mobile, 2 kolom di tablet ke atas */}
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
              <Link
                to={siklus.link}
                className={`inline-block w-full text-center px-3 md:px-4 py-2 bg-gradient-to-r from-blue-600 to-green-600 text-white text-sm md:text-base rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-500 shadow-md hover:shadow-lg transform hover:scale-105 ${
                  visibleItems.has(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: visibleItems.has(index) ? "700ms" : "0ms",
                }}
              >
                Lihat Lebih Lengkap
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySiklus;
