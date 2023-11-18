import { useState } from "react";
import BreadCrumb from "../BreadCrumb";
import { Fragment } from "react";

export function NavBar({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleOpen() {
    setIsOpen((open) => !open);
  }

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
      <div className="items-center justify-between lg:flex">
        <div className="mb-4 lg:mb-0">
          <BreadCrumb />
        </div>
        {children}
      </div>
    </div>
  );
}

// <li className="flex items-center py-1">
//   <input
//     type="checkbox"
//     value=""
//     className="dark:hover:text-whitefocus:ring-primary-500 dark:focus:ring-primary-600 block h-4 w-4 rounded border-gray-300 bg-gray-100 px-4 py-2 text-red-600 hover:bg-gray-100 hover:bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:hover:bg-gray-600"
//   />

//   <label
//     htmlFor={status}
//     className="ml-2 text-2xl font-medium text-gray-900 dark:text-gray-100"
//   ></label>
// </li>;
