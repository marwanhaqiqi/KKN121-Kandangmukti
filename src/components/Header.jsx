import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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

          {/* Navigasi */}
          <nav className="hidden md:flex space-x-1 md:space-x-4">
            <a href="#home" className="px-3 py-2 rounded hover:text-gray-300">
              Beranda
            </a>
            <a
              href="#profile"
              className="px-3 py-2 rounded hover:text-gray-300"
            >
              Profil Desa
            </a>
            <a
              href="#programs"
              className="px-3 py-2 rounded hover:text-gray-300"
            >
              Program
            </a>
            <a href="#team" className="px-3 py-2 rounded hover:text-gray-300">
              Tim
            </a>
            {/* <a
              href="#testimoni"
              className="px-3 py-2 rounded hover:text-gray-300"
            >
              Testimoni Warga
            </a> */}
            <a
              href="#gallery"
              className="px-3 py-2 rounded hover:text-gray-300"
            >
              Galeri
            </a>
            <a href="#pdf" className="px-3 py-2 rounded hover:text-gray-300">
              Laporan PDF
            </a>
            <a href="#footer" className="px-3 py-2 rounded hover:text-gray-300">
              Contact
            </a>
          </nav>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-1 bg-transparent rounded p-4">
            <a
              href="#home"
              className="block px-2 py-1 text-white hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Beranda
            </a>
            <a
              href="#profile"
              className="block px-2 py-1 text-white hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Profil Desa
            </a>
            <a
              href="#programs"
              className="block px-2 py-1 text-white hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Program
            </a>
            <a
              href="#team"
              className="block px-2 py-1 text-white hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Tim
            </a>
            {/* <a
              href="#testimoni"
              className="block px-2 py-1 text-white hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Testimoni Warga
            </a> */}
            <a
              href="#gallery"
              className="block px-2 py-1 text-white hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Galeri
            </a>
            <a
              href="#pdf"
              className="block px-2 py-1 text-white hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Laporan PDF
            </a>
            <a
              href="#footer"
              className="block px-2 py-1 text-white hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
