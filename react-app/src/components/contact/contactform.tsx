export default function ContactForm() {
  const inputStyles =
    "w-full rounded-lg border border-[#d9d9d9] bg-white px-4 py-3 text-base font-normal leading-6 text-[#4b5563] outline-none transition placeholder:text-[#64748b] focus:border-[#ff6500]";

  return (
    <section className="rounded-xl border border-[#d9d9d9] bg-white p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#64748b]">
        Escríbenos
      </p>

      <h2 className="mt-2 text-2xl font-bold leading-8 text-[#101828]">
        Cuéntanos qué necesitas
      </h2>

      <p className="mt-3 text-base font-normal leading-6 text-[#4b5563]">
        Completa el formulario y nuestro equipo comercial se pondrá en contacto
        contigo.
      </p>

      <form className="mt-8 space-y-5">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-semibold leading-5 text-[#101828]"
          >
            Nombre *
          </label>

          <input
            id="name"
            name="name"
            type="text"
            placeholder="Tu nombre"
            className={inputStyles}
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold leading-5 text-[#101828]"
            >
              Correo *
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="nombre@gmail.com"
              className={inputStyles}
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-semibold leading-5 text-[#101828]"
            >
              Teléfono
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Número de contacto"
              className={inputStyles}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="product"
            className="mb-2 block text-sm font-semibold leading-5 text-[#101828]"
          >
            Producto de interés
          </label>

          <input
            id="product"
            name="product"
            type="text"
            placeholder="Ej. Pértiga telescópica"
            className={inputStyles}
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-semibold leading-5 text-[#101828]"
          >
            Mensaje *
          </label>

          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Cuéntanos brevemente qué necesitas"
            className={`${inputStyles} resize-none`}
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-lg bg-[#ff6500] px-6 py-3 text-base font-semibold leading-6 text-white transition hover:bg-[#d95700]"
        >
          Enviar mensaje
        </button>
      </form>
    </section>
  );
}