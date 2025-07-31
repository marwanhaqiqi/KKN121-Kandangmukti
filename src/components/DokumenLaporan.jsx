import { DocumentTextIcon } from "@heroicons/react/24/outline";

const DokumenLaporan = () => {
  return (
    <section id="pdf" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Dokumen Laporan
          </h2>
          <hr className="w-24 mx-auto my-4 border-t-2 border-green-600" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Download dokumen lengkap laporan KKN dalam format PDF.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-6">
                <DocumentTextIcon className="h-20 w-20 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">
                  Laporan Lengkap KKN Desa Mandiri
                </h3>
                <p className="text-gray-600 mb-4">
                  Format: PDF | Ukuran: 2.5 MB
                </p>
                <p className="text-gray-600 mb-4">
                  Laporan lengkap berisi seluruh program kerja, evaluasi,
                  dokumentasi, dan lampiran pendukung lainnya.
                </p>
                <button className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition">
                  Download Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DokumenLaporan;
