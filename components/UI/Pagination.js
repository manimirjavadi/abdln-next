import { digitsToPersian } from "../../utils/converter";

const Pagination = ({ className, totalPages, currentPage, onPageClick }) => {
  let paginateButtons = [];

  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      i === parseInt(currentPage) ||
      i === parseInt(currentPage) - 1 ||
      i === parseInt(currentPage) + 1
    ) {
      paginateButtons.push(
        <button
          key={i}
          value={i}
          onClick={onPageClick}
          className={`paginationButton ${
            currentPage === i.toString() ? "paginateActive" : ""
          }`}
        >
          {digitsToPersian(i.toString())}
        </button>
      );
    } else if (
      i === parseInt(currentPage) - 2 ||
      i === parseInt(currentPage) + 2
    ) {
      paginateButtons.push(
        <span className="mt-2" key="pagination">
          ...
        </span>
      );
    }
  }

  return (
    <div dir={"ltr"} className={`${className} flex justify-center gap-2`}>
      {paginateButtons}
    </div>
  );
};

export default Pagination;
