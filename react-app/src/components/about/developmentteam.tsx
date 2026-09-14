export default function DevelopmentTeam() {
  const developers = [
    {
      name: "Diego Galvis",
      role: "Software Developer",
      image: "/imgs/developers/diego-profile.jpeg",
      description:
        "Desarrollo de la experiencia web, catálogo de productos, funcionalidades de contacto y adaptación responsive del sitio.",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      portfolio: "https://portfolio-next-tan-five.vercel.app",
      linkedin: "https://www.linkedin.com/in/diego-galvis-63014b2bb/",
    },
    {
      name: "Fray Pelaez",
      role: "Web Developer",
      image: "/imgs/developers/primo.jpg",
      description:
        "Participación en el diseño y desarrollo de la experiencia digital de MEKK S.A.S.",
      technologies: ["HTML", "CSS", "JavaScript"],
      portfolio: "#",
      linkedin: "#",
    },
  ];

  return (
    <section className="bg-[#f7f7f7] px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#ff6500]">
            Desarrollo digital
          </span>

          <h2 className="mt-3 text-3xl font-bold leading-10 text-[#101828] md:text-4xl">
            Desarrollo del{" "}
            <span className="text-[#ff6500]">
              sitio web
            </span>
          </h2>

          <p className="mt-4 text-base leading-6 text-[#4b5563] md:text-lg md:leading-7">
            Este sitio fue diseñado y desarrollado para modernizar la presencia
            digital de MEKK S.A.S. y facilitar el acceso a su portafolio,
            información y canales de atención.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
          {developers.map((developer) => (
            <article
              key={developer.name}
              className="overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#e2e8f0]">
                <img
                  src={developer.image}
                  alt={developer.name}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-bold text-[#101828]">
                  {developer.name}
                </h3>

                <p className="mt-1 text-base font-semibold text-[#ff6500]">
                  {developer.role}
                </p>

                <p className="mt-4 text-base leading-6 text-[#4b5563]">
                  {developer.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {developer.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-[#f7f7f7] px-3 py-1.5 text-sm font-medium text-[#334155]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={developer.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg bg-[#ff6500] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#b44801]"
                  >
                    Ver portafolio
                  </a>

                  <a
                    href={developer.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg border border-[#d9d9d9] bg-white px-5 py-2.5 text-sm font-semibold text-[#101828] transition hover:bg-[#f7f7f7]"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}