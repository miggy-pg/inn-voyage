import { useSearchParams } from "react-router-dom";

const PAGE_SIZE = 10;

export function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  // Calculate actual number of pages
  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;

  return (
    <div className="bg-red sticky bottom-0 right-0 w-full items-center border-t border-gray-200 p-4 dark:border-gray-700 dark:bg-gray-800 sm:flex sm:justify-between">
      <div className="mb-4 flex items-center sm:mb-0">
        <a
          href="#"
          className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white"
        ></a>
        <span className="mr-2 inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white"></span>
        <span className="text-md font-normal text-gray-500 dark:text-gray-400">
          Showing
          <span className="px-3 font-semibold text-gray-900 dark:text-white">
            {(currentPage - 1) * PAGE_SIZE + 1} -{" "}
            {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
          </span>
          of
          <span className="px-3 font-semibold text-gray-900 dark:text-white">
            {count}
          </span>
        </span>
      </div>
      <div className="flex items-center space-x-3">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 inline-flex flex-1 items-center justify-center rounded-lg bg-red-700 px-3 py-2 text-center text-2xl font-medium text-white focus:ring-4"
        >
          Previous
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === pageCount}
          className="hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 inline-flex flex-1 items-center justify-center rounded-lg bg-red-700 px-3 py-2 text-center text-2xl font-medium text-white focus:ring-4"
        >
          Next
        </button>
      </div>
    </div>
  );
}
