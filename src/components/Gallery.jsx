const GalleryItem = ({ day, title, image, alt, description }) => (
  <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
    <div className="md:flex">
      <div className="md:w-1/3">
        <img src={image} alt={alt} className="w-full h-64 object-cover" />
      </div>
      <div className="p-6 md:w-2/3">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

const Gallery = () => {
  const galleryItems = [
    {
      day: 1,
      title: "Hari 1: Pembukaan KKN",
      image:
        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/80c6b9af-6b9e-4438-8410-8e410b119e61.png",
      alt: "Kegiatan hari pertama KKN: Pembukaan dan perkenalan dengan perangkat desa",
      description:
        "Perkenalan dengan perangkat desa dan survey lokasi kegiatan. Diskusi awal mengenai rencana program kerja yang akan dilaksanakan selama KKN.",
    },
    {
      day: 2,
      title: "Hari 2: Survey Lapangan",
      image:
        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4532f195-4360-40db-bb62-222e8aa614cb.png",
      alt: "Kegiatan hari kedua KKN: Survey lingkungan dan kebutuhan warga",
      description:
        "Melakukan survey ke rumah-rumah warga untuk mengetahui kondisi dan kebutuhan masyarakat desa secara lebih mendalam.",
    },
    {
      day: 3,
      title: "Hari 3: Perencanaan Program",
      image:
        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bdfe3c96-33f5-4fec-9fbc-7fb829293e66.png",
      alt: "Kegiatan hari ketiga KKN: Persiapan program kerja utama",
      description:
        "Menyusun program kerja utama berdasarkan hasil survey hari sebelumnya dan diskusi dengan perangkat desa.",
    },
  ];

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Galeri Kegiatan Harian
          </h2>
          <hr className="w-24 mx-auto my-4 border-t-2 border-blue-600" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dokumentasi harian kegiatan KKN dari hari ke-1 sampai hari ke-35 di
            Desa Mandiri.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {galleryItems.map((item, index) => (
            <GalleryItem key={index} {...item} />
          ))}

          {/* Note for implementation */}
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-blue-800">
              Galeri ini menampilkan contoh template untuk 3 hari pertama.
              Silakan tambahkan template serupa untuk hari ke-4 sampai ke-35
              dengan menyesuaikan gambar dan deskripsi kegiatan harian.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
