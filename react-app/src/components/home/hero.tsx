export default function Hero() {
  return (
    <section
      className="relative flex min-h-[620px] items-center justify-center bg-cover bg-center px-6 py-20 md:min-h-[700px] lg:min-h-[calc(100vh-80px)]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('/inicio/Hero/IMAGEN HERO.png')",
      }}
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
          Energía Que Impulsa
          <span className="block text-[#ff6500]">
            Grandes Resultados
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-base font-normal leading-6 text-white md:text-lg md:leading-7">
          Equipos y suministros industriales de calidad garantizada con soporte
          técnico especializado para impulsar la productividad de tu empresa.
        </p>

        <div className="mt-8 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
          <a
            href="/productos"
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#ff6500] px-6 py-3 text-base font-semibold leading-6 text-white transition hover:bg-[#b44801]"
          >
            Ver productos
          </a>

          <a
            href="/contacto"
            className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#ff6500] bg-white px-6 py-3 text-base font-semibold leading-6 text-[#ff6500] transition hover:bg-[#ff6500] hover:text-white"
          >
            Solicitar cotización
          </a>
        </div>
      </div>
    </section>
  );
}