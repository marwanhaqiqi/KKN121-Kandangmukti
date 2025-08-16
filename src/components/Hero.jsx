import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollElements, setScrollElements] = useState({
    title: false,
    description: false,
    buttons: false,
    image: false,
    floatingElements: false,
  });

  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);
  const floatingRef = useRef(null);

  // Initial animation trigger
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elementId = entry.target.dataset.scrollElement;

          setScrollElements((prev) => ({
            ...prev,
            [elementId]: true,
          }));
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe elements with staggered delays
    const elements = [
      { ref: titleRef, id: "title", delay: 0 },
      { ref: descriptionRef, id: "description", delay: 200 },
      { ref: buttonsRef, id: "buttons", delay: 400 },
      { ref: imageRef, id: "image", delay: 300 },
      { ref: floatingRef, id: "floatingElements", delay: 600 },
    ];

    elements.forEach(({ ref, id, delay }) => {
      if (ref.current) {
        ref.current.dataset.scrollElement = id;

        // Add staggered observation
        setTimeout(() => {
          observer.observe(ref.current);
        }, delay);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content Container */}
      <div className="relative z-20 min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content - Left Side */}
            <div className="lg:w-1/2 text-white">
              {/* Title with scroll animation */}
              <h2
                ref={titleRef}
                className={`text-4xl lg:text-5xl font-bold mb-6 transition-all duration-1000 ease-out ${
                  isVisible && scrollElements.title
                    ? "transform translate-y-0 opacity-100"
                    : "transform translate-y-8 opacity-0"
                }`}
              >
                KKN Sisdamas
              </h2>

              {/* Description with scroll animation */}
              <p
                ref={descriptionRef}
                className={`text-lg lg:text-xl mb-8 leading-relaxed transition-all duration-1000 ease-out delay-200 ${
                  isVisible && scrollElements.description
                    ? "transform translate-y-0 opacity-100"
                    : "transform translate-y-8 opacity-0"
                }`}
              >
                KKN Sisdamas adalah singkatan dari Kuliah Kerja Nyata Sistem
                Desa Mandiri dan Sejahtera. Ini adalah model pengabdian kepada
                masyarakat yang dikembangkan oleh UIN Sunan Gunung Djati
                Bandung. KKN Sisdamas melibatkan mahasiswa dalam pemberdayaan
                masyarakat desa melalui berbagai kegiatan, dengan tujuan
                mewujudkan desa yang mandiri dan sejahtera.
              </p>

              {/* Buttons with scroll animation */}
              <div
                ref={buttonsRef}
                className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ease-out delay-400 ${
                  isVisible && scrollElements.buttons
                    ? "transform translate-y-0 opacity-100"
                    : "transform translate-y-8 opacity-0"
                }`}
              >
                <a
                  href="#programs"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg"
                >
                  Lihat Program
                </a>
                <a
                  href="#siklus"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg"
                >
                  Galeri Foto
                </a>
              </div>
            </div>

            {/* Image - Right Side with scroll animation */}
            <div
              ref={imageRef}
              className={`lg:w-1/2 -mt-10 transition-all duration-1200 ease-out ${
                isVisible && scrollElements.image
                  ? "transform translate-x-0 opacity-100 scale-100"
                  : "transform translate-x-12 opacity-0 scale-95"
              }`}
            >
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4fa7ce1a-5bee-4954-bd15-3e3377e909c8.png"
                alt="Kelompok KKN sedang melakukan kegiatan pengabdian masyarakat"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl transition-all duration-300 hover:transform hover:scale-105 hover:shadow-3xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Animation Elements with scroll animation */}
      <div
        ref={floatingRef}
        className="absolute inset-0 z-5 pointer-events-none"
      >
        {/* Decorative floating elements */}
        <div
          className={`absolute top-20 left-10 w-4 h-4 bg-green-400/30 rounded-full transition-all duration-1000 ease-out ${
            isVisible && scrollElements.floatingElements
              ? "animate-bounce opacity-100"
              : "opacity-0 transform translate-y-4"
          }`}
        ></div>
        <div
          className={`absolute top-40 right-20 w-6 h-6 bg-white/20 rounded-full transition-all duration-1000 ease-out delay-200 ${
            isVisible && scrollElements.floatingElements
              ? "animate-pulse opacity-100"
              : "opacity-0 transform translate-y-4"
          }`}
        ></div>
        <div
          className={`absolute bottom-32 left-20 w-3 h-3 bg-green-300/40 rounded-full transition-all duration-1000 ease-out delay-400 ${
            isVisible && scrollElements.floatingElements
              ? "animate-bounce opacity-100"
              : "opacity-0 transform translate-y-4"
          }`}
        ></div>
        <div
          className={`absolute top-1/3 right-10 w-5 h-5 bg-green-200/25 rounded-full transition-all duration-1000 ease-out delay-600 ${
            isVisible && scrollElements.floatingElements
              ? "animate-pulse opacity-100"
              : "opacity-0 transform translate-y-4"
          }`}
        ></div>
        <div
          className={`absolute bottom-1/4 right-1/3 w-2 h-2 bg-white/30 rounded-full transition-all duration-1000 ease-out delay-800 ${
            isVisible && scrollElements.floatingElements
              ? "animate-bounce opacity-100"
              : "opacity-0 transform translate-y-4"
          }`}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
