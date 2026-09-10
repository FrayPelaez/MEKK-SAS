const companies = [
  {
    name: "Afinia",
    image: "/inicio/Empresas/afiniaColor.png",
  },
  {
    name: "AIR-E",
    image: "/inicio/Empresas/AIR-Ecolor.png",
  },
  {
    name: "Ecopetrol",
    image: "/inicio/Empresas/Ecopetrolcolor.png",
  },
  {
    name: "Electrocaquetá",
    image: "/inicio/Empresas/electroCaqutacolor.png",
  },
  {
    name: "ENEL",
    image: "/inicio/Empresas/ENELcolor.png",
  },
];

export default function TrustedCompanies() {
  return (
    <section className="bg-[#f7f7f7] px-6 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-10 text-[#101828] md:text-4xl">
            Empresas que{" "}
            <span className="text-[#ff6500]">
              Confían en Nosotros
            </span>
          </h2>

          <p className="mt-4 text-base font-normal leading-6 text-[#4b5563]">
            Trabajamos con las principales industrias del sector.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-5">
          {companies.map((company) => (
            <article
              key={company.name}
              className="flex min-h-[130px] items-center justify-center rounded-xl border border-[#d9d9d9] bg-white p-4 transition hover:-translate-y-1 hover:shadow-md sm:min-h-[150px] sm:p-5"
            >
              <img
                src={company.image}
                alt={company.name}
                className="max-h-20 w-full object-contain sm:max-h-24"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}