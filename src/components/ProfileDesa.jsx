import {
  MapPinIcon,
  UsersIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";

const ProfileCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
    <div className="text-green-600 mb-4">
      <Icon className="h-10 w-10" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ProfileDesa = () => {
  const profileData = [
    {
      icon: MapPinIcon,
      title: "Letak Geografis",
      description:
        "Desa terletak di dataran rendah dengan ketinggian 50-100 mdpl, memiliki lahan pertanian subur dan sungai yang mengalir di bagian timur.",
    },
    {
      icon: UsersIcon,
      title: "Demografi",
      description:
        "Jumlah penduduk 2.543 jiwa, dengan mayoritas bekerja sebagai petani, pedagang, dan pengrajin kerajinan tangan.",
    },
    {
      icon: BriefcaseIcon,
      title: "Potensi Desa",
      description:
        "Hasil pertanian meliputi padi, sayuran, dan buah-buahan. UMKM berkembang di bidang kerajinan tangan dan makanan olahan.",
    },
  ];

  return (
    <section id="profile" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Profil Desa Mandiri
          </h2>
          <hr className="w-24 mx-auto my-4 border-t-2 border-green-600" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Desa Mandiri terletak di Kecamatan Maju Jaya, Kabupaten Sejahtera
            dengan potensi pertanian dan UMKM yang berkembang pesat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {profileData.map((item, index) => (
            <ProfileCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfileDesa;
