import { ArrowUpIcon } from "@heroicons/react/24/outline";

const BackToTop = ({ show }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 ${
        show ? "block" : "hidden"
      }`}
    >
      <ArrowUpIcon className="h-6 w-6" />
    </button>
  );
};

export default BackToTop;
