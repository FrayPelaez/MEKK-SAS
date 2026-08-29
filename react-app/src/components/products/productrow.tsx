import type { Product } from "../../types/product";

interface ProductRowProps {
  product: Product;
}

export default function ProductRow({ product }: ProductRowProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:shadow-md">
      <div className="flex h-64 items-center justify-center p-5">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-contain"
          />
        ) : (
          <span className="text-sm text-gray-400">Sin imagen</span>
        )}
      </div>

      <div className="flex flex-1 flex-col px-5 pb-6">
        <h3 className="text-center text-lg font-semibold leading-snug text-gray-900">
          {product.name}
        </h3>

        <div className="mt-auto flex justify-center pt-6">
          <button
            type="button"
            className="rounded-lg bg-gray-100 px-5 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-200"
          >
            Ver más
          </button>
        </div>
      </div>
    </article>
  );
}