import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

function Pagination({ page, setPage }) {
  const previousHandler = () => {
    if (page <= 1) return;
    setPage((page) => page - 1);
  };
  const nextHandler = () => {
    if (page >= 6) return;
    setPage((page) => page + 1);
  };

  return (
    <div className="w-[350px] md:w-[600px] flex items-center justify-between mx-auto mb-20">
      <button
        onClick={previousHandler}
        className={`${page === 1 ? "bg-[var(--primary-disabled)]" : null} text-[var(--text-primary)] p-3 rounded-md  cursor-pointer`}
      >
        <SlArrowLeft />
      </button>

      <p className={`${page === 1 ? "btn" : "inherit"}`}>1</p>
      <p className={`${page === 2 ? "btn" : "inherit"}`}>2</p>

      {page >= 3 && page <= 5 && (
        <>
          <span>...</span>
          <p className="btn">{page}</p>
        </>
      )}
      <span>...</span>
      <p className={`${page === 6 ? "btn" : "inherit"}`}>6</p>

      <button
        onClick={nextHandler}
        className={`${page === 6 ? "bg-[var(--primary-disabled)]" : null} text-[var(--text-primary)] p-3 rounded-md hover:bg-[var(--primary-hover)] transition-colors duration-300 cursor-pointer`}
      >
        <SlArrowRight />
      </button>
    </div>
  );
}

export default Pagination;
