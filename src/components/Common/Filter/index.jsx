import { useSearchParams } from "react-router-dom";

export default function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleFilterClick(filterName) {
    searchParams.set("discount", filterName);
    setSearchParams(searchParams);
  }

  return (
    <ul className="flex flex-wrap border-b border-gray-200 text-center text-2xl font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400">
      <li className="me-2" onClick={() => handleFilterClick("all")}>
        <span
          aria-current="page"
          id="all"
          className="active inline-block rounded-t-lg bg-gray-100 p-4 text-blue-600 dark:bg-gray-800 dark:text-blue-500"
        >
          All
        </span>
      </li>
      <li className="me-2" onClick={() => handleFilterClick("no-discount")}>
        <span
          id="no-discount"
          className="inline-block rounded-t-lg p-4 hover:bg-gray-50 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300"
        >
          No discount
        </span>
      </li>
      <li className="me-2" onClick={() => handleFilterClick("with-discount")}>
        <span
          id="with-discount"
          className="inline-block rounded-t-lg p-4 hover:bg-gray-50 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300"
        >
          With discount
        </span>
      </li>
    </ul>
  );
}
