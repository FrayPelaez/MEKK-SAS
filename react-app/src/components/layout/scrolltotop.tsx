import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 350);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Volver al inicio"
      title="Volver al inicio"
      className="
        group fixed bottom-[84px] right-4 z-50
        flex h-14 w-14 items-center justify-center
        rounded-full
        bg-[#ff6500]
        text-white
        shadow-[0_6px_18px_rgba(255,101,0,0.24)]
        transition-all duration-300
        hover:-translate-y-1
        hover:bg-[#b44801]
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#ff6500]
        focus-visible:ring-offset-2
        md:bottom-[104px]
        md:right-6
        md:h-16
        md:w-16
      "
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 transition-transform duration-300 group-hover:-translate-y-0.5 md:h-7 md:w-7"
        aria-hidden="true"
      >
        <path d="m6 15 6-6 6 6" />
      </svg>
    </button>
  );
}