import { useState } from "react";
import type { MouseEvent } from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";

export default function ProductDetail() {
  const { id } = useParams();

  const [isZooming, setIsZooming] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({
    x: 50,
    y: 50,
  });

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const handleMouseMove = (
    event: MouseEvent<HTMLDivElement>
  ) => {
    const bounds = event.currentTarget.getBoundingClientRect();

    const x =
      ((event.clientX - bounds.left) / bounds.width) * 100;

    const y =
      ((event.clientY - bounds.top) / bounds.height) * 100;

    setZoomPosition({
      x,
      y,
    });
  };

  if (!product) {
    return (
      <main className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-3xl font-bold text-[#101828]">
            Producto no encontrado
          </h1>

          <Link
            to="/productos"
            className="mt-6 inline-flex rounded-lg bg-[#101828] px-5 py-3 text-base font-semibold text-white transition hover:bg-[#1e293b]"
          >
            Volver a productos
          </Link>
        </div>
      </main>
    );
  }

  const features =
    "features" in product && Array.isArray(product.features)
      ? product.features
      : [];

  const technicalSheet =
    "technicalSheet" in product &&
    typeof product.technicalSheet === "string"
      ? product.technicalSheet
      : "";

  const relatedProducts = products
    .filter(
      (item) =>
        item.category === product.category &&
        item.id !== product.id
    )
    .slice(0, 4);

  return (
    <main className="bg-[#fffdf9] px-6 py-10 lg:py-14">
      <div className="mx-auto max-w-7xl">
        {/* BREADCRUMB */}
        <div className="flex flex-wrap items-center gap-2 text-sm text-[#64748b]">
          <Link
            to="/"
            className="transition hover:text-[#c94f00]"
          >
            Inicio
          </Link>

          <span>/</span>

          <Link
            to="/productos"
            className="transition hover:text-[#c94f00]"
          >
            Productos
          </Link>

          <span>/</span>

          <span>{product.category}</span>

          <span>/</span>

          <span className="font-semibold text-[#c94f00]">
            {product.name}
          </span>
        </div>

        {/* PRODUCTO */}
        <div className="relative mt-8 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          {/* COLUMNA IZQUIERDA */}
          <div>
            {/* IMAGEN */}
            <div
              className="relative flex min-h-[420px] cursor-crosshair items-center justify-center overflow-hidden rounded-2xl border border-[#d9d9d9] bg-white p-8 sm:min-h-[520px] lg:min-h-[620px]"
              onMouseEnter={() => setIsZooming(true)}
              onMouseLeave={() => setIsZooming(false)}
              onMouseMove={handleMouseMove}
            >
              {product.image ? (
                <>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-[560px] w-full object-contain"
                  />

                  {/* ICONO ZOOM */}
                  <div className="pointer-events-none absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#f7f7f7] text-[#101828]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-5 w-5"
                    >
                      <circle cx="11" cy="11" r="7" />
                      <path d="m20 20-4-4" />
                      <path d="M11 8v6" />
                      <path d="M8 11h6" />
                    </svg>
                  </div>

                  {isZooming && (
                    <div
                      className="pointer-events-none absolute hidden h-28 w-28 border border-[#64748b] bg-white/30 lg:block"
                      style={{
                        left: `${zoomPosition.x}%`,
                        top: `${zoomPosition.y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  )}
                </>
              ) : (
                <span className="text-base text-[#64748b]">
                  Sin imagen
                </span>
              )}
            </div>

            {/* MENSAJE ZOOM */}
            {product.image && (
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-[#64748b]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                >
                  <rect
                    x="7"
                    y="3"
                    width="10"
                    height="18"
                    rx="5"
                  />
                  <path d="M12 3v5" />
                </svg>

                <span>
                  Pasa el cursor sobre la imagen para ampliar
                </span>
              </div>
            )}
          </div>

          {/* ZOOM TIPO AMAZON */}
          {product.image && isZooming && (
            <div
              className="pointer-events-none absolute right-0 top-0 z-30 hidden h-full min-h-[620px] w-[calc(52%-1.75rem)] overflow-hidden rounded-2xl border border-[#d9d9d9] bg-white shadow-xl lg:block"
              style={{
                backgroundImage: `url("${product.image}")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "220%",
                backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
              }}
            />
          )}

          {/* INFORMACIÓN */}
          <div className="flex flex-col">
            {/* CATEGORÍA */}
            <div>
              <span className="inline-flex rounded-full bg-[#fff0e6] px-4 py-2 text-sm font-bold uppercase tracking-wide text-[#c94f00]">
                {product.category}
              </span>
            </div>

            {/* NOMBRE */}
            <h1 className="mt-4 text-3xl font-bold leading-10 text-[#101828] md:text-4xl">
              {product.name}
            </h1>

            {/* DESCRIPCIÓN */}
            <p className="mt-6 text-base leading-7 text-[#334155]">
              {product.description ||
                "Descripción no disponible."}
            </p>

            {/* CARACTERÍSTICAS */}
            {features.length > 0 && (
              <div className="mt-8 border-t border-[#d9d9d9] pt-7">
                <h2 className="text-2xl font-bold text-[#101828]">
                  Características
                </h2>

                <ul className="mt-5 space-y-3">
                  {features.map((feature, index) => (
                    <li
                      key={`${feature}-${index}`}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ff6500] text-white">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          className="h-3 w-3"
                        >
                          <path d="m6 12 4 4 8-8" />
                        </svg>
                      </span>

                      <span className="text-base leading-6 text-[#334155]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* REFERENCIA Y MARCA */}
            <div className="mt-8 grid grid-cols-1 overflow-hidden rounded-xl bg-[#f7f7f7] sm:grid-cols-2">
              <div className="p-5 sm:border-r sm:border-[#d9d9d9]">
                <p className="text-sm font-bold text-[#101828]">
                  Referencia
                </p>

                <p className="mt-2 text-base text-[#64748b]">
                  {product.reference || "No especificada"}
                </p>
              </div>

              <div className="border-t border-[#d9d9d9] p-5 sm:border-t-0">
                <p className="text-sm font-bold text-[#101828]">
                  Marca
                </p>

                <p className="mt-2 text-base text-[#64748b]">
                  {product.brand || "No especificada"}
                </p>
              </div>
            </div>

            {/* BOTONES */}
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <a
                href={`https://wa.me/573142898780?text=${encodeURIComponent(
                  `Hola, estoy interesado en cotizar el producto ${product.name}${
                    product.reference
                      ? `, referencia ${product.reference}`
                      : ""
                  }.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#c94f00] px-5 py-3 text-base font-semibold text-white transition hover:bg-[#b44801]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7A8.38 8.38 0 0 1 4 11.5a8.5 8.5 0 0 1 4.7-7.6A8.38 8.38 0 0 1 12.5 3h.5a8.48 8.48 0 0 1 8 8Z" />
                </svg>

                Cotizar por WhatsApp

                <span>→</span>
              </a>

              {technicalSheet ? (
                <a
                  href={technicalSheet}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#c94f00] bg-white px-5 py-3 text-base font-semibold text-[#c94f00] transition hover:bg-[#fff0e6]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-5 w-5"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                    <path d="M14 2v6h6" />
                    <path d="M8 13h8" />
                    <path d="M8 17h8" />
                  </svg>

                  Ficha técnica
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  className="inline-flex min-h-12 cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-[#d9d9d9] bg-[#f7f7f7] px-5 py-3 text-base font-semibold text-[#64748b]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-5 w-5"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                    <path d="M14 2v6h6" />
                    <path d="M8 13h8" />
                    <path d="M8 17h8" />
                  </svg>

                  Ficha técnica
                </button>
              )}
            </div>
          </div>
        </div>

        {/* BLOQUE DE AYUDA */}
        <div className="mt-14 flex flex-col gap-5 rounded-2xl border border-[#d9d9d9] bg-white p-6 sm:flex-row sm:items-center sm:justify-between lg:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f7f7f7] text-[#101828]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-7 w-7"
              >
                <path d="M4 13a8 8 0 0 1 16 0" />
                <path d="M4 13v5a2 2 0 0 0 2 2h2v-7H4Z" />
                <path d="M20 13v5a2 2 0 0 1-2 2h-2v-7h4Z" />
                <path d="M9 20h6" />
              </svg>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#101828]">
                ¿No encuentras lo que buscas?
              </h2>

              <p className="mt-1 text-base leading-6 text-[#64748b]">
                Contáctanos y pregunta por otras marcas y
                referencias disponibles.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/573142898780"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl border border-[#c94f00] px-5 py-3 text-base font-semibold text-[#c94f00] transition hover:bg-[#fff0e6]"
          >
            Contactar ahora
            <span>→</span>
          </a>
        </div>

        {/* PRODUCTOS RELACIONADOS */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 border-t border-[#d9d9d9] pt-12">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c94f00]">
                  También te puede interesar
                </p>

                <h2 className="mt-2 text-3xl font-bold text-[#101828]">
                  Productos relacionados
                </h2>
              </div>

              <Link
                to={`/productos?categoria=${encodeURIComponent(
                  product.category
                )}`}
                className="hidden text-sm font-semibold text-[#c94f00] transition hover:text-[#101828] sm:inline-flex"
              >
                Ver categoría →
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
              {relatedProducts.map((relatedProduct) => (
                <article
                  key={relatedProduct.id}
                  className="flex h-full flex-col overflow-hidden rounded-xl border border-[#d9d9d9] bg-white transition hover:shadow-md"
                >
                  <Link
                    to={`/productos/${relatedProduct.id}`}
                    className="flex h-48 items-center justify-center p-4 xl:h-56"
                  >
                    {relatedProduct.image ? (
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="h-full w-full object-contain"
                      />
                    ) : (
                      <span className="text-sm text-[#64748b]">
                        Sin imagen
                      </span>
                    )}
                  </Link>

                  <div className="flex flex-1 flex-col px-4 pb-5">
                    <p className="text-center text-sm font-semibold text-[#c94f00]">
                      {relatedProduct.category}
                    </p>

                    <h3 className="mt-2 text-center text-base font-semibold leading-6 text-[#101828]">
                      {relatedProduct.name}
                    </h3>

                    <div className="mt-auto flex justify-center pt-5">
                      <Link
                        to={`/productos/${relatedProduct.id}`}
                        className="rounded-lg bg-[#f7f7f7] px-4 py-2.5 text-sm font-semibold text-[#101828] transition hover:bg-[#e5e7eb]"
                      >
                        Ver más
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-6 sm:hidden">
              <Link
                to={`/productos?categoria=${encodeURIComponent(
                  product.category
                )}`}
                className="inline-flex text-sm font-semibold text-[#c94f00] transition hover:text-[#101828]"
              >
                Ver categoría →
              </Link>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}