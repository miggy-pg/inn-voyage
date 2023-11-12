import { NavLink } from "react-router-dom";

export default function Filter() {
  return (
    <ul className="flex flex-wrap border-b border-gray-200 text-center text-2xl font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400">
      <NavLink>
        <li className="me-2" id="selected-filter">
          <span
            aria-current="page"
            className="active inline-block rounded-t-lg bg-gray-100 p-4 text-blue-600 dark:bg-gray-800 dark:text-blue-500"
          >
            All
          </span>
        </li>
      </NavLink>
      <NavLink onClick={() => setUseFilter("no-discount")}>
        <li className="me-2" id="selected-filter">
          <span className="inline-block rounded-t-lg p-4 hover:bg-gray-50 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300">
            No discount
          </span>
        </li>
      </NavLink>
      <NavLink onClick={() => setUseFilter("with-discount")}>
        <li className="me-2" id="selected-filter">
          <span className="inline-block rounded-t-lg p-4 hover:bg-gray-50 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300">
            With discount
          </span>
        </li>
      </NavLink>
    </ul>
  );
}
