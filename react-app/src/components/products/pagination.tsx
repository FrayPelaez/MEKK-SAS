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
        className="rounded-lg border border-[#d9d9d9] bg-white px-4 py-2 text-sm font-normal leading-5 text-[#4b5563] transition hover:bg-[#f7f7f7] disabled:cursor-not-allowed disabled:opacity-40"
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
            className={`h-10 min-w-10 rounded-lg border px-3 text-sm font-semibold leading-5 transition ${
              currentPage === page
                ? "border-[#101828] bg-[#101828] text-white"
                : "border-[#d9d9d9] bg-white text-[#4b5563] hover:bg-[#f7f7f7]"
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
        className="rounded-lg border border-[#d9d9d9] bg-white px-4 py-2 text-sm font-normal leading-5 text-[#4b5563] transition hover:bg-[#f7f7f7] disabled:cursor-not-allowed disabled:opacity-40"
      >
        Siguiente
      </button>
    </div>
  );
}