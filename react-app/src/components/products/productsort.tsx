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
      className="rounded-lg border border-[#d9d9d9] bg-white px-4 py-3 text-sm font-normal leading-5 text-[#4b5563] outline-none focus:border-[#ff6500]"
    >
      <option value="az">Ordenar: A-Z</option>
      <option value="za">Ordenar: Z-A</option>
    </select>
  );
}