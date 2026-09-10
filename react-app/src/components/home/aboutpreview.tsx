export default function AboutPreview() {
  return (
    <section
      id="sobreNosotros"
      className="
        relative flex min-h-[760px] items-start overflow-hidden
        bg-white bg-[length:auto_58%] bg-right-bottom bg-no-repeat
        px-6 py-14
        sm:min-h-[780px] sm:bg-[length:auto_62%]
        md:min-h-[680px] md:items-center md:bg-cover md:bg-center md:py-16
        lg:min-h-[720px]
      "
      style={{
        backgroundImage:
          "url('/inicio/SobreNosotros/SectionNosotros.png')",
      }}
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-xl rounded-xl bg-white/95 p-6 sm:p-8 md:bg-white/90 md:backdrop-blur-sm lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
          <h2 className="text-3xl font-bold leading-10 text-[#101828] md:text-4xl">
            ¿Quiénes{" "}
            <span className="text-[#ff6500]">
              somos?
            </span>
          </h2>

          <p className="mt-5 text-base font-normal leading-6 text-[#4b5563] md:text-lg md:leading-7">
            En{" "}
            <span className="font-semibold text-[#ff6500]">
              MEKK S.A.S
            </span>{" "}
            nos especializamos en asesorar, suministrar y comercializar equipos,
            materiales, herramientas y elementos de seguridad para el sector
            eléctrico. Ofrecemos un amplio portafolio de productos que cumplen
            con altos estándares de calidad, brindando soluciones confiables y
            un acompañamiento especializado para atender las necesidades de
            nuestros clientes.
          </p>

          <div className="mt-7">
            <a
              href="/contacto"
              className="inline-flex items-center justify-center rounded-lg bg-[#ff6500] px-6 py-3 text-base font-semibold leading-6 text-white transition hover:bg-[#b44801]"
            >
              Sobre la empresa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}