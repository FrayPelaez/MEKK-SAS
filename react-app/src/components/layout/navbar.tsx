import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkStyles = ({ isActive }: { isActive: boolean }) =>
    `text-base font-semibold transition ${
      isActive
        ? "text-[#ff6500]"
        : "text-[#1e293b] hover:text-[#ff6500]"
    }`;

  return (
    <header className="sticky top-0 z-50 h-20 border-b border-[#d9d9d9] bg-[#f7f7f7]">
      <div className="mx-auto flex h-full w-full max-w-[1250px] items-center justify-between px-6 lg:px-[30px]">
        {/* LOGO */}
        <a href="/INDEX.html" className="shrink-0">
          <img
            src="/imgs/navbar/logoMekkSaS.png"
            alt="Logo de MEKK S.A.S."
            className="h-auto w-[100px]"
          />
        </a>

        {/* NAVEGACIÓN DESKTOP */}
        <nav className="ml-auto mr-[55px] hidden items-center gap-[45px] md:flex">
          <a
            href="/INDEX.html"
            className="text-base font-semibold text-[#1e293b] transition hover:text-[#ff6500]"
          >
            Inicio
          </a>

          <a
            href="/INDEX.html#sobreNosotros"
            className="text-base font-semibold text-[#1e293b] transition hover:text-[#ff6500]"
          >
            Nosotros
          </a>

          <NavLink to="/productos" className={navLinkStyles}>
            Productos
          </NavLink>

          <NavLink to="/contacto" className={navLinkStyles}>
            Contacto
          </NavLink>
        </nav>

        {/* WHATSAPP DESKTOP */}
        <a
          href="https://wa.me/573142898780"
          target="_blank"
          rel="noreferrer"
          className="hidden items-center justify-center gap-2 rounded-[18px] bg-[#ff6500] px-6 py-3 text-base font-semibold text-white shadow-md transition hover:bg-[#25d366] md:flex"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
            <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
          </svg>

          Cotizar por WhatsApp
        </a>

        {/* BOTÓN MOBILE */}
        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          className="flex h-10 w-10 items-center justify-center text-[#101828] md:hidden"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-7 w-7"
              aria-hidden="true"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-7 w-7"
              aria-hidden="true"
            >
              <path d="M4 6h16" />
              <path d="M4 12h16" />
              <path d="M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* MENÚ MOBILE */}
      {menuOpen && (
        <div className="border-t border-[#d9d9d9] bg-[#f7f7f7] px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-5">
            <a
              href="/INDEX.html"
              className="text-base font-semibold text-[#1e293b] transition hover:text-[#ff6500]"
            >
              Inicio
            </a>

            <a
              href="/INDEX.html#sobreNosotros"
              className="text-base font-semibold text-[#1e293b] transition hover:text-[#ff6500]"
            >
              Nosotros
            </a>

            <NavLink
              to="/productos"
              onClick={() => setMenuOpen(false)}
              className={navLinkStyles}
            >
              Productos
            </NavLink>

            <NavLink
              to="/contacto"
              onClick={() => setMenuOpen(false)}
              className={navLinkStyles}
            >
              Contacto
            </NavLink>

            <a
              href="https://wa.me/573142898780"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex w-fit items-center justify-center gap-2 rounded-[18px] bg-[#ff6500] px-5 py-3 text-base font-semibold text-white transition hover:bg-[#25d366]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path
                  stroke="none"
                  d="M0 0h24v24H0z"
                  fill="none"
                />
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
              </svg>

              Cotizar por WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}