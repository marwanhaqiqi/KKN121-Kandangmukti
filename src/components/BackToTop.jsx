import { ArrowUpIcon, HomeIcon } from "@heroicons/react/24/outline";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const BackToTop = ({ show: externalShow }) => {
  const [internalShow, setInternalShow] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  // Show/hide button based on scroll position (if no external show prop)
  useEffect(() => {
    if (externalShow === undefined) {
      const handleScroll = () => {
        setInternalShow(window.scrollY > 300);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [externalShow]);

  const show = externalShow !== undefined ? externalShow : internalShow;

  const handleClick = () => {
    if (isHomePage) {
      // If on home page, scroll to absolute top
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      // Fallback for some browsers
      document.documentElement.scrollTop = 0;
    } else {
      // If on other page, navigate to home page
      navigate("/", { replace: true });
    }
  };

  const getButtonContent = () => {
    if (isHomePage) {
      return {
        icon: <ArrowUpIcon className="h-6 w-6" />,
        title: "Kembali ke Atas",
        bgColor: "bg-green-600 hover:bg-green-700",
      };
    } else {
      return {
        icon: <HomeIcon className="h-6 w-6" />,
        title: "Kembali ke Beranda",
        bgColor: "bg-green-600 hover:bg-green-700",
      };
    }
  };

  const buttonContent = getButtonContent();

  if (!show) return null;

  return (
    <button
      onClick={handleClick}
      title={buttonContent.title}
      className={`fixed bottom-8 right-8 ${buttonContent.bgColor} text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl z-50 group`}
    >
      {buttonContent.icon}

      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        {buttonContent.title}
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
      </div>
    </button>
  );
};

export default BackToTop;
