export default function LocationMap() {
  return (
    <section className="mt-14">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#64748b]">
          Visítanos
        </p>

        <h2 className="mt-2 text-3xl font-bold leading-10 text-[#101828]">
          Nuestra sede en Bogotá
        </h2>

        <p className="mt-3 max-w-2xl text-base font-normal leading-6 text-[#4b5563]">
          Encuéntranos en Calle 75 # 64-29, Bogotá, Colombia.
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-[#d9d9d9] bg-white">
        <div className="min-h-[420px]">
          <iframe
            title="Ubicación MEKK S.A.S."
            src="https://www.google.com/maps?q=Calle%2075%20%2364-29%20Bogota%20Colombia&output=embed"
            className="h-full min-h-[420px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="flex flex-col gap-4 border-t border-[#d9d9d9] p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold leading-6 text-[#101828]">
              MEKK S.A.S.
            </h3>

            <p className="mt-1 text-base font-normal leading-6 text-[#4b5563]">
              Calle 75 # 64-29 · Bogotá, Colombia
            </p>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Calle+75+64-29+Bogota+Colombia"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-[#ff6500] px-5 py-3 text-base font-semibold leading-6 text-[#ff6500] transition hover:bg-[#ff6500] hover:text-white"
          >
            Abrir en Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}