const TeamMemberCard = ({ image, alt, name, role, faculty, major }) => (
  <div className="bg-white rounded-lg shadow-md p-6 text-center hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
    <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-green-100">
      <img src={image} alt={alt} className="w-full h-full object-cover" />
    </div>
    <h3 className="text-xl font-semibold mb-1">{name}</h3>
    <p className="text-green-600 mb-2">{role}</p>
    <p className="text-gray-600 text-sm">{faculty}</p>
    <p className="text-gray-600 text-sm">{major}</p>
  </div>
);

const TimKKN = () => {
  const teamMembers = [
    {
      image: "./Profile/15.png",
      alt: "Foto anggota tim KKN dengan nama Palah Suwandi",
      name: "Palah Suwandi",
      role: "Ketua",
      faculty: "Fakultas Dakwah dan Komunikasi",
      major: "Ilmu Komunikasi Jurnalistik",
    },
    {
      image: "./Profile/14.png",
      alt: "Foto anggota tim KKN dengan nama Salma Syahnur Fadhila",
      name: "Salma Syahnur Fadhila",
      role: "Bendahara",
      faculty: "Fakultas Ekonomi dan Bisnis Islam",
      major: "Manajemen",
    },
    {
      image: "./Profile/13.png",
      alt: "Foto anggota tim KKN dengan nama Wilda Tsalisa Jamilatussolihah",
      name: "Wilda Tsalisa Jamilatussolihah",
      role: "Sekretaris",
      faculty: "Fakultas Ilmu Sosial dan Ilmu Politik",
      major: "Administrasi Publik",
    },
    {
      image: "./Profile/4.png",
      alt: "Foto anggota tim KKN dengan nama Syhadad Nabil Mudzafar",
      name: "Syhadad Nabil Mudzafar",
      role: "Acara",
      faculty: "Fakultas Tarbiyah dan Keguruan",
      major: "Pendidikan Agama Islam",
    },
    {
      image: "./Profile/3.png",
      alt: "Foto anggota tim KKN dengan nama Saffanah Ulya Safitri",
      name: "Saffanah Ulya Safitri",
      role: "Acara",
      faculty: "Fakultas Ushuluddin",
      major: "Ilmu Hadist",
    },
    {
      image: "./Profile/2.png",
      alt: "Foto anggota tim KKN dengan nama Zahra Katlya Isfarayani",
      name: "Zahra Katlya Isfarani",
      role: "Acara",
      faculty: "Fakultas Tarbiyah dan Keguruan",
      major: "Tadris Bahasa Indonesia",
    },
    {
      image: "./Profile/1.png",
      alt: "Foto anggota tim KKN dengan nama Muhammad Khoerul Abdi",
      name: "Muhammad Khoerul Abdi",
      role: "Acara",
      faculty: "Fakultas Syari'ah dan Hukum",
      major: "Perbandingan Madzhab dan Hukum",
    },
    {
      image: "./Profile/12.png",
      alt: "Foto anggota tim KKN dengan nama Gallung Marwan Haqiqi Hafidz",
      name: "Gallung Marwan Haqiqi Hafidz",
      role: "Mobile Support",
      faculty: "Fakultas Sains dan Teknologi",
      major: "Teknik Informatika",
    },
    {
      image: "./Profile/11.png",
      alt: "Foto anggota tim KKN dengan nama Muhammad Akhdan Ruwanda",
      name: "Muhammad Akhdan Ruwanda",
      role: "Mobile Support",
      faculty: "Fakultas Ushuluddin",
      major: "Studi Agama-Agama",
    },
    {
      image: "./Profile/10.png",
      alt: "Foto anggota tim KKN dengan nama Yulia Nurjanah",
      name: "Yulia Nurjanah",
      role: "Publikasi dan Dokumentasi",
      faculty: "Fakultas Dakwah dan Komunikasi",
      major: "Bimbingan Konseling Islam",
    },
    {
      image: "./Profile/9.png",
      alt: "Foto anggota tim KKN dengan nama Salma Naila",
      name: "Salma Naila",
      role: "Publikasi dan Dokumentasi",
      faculty: "Fakultas Tarbiyah dan Keguruan ",
      major: "Pendidikan Bahasa Inggris",
    },
    {
      image: "./Profile/8.png",
      alt: "Foto anggota tim KKN dengan nama Kyla Alzena Rashida",
      name: "Kyla Alzena Rashida",
      role: "Publikasi dan Dokumentasi",
      faculty: "Fakultas Ekonomi dan Bisnis Islam",
      major: "Manajemen Keuangan Syari'ah",
    },
    {
      image: "./Profile/7.png",
      alt: "Foto anggota tim KKN dengan nama Naufal Anggoro",
      name: "Naufal Anggoro",
      role: "Logistik Konsumsi",
      faculty: "Fakultas Adab dan Humaniora",
      major: "Sejarah Peradaban Islam",
    },
    {
      image: "./Profile/6.png",
      alt: "Foto anggota tim KKN dengan nama Mia Salastri",
      name: "Mia Salastri",
      role: "Logistik Konsumsi",
      faculty: "Fakultas Tarbiyah dan Keguruan",
      major: "Pendidikan Kimia",
    },
    {
      image: "./Profile/5.png",
      alt: "Foto anggota tim KKN dengan nama Zahra Azalea Putri",
      name: "Zahra Azalea Putri",
      role: "Logistik Konsumsi",
      faculty: "Fakultas Adab dan Humaniora",
      major: "Sastra Inggris",
    },
  ];

  return (
    <section id="team" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Tim KKN Desa Mandiri
          </h2>
          <hr className="w-24 mx-auto my-4 border-t-2 border-green-600" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Berikut adalah anggota tim KKN yang telah berkontribusi dalam
            pelaksanaan program di Desa Mandiri.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimKKN;
