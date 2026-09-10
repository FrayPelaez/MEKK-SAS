import { Link } from "react-router-dom";

const categories = [
  {
    name: "Cubrimientos Línea Viva",
    filter: "Cubrimientos línea viva",
    image: "",
  },
  {
    name: "Elementos de Protección Personal",
    filter: "EPP",
    image: "",
  },
  {
    name: "Escaleras Dieléctricas",
    filter: "Escaleras",
    image: "",
  },
  {
    name: "Herramienta Especializada",
    filter: "Herramienta especializada",
    image: "",
  },
  {
    name: "Material Eléctrico",
    filter: "Material eléctrico",
    image: "",
  },
  {
    name: "Pértigas",
    filter: "Pértigas",
    image: "",
  },
  {
    name: "Puestas a Tierra",
    filter: "Puestas a tierra",
    image: "",
  },
];

export default function Categories() {
  return (
    <section className="bg-white px-6 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#64748b]">
            Nuestro catálogo
          </p>

          <h2 className="mt-2 text-3xl font-bold leading-10 text-[#101828] md:text-4xl">
            Explora por{" "}
            <span className="text-[#ff6500]">
              Categorías
            </span>
          </h2>

          <p className="mt-4 text-base font-normal leading-6 text-[#4b5563]">
            Encuentra rápidamente los equipos, herramientas y soluciones que
            necesitas para tu proyecto.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {categories.map((category) => (
            <article
              key={category.name}
              className="group relative min-h-[220px] overflow-hidden rounded-xl border border-[#d9d9d9] bg-[#1e293b] sm:min-h-[260px] lg:min-h-[300px]"
            >
              {category.image ? (
                <img
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-[#1e293b]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-12 w-12 text-[#64748b]"
                    aria-hidden="true"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <circle cx="8.5" cy="10" r="1.5" />
                    <path d="m21 15-5-5L5 19" />
                  </svg>
                </div>
              )}

              <div className="absolute inset-0 bg-black/50 transition group-hover:bg-black/60" />

              <div className="relative flex h-full min-h-[220px] flex-col justify-end p-4 sm:min-h-[260px] sm:p-6 lg:min-h-[300px]">
                <h3 className="max-w-xs text-lg font-semibold leading-6 text-white sm:text-2xl sm:leading-8">
                  {category.name}
                </h3>

                <div className="mt-4">
                  <Link
                    to={`/productos?categoria=${encodeURIComponent(
                      category.filter
                    )}`}
                    className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-semibold leading-5 text-[#101828] transition hover:bg-[#ff6500] hover:text-white sm:px-5 sm:py-3 sm:text-base"
                  >
                    Ver productos
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}