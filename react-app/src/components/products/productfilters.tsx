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
    <aside className="rounded-xl border border-[#d9d9d9] bg-white p-5">
      <h2 className="text-lg font-semibold leading-6 text-[#101828]">
        Filtros
      </h2>

      <div className="mt-6">
        <h3 className="text-sm font-semibold leading-5 text-[#101828]">
          Categorías
        </h3>

        <div className="mt-4 space-y-3">
          {categories.map((category) => (
            <label
              key={category}
              className="flex cursor-pointer items-center gap-3 text-sm font-normal leading-5 text-[#4b5563]"
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