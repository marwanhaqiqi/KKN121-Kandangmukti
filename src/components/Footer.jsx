import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa"; // Facebook dari react-icons

const Footer = () => {
  const socialIcons = {
    // facebook: <FaFacebook className="w-6 h-6" />,
    instagram: <Instagram className="w-6 h-6" />,
    tiktok: <FaTiktok className="w-6 h-6" />,
  };

  return (
    <footer id="footer" className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                className="text-gray-400 hover:text-white transition"
              >
                {socialIcons.instagram}
              </a>
              <a
                href="https://www.tiktok.com/@kkn121_kandangmukti"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                {socialIcons.tiktok}
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Informasi Kontak</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <EnvelopeIcon className="h-5 w-5 mr-2 mt-0.5" />
                <span>kandangmukti121@gmail.com</span>
              </li>
              <li className="flex items-start">
                <PhoneIcon className="h-5 w-5 mr-2 mt-0.5" />
                <span>+62 857 2100 7752</span>
              </li>
              <li className="flex items-start">
                <MapPinIcon className="h-5 w-5 mr-2 mt-0.5" />
                <span>Desa Kandangmukti, Kec. Leles, Kab. Garut</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navigasi Cepat</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#home" className="hover:text-white transition">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#profile" className="hover:text-white transition">
                  Profil Desa
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-white transition">
                  Program
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-white transition">
                  Tim
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition">
                  Galeri
                </a>
              </li>
            </ul>
          </div>
        </div>

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
