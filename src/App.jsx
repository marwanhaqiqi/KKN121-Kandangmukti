import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProfileDesa from "./components/ProfileDesa";
import ProgramUnggulan from "./components/ProgramUnggulan";
import TimKKN from "./components/TimKKN";
import GallerySiklus from "./components/GallerySiklus";
import GalleryHarian1 from "./components/GalleryHarian/GalleryHarian1";
import GalleryHarian2 from "./components/GalleryHarian/GalleryHarian2";
import GalleryHarian3 from "./components/GalleryHarian/GalleryHarian3";
import DokumenLaporan from "./components/DokumenLaporan";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <ProfileDesa />
              <ProgramUnggulan />
              <TimKKN />
              <GallerySiklus />
              <DokumenLaporan />
              <Footer />
              <BackToTop />
            </>
          }
        />

        {/* Gallery Pages for each Siklus */}
        <Route
          path="/gallery-harian1"
          element={
            <>
              <GalleryHarian1 />
              <Footer />
              <BackToTop />
            </>
          }
        />

        <Route
          path="/gallery-harian2"
          element={
            <>
              <GalleryHarian2 />
              <Footer />
              <BackToTop />
            </>
          }
        />

        <Route
          path="/gallery-harian3"
          element={
            <>
              <GalleryHarian3 />
              <Footer />
              <BackToTop />
            </>
          }
        />

        {/* <Route path="/gallery-harian4" element={
          <>
            <GalleryHarian4 />
            <Footer />
            <BackToTop />
          </>
        } /> */}

        {/* 404 Page - Optional */}
        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
                <p className="text-gray-600 mb-8">Halaman tidak ditemukan</p>
                <a
                  href="/"
                  className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                  Kembali ke Beranda
                </a>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
