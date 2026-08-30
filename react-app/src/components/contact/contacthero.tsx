export default function ContactHero() {
  return (
    <section className="overflow-hidden rounded-xl border border-[#d9d9d9] bg-white">
      <div className="grid md:grid-cols-2">
        {/* VIDEO */}
        <div className="h-[300px] overflow-hidden bg-white md:h-[400px]">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="/videos/contact-hero.mp4" type="video/mp4" />
          </video>
        </div>

        {/* CONTENT */}
        <div className="flex items-center px-6 py-10 md:px-10 lg:px-12">
          <div className="max-w-lg">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#64748b]">
              Atención personalizada
            </p>

            <h1 className="mt-2 text-3xl font-bold leading-10 text-[#101828] md:text-4xl">
              ¿Necesitas asesoría o una cotización?
            </h1>

            <div className="mt-4 h-1 w-12 bg-[#ff6500]" />

            <p className="mt-4 text-base font-normal leading-6 text-[#4b5563]">
              Nuestro equipo está listo para ayudarte a encontrar la solución
              adecuada para tu proyecto.
            </p>

            <div className="mt-6">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg bg-[#ff6500] px-6 py-3 text-base font-semibold leading-6 text-white transition hover:bg-[#25d366]"
              >
                Contáctanos por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}