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
      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-gray-500 md:max-w-md"
    />
  );
}