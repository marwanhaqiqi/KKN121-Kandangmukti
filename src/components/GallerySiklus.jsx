// import { Link } from "react-router-dom";

// const siklusData = [
//   {
//     id: 1,
//     title: "Siklus 1",
//     description:
//       "Pada Siklus 1, tim KKN SISDAMAS 121 melaksanakan kegiatan yang berfokus pada bidang pendidikan, keagamaan, dan kesehatan lingkungan di Desa Kandang Mukti. Kegiatan yang dilakukan meliputi mengajar PJOK di kelas 1 SDN 01 Kandangmukti untuk meningkatkan keterampilan motorik dan kedisiplinan siswa, mengajar ngaji di Madrasah Al-Ihya bersama anak-anak desa guna memperdalam kemampuan membaca Al-Qur’an serta pemahaman keagamaan, dan melaksanakan rembug warga untuk berdiskusi terkait program serta kebutuhan desa, khususnya dalam aspek kesehatan lingkungan. Seluruh kegiatan berjalan lancar berkat dukungan dan partisipasi aktif dari pihak sekolah, madrasah, serta masyarakat desa.",
//     image: "./BGSiklus/BG1.png",
//     link: "/gallery-harian1",
//   },
//   {
//     id: 2,
//     title: "Siklus 2",
//     description:
//       "Pada Siklus 2, kami fokus pada kegiatan pemberdayaan masyarakat seperti pelatihan UMKM, gotong royong, dan penghijauan.",
//     image: "./images/siklus2.jpg",
//     link: "/gallery-harian2",
//   },
//   {
//     id: 3,
//     title: "Siklus 3",
//     description:
//       "Siklus 3 berisi kegiatan penutupan KKN, pameran hasil kerja, serta evaluasi program bersama warga.",
//     image: "./images/siklus3.jpg",
//     link: "/gallery-harian3",
//   },
//   {
//     id: 4,
//     title: "Siklus 4",
//     description:
//       "Siklus 4 merupakan evaluasi dan dokumentasi akhir dari seluruh program KKN yang telah dilaksanakan di Desa Kandangmukti.",
//     image: "./images/siklus4.jpg",
//     link: "/gallery-harian4",
//   },
// ];

// const GallerySiklus = () => {
//   return (
//     <section id="siklus" className="container mx-auto px-4 py-8">
//       <div className="text-center mb-8">
//         <h2 className="text-3xl font-bold text-gray-800 mb-4">
//           Dokumentasi Per Siklus
//         </h2>
//       </div>

//       <div className="grid grid-cols-2 gap-6">
//         {siklusData.map((siklus) => (
//           <div
//             key={siklus.id}
//             className="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:-translate-y-1 transition-all duration-300"
//           >
//             <div className="relative">
//               <img
//                 src={siklus.image}
//                 alt={siklus.title}
//                 className="w-full h-90 object-cover"
//               />
//             </div>
//             <div className="p-4">
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                 {siklus.title}
//               </h3>
//               <p className="text-gray-600 text-sm mb-4">{siklus.description}</p>
//               <Link
//                 to={siklus.link}
//                 className="inline-block w-full text-center px-4 py-2 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-lg"
//               >
//                 Lihat Lebih Lengkap
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default GallerySiklus;

import { Link } from "react-router-dom";

const siklusData = [
  {
    id: 1,
    title: "Siklus 1",
    description:
      "Pada Siklus 1, tim KKN SISDAMAS 121 melaksanakan kegiatan yang berfokus pada bidang pendidikan, keagamaan, dan kesehatan lingkungan di Desa Kandang Mukti. Kegiatan yang dilakukan meliputi mengajar PJOK di kelas 1 SDN 01 Kandangmukti untuk meningkatkan keterampilan motorik dan kedisiplinan siswa, mengajar ngaji di Madrasah Al-Ihya bersama anak-anak desa guna memperdalam kemampuan membaca Al-Qur'an serta pemahaman keagamaan, dan melaksanakan rembug warga untuk berdiskusi terkait program serta kebutuhan desa, khususnya dalam aspek kesehatan lingkungan. Seluruh kegiatan berjalan lancar berkat dukungan dan partisipasi aktif dari pihak sekolah, madrasah, serta masyarakat desa.",
    image: "./BGSiklus/BG1.png",
    link: "/gallery-harian1",
  },
  // {
  //   id: 2,
  //   title: "Siklus 2",
  //   description:
  //     "Pada Siklus 2, kami fokus pada kegiatan pemberdayaan masyarakat seperti pelatihan UMKM, gotong royong, dan penghijauan.",
  //   image: "./images/siklus2.jpg",
  //   link: "/gallery-harian2",
  // },
  // {
  //   id: 3,
  //   title: "Siklus 3",
  //   description:
  //     "Siklus 3 berisi kegiatan penutupan KKN, pameran hasil kerja, serta evaluasi program bersama warga.",
  //   image: "./images/siklus3.jpg",
  //   link: "/gallery-harian3",
  // },
  // {
  //   id: 4,
  //   title: "Siklus 4",
  //   description:
  //     "Siklus 4 merupakan evaluasi dan dokumentasi akhir dari seluruh program KKN yang telah dilaksanakan di Desa Kandangmukti.",
  //   image: "./images/siklus4.jpg",
  //   link: "/gallery-harian4",
  // },
];

const GallerySiklus = () => {
  return (
    <section id="siklus" className="container mx-auto px-4 py-6 md:py-8">
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Dokumentasi Per Siklus
        </h2>
      </div>

      {/* Grid responsive: 1 kolom di mobile, 2 kolom di tablet ke atas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {siklusData.map((siklus) => (
          <div
            key={siklus.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="relative">
              <img
                src={siklus.image}
                alt={siklus.title}
                className="w-full h-48 md:h-90 object-cover"
              />
            </div>
            <div className="p-3 md:p-4">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                {siklus.title}
              </h3>
              <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4">
                {siklus.description}
              </p>
              <Link
                to={siklus.link}
                className="inline-block w-full text-center px-3 md:px-4 py-2 bg-gradient-to-r from-blue-600 to-green-600 text-white text-sm md:text-base rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Lihat Lebih Lengkap
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySiklus;
