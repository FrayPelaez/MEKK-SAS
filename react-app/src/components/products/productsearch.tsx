interface ProductSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function ProductSearch({
  value,
  onChange,
}: ProductSearchProps) {
  return (
    <input
      type="search"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder="Buscar productos..."
      className="w-full rounded-lg border border-[#d9d9d9] bg-white px-4 py-3 text-sm font-normal leading-5 text-[#4b5563] outline-none transition placeholder:text-[#64748b] focus:border-[#ff6500] md:max-w-md"
    />
  );
}