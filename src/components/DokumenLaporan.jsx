import { DocumentTextIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";

const DokumenLaporan = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const titleRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target.getAttribute("data-element");

            if (element === "title") {
              setTitleVisible(true);
            } else if (element === "card") {
              // Delay untuk card container
              setTimeout(() => {
                setCardVisible(true);
                // Delay tambahan untuk content di dalam card
                setTimeout(() => {
                  setContentVisible(true);
                }, 400);
              }, 200);
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
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
            Dokumen Laporan
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
            Download dokumen lengkap laporan KKN dalam format PDF.
          </p>
        </div>

        {/* Animated Card Section */}
        <div
          ref={cardRef}
          data-element="card"
          className={`max-w-3xl mx-auto transition-all duration-1000 transform ${
            cardVisible
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
                    contentVisible
                      ? "opacity-100 translate-x-0 rotate-0"
                      : "opacity-0 -translate-x-8 -rotate-12"
                  }`}
                  style={{
                    transitionDelay: contentVisible ? "100ms" : "0ms",
                  }}
                >
                  <div className="relative">
                    <DocumentTextIcon className="h-20 w-20 text-green-600 transition-all duration-500 hover:scale-110 hover:text-green-700" />
                    {/* Animated ring around icon */}
                    <div
                      className={`absolute inset-0 rounded-full border-2 border-green-300 transition-all duration-1000 ${
                        contentVisible
                          ? "opacity-30 scale-125"
                          : "opacity-0 scale-100"
                      }`}
                      style={{
                        transitionDelay: contentVisible ? "300ms" : "0ms",
                      }}
                    ></div>
                  </div>
                </div>

                {/* Animated Content */}
                <div className="flex-1">
                  <h3
                    className={`text-xl font-semibold mb-2 transition-all duration-700 ${
                      contentVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-8"
                    }`}
                    style={{
                      transitionDelay: contentVisible ? "200ms" : "0ms",
                    }}
                  >
                    Laporan Lengkap KKN Sisdamas 121 Desa Kandangmukti
                  </h3>

                  <p
                    className={`text-gray-600 mb-4 transition-all duration-700 ${
                      contentVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-8"
                    }`}
                    style={{
                      transitionDelay: contentVisible ? "400ms" : "0ms",
                    }}
                  >
                    Format: PDF | Ukuran: 2.5 MB
                  </p>

                  <p
                    className={`text-gray-600 mb-4 transition-all duration-700 ${
                      contentVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-8"
                    }`}
                    style={{
                      transitionDelay: contentVisible ? "600ms" : "0ms",
                    }}
                  >
                    Laporan lengkap berisi seluruh program kerja, evaluasi,
                    dokumentasi, dan lampiran pendukung lainnya.
                  </p>

                  <button
                    className={`inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-500 transform hover:scale-105 hover:shadow-lg cursor-pointer ${
                      contentVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                    style={{
                      transitionDelay: contentVisible ? "800ms" : "0ms",
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
                      Download Sekarang
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Animated bottom accent */}
            <div
              className={`h-1 bg-gradient-to-r from-green-600 to-blue-600 transition-all duration-1000 transform ${
                contentVisible
                  ? "opacity-100 scale-x-100"
                  : "opacity-0 scale-x-0"
              }`}
              style={{
                transitionDelay: contentVisible ? "1000ms" : "0ms",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DokumenLaporan;
