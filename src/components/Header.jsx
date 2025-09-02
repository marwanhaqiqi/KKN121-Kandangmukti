import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Function to handle navigation
  const handleNavigation = (anchor) => {
    if (isHomePage) {
      // If on home page, scroll to section
      scrollToElement(anchor);
    } else {
      // If on other page, navigate to home first, then scroll
      navigate("/");

      // Use longer timeout and multiple attempts to ensure element exists
      const attemptScroll = (attempts = 0) => {
        if (attempts < 10) {
          // Try up to 10 times (1 second total)
          setTimeout(() => {
            const element = document.querySelector(anchor);
            if (element) {
              element.scrollIntoView({ behavior: "smooth", block: "start" });
            } else {
              attemptScroll(attempts + 1);
            }
          }, 100); // Check every 100ms
        }
      };

      attemptScroll();
    }
    setIsOpen(false);
  };

  // Helper function to scroll to element
  const scrollToElement = (anchor) => {
    const element = document.querySelector(anchor);
    if (element) {
      // Add offset for sticky header
      const headerHeight = 80; // Adjust based on your header height
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  // Close mobile menu when clicking outside
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
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
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
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

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div
            className="md:hidden fixed inset-0 top-16 bg-black/50 z-40"
            onClick={handleOverlayClick}
          >
            <div className="bg-gradient-to-r from-green-600 to-blue-800 shadow-lg">
              <div className="px-4 py-2 space-y-1">
                {navigationItems.map((item, index) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavigation(item.href)}
                    className="block w-full text-left px-4 py-3 text-white hover:bg-white/10 transition-colors duration-200 rounded-md border-b border-white/10 last:border-b-0"
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: "slideIn 0.3s ease-out forwards",
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
