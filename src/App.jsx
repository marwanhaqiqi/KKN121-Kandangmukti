import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProfileDesa from "./components/ProfileDesa";
import ProgramUnggulan from "./components/ProgramUnggulan";
import TimKKN from "./components/TimKKN";
import Gallery from "./components/Gallery";
import DokumenLaporan from "./components/DokumenLaporan";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className=" font-sans">
      <Header />
      <Hero />
      <ProfileDesa />
      <ProgramUnggulan />
      <TimKKN />
      <Gallery />
      <DokumenLaporan />
      <Footer />
      <BackToTop show={showBackToTop} />
    </div>
  );
}

export default App;
