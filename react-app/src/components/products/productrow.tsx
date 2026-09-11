import { Link } from "react-router-dom";
import type { Product } from "../../types/product";

interface ProductRowProps {
  product: Product;
}

export default function ProductRow({ product }: ProductRowProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-[#d9d9d9] bg-white transition hover:shadow-md">
      <div className="flex h-40 items-center justify-center p-3 sm:h-48 sm:p-4 xl:h-64 xl:p-5">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-contain"
          />
        ) : (
          <span className="text-sm font-normal leading-5 text-[#99a1af]">
            Sin imagen
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col px-3 pb-4 sm:px-4 sm:pb-5 xl:px-5 xl:pb-6">
        <h3 className="text-center text-sm font-semibold leading-5 text-[#101828] sm:text-base sm:leading-6 xl:text-lg">
          {product.name}
        </h3>

        <div className="mt-auto flex justify-center pt-4 sm:pt-5 xl:pt-6">
          <Link
            to={`/productos/${product.id}`}
            className="rounded-lg bg-[#f7f7f7] px-3 py-2 text-sm font-semibold leading-5 text-[#101828] transition hover:bg-[#e5e7eb] sm:px-4 sm:py-2.5 xl:px-5"
          >
            Ver más
          </Link>
        </div>
      </div>
    </article>
  );
}