interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Anterior
      </button>

      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;

        return (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            className={`h-10 min-w-10 rounded-lg border px-3 text-sm font-medium transition ${
              currentPage === page
                ? "border-gray-900 bg-gray-900 text-white"
                : "border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        );
      })}

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Siguiente
      </button>
    </div>
  );
}