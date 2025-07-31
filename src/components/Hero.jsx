// const Hero = () => {
//   return (
//     // <section id="home" className="py-8 bg-white animate-fade-in">
//     //   <div className="container mx-auto px-4">
//     //     <div className="flex flex-col md:flex-row items-center">
//     //       <div className="md:w-1/2 mb-8 md:mb-0">
//     //         <h2 className="text-4xl font-bold text-gray-800 mb-4">
//     //           Laporan Kegiatan KKN
//     //         </h2>
//     //         <p className="text-lg text-gray-600 mb-6">
//     //           Kuliah Kerja Nyata (KKN) adalah bentuk pengabdian mahasiswa kepada
//     //           masyarakat yang dilaksanakan di daerah pedesaan selama 1 bulan
//     //           penuh. Berikut laporan lengkap kegiatan kami di Desa Mandiri.
//     //         </p>
//     //         <div className="flex space-x-3">
//     //           <a
//     //             href="#programs"
//     //             className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition"
//     //           >
//     //             Lihat Program
//     //           </a>
//     //           <a
//     //             href="#gallery"
//     //             className="bg-white hover:bg-gray-100 text-green-600 border border-green-600 px-6 py-3 rounded-lg font-medium transition"
//     //           >
//     //             Galeri Foto
//     //           </a>
//     //         </div>
//     //       </div>
//     //       <div className="md:w-1/2">
//     //         <img
//     //           src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4fa7ce1a-5bee-4954-bd15-3e3377e909c8.png"
//     //           alt="Kelompok KKN sedang bekerja bakti membersihkan lingkungan desa"
//     //           className="rounded-lg shadow-xl"
//     //         />
//     //       </div>
//     //     </div>
//     //   </div>
//     // </section>

//     <section id="home" className="relative min-h-screen overflow-hidden">
//       {/* Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover z-0"
//       >
//         <source src="/background.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <div className="absolute inset-0 bg-black/30 z-10"></div>
//       <div className="relative z-20 flex flex-col items-center justify-center text-center text-white min-h-screen px-4 py-16">
//         <h2 className="text-4xl md:text-5xl font-bold mb-4">
//           Laporan Kegiatan KKN
//         </h2>
//         <p className="text-lg md:text-xl mb-6 max-w-xl">
//           Dokumentasi kegiatan Kuliah Kerja Nyata oleh mahasiswa Universitas di
//           Desa Sukamaju sebagai bentuk pengabdian kepada masyarakat.
//         </p>
//         <img
//           src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4fa7ce1a-5bee-4954-bd15-3e3377e909c8.png"
//           alt="Kelompok KKN"
//           className="rounded-xl shadow-lg max-w-xs md:max-w-md"
//         />
//       </div>
//     </section>
//   );
// };

// export default Hero;

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
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
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                KKN Sisdamas
              </h2>
              <p className="text-lg lg:text-xl mb-8 leading-relaxed">
                KKN Sisdamas adalah singkatan dari Kuliah Kerja Nyata Sistem
                Desa Mandiri dan Sejahtera. Ini adalah model pengabdian kepada
                masyarakat yang dikembangkan oleh UIN Sunan Gunung Djati
                Bandung. KKN Sisdamas melibatkan mahasiswa dalam pemberdayaan
                masyarakat desa melalui berbagai kegiatan, dengan tujuan
                mewujudkan desa yang mandiri dan sejahtera.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#programs"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Lihat Program
                </a>
                <a
                  href="#gallery"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Galeri Foto
                </a>
              </div>
            </div>

            {/* Image - Right Side */}
            <div className="lg:w-1/2 -mt-10">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4fa7ce1a-5bee-4954-bd15-3e3377e909c8.png"
                alt="Kelompok KKN sedang melakukan kegiatan pengabdian masyarakat"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
