interface ProductSortProps {
  value: "az" | "za";
  onChange: (value: "az" | "za") => void;
}

export default function ProductSort({
  value,
  onChange,
}: ProductSortProps) {
  return (
    <select
      value={value}
      onChange={(event) =>
        onChange(event.target.value as "az" | "za")
      }
      className="rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 outline-none"
    >
      <option value="az">Ordenar: A-Z</option>
      <option value="za">Ordenar: Z-A</option>
    </select>
  );
}