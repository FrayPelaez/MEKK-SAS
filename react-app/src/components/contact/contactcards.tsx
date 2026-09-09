export default function ContactCards() {
  return (
    <section className="mt-8 grid grid-cols-2 gap-3 sm:gap-6 xl:grid-cols-4">
      {/* DIRECCIÓN */}
      <article className="flex min-h-[180px] flex-col items-center justify-center rounded-xl border border-[#d9d9d9] bg-white p-3 text-center xl:min-h-[240px] xl:p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ff6500] text-white xl:h-16 xl:w-16">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-6 w-6 xl:h-8 xl:w-8"
          >
            <path d="M12 21s6-5.3 6-12a6 6 0 1 0-12 0c0 6.7 6 12 6 12Z" />
            <circle cx="12" cy="9" r="2" />
          </svg>
        </div>

        <h2 className="mt-4 text-lg font-semibold leading-6 text-[#101828] xl:mt-5 xl:text-2xl xl:leading-8">
          Dirección
        </h2>

        <p className="mt-2 text-sm font-normal leading-5 text-[#4b5563] xl:mt-3 xl:text-base xl:leading-6">
          Calle 75 # 64-29
          <br />
          Bogotá, Colombia
        </p>
      </article>

      {/* CORREO */}
      <article className="flex min-h-[180px] flex-col items-center justify-center rounded-xl border border-[#d9d9d9] bg-white p-3 text-center xl:min-h-[240px] xl:p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ff6500] text-white xl:h-16 xl:w-16">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-6 w-6 xl:h-8 xl:w-8"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>
        </div>

        <h2 className="mt-4 text-lg font-semibold leading-6 text-[#101828] xl:mt-5 xl:text-2xl xl:leading-8">
          Correo
        </h2>

        <a
          href="mailto:compras.mekksas@gmail.com"
          className="mt-2 break-all text-sm font-normal leading-5 text-[#4b5563] transition hover:text-[#ff6500] xl:mt-3 xl:text-base xl:leading-6"
        >
          compras.mekksas@gmail.com
        </a>
      </article>

      {/* TELÉFONO */}
      <article className="flex min-h-[180px] flex-col items-center justify-center rounded-xl border border-[#d9d9d9] bg-white p-3 text-center xl:min-h-[240px] xl:p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ff6500] text-white xl:h-16 xl:w-16">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-6 w-6 xl:h-8 xl:w-8"
          >
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2.1Z" />
          </svg>
        </div>

        <h2 className="mt-4 text-lg font-semibold leading-6 text-[#101828] xl:mt-5 xl:text-2xl xl:leading-8">
          Teléfono
        </h2>

        <a
          href="tel:6017921275"
          className="mt-2 text-sm font-normal leading-5 text-[#4b5563] transition hover:text-[#ff6500] xl:mt-3 xl:text-base xl:leading-6"
        >
          601-792 1275
        </a>
      </article>

      {/* WHATSAPP */}
      <article className="flex min-h-[180px] flex-col items-center justify-center rounded-xl border border-[#d9d9d9] bg-white p-3 text-center xl:min-h-[240px] xl:p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ff6500] text-white xl:h-16 xl:w-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 xl:h-8 xl:w-8"
            aria-hidden="true"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
            <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
          </svg>
        </div>

        <h2 className="mt-4 text-lg font-semibold leading-6 text-[#101828] xl:mt-5 xl:text-2xl xl:leading-8">
          WhatsApp
        </h2>

        <a
          href="https://wa.me/573142898780"
          target="_blank"
          rel="noreferrer"
          className="mt-2 text-sm font-normal leading-5 text-[#4b5563] transition hover:text-[#ff6500] xl:mt-3 xl:text-base xl:leading-6"
        >
          314 289 8780
        </a>
      </article>
    </section>
  );
}