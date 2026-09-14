import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { products } from "../data/products";
import ProductRow from "../components/products/productrow";
import ProductSearch from "../components/products/productsearch";
import ProductFilters from "../components/products/productfilters";
import ProductSort from "../components/products/productsort";
import Pagination from "../components/products/pagination";

const PRODUCTS_PER_PAGE = 16;

export default function Products() {
  const [searchParams] = useSearchParams();

  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<"az" | "za">("az");
  const [currentPage, setCurrentPage] = useState(1);

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Obtiene automáticamente las categorías existentes
  const categories = [
    ...new Set(products.map((product) => product.category)),
  ];

  console.log(categories);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((currentCategories) => {
      if (currentCategories.includes(category)) {
        return currentCategories.filter(
          (currentCategory) => currentCategory !== category
        );
      }

      return [...currentCategories, category];
    });
  };

  // SEARCH + FILTERS
  const filteredProducts = products.filter((product) => {
    const query = search.toLowerCase().trim();

    const matchesSearch =
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.reference.toLowerCase().includes(query);

    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);

    return matchesSearch && matchesCategory;
  });

  // SORT
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "az") {
      return a.name.localeCompare(b.name, "es");
    }

    return b.name.localeCompare(a.name, "es");
  });

  // PAGINATION
  const totalPages = Math.ceil(
    sortedProducts.length / PRODUCTS_PER_PAGE
  );

  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;

  const paginatedProducts = sortedProducts.slice(
    startIndex,
    endIndex
  );

  // Lee la categoría desde la URL
  useEffect(() => {
    const categoryFromUrl = searchParams.get("categoria");

    if (categoryFromUrl) {
      setSelectedCategories([categoryFromUrl]);
    }

    window.scrollTo(0, 0);
  }, [searchParams]);

  // Regresa a la página 1 cuando cambia búsqueda, filtro o sort
  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedCategories, sortOrder]);

  return (
    <main className="min-h-screen bg-[#f7f7f7]">

      {/* MOBILE STICKY FILTER BAR */}
      <div className="sticky top-[80px] z-40 border-b border-[#d9d9d9] bg-white lg:hidden">
        <button
          type="button"
          onClick={() =>
            setMobileFiltersOpen((current) => !current)
          }
          className="flex w-full items-center justify-between bg-white px-6 py-4 text-left"
          aria-expanded={mobileFiltersOpen}
        >
          <div className="flex items-center gap-3">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5 text-[#ff6500]"
              aria-hidden="true"
            >
              <path d="M4 6h16" />
              <path d="M7 12h10" />
              <path d="M10 18h4" />
            </svg>

            <span className="text-base font-semibold text-[#101828]">
              Filtros y orden
            </span>

            {selectedCategories.length > 0 && (
              <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#ff6500] px-2 text-sm font-semibold text-white">
                {selectedCategories.length}
              </span>
            )}
          </div>

          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={`h-5 w-5 text-[#101828] transition-transform duration-200 ${
              mobileFiltersOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>

        {/* MOBILE FILTER PANEL */}
        <div
          className={`overflow-hidden bg-white transition-all duration-300 ${
            mobileFiltersOpen
              ? "max-h-[650px] border-t border-[#d9d9d9]"
              : "max-h-0"
          }`}
        >
          <div className="max-h-[calc(100vh-150px)] overflow-y-auto bg-white px-6 py-5">

            {/* MOBILE SEARCH */}
            <div>
              <ProductSearch
                value={search}
                onChange={setSearch}
              />
            </div>

            {/* MOBILE CATEGORIES */}
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-bold text-[#101828]">
                  Categorías
                </h2>

                {selectedCategories.length > 0 && (
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedCategories([])
                    }
                    className="text-sm font-semibold text-[#c94f00] transition hover:text-[#101828]"
                  >
                    Limpiar
                  </button>
                )}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {categories.map((category) => {
                  const isSelected =
                    selectedCategories.includes(category);

                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() =>
                        handleCategoryChange(category)
                      }
                      className={`rounded-full border px-4 py-2.5 text-sm font-medium transition ${
                        isSelected
                          ? "border-[#ff6500] bg-[#fff0e6] text-[#c94f00]"
                          : "border-[#d9d9d9] bg-white text-[#334155] hover:border-[#ff6500]"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {isSelected && (
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            className="h-4 w-4"
                            aria-hidden="true"
                          >
                            <path d="m5 12 4 4L19 6" />
                          </svg>
                        )}

                        {category}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* MOBILE SORT */}
            <div className="mt-6 border-t border-[#d9d9d9] pt-5">
              <p className="mb-3 text-base font-bold text-[#101828]">
                Ordenar productos
              </p>

              <ProductSort
                value={sortOrder}
                onChange={setSortOrder}
              />
            </div>

            {/* MOBILE ACTIVE FILTERS */}
            {(selectedCategories.length > 0 ||
              search.trim() !== "") && (
              <div className="mt-5 flex items-center justify-between gap-4 rounded-xl bg-[#f7f7f7] px-4 py-3">
                <p className="text-sm text-[#64748b]">
                  {selectedCategories.length > 0
                    ? `${selectedCategories.length} ${
                        selectedCategories.length === 1
                          ? "categoría seleccionada"
                          : "categorías seleccionadas"
                      }`
                    : "Búsqueda activa"}
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategories([]);
                    setSearch("");
                  }}
                  className="shrink-0 text-sm font-semibold text-[#c94f00]"
                >
                  Limpiar todo
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* PAGE HEADER */}
        <div className="mb-8">
          <h1 className="mt-2 text-4xl font-bold leading-10 tracking-tight text-[#101828]">
            Productos
          </h1>

          <p className="mt-3 max-w-2xl text-base font-normal leading-6 text-[#4b5563]">
            Encuentra equipos, herramientas y soluciones para trabajos
            eléctricos profesionales.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">

          {/* DESKTOP FILTERS */}
          <div className="hidden lg:block">
            <ProductFilters
              categories={categories}
              selectedCategories={selectedCategories}
              onCategoryChange={handleCategoryChange}
            />
          </div>

          {/* PRODUCTS AREA */}
          <section>

            {/* DESKTOP SEARCH + SORT */}
            <div className="mb-6 hidden flex-col gap-4 md:flex-row md:items-center md:justify-between lg:flex">
              <ProductSearch
                value={search}
                onChange={setSearch}
              />

              <ProductSort
                value={sortOrder}
                onChange={setSortOrder}
              />
            </div>

            {/* RESULTS */}
            <p className="mb-4 text-sm font-normal leading-5 text-[#99a1af]">
              Mostrando {sortedProducts.length} productos
            </p>

            {/* PRODUCT GRID */}
            {paginatedProducts.length > 0 && (
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-4">
                {paginatedProducts.map((product) => (
                  <ProductRow
                    key={product.id}
                    product={product}
                  />
                ))}
              </div>
            )}

            {/* NO RESULTS */}
            {sortedProducts.length === 0 && (
              <div className="rounded-lg border border-[#d9d9d9] bg-white p-8 text-center">
                <p className="text-base font-normal leading-6 text-[#4b5563]">
                  No se encontraron productos con esos filtros.
                </p>
              </div>
            )}

            {/* PAGINATION */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </section>
        </div>
      </div>
    </main>
  );
}