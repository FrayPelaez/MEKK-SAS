const commitments = [
  {
    title: "Seguridad",
    description:
      "Productos y soluciones orientadas a contribuir a trabajos eléctricos más seguros.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-9 w-9"
        aria-hidden="true"
      >
        <path d="M12 3 5 6v5c0 5 3 8.5 7 10 4-1.5 7-5 7-10V6l-7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Calidad",
    description:
      "Equipos, materiales y herramientas seleccionados bajo altos estándares de calidad.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-9 w-9"
        aria-hidden="true"
      >
        <circle cx="12" cy="8" r="5" />
        <path d="m8.5 12-1 9 4.5-2.5L16.5 21l-1-9" />
        <path d="m10 8 1.3 1.3L14 6.5" />
      </svg>
    ),
  },
  {
    title: "Asesoría especializada",
    description:
      "Acompañamiento para identificar las soluciones adecuadas según las necesidades de cada cliente.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-9 w-9"
        aria-hidden="true"
      >
        <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />
        <path d="M8 9h8" />
        <path d="M8 13h5" />
      </svg>
    ),
  },
  {
    title: "Confianza",
    description:
      "Servicio cercano, responsable y orientado a construir relaciones comerciales a largo plazo.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-9 w-9"
        aria-hidden="true"
      >
        <path d="M8 11 4 7l-2 2 6 6 4-4" />
        <path d="m12 11 3-3 7 7-5 5-5-5" />
        <path d="m14 6 2-2 6 6-2 2" />
      </svg>
    ),
  },
];

export default function Commitments() {
  return (
    <section className="bg-[#f7f7f7] px-6 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c94f00]">
            Lo que nos representa
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-10 text-[#101828] md:text-4xl">
            Nuestros{" "}
            <span className="text-[#c94f00]">
              Compromisos
            </span>
          </h2>

          <p className="mt-4 text-base leading-6 text-[#334155]">
            Principios que orientan la forma en que trabajamos y acompañamos a
            nuestros clientes.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map((commitment) => (
            <article
              key={commitment.title}
              className="rounded-2xl border border-[#d9d9d9] bg-white p-7 text-center transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-[#101828] text-[#ff6500]">
                {commitment.icon}
              </div>

              <h3 className="mt-6 text-lg font-bold leading-6 text-[#101828]">
                {commitment.title}
              </h3>

              <p className="mt-3 text-base leading-6 text-[#334155]">
                {commitment.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}