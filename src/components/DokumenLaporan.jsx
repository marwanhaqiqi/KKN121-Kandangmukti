import { DocumentTextIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";

const DokumenLaporan = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState([false, false, false]);
  const titleRef = useRef(null);
  const cardRefs = useRef([]);

  // Data untuk 3 artikel
  const documents = [
    {
      title: "Artikel Bimbel",
      description:
        "Artikel lengkap tentang program bimbingan belajar untuk siswa sekolah dasar dan menengah di Desa Kandangmukti.",
      format: "PDF",
      size: "1.8 MB",
      downloadUrl: "https://example.com/artikel-bimbel.pdf", // Ganti dengan URL artikel bimbel Anda
    },
    {
      title: "Artikel Digitalisasi Marketing",
      description:
        "Panduan lengkap digitalisasi pemasaran untuk UMKM dan wirausaha lokal di era digital modern.",
      format: "PDF",
      size: "2.1 MB",
      downloadUrl: "https://example.com/artikel-digitalisasi-marketing.pdf", // Ganti dengan URL artikel digitalisasi marketing Anda
    },
    {
      title: "Artikel Eco-Enzyme",
      description:
        "Tutorial pembuatan dan manfaat eco-enzyme sebagai solusi ramah lingkungan untuk rumah tangga.",
      format: "PDF",
      size: "1.5 MB",
      downloadUrl: "https://example.com/artikel-eco-enzyme.pdf", // Ganti dengan URL artikel eco-enzyme Anda
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target.getAttribute("data-element");

            if (element === "title") {
              setTitleVisible(true);
            } else if (element?.startsWith("card-")) {
              const cardIndex = parseInt(element.split("-")[1]);
              setTimeout(() => {
                setCardsVisible((prev) => {
                  const newState = [...prev];
                  newState[cardIndex] = true;
                  return newState;
                });
              }, cardIndex * 200); // Stagger animation
            }
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const handleDownload = (url, filename) => {
    // Untuk demonstrasi - ganti dengan logika download sebenarnya
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
  };

  return (
    <section id="pdf" className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Animated Title Section */}
        <div
          ref={titleRef}
          data-element="title"
          className={`text-center mb-12 transition-all duration-1000 transform ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2
            className={`text-3xl font-bold text-gray-800 mb-2 transition-all duration-700 ${
              titleVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            style={{
              transitionDelay: titleVisible ? "200ms" : "0ms",
            }}
          >
            Artikel Program KKN
          </h2>

          <hr
            className={`w-24 mx-auto my-4 border-t-2 border-green-600 transition-all duration-700 transform ${
              titleVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
            style={{
              transitionDelay: titleVisible ? "400ms" : "0ms",
            }}
          />

          <p
            className={`text-gray-600 max-w-2xl mx-auto transition-all duration-700 ${
              titleVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{
              transitionDelay: titleVisible ? "600ms" : "0ms",
            }}
          >
            Download artikel lengkap program KKN dalam format PDF.
          </p>
        </div>

        {/* Multiple Documents Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-1 lg:grid-cols-1 gap-8">
          {documents.map((doc, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              data-element={`card-${index}`}
              className={`transition-all duration-1000 transform ${
                cardsVisible[index]
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-12 scale-95"
              }`}
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row items-center">
                    {/* Animated Icon */}
                    <div
                      className={`mb-6 md:mb-0 md:mr-6 transition-all duration-800 transform ${
                        cardsVisible[index]
                          ? "opacity-100 translate-x-0 rotate-0"
                          : "opacity-0 -translate-x-8 -rotate-12"
                      }`}
                      style={{
                        transitionDelay: cardsVisible[index] ? "100ms" : "0ms",
                      }}
                    >
                      <div className="relative">
                        <DocumentTextIcon className="h-16 w-16 text-green-600 transition-all duration-500 hover:scale-110 hover:text-green-700" />
                        {/* Animated ring around icon */}
                        <div
                          className={`absolute inset-0 rounded-full border-2 border-green-300 transition-all duration-1000 ${
                            cardsVisible[index]
                              ? "opacity-30 scale-125"
                              : "opacity-0 scale-100"
                          }`}
                          style={{
                            transitionDelay: cardsVisible[index]
                              ? "300ms"
                              : "0ms",
                          }}
                        ></div>
                      </div>
                    </div>

                    {/* Animated Content */}
                    <div className="flex-1">
                      <h3
                        className={`text-xl font-semibold mb-2 transition-all duration-700 ${
                          cardsVisible[index]
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 translate-x-8"
                        }`}
                        style={{
                          transitionDelay: cardsVisible[index]
                            ? "200ms"
                            : "0ms",
                        }}
                      >
                        {doc.title}
                      </h3>

                      <p
                        className={`text-gray-600 mb-2 transition-all duration-700 ${
                          cardsVisible[index]
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 translate-x-8"
                        }`}
                        style={{
                          transitionDelay: cardsVisible[index]
                            ? "400ms"
                            : "0ms",
                        }}
                      >
                        Format: {doc.format} | Ukuran: {doc.size}
                      </p>

                      <p
                        className={`text-gray-600 mb-4 transition-all duration-700 ${
                          cardsVisible[index]
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 translate-x-8"
                        }`}
                        style={{
                          transitionDelay: cardsVisible[index]
                            ? "600ms"
                            : "0ms",
                        }}
                      >
                        {doc.description}
                      </p>

                      <button
                        onClick={() =>
                          handleDownload(doc.downloadUrl, `${doc.title}.pdf`)
                        }
                        className={`inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-500 transform hover:scale-105 hover:shadow-lg cursor-pointer ${
                          cardsVisible[index]
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4"
                        }`}
                        style={{
                          transitionDelay: cardsVisible[index]
                            ? "800ms"
                            : "0ms",
                        }}
                      >
                        <span className="flex items-center justify-center">
                          <svg
                            className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:translate-y-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                          Download
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Animated bottom accent */}
                <div
                  className={`h-1 bg-gradient-to-r from-green-600 to-blue-600 transition-all duration-1000 transform ${
                    cardsVisible[index]
                      ? "opacity-100 scale-x-100"
                      : "opacity-0 scale-x-0"
                  }`}
                  style={{
                    transitionDelay: cardsVisible[index] ? "1000ms" : "0ms",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Download All Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => {
              documents.forEach((doc, index) => {
                setTimeout(() => {
                  handleDownload(doc.downloadUrl, `${doc.title}.pdf`);
                }, index * 500); // Delay between downloads
              });
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-500 transform hover:scale-105 hover:shadow-lg"
          >
            <span className="flex items-center justify-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                />
              </svg>
              Download Semua Artikel
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DokumenLaporan;
