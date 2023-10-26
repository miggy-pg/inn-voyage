export function UpdateForm(props) {
  return (
    <div
      className={`fixed right-0 top-0 z-40 h-screen w-full max-w-lg transform overflow-y-auto bg-slate-200 p-4 transition-all dark:bg-gray-800 ${
        props.expandedUpdate ? "w-full translate-x-0" : "translate-x-full"
      }`}
    >
      <h5 className="md:text-md lg:text-2xltext-sm mb-6 inline-flex items-center font-semibold uppercase text-gray-500 dark:text-gray-400">
        Update Product
      </h5>
      <button
        type="button"
        className="top-4.5 absolute right-7 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <span
          className={`${
            props.expanded ? "w-full translate-x-0" : "translate-x-full"
          }`}
          onClick={() => props.setExpandedUpdate((curr) => !curr)}
        >
          <svg
            aria-hidden="true"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </button>
      <form action="#">
        <div className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="md:text-md mb-2 block text-sm font-medium text-gray-900 dark:text-white lg:text-2xl"
            >
              Name
            </label>
            <input
              type="text"
              name="title"
              id="name"
              className="focus:ring-primary-600 md:text-md focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 lg:text-2xl" // value="Education Dashboard"
              placeholder="Type product name"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="category"
              className="md:text-md mb-2 block text-sm font-medium text-gray-900 dark:text-white lg:text-2xl"
            >
              Technology
            </label>
            <select
              id="category"
              className="focus:ring-primary-500 md:text-md focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 lg:text-2xl"
            >
              <option defaultValue="">Flowbite</option>
              <option value="RE">React</option>
              <option value="AN">Angular</option>
              <option value="VU">Vue JS</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="price"
              className="md:text-md mb-2 block text-sm font-medium text-gray-900 dark:text-white lg:text-2xl"
            >
              Price
            </label>
            <input
              type="number"
              name="price"
              id="price"
              className="focus:ring-primary-600 focus:border-primary-600 md:text-md dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 lg:text-2xl" // value="2999"
              placeholder="$149"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="md:text-md mb-2 block text-sm font-medium text-gray-900 dark:text-white lg:text-2xl"
            >
              Description
            </label>
            <textarea
              id="description"
              rows="4"
              className="focus:ring-primary-500 md:text-md focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 lg:text-2xl"
              value="Enter event description here"
              onChange=""
            >
              Start developing with an open-source library of over 450+ UI
              components, sections, and pages built with the utility classNamees
              from Tailwind CSS and designed in Figma.
            </textarea>
          </div>
          <div>
            <label
              htmlFor="discount"
              className="md:text-md mb-2 block text-sm font-medium text-gray-900 dark:text-white lg:text-2xl"
            >
              Discount
            </label>
            <select
              id="discount"
              className="focus:ring-primary-500 md:text-md focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 lg:text-2xl"
            >
              <option defaultValue="">No</option>
              <option value="5">5%</option>
              <option value="10">10%</option>
              <option value="20">20%</option>
              <option value="30">30%</option>
              <option value="40">40%</option>
              <option value="50">50%</option>
            </select>
          </div>
        </div>
        <div className="bottom-0 left-0 mt-4 flex w-full justify-center space-x-4 pb-4 sm:absolute sm:mt-0 sm:px-4">
          <button
            type="submit"
            className="hover:bg-primary-800 md:text-md focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 lg:text-2xl"
          >
            Update
          </button>
          <button
            type="button"
            onClick={() => props.setExpandedUpdate((curr) => !curr)}
            className={`md:text-md focus:ring-primary-300 inline-flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600 lg:text-2xl ${
              props.expanded ? "right-0" : ""
            }`}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
