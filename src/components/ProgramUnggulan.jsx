const ProgramCard = ({
  image,
  alt,
  title,
  description,
  date,
  participants,
}) => (
  <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
    <div className="relative h-48 overflow-hidden">
      <img src={image} alt={alt} className="w-full h-full object-cover" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex items-center text-sm text-gray-500">
        <span>{date}</span>
        <span className="mx-2">•</span>
        <span>{participants}</span>
      </div>
    </div>
  </div>
);

const ProgramUnggulan = () => {
  const programs = [
    {
      image:
        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/001ffebc-5b05-44d9-a9f9-d3afea31b877.png",
      alt: "Pelatihan pembuatan pupuk organik dengan bahan lokal",
      title: "Pelatihan Pembuatan Pupuk Organik",
      description:
        "Mengajarkan warga membuat pupuk dari bahan lokal untuk mengurangi biaya pertanian dan meningkatkan hasil panen.",
      date: "25 Juli 2023",
      participants: "30 Peserta",
    },
    {
      image:
        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8d587e40-b086-4c5b-a5ed-9febd82ed0bc.png",
      alt: "Workshop pemasaran digital produk UMKM desa",
      title: "Pelatihan Pemasaran Digital",
      description:
        "Memberikan pengetahuan tentang cara memasarkan produk UMKM melalui media sosial dan marketplace.",
      date: "1 Agustus 2023",
      participants: "15 UMKM",
    },
    {
      image:
        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/df9fd54e-830b-4cfb-b985-771d60426754.png",
      alt: "Pembuatan taman bacaan di balai desa",
      title: "Pembangunan Taman Bacaan",
      description:
        "Menyediakan sarana literasi untuk anak-anak dan remaja dengan koleksi buku pendidikan dan keterampilan.",
      date: "10 Agustus 2023",
      participants: "150+ Buku",
    },
  ];

  return (
    <section id="programs" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Program Unggulan KKN
          </h2>
          <hr className="w-24 mx-auto my-4 border-t-2 border-green-600" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Berikut adalah program-program unggulan yang telah kami laksanakan
            selama KKN di Desa Mandiri.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramUnggulan;
