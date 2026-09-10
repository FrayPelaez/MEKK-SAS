const benefits = [
  {
    title: "Calidad Garantizada",
    description:
      "Productos certificados de marcas líderes con garantía de fábrica y control de calidad riguroso.",
    icon: (
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
        <path d="M11.46 20.846a12 12 0 0 1-7.96-14.846A12 12 0 0 0 12 3a12 12 0 0 0 8.5 3 12 12 0 0 1-.09 7.06" />
        <path d="m15 19 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Soporte Técnico Especializado",
    description:
      "Equipo de expertos disponibles para asesoramiento técnico y solución de problemas.",
    icon: (
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
        <path d="M4 14v-3a8 8 0 1 1 16 0v3" />
        <path d="M18 19c0 1.657-2.686 3-6 3" />
        <path d="M4 14a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3Z" />
        <path d="M15 14a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3Z" />
      </svg>
    ),
  },
  {
    title: "Entrega Rápida",
    description:
      "Logística eficiente con stock permanente y entregas en tiempo récord a toda la región.",
    icon: (
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
        <path d="M13 3v7h6l-8 11v-7H5l8-11Z" />
      </svg>
    ),
  },
  {
    title: "Experiencia en la Industria",
    description:
      "Más de 6 años proveyendo soluciones industriales a empresas de diversos sectores.",
    icon: (
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
        <path d="M9 3h6l3 7-6 2-6-2 3-7Z" />
        <path d="m12 12-3-9" />
        <path d="m15 11-3-8" />
        <path d="m12 19.5-3 1.5.5-3.5-2-2 3-.5 1.5-3 1.5 3 3 .5-2 2 .5 3.5-3-1.5Z" />
      </svg>
    ),
  },
];

export default function Benefits() {
  return (
    <section className="bg-white px-6 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-10 text-[#101828] md:text-4xl">
            ¿Por qué elegir{" "}
            <span className="text-[#ff6500]">
              MEKK?
            </span>
          </h2>

          <p className="mt-4 text-base font-normal leading-6 text-[#4b5563]">
            Somos su socio estratégico en suministros industriales con un
            compromiso total con la excelencia.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="flex h-full flex-col items-center rounded-xl border border-[#d9d9d9] bg-[#f7f7f7] p-6 text-center transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#fff1e8] text-[#ff6500]">
                {benefit.icon}
              </div>

              <h3 className="mt-5 text-lg font-semibold leading-6 text-[#101828]">
                {benefit.title}
              </h3>

              <p className="mt-3 text-sm font-normal leading-5 text-[#4b5563]">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}