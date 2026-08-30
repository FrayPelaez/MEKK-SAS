import type { Product } from "../../types/product";

interface ProductRowProps {
  product: Product;
}

export default function ProductRow({ product }: ProductRowProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-[#d9d9d9] bg-white transition hover:shadow-md">
      <div className="flex h-64 items-center justify-center p-5">
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

      <div className="flex flex-1 flex-col px-5 pb-6">
        <h3 className="text-center text-lg font-semibold leading-6 text-[#101828]">
          {product.name}
        </h3>

        <div className="mt-auto flex justify-center pt-6">
          <button
            type="button"
            className="rounded-lg bg-[#f7f7f7] px-5 py-2.5 text-sm font-semibold leading-5 text-[#101828] transition hover:bg-[#e5e7eb]"
          >
            Ver más
          </button>
        </div>
      </div>
    </article>
  );
}