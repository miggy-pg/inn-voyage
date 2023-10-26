export function TableBody({ setExpandedUpdate, setExpandDelete }) {
  return (
    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
      <td className="w-4 p-8">
        <div className="flex items-center">
          <input
            id="checkbox-{{ .id }}"
            aria-describedby="checkbox-1"
            type="checkbox"
            className="focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
          />
          <label className="sr-only">checkbox</label>
        </div>
      </td>
      <td className="whitespace-nowrap p-8 text-sm font-normal text-gray-500 dark:text-gray-400">
        <div className="md:text-md text-lg font-semibold text-gray-900 dark:text-white sm:text-sm lg:text-2xl">
          Name
        </div>
      </td>
      <td className="md:text-md whitespace-nowrap p-8 text-base font-medium text-gray-900 dark:text-white sm:text-sm lg:text-2xl">
        Technology
      </td>
      <td className="md:text-md max-w-sm overflow-hidden truncate p-8 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-sm lg:text-2xl xl:max-w-xs">
        Description
      </td>
      <td className="md:text-md whitespace-nowrap p-8 text-base font-medium text-gray-900 dark:text-white sm:text-sm lg:text-2xl">
        #ID
      </td>
      <td className="md:text-md whitespace-nowrap p-8 text-base font-medium text-gray-900 dark:text-white sm:text-sm lg:text-2xl">
        Price
      </td>
      <td className="md:text-md whitespace-nowrap p-8 text-base font-medium text-gray-900 dark:text-white sm:text-sm lg:text-2xl">
        Discount
      </td>

      <td className="space-x-2 whitespace-nowrap p-8">
        <button
          type="button"
          onClick={() => setExpandedUpdate((curr) => !curr)}
          className="md:text-md hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 inline-flex items-center rounded-lg bg-blue-700 px-5 py-4 text-center text-sm font-medium text-white focus:ring-4 sm:text-sm lg:text-2xl"
        >
          Update
        </button>
        <button
          type="button"
          className="md:text-md inline-flex items-center rounded-lg bg-red-700 px-5 py-4 text-center text-sm font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900 sm:text-sm lg:text-2xl"
          onClick={() => setExpandDelete((curr) => !curr)}
        >
          Delete item
        </button>
      </td>
    </tr>
  );
}
