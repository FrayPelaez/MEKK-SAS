import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function PageLoader() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setLoading(true);
    setVisible(true);

    const hideLoader = setTimeout(() => {
      setVisible(false);
    }, 550);

    const removeLoader = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => {
      clearTimeout(hideLoader);
      clearTimeout(removeLoader);
    };
  }, [location.pathname]);

  if (!loading) {
    return null;
  }

  return (
    <div
      className={`
        fixed inset-0 z-[9999]
        flex items-center justify-center
        overflow-hidden
        bg-[#fffdf9]
        transition-opacity duration-300
        ${visible ? "opacity-100" : "opacity-0"}
      `}
    >
      {/* RESPLANDOR NARANJA SUPERIOR */}
      <div className="pointer-events-none absolute left-1/2 top-[-120px] h-80 w-80 -translate-x-1/2 rounded-full bg-[#ff6500]/10 blur-[100px]" />

      {/* RESPLANDOR NARANJA INFERIOR */}
      <div className="pointer-events-none absolute bottom-[-140px] right-[-100px] h-80 w-80 rounded-full bg-[#ff6500]/10 blur-[110px]" />

      {/* DETALLE DECORATIVO */}
      <div className="pointer-events-none absolute left-0 top-0 h-1 w-full bg-[#ff6500]" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        {/* LOGO */}
        <div className="flex h-28 w-28 items-center justify-center rounded-3xl border border-[#e2e8f0] bg-white p-5 shadow-lg">
          <img
            src="/imgs/navbar/logoMekkSaS.png"
            alt="MEKK S.A.S"
            className="h-full w-full object-contain"
          />
        </div>

        {/* MENSAJE */}
        <h2 className="mt-3 text-2xl font-bold leading-8 text-[#101828] md:text-3xl">
          Soluciones para el sector eléctrico
        </h2>

        <p className="mt-2 max-w-md text-base leading-6 text-[#4b5563]">
          Equipos, herramientas y seguridad con respaldo especializado.
        </p>

        {/* LÍNEA ELÉCTRICA */}
        <div className="relative mt-8 h-[3px] w-56 overflow-hidden rounded-full bg-[#e2e8f0]">
          <div className="absolute inset-y-0 left-0 w-20 animate-[mekkLoading_1s_ease-in-out_infinite] rounded-full bg-[#ff6500] shadow-[0_0_14px_rgba(255,101,0,0.55)]" />
        </div>

        {/* ESTADO */}
        <div className="mt-5 flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#ff6500]" />

          <span className="text-sm font-medium text-[#64748b]">
            Cargando experiencia MEKK
          </span>
        </div>
      </div>

      <style>
        {`
          @keyframes mekkLoading {
            0% {
              transform: translateX(-100%);
              opacity: 0;
            }

            20% {
              opacity: 1;
            }

            80% {
              opacity: 1;
            }

            100% {
              transform: translateX(280%);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
}