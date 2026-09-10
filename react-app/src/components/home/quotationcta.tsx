export default function QuotationCTA() {
  return (
    <section className="relative overflow-hidden border-y border-[#334155] bg-[#172033] px-6 py-20 shadow-[inset_0_-1px_0_rgba(255,255,255,0.04)] lg:py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-[#172033] via-[#1e293b] to-[#243047]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">
        
        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#ff6500] sm:text-base">
            Expertos en seguridad eléctrica
          </p>

          <h2 className="mt-5 max-w-4xl text-4xl font-bold leading-tight text-white md:text-5xl">
            ¿Desea recibir una cotización personalizada?
          </h2>

          <p className="mt-6 max-w-4xl text-base font-normal leading-7 text-[#cbd5e1] md:text-lg md:leading-8">
            Conozca disponibilidad, precios actualizados, opciones de envío y
            posibles descuentos por volumen. Le brindamos información clara y
            asesoría inmediata para que tome la mejor decisión de compra.
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col gap-8">
          <a
            href="https://api.whatsapp.com/send?phone=573174328129"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[64px] w-full items-center justify-center gap-3 rounded-xl bg-[#ff6500] px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-[#b44801]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6A8.38 8.38 0 0 1 12.5 3h.5a8.48 8.48 0 0 1 8 8z" />
            </svg>

            Solicitar cotización

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </a>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            
            {/* ITEM 1 */}
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#ff6500]/40 bg-[#ff6500]/10">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5 text-[#ff6500]"
                  aria-hidden="true"
                >
                  <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
                </svg>
              </div>

              <p className="text-sm font-medium leading-5 text-white">
                Asesoría
                <span className="block text-[#cbd5e1]">inmediata</span>
              </p>
            </div>

            {/* ITEM 2 */}
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#ff6500]/40 bg-[#ff6500]/10">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5 text-[#ff6500]"
                  aria-hidden="true"
                >
                  <path d="M3 7h11v10H3z" />
                  <path d="M14 10h4l3 3v4h-7z" />
                  <circle cx="7" cy="18" r="2" />
                  <circle cx="18" cy="18" r="2" />
                </svg>
              </div>

              <p className="text-sm font-medium leading-5 text-white">
                Opciones
                <span className="block text-[#cbd5e1]">de envío</span>
              </p>
            </div>

            {/* ITEM 3 */}
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#ff6500]/40 bg-[#ff6500]/10">
                <span className="text-xl font-bold text-[#ff6500]">%</span>
              </div>

              <p className="text-sm font-medium leading-5 text-white">
                Descuentos
                <span className="block text-[#cbd5e1]">por volumen</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}