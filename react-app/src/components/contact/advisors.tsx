import AdvisorCard from "./advisorcard";

const advisors = [
  {
    name: "Camila Gutierrez",
    emails: ["camilagutierrez.mekksas@gmail.com"],
    phones: ["3213655880"],
  },
  {
    name: "Daniela Sanchez",
    emails: ["danielasanchez.mekksas@gmail.com"],
    phones: ["3108031058"],
  },
  {
    name: "Luz Marina Palomino",
    emails: [
      "lpalominomekk@gmail.com",
      "ventas1mekksas@gmail.com",
    ],
    phones: [
      "3206049870",
      "3105767217",
      "3127733713",
    ],
  },
  {
    name: "Ricardo Suarez",
    emails: ["rsuarezmekk@gmail.com"],
    phones: ["3107508777"],
  },
  {
    name: "Hernando Veloza",
    emails: ["mekksas1@gmail.com"],
    phones: ["3024562908"],
  },
  {
    name: "Leidy Sierra",
    emails: ["leidysierra.mekksas@gmail.com"],
    phones: ["3134621968"],
  },
];

export default function Advisors() {
  return (
    <section className="mt-14">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#64748b]">
          Equipo comercial
        </p>

        <h2 className="mt-2 text-3xl font-bold leading-10 text-[#101828]">
          Asesores comerciales
        </h2>

        <p className="mt-3 max-w-2xl text-base font-normal leading-6 text-[#4b5563]">
          Contacta directamente a uno de nuestros asesores para recibir
          atención personalizada.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {advisors.map((advisor) => (
          <AdvisorCard
            key={advisor.name}
            name={advisor.name}
            emails={advisor.emails}
            phones={advisor.phones}
          />
        ))}
      </div>
    </section>
  );
}