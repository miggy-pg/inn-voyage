import { FaHome, FaCaretRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function BreadCrumb() {
  return (
    <>
      <nav className="mb-5 ml-4 flex" aria-label="Breadcrumb">
        <ol className="text-md inline-flex items-center space-x-1 font-medium md:space-x-2 lg:space-x-4">
          <Link to="/">
            <li className="inline-flex items-center">
              <span className="hover:text-primary-600 inline-flex items-center align-middle text-gray-700 dark:text-gray-300 dark:hover:text-white">
                <FaHome className="mr-2.5 h-7 w-7" />
                Home
              </span>
            </li>
          </Link>
          <li>
            <div className="flex items-center">
              <FaCaretRight className="h-6 w-6 text-gray-400" />
              <span className="ml-1 text-gray-400 dark:text-gray-500 md:ml-2">
                Bookings
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1 className="ml-4 text-lg font-semibold text-gray-900 dark:text-white sm:text-2xl lg:text-3xl">
        All bookings
      </h1>
    </>
  );
}
