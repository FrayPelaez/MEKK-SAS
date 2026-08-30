export default function ContactInfo() {
  return (
    <section className="rounded-xl border border-[#d9d9d9] bg-white p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#64748b]">
        Atención comercial
      </p>

      <h2 className="mt-2 text-2xl font-bold leading-8 text-[#101828]">
        ¿Cómo podemos ayudarte?
      </h2>

      <p className="mt-3 text-base font-normal leading-6 text-[#4b5563]">
        Nuestro equipo puede orientarte según las necesidades de tu proyecto y
        ayudarte a encontrar la solución adecuada.
      </p>

      <div className="mt-8 space-y-6">
        <div className="border-l-2 border-[#ff6500] pl-4">
          <h3 className="text-base font-semibold leading-6 text-[#101828]">
            Cotizaciones
          </h3>

          <p className="mt-1 text-sm font-normal leading-5 text-[#4b5563]">
            Solicita información y cotizaciones de nuestros productos.
          </p>
        </div>

        <div className="border-l-2 border-[#ff6500] pl-4">
          <h3 className="text-base font-semibold leading-6 text-[#101828]">
            Asesoría de productos
          </h3>

          <p className="mt-1 text-sm font-normal leading-5 text-[#4b5563]">
            Recibe orientación para seleccionar equipos, herramientas y
            suministros.
          </p>
        </div>

        <div className="border-l-2 border-[#ff6500] pl-4">
          <h3 className="text-base font-semibold leading-6 text-[#101828]">
            Atención personalizada
          </h3>

          <p className="mt-1 text-sm font-normal leading-5 text-[#4b5563]">
            Contacta directamente con nuestros asesores comerciales.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <a
          href="#"
          className="inline-flex items-center justify-center rounded-lg bg-[#ff6500] px-5 py-3 text-base font-semibold leading-6 text-white transition hover:bg-[#1e293b]"
        >
          Hablar por WhatsApp
        </a>
      </div>
    </section>
  );
}