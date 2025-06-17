import classNames from "classnames";
import ReactPaginate from "react-paginate";
import type { IPaginationProps } from "./Pagination.types";

interface PageChangeEvent {
  selected: number;
}

const Pagination = ({
  setPage,
  pageCount,
  pagesToShowStart = 3,
  pagesToShowEnd = 3,
  styleClasses,
  initialPage = 0,
}: IPaginationProps) => {
  return (
    <ReactPaginate
      previousLabel={<i className="fa-solid fa-chevron-left" />}
      nextLabel={<i className="fa-solid fa-chevron-right" />}
      breakLabel="..."
      breakLinkClassName="px-4 py-3 border border-gray-300 text-sm text-gray-600 hover:bg-blue-500 hover:text-white cursor-pointer rounded-md"
      pageCount={pageCount}
      marginPagesDisplayed={pagesToShowStart}
      pageRangeDisplayed={pagesToShowEnd}
      onPageChange={(item: PageChangeEvent) => {
        setPage(item.selected + 1);
      }}
      initialPage={initialPage}
      containerClassName={classNames(
        "inline-flex items-center space-x-1", // Reduced spacing for a cleaner look
        styleClasses
      )}
      activeLinkClassName="bg-blue-500 text-white !border-blue-500 rounded-md font-bold"
      pageLinkClassName="px-4 py-3 border border-gray-300 text-sm text-gray-600 hover:bg-blue-500 hover:text-white cursor-pointer rounded-md hover:border-blue-500"
      previousLinkClassName="block px-[12px] py-[10px] text-gray-600 border border-gray-300 rounded-l-md text-sm hover:bg-blue-500 hover:text-white cursor-pointer"
      nextLinkClassName="block px-[12px] py-[10px] text-gray-600 border border-gray-300 rounded-r-md text-sm hover:bg-blue-500 hover:text-white cursor-pointer"
    />
  );
};

export default Pagination;
