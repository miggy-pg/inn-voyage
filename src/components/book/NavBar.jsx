import { FaHome, FaCaretRight } from "react-icons/fa";
import Button from "../Button";
import { Link } from "react-router-dom";

export function NavBar(props) {
  return (
    <div className="block items-center justify-between border-b border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:flex lg:mt-1.5">
      <div className="mb-1 w-full">
        <div className="mb-4">
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
            All products
          </h1>
        </div>
        <div className="mb-5 block items-center justify-between dark:divide-gray-700 sm:flex md:divide-x md:divide-gray-100">
          <div className="mb-4 flex items-center sm:mb-0">
            <form className="sm:pr-3">
              <label htmlFor="book-search" className="sr-only">
                Search
              </label>
              <div className="relative mt-1 w-48 sm:w-64 xl:w-[30rem]">
                <input
                  type="text"
                  name="book-search"
                  className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:text-sm lg:text-2xl"
                  placeholder="Search for products"
                />
              </div>
            </form>
          </div>

          <Button
            onClick={() => props.setExpandCreate((curr) => !curr)}
            $size="medium"
            $variations="primary"
          >
            Add new product
          </Button>
          {/* <button
            className="text-red hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 rounded-lg bg-slate-200 px-5 py-2.5 font-medium focus:outline-none focus:ring-4 sm:text-sm lg:text-2xl"
            type="button"
          >
            Add new product
          </button> */}
        </div>
      </div>
    </div>
  );
}
