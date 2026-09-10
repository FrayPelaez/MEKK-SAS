export default function AboutHero() {
  return (
    <section
      className="relative flex min-h-[420px] items-center overflow-hidden bg-cover bg-center px-6 py-20 md:min-h-[500px] lg:min-h-[560px]"
      style={{
        backgroundImage: "url('/inicio/Hero/hero2.png')",
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#101828]/70" />

      {/* DECORATION */}
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#ff6500]/40" />
      <div className="absolute -bottom-32 right-20 h-96 w-96 rounded-full border border-white/10" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#ff6500]">
            Sobre MEKK S.A.S
          </p>

          <h1 className="mt-5 text-3xl font-bold leading-10 text-white md:text-4xl">
            Soluciones confiables para el
            <span className="block text-[#ff6500]">
              sector eléctrico e industrial
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#e2e8f0] md:text-lg md:leading-8">
            Acompañamos a empresas y profesionales mediante productos,
            herramientas, equipos y soluciones especializadas que contribuyen a
            realizar trabajos eléctricos de forma segura, eficiente y
            confiable.
          </p>
        </div>
      </div>
    </section>
  );
}