import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  // Animation states
  const [columnsVisible, setColumnsVisible] = useState(new Set());
  const [copyrightVisible, setCopyrightVisible] = useState(false);
  const [socialVisible, setSocialVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const columnsRef = useRef([]);
  const copyrightRef = useRef(null);
  const footerRef = useRef(null);

  const socialIcons = {
    instagram: <Instagram className="w-6 h-6" />,
    tiktok: <FaTiktok className="w-6 h-6" />,
  };

  // Fungsi untuk navigasi
  const handleNavigation = (target) => {
    if (isHomePage) {
      // Jika di halaman utama, scroll ke section
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Jika di halaman lain, redirect ke home dulu baru scroll
      navigate("/", { replace: true });
      setTimeout(() => {
        const element = document.querySelector(target);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    }
  };

  // Fungsi khusus untuk tombol kembali ke beranda
  const handleBackToHome = () => {
    navigate("/", { replace: true });
  };

  const navigationItems = [
    { label: "Beranda", target: "#home" },
    { label: "Profil Desa", target: "#profile" },
    { label: "Program", target: "#programs" },
    { label: "Tim", target: "#team" },
    { label: "Galeri", target: "#siklus" },
    { label: "Laporan PDF", target: "#pdf" },
  ];

  // Reset animation state when location changes
  useEffect(() => {
    setColumnsVisible(new Set());
    setCopyrightVisible(false);
    setSocialVisible(false);
    setHasAnimated(false);
  }, [location.pathname]);

  // Trigger animations manually if footer is already visible
  const triggerAnimations = () => {
    if (hasAnimated) return;

    setHasAnimated(true);

    // Animate columns with staggered timing
    [0, 1, 2].forEach((index) => {
      setTimeout(() => {
        setColumnsVisible((prev) => new Set([...prev, index]));

        // Trigger social icons animation for first column
        if (index === 0) {
          setTimeout(() => {
            setSocialVisible(true);
          }, 600);
        }
      }, index * 200);
    });

    // Animate copyright
    setTimeout(() => {
      setCopyrightVisible(true);
    }, 800);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            triggerAnimations();
          }
        });
      },
      {
        threshold: 0.1, // Reduced threshold for better detection
        rootMargin: "0px 0px -10% 0px",
      }
    );

    // Observe the main footer element
    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    // Fallback: If footer is already in view when component mounts
    const checkIfInView = () => {
      if (footerRef.current && !hasAnimated) {
        const rect = footerRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;

        if (isInView) {
          triggerAnimations();
        }
      }
    };

    // Check immediately
    setTimeout(checkIfInView, 100);

    // Also check on scroll (as fallback)
    window.addEventListener("scroll", checkIfInView);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", checkIfInView);
    };
  }, [hasAnimated, location.pathname]);

  return (
    <footer
      ref={footerRef}
      id="footer"
      className="bg-gray-800 text-white py-12 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Kolom 1: Tentang */}
          <div
            ref={(el) => (columnsRef.current[0] = el)}
            data-element="column"
            data-index="0"
            className={`transition-all duration-1000 transform ${
              columnsVisible.has(0)
                ? "opacity-100 translate-y-0 translate-x-0"
                : "opacity-0 translate-y-8 -translate-x-4"
            }`}
          >
            <h3
              className={`text-lg font-semibold mb-4 transition-all duration-700 ${
                columnsVisible.has(0)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: columnsVisible.has(0) ? "300ms" : "0ms",
              }}
            >
              Tentang KKN Sisdamas
            </h3>

            <p
              className={`text-gray-400 mb-4 transition-all duration-700 ${
                columnsVisible.has(0)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: columnsVisible.has(0) ? "500ms" : "0ms",
              }}
            >
              KKN Sisdamas adalah singkatan dari Kuliah Kerja Nyata Sistem Desa
              Mandiri dan Sejahtera. Ini adalah model pengabdian kepada
              masyarakat yang dikembangkan oleh UIN Sunan Gunung Djati Bandung.
            </p>

            <div
              className={`flex space-x-4 transition-all duration-800 ${
                socialVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <a
                href="https://www.instagram.com/kkn121_kandangmukti/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
                aria-label="Instagram KKN 121 Kandangmukti"
                style={{
                  transitionDelay: socialVisible ? "100ms" : "0ms",
                }}
              >
                <div className="relative">
                  {socialIcons.instagram}
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg opacity-0 hover:opacity-20 transition-opacity duration-300 transform scale-150"></div>
                </div>
              </a>
              <a
                href="https://www.tiktok.com/@kkn121_kandangmukti"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
                aria-label="TikTok KKN 121 Kandangmukti"
                style={{
                  transitionDelay: socialVisible ? "300ms" : "0ms",
                }}
              >
                <div className="relative">
                  {socialIcons.tiktok}
                  <div className="absolute inset-0 bg-black rounded-lg opacity-0 hover:opacity-20 transition-opacity duration-300 transform scale-150"></div>
                </div>
              </a>
            </div>
          </div>

          {/* Kolom 2: Kontak */}
          <div
            ref={(el) => (columnsRef.current[1] = el)}
            data-element="column"
            data-index="1"
            className={`transition-all duration-1000 transform ${
              columnsVisible.has(1)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3
              className={`text-lg font-semibold mb-4 transition-all duration-700 ${
                columnsVisible.has(1)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: columnsVisible.has(1) ? "300ms" : "0ms",
              }}
            >
              Informasi Kontak
            </h3>

            <ul className="space-y-2 text-gray-400">
              {[
                { icon: EnvelopeIcon, text: "kandangmukti121@gmail.com" },
                { icon: PhoneIcon, text: "+62 857 2100 7752" },
                {
                  icon: MapPinIcon,
                  text: "Desa Kandangmukti, Kec. Leles, Kab. Garut",
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className={`flex items-start transition-all duration-700 transform hover:translate-x-2 hover:text-white ${
                    columnsVisible.has(1)
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-4"
                  }`}
                  style={{
                    transitionDelay: columnsVisible.has(1)
                      ? `${500 + index * 200}ms`
                      : "0ms",
                  }}
                >
                  <item.icon className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 transition-colors duration-300" />
                  <span className="transition-colors duration-300">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Navigasi */}
          <div
            ref={(el) => (columnsRef.current[2] = el)}
            data-element="column"
            data-index="2"
            className={`transition-all duration-1000 transform ${
              columnsVisible.has(2)
                ? "opacity-100 translate-y-0 translate-x-0"
                : "opacity-0 translate-y-8 translate-x-4"
            }`}
          >
            <h3
              className={`text-lg font-semibold mb-4 transition-all duration-700 ${
                columnsVisible.has(2)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: columnsVisible.has(2) ? "300ms" : "0ms",
              }}
            >
              Navigasi Cepat
            </h3>

            <ul className="space-y-2 text-gray-400">
              {navigationItems.map((item, index) => (
                <li
                  key={index}
                  className={`transition-all duration-700 transform ${
                    columnsVisible.has(2)
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-4"
                  }`}
                  style={{
                    transitionDelay: columnsVisible.has(2)
                      ? `${500 + index * 100}ms`
                      : "0ms",
                  }}
                >
                  <button
                    onClick={() => handleNavigation(item.target)}
                    className="hover:text-white transition-all duration-300 text-left cursor-pointer transform hover:translate-x-2 hover:scale-105"
                  >
                    <span className="relative">
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            {/* Tombol kembali ke home jika bukan di halaman utama */}
            {!isHomePage && (
              <div
                className={`mt-4 pt-4 border-t border-gray-700 transition-all duration-800 ${
                  columnsVisible.has(2)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: columnsVisible.has(2) ? "1100ms" : "0ms",
                }}
              >
                <button
                  onClick={handleBackToHome}
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  ← Kembali ke Beranda
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div
          ref={copyrightRef}
          data-element="copyright"
          className={`border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 transition-all duration-1000 transform ${
            copyrightVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <p
            className={`transition-all duration-800 ${
              copyrightVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            style={{
              transitionDelay: copyrightVisible ? "200ms" : "0ms",
            }}
          >
            &copy; 2025 Tim KKN Sisdamas 121 Desa Kandangmukti. Hak Cipta
            Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
