import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface PaginationProps {
  page: number;
  totalPages: number;
  onPrevious(): void;
  onNext(): void;
}

const Pagination = ({
  page,
  totalPages,
  onPrevious,
  onNext,
}: PaginationProps) => {
  return (
    <section className="py-16">

      <div className="flex items-center justify-center gap-4">

        <button
          disabled={page === 1}
          onClick={onPrevious}
          className="rounded-xl border px-5 py-3 disabled:opacity-40"
        >
          <FaChevronLeft />
        </button>

        <span className="font-semibold">
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={onNext}
          className="rounded-xl border px-5 py-3 disabled:opacity-40"
        >
          <FaChevronRight />
        </button>

      </div>

    </section>
  );
};

export default Pagination;