export function TableHeader() {
  return (
    <thead className="bg-gray-100 dark:bg-gray-700">
      <tr>
        <th scope="col" className="p-8">
          <div className="flex items-center">
            <input
              id="checkbox-all"
              aria-describedby="checkbox-1"
              type="checkbox"
              className="focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
            />
            <label className="sr-only">checkbox</label>
          </div>
        </th>
        <th
          scope="col"
          className="md:text-md p-5 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400 lg:text-2xl"
        >
          Start Date
        </th>
        <th
          scope="col"
          className="md:text-md p-5 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400 lg:text-2xl"
        >
          End Date
        </th>
        <th
          scope="col"
          className="md:text-md p-5 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400 lg:text-2xl"
        >
          No. of Nights
        </th>
        <th
          scope="col"
          className="md:text-md p-5 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400 lg:text-2xl"
        >
          No. of Guests
        </th>
        <th
          scope="col"
          className="md:text-md p-5 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400 lg:text-2xl"
        >
          Cabin Price
        </th>
        <th
          scope="col"
          className="md:text-md p-5 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400 lg:text-2xl"
        >
          Extra Price
        </th>
        <th
          scope="col"
          className="md:text-md p-5 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400 lg:text-2xl"
        >
          Total Price
        </th>
        <th
          scope="col"
          className="md:text-md p-5 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400 lg:text-2xl"
        >
          Status
        </th>
        <th
          scope="col"
          className="md:text-md p-5 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400 lg:text-2xl"
        >
          w/Breakfast
        </th>
        <th
          scope="col"
          className="md:text-md p-5 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400 lg:text-2xl"
        >
          Actions
        </th>
      </tr>
    </thead>
  );
}
