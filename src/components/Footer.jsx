import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

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
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(target);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const navigationItems = [
    { label: "Beranda", target: "#home" },
    { label: "Profil Desa", target: "#profile" },
    { label: "Program", target: "#programs" },
    { label: "Tim", target: "#team" },
    { label: "Galeri", target: "#siklus" },
    { label: "Laporan PDF", target: "#pdf" },
  ];

  return (
    <footer id="footer" className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Kolom 1: Tentang */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tentang KKN Sisdamas</h3>
            <p className="text-gray-400 mb-4">
              KKN Sisdamas adalah singkatan dari Kuliah Kerja Nyata Sistem Desa
              Mandiri dan Sejahtera. Ini adalah model pengabdian kepada
              masyarakat yang dikembangkan oleh UIN Sunan Gunung Djati Bandung.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/kkn121_kandangmukti/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Instagram KKN 121 Kandangmukti"
              >
                {socialIcons.instagram}
              </a>
              <a
                href="https://www.tiktok.com/@kkn121_kandangmukti"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="TikTok KKN 121 Kandangmukti"
              >
                {socialIcons.tiktok}
              </a>
            </div>
          </div>

          {/* Kolom 2: Kontak */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Informasi Kontak</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <EnvelopeIcon className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>kandangmukti121@gmail.com</span>
              </li>
              <li className="flex items-start">
                <PhoneIcon className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>+62 857 2100 7752</span>
              </li>
              <li className="flex items-start">
                <MapPinIcon className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>Desa Kandangmukti, Kec. Leles, Kab. Garut</span>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Navigasi */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigasi Cepat</h3>
            <ul className="space-y-2 text-gray-400">
              {navigationItems.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavigation(item.target)}
                    className="hover:text-white transition-colors duration-200 text-left cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Tombol kembali ke home jika bukan di halaman utama */}
            {!isHomePage && (
              <div className="mt-4 pt-4 border-t border-gray-700">
                <button
                  onClick={() => navigate("/")}
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200"
                >
                  ← Kembali ke Beranda
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; 2025 Tim KKN Sisdamas 121 Desa Kandangmukti. Hak Cipta
            Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
