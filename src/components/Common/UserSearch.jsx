export function UserSearch() {
  return (
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
  );
}
