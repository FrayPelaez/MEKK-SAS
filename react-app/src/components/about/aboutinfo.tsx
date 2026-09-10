import { useState } from "react";

type AboutTab = "who" | "mission" | "vision";

const tabs = [
  {
    id: "who" as AboutTab,
    label: "Quiénes somos",
  },
  {
    id: "mission" as AboutTab,
    label: "Misión",
  },
  {
    id: "vision" as AboutTab,
    label: "Visión",
  },
];

export default function AboutInfo() {
  const [activeTab, setActiveTab] = useState<AboutTab>("who");

  return (
    <section className="px-6 py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
        {/* LEFT */}
        <aside className="rounded-2xl bg-[#101828] p-7 sm:p-8 lg:p-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#ff6500]">
              MEKK S.A.S
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-10 text-white">
              Conozca nuestra empresa
            </h2>

            <p className="mt-4 text-base leading-7 text-[#e2e8f0]">
              Experiencia, conocimiento del sector y acompañamiento
              especializado para ofrecer soluciones adecuadas a cada necesidad.
            </p>
          </div>

          {/* SIDE ITEMS */}
          <div className="mt-10 space-y-3">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex w-full items-center gap-4 rounded-xl border px-5 py-4 text-left text-base font-semibold transition ${
                    isActive
                      ? "border-[#ff6500] bg-[#ff6500] text-[#101828]"
                      : "border-[#334155] bg-[#172033] text-white hover:border-[#ff6500]"
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                      isActive
                        ? "bg-[#101828] text-white"
                        : "bg-[#101828] text-[#ff6500]"
                    }`}
                  >
                    {tab.id === "who" && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="h-5 w-5"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="8" r="4" />
                        <path d="M4 21a8 8 0 0 1 16 0" />
                      </svg>
                    )}

                    {tab.id === "mission" && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="h-5 w-5"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="8" />
                        <circle cx="12" cy="12" r="3" />
                        <path d="M15 9l5-5" />
                      </svg>
                    )}

                    {tab.id === "vision" && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="h-5 w-5"
                        aria-hidden="true"
                      >
                        <path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6S2 12 2 12Z" />
                        <circle cx="12" cy="12" r="2.5" />
                      </svg>
                    )}
                  </span>

                  {tab.label}
                </button>
              );
            })}
          </div>
        </aside>

        {/* RIGHT */}
        <div className="flex flex-col justify-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c94f00]">
            Nuestra identidad
          </p>

          {/* QUIÉNES SOMOS */}
          {activeTab === "who" && (
            <div>
              <h2 className="mt-4 text-3xl font-bold leading-10 text-[#101828] md:text-4xl">
                ¿Quiénes{" "}
                <span className="text-[#c94f00]">
                  somos?
                </span>
              </h2>

              <div className="mt-6 rounded-2xl border border-[#d9d9d9] bg-[#f7f7f7] p-6 sm:p-8">
                <p className="text-base leading-7 text-[#334155] md:text-lg md:leading-8">
                  En{" "}
                  <span className="font-semibold text-[#101828]">
                    MEKK S.A.S
                  </span>{" "}
                  nos especializamos en asesorar, suministrar y comercializar
                  equipos, materiales, herramientas y elementos de seguridad
                  para el sector eléctrico.
                </p>

                <p className="mt-5 text-base leading-7 text-[#334155] md:text-lg md:leading-8">
                  Ofrecemos un amplio portafolio de productos que cumplen con
                  altos estándares de calidad, brindando soluciones confiables
                  y un acompañamiento especializado para atender las
                  necesidades de nuestros clientes.
                </p>
              </div>
            </div>
          )}

          {/* MISIÓN */}
          {activeTab === "mission" && (
            <div>
              <h2 className="mt-4 text-3xl font-bold leading-10 text-[#101828] md:text-4xl">
                Nuestra{" "}
                <span className="text-[#c94f00]">
                  Misión
                </span>
              </h2>

              <div className="mt-6 rounded-2xl border border-[#d9d9d9] bg-[#f7f7f7] p-6 sm:p-8">
                <p className="text-base leading-7 text-[#334155] md:text-lg md:leading-8">
                  En MEKK S.A.S. desarrollamos y comercializamos soluciones
                  especializadas para el sector eléctrico e industrial,
                  integrando equipos, herramientas, materiales y elementos de
                  protección que responden a las exigencias de nuestros clientes
                  y a las necesidades de los trabajos eléctricos.
                </p>

                <p className="mt-5 text-base leading-7 text-[#334155] md:text-lg md:leading-8">
                  Nuestro propósito es ser un aliado confiable para empresas y
                  profesionales, proporcionando productos de calidad, asesoría
                  técnica y un servicio cercano que contribuya a realizar
                  operaciones más seguras, eficientes y confiables.
                </p>
              </div>
            </div>
          )}

          {/* VISIÓN */}
          {activeTab === "vision" && (
            <div>
              <h2 className="mt-4 text-3xl font-bold leading-10 text-[#101828] md:text-4xl">
                Nuestra{" "}
                <span className="text-[#c94f00]">
                  Visión
                </span>
              </h2>

              <div className="mt-6 rounded-2xl border border-[#d9d9d9] bg-[#f7f7f7] p-6 sm:p-8">
                <p className="text-base leading-7 text-[#334155] md:text-lg md:leading-8">
                  Consolidarnos como una empresa líder y referente en Colombia
                  en el suministro de soluciones para el sector eléctrico e
                  industrial, fortaleciendo nuestro portafolio, nuestra
                  capacidad de servicio y nuestra presencia en nuevos mercados.
                </p>

                <p className="mt-5 text-base leading-7 text-[#334155] md:text-lg md:leading-8">
                  MEKK S.A.S. busca ser reconocida por la confianza que genera
                  en sus clientes, la calidad de sus soluciones, su conocimiento
                  del sector y su capacidad para responder de manera oportuna a
                  los retos de la industria eléctrica, proyectándose hacia un
                  crecimiento nacional e internacional sostenible.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}