export default function Footer() {
  const linkStyle =
    "text-sm font-normal leading-6 text-[#cbd5e1] transition hover:text-[#ff6500] sm:text-base";

  return (
    <footer className="bg-[#101828] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-14">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-[2fr_1fr_1fr_1.2fr] lg:gap-10">
          
          {/* MEKK */}
          <div className="col-span-2 lg:col-span-1">
            <h2 className="text-3xl font-bold leading-10">
              MEK<span className="text-[#ff6500]">K</span>
            </h2>

            <p className="mt-4 max-w-sm text-sm font-normal leading-6 text-[#cbd5e1] sm:text-base">
              Soluciones industriales de alta calidad con más de 6 años de
              experiencia en el mercado.
            </p>

            {/* REDES */}
            <div className="mt-6 flex gap-3">
              {/* FACEBOOK */}
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1e293b] text-[#cbd5e1] transition hover:bg-[#ff6500] hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M13.5 8H16V5h-2.5C10.5 5 9 6.8 9 9.5V11H7v3h2v5h3v-5h2.5l.5-3H12V9.7c0-1.1.4-1.7 1.5-1.7Z" />
                </svg>
              </a>

              {/* INSTAGRAM */}
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1e293b] text-[#cbd5e1] transition hover:bg-[#ff6500] hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>

              {/* LINKEDIN */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1e293b] text-[#cbd5e1] transition hover:bg-[#ff6500] hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M6.5 8.5H3.8V20h2.7V8.5ZM5.1 3A1.6 1.6 0 1 0 5 6.2 1.6 1.6 0 0 0 5.1 3ZM20 13.4c0-3.5-1.9-5.1-4.4-5.1-2 0-3 1.1-3.5 1.9V8.5H9.4V20h2.7v-5.7c0-1.5.3-3 2.2-3 1.9 0 1.9 1.7 1.9 3.1V20H20v-6.6Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* MENÚ */}
          <div>
            <h3 className="text-lg font-bold leading-6">
              Menú
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a href="/" className={linkStyle}>
                  Inicio
                </a>
              </li>

              <li>
                <a href="/productos" className={linkStyle}>
                  Productos
                </a>
              </li>

              <li>
                <a href="/#sobreNosotros" className={linkStyle}>
                  Nosotros
                </a>
              </li>

              <li>
                <a href="/contacto" className={linkStyle}>
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* PRODUCTOS */}
          <div>
            <h3 className="text-lg font-bold leading-6">
              Productos
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a href="/productos" className={linkStyle}>
                  Equipos
                </a>
              </li>

              <li>
                <a href="/productos" className={linkStyle}>
                  Sistemas
                </a>
              </li>

              <li>
                <a href="/productos" className={linkStyle}>
                  Pértigas
                </a>
              </li>

              <li>
                <a href="/productos" className={linkStyle}>
                  Escaleras
                </a>
              </li>

              <li>
                <a href="/productos" className={linkStyle}>
                  Antenallas
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACTO */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-lg font-bold leading-6">
              Contacto
            </h3>

            <div className="mt-5 space-y-4">
              {/* TELÉFONO */}
              <a
                href="tel:6017921275"
                className="flex items-start gap-3 text-sm font-normal leading-6 text-[#cbd5e1] transition hover:text-[#ff6500] sm:text-base"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="mt-0.5 h-5 w-5 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2.1Z" />
                </svg>

                601-792 1275
              </a>

              {/* CORREO */}
              <a
                href="mailto:marketing07@gmail.com"
                className="flex items-start gap-3 break-all text-sm font-normal leading-6 text-[#cbd5e1] transition hover:text-[#ff6500] sm:text-base"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="mt-0.5 h-5 w-5 shrink-0"
                  aria-hidden="true"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>

                marketing07@gmail.com
              </a>

              {/* DIRECCIÓN */}
              <div className="flex items-start gap-3 text-sm font-normal leading-6 text-[#cbd5e1] sm:text-base">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="mt-0.5 h-5 w-5 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M12 21s6-5.3 6-12a6 6 0 1 0-12 0c0 6.7 6 12 6 12Z" />
                  <circle cx="12" cy="9" r="2" />
                </svg>

                <p>
                  Calle 75 # 64-29
                  <br />
                  Bogotá, Colombia
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-12 border-t border-[#2d3748] pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
            <p className="text-sm font-normal leading-5 text-[#cbd5e1]">
              © 2026 Diego Galvis / Fray Pelaez. Todos los derechos reservados.
            </p>

            <p className="text-sm font-normal leading-5 text-[#64748b]">
              MEKK S.A.S.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}