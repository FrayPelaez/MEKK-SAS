export default function ContactCards() {
  return (
    <section className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {/* DIRECCIÓN */}
      <article className="flex min-h-[240px] flex-col items-center justify-center rounded-xl border border-[#d9d9d9] bg-white p-6 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ff6500] text-white">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-8 w-8"
          >
            <path d="M12 21s6-5.3 6-12a6 6 0 1 0-12 0c0 6.7 6 12 6 12Z" />
            <circle cx="12" cy="9" r="2" />
          </svg>
        </div>

        <h2 className="mt-5 text-2xl font-semibold leading-8 text-[#101828]">
          Dirección
        </h2>

        <p className="mt-3 text-base font-normal leading-6 text-[#4b5563]">
          Calle 75 # 64-29
          <br />
          Bogotá, Colombia
        </p>
      </article>

      {/* CORREO */}
      <article className="flex min-h-[240px] flex-col items-center justify-center rounded-xl border border-[#d9d9d9] bg-white p-6 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ff6500] text-white">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-8 w-8"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>
        </div>

        <h2 className="mt-5 text-2xl font-semibold leading-8 text-[#101828]">
          Correo
        </h2>

        <a
          href="mailto:compras.mekksas@gmail.com"
          className="mt-3 break-all text-base font-normal leading-6 text-[#4b5563] transition hover:text-[#ff6500]"
        >
          compras.mekksas@gmail.com
        </a>
      </article>

      {/* TELÉFONO */}
      <article className="flex min-h-[240px] flex-col items-center justify-center rounded-xl border border-[#d9d9d9] bg-white p-6 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ff6500] text-white">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-8 w-8"
          >
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2.1Z" />
          </svg>
        </div>

        <h2 className="mt-5 text-2xl font-semibold leading-8 text-[#101828]">
          Teléfono
        </h2>

        <a
          href="tel:6017921275"
          className="mt-3 text-base font-normal leading-6 text-[#4b5563] transition hover:text-[#ff6500]"
        >
          601-792 1275
        </a>
      </article>

      {/* WHATSAPP */}
      <article className="flex min-h-[240px] flex-col items-center justify-center rounded-xl border border-[#d9d9d9] bg-white p-6 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ff6500] text-white">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-8 w-8"
          >
            <path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 9.4 9.4 0 0 1-3.8-.9L3 21l1.7-5a8.5 8.5 0 1 1 16.3-4.5Z" />
            <path d="M8.5 8.5c.5 3 2 4.5 5 5" />
          </svg>
        </div>

        <h2 className="mt-5 text-2xl font-semibold leading-8 text-[#101828]">
          WhatsApp
        </h2>

        <a
          href="https://wa.me/573142898780"
          target="_blank"
          rel="noreferrer"
          className="mt-3 text-base font-normal leading-6 text-[#4b5563] transition hover:text-[#ff6500]"
        >
          314 289 8780
        </a>
      </article>
    </section>
  );
}