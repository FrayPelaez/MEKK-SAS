export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 h-20 border-b border-gray-200 bg-[#f7f7f7]">
      <div className="mx-auto flex h-full w-full max-w-[1250px] items-center justify-between px-6 lg:px-[30px]">
        {/* Logo */}
        <a href="/" className="shrink-0">
          <img
            src="/imgs/navbar/logoMekkSaS.png"
            alt="Logo de MEKK S.A.S."
            className="h-auto w-[100px]"
          />
        </a>

        {/* Navegación */}
        <nav className="ml-auto mr-[55px] hidden items-center gap-[45px] md:flex">
          <a
            href="/"
            className="text-base font-semibold text-[#1e293b] transition hover:text-[#ff6500] hover:underline"
          >
            Inicio
          </a>

          <a
            href="/#sobreNosotros"
            className="text-base font-semibold text-[#1e293b] transition hover:text-[#ff6500] hover:underline"
          >
            Nosotros
          </a>

          <a
            href="/productos"
            className="text-base font-semibold text-[#ff6500]"
          >
            Productos
          </a>

          <a
            href="/contacto"
            className="text-base font-semibold text-[#1e293b] transition hover:text-[#ff6500] hover:underline"
          >
            Contacto
          </a>
        </nav>

        {/* WhatsApp */}
        <button
          type="button"
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
        </button>
      </div>
    </header>
  );
}