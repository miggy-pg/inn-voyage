import { FaExclamationCircle, FaWindowClose } from "react-icons/fa";
import Button from "../Button";

export function ValidateDelete(props) {
  return (
    <div
      className={`fixed right-0 top-0 z-40 h-screen w-full max-w-lg transform overflow-y-auto bg-slate-200 p-4 transition-all dark:bg-gray-800 ${
        props.expandDelete ? "w-full translate-x-0" : "translate-x-full"
      }`}
    >
      <h5 className="md:text-md inline-flex items-center text-sm font-semibold uppercase text-gray-500 dark:text-gray-400 lg:text-2xl">
        Delete item
      </h5>
      <Button
        size="medium"
        variations="closeTab"
        onClick={() => props.setExpandDelete((curr) => !curr)}
      >
        <FaWindowClose className="h-8 w-8 fill-current text-slate-400 transition duration-300 ease-in-out hover:text-slate-500 " />
      </Button>

      <FaExclamationCircle className="mb-4 mt-8 h-8 w-8 fill-current text-red-600" />
      <h3 className="md:text-md sm:text-md mb-6 text-lg text-gray-500 dark:text-gray-400 lg:text-2xl">
        Are you sure you want to delete this product?
      </h3>
      <Button size="medium" variations="danger">
        Yes, I&apos;m sure
      </Button>
      {/* <button className="md:text-md sm:text-md mr-2 inline-flex items-center rounded-lg bg-red-600 px-5 py-2.5 text-center text-lg font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900 lg:text-xl">
        Yes, I&apos;m sure
      </button> */}
      <a
        href="#"
        className="focus:ring-primary-300 sm:text-md md:text-md ml-3 inline-flex items-center rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-center text-lg font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 lg:text-xl"
        onClick={() => props.setExpandDelete((curr) => !curr)}
      >
        No, cancel
      </a>
    </div>
  );
}
