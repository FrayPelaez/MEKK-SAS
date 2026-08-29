interface ProductFiltersProps {
  categories: string[];
  selectedCategories: string[];
  onCategoryChange: (category: string) => void;
}

export default function ProductFilters({
  categories,
  selectedCategories,
  onCategoryChange,
}: ProductFiltersProps) {
  return (
    <aside className="rounded-xl border border-gray-200 bg-white p-5">
      <h2 className="text-lg font-semibold text-gray-900">
        Filtros
      </h2>

      <div className="mt-6">
        <h3 className="text-sm font-semibold text-gray-900">
          Categorías
        </h3>

        <div className="mt-4 space-y-3">
          {categories.map((category) => (
            <label
              key={category}
              className="flex cursor-pointer items-center gap-3 text-sm text-gray-600"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => onCategoryChange(category)}
                className="h-4 w-4"
              />

              {category}
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}