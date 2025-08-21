import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  // Function to handle navigation
  const handleNavigation = (anchor) => {
    if (isHomePage) {
      // If on home page, scroll to section
      const element = document.querySelector(anchor);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on other page, navigate to home first, then scroll
      navigate("/", { replace: true });

      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.querySelector(anchor);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    }
    setIsOpen(false);
  };

  const navigationItems = [
    { href: "#home", label: "Beranda" },
    { href: "#profile", label: "Profil Desa" },
    { href: "#programs", label: "Program" },
    { href: "#team", label: "Tim" },
    { href: "#siklus", label: "Galeri" },
    { href: "#pdf", label: "Laporan PDF" },
    { href: "#footer", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-green-600 to-blue-800/95 backdrop-blur-md text-white py-2 shadow-md transition-all">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Kiri: Logo + Judul */}
          <div className="flex items-center">
            <img
              src="./logokkn.png"
              alt="Logo Universitas"
              className="w-12 h-12 mr-3 rounded-full border-2 border-white"
            />
            <div>
              <h1 className="text-base md:text-xl font-bold leading-tight">
                LAPORAN KKN SISDAMAS
              </h1>
              <p className="text-blue-100 text-sm">
                Kelompok 121 - Desa Kandangmukti
              </p>
            </div>
          </div>

          {/* Tombol Mobile Menu */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <XMarkIcon className="w-6 h-6 text-white" />
              ) : (
                <Bars3Icon className="w-6 h-6 text-white" />
              )}
            </button>
          </div>

          {/* Navigasi Desktop */}
          <nav className="hidden md:flex space-x-1 md:space-x-4">
            {navigationItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavigation(item.href)}
                className="px-3 py-2 rounded hover:text-gray-300 transition-colors duration-200 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-1 bg-transparent rounded p-4">
            {navigationItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavigation(item.href)}
                className="block w-full text-left px-2 py-1 text-white hover:text-gray-300 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
