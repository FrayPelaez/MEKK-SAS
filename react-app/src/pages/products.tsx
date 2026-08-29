import { useEffect, useState } from "react";
import { products } from "../data/products";
import ProductRow from "../components/products/productrow";
import ProductSearch from "../components/products/productsearch";
import ProductFilters from "../components/products/productfilters";
import ProductSort from "../components/products/productsort";
import Pagination from "../components/products/pagination";

const PRODUCTS_PER_PAGE = 8;

export default function Products() {
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<"az" | "za">("az");
  const [currentPage, setCurrentPage] = useState(1);

  // Obtiene automáticamente las categorías existentes
  const categories = [
    ...new Set(products.map((product) => product.category)),
  ];

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
      product.brand.toLowerCase().includes(query) ||
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

  // Regresa a la página 1 cuando cambia búsqueda, filtro o sort
  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedCategories, sortOrder]);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* PAGE HEADER */}
        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
            MEKK S.A.S.
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
            Productos
          </h1>

          <p className="mt-3 max-w-2xl text-gray-600">
            Encuentra equipos, herramientas y soluciones para trabajos
            eléctricos profesionales.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">

          {/* FILTERS */}
          <ProductFilters
            categories={categories}
            selectedCategories={selectedCategories}
            onCategoryChange={handleCategoryChange}
          />

          {/* PRODUCTS AREA */}
          <section>

            {/* SEARCH + SORT */}
            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
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
            <p className="mb-4 text-sm text-gray-500">
              Mostrando {sortedProducts.length} productos
            </p>

            {/* PRODUCT GRID */}
            {paginatedProducts.length > 0 && (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
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
              <div className="rounded-lg border border-gray-200 bg-white p-8 text-center">
                <p className="text-gray-600">
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