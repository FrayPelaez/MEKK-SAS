import { Link } from "react-router-dom";

import { products } from "../../data/products";
import ProductRow from "../products/productrow";

const featuredImagePaths = [
  "/imgs/productos/puestas a tierra/equipo baja tension.png",
  "/imgs/productos/puestas a tierra/equipo media tension.png",
  "/imgs/productos/puestas a tierra/equipo alta tension.png",
  "/imgs/productos/puestas a tierra/sistema baja tension.png",
  "/imgs/productos/puestas a tierra/sistema media tension.png",
  "/imgs/productos/material electrico/pertigaHasting.png",
  "/imgs/productos/herramienta especializada/antenallas.png",
  "/imgs/productos/herramienta especializada/ampact.png",
];

export default function FeaturedProducts() {
  const featuredProducts = featuredImagePaths
    .map((imagePath) =>
      products.find((product) => product.image === imagePath)
    )
    .filter((product) => product !== undefined);

  return (
    <section className="bg-[#f7f7f7] px-6 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-10 text-[#101828] md:text-4xl">
            Nuestros Productos{" "}
            <span className="text-[#ff6500]">
              Más Vendidos
            </span>
          </h2>

          <p className="mt-4 text-base font-normal leading-6 text-[#4b5563]">
            Catálogo completo de suministros industriales con garantía de
            calidad y disponibilidad inmediata.
          </p>
        </div>

        {/* PRODUCTOS */}
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductRow
              key={product.id}
              product={product}
            />
          ))}
        </div>

        {/* VER MÁS */}
        <div className="mt-10 flex justify-center">
          <Link
            to="/productos"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#ff6500] px-6 py-3 text-base font-semibold leading-6 text-white transition hover:bg-[#b44801]"
          >
            Ver más productos

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m15 8 4 4-4 4" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}