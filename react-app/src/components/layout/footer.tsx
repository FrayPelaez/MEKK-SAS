export default function Footer() {
  const linkStyle =
    "text-base font-normal text-[#cbd5e1] transition hover:text-[#ff6500]";

  return (
    <footer className="bg-[#101828] text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        {/* MEKK */}
        <div>
          <h2 className="text-3xl font-bold">
            MEK<span className="text-[#ff6500]">K</span>
          </h2>

          <p className="mt-4 max-w-sm text-base font-normal leading-6 text-[#99a1af]">
            Soluciones industriales de alta calidad con más de 6 años de
            experiencia en el mercado.
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1e293b] text-base font-semibold text-[#cbd5e1] transition hover:bg-[#ff6500] hover:text-white"
            >
              f
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1e293b] text-sm font-semibold text-[#cbd5e1] transition hover:bg-[#ff6500] hover:text-white"
            >
              IG
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1e293b] text-base font-semibold text-[#cbd5e1] transition hover:bg-[#ff6500] hover:text-white"
            >
              in
            </a>
          </div>
        </div>

        {/* Menú */}
        <div>
          <h3 className="text-lg font-bold">Menú</h3>

          <ul className="mt-5 space-y-4">
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

        {/* Productos */}
        <div>
          <h3 className="text-lg font-bold">Productos</h3>

          <ul className="mt-5 space-y-4">
            <li>
              <a href="#" className={linkStyle}>
                Equipos
              </a>
            </li>

            <li>
              <a href="#" className={linkStyle}>
                Sistemas
              </a>
            </li>

            <li>
              <a href="#" className={linkStyle}>
                Pértigas
              </a>
            </li>

            <li>
              <a href="#" className={linkStyle}>
                Escaleras
              </a>
            </li>

            <li>
              <a href="#" className={linkStyle}>
                Antenallas
              </a>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-lg font-bold">Contacto</h3>

          <div className="mt-5 space-y-4">
            <p className="text-base font-normal text-[#cbd5e1]">
              601-792 1275
            </p>

            <p className="text-base font-normal text-[#cbd5e1]">
              marketing07@gmail.com
            </p>

            <p className="text-base font-normal leading-6 text-[#cbd5e1]">
              Calle 75 # 64-29
              <br />
              Bogotá, Colombia
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto max-w-7xl border-t border-[#2d3748] px-6 py-6 text-center">
        <p className="text-sm font-normal text-[#99a1af]">
          © 2026 Fray Pelaez / Diego Galvis. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}