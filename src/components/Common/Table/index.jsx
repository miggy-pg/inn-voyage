import { createContext } from "react";

const TableContext = createContext();

export default function Table({ columns, children }) {
  return (
    <TableContext.Provider value={columns}>
      <table className="min-w-full table-fixed divide-y divide-gray-200 dark:divide-gray-600">
        {children}
      </table>
    </TableContext.Provider>
  );
}

function Column({ header }) {
  return (
    <th
      scope="col"
      className="p-4 text-left text-xl font-medium uppercase tracking-wider text-gray-500 dark:text-white"
    >
      {header}
    </th>
  );
}

function Header({ data, render }) {
  return (
    <thead className="bg-gray-100 dark:bg-gray-700">
      <th scope="col" className="w-4 p-12">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
          />
          <label htmlFor="checkbox-all" className="sr-only">
            checkbox
          </label>
        </div>
      </th>
      {data.map(render)}
    </thead>
  );
}

function Row({ children, type }) {
  const rowType = {
    checkbox: "w-4 p-8",
    actionButton: "space-x-2 whitespace-nowrap p-8",
    status:
      "mr-2 rounded-md border border-green-100 bg-green-100 px-2.5 py-0.5 text-2xl font-medium text-green-800 dark:border-green-500 dark:bg-gray-700 dark:text-green-400",
    default:
      "md:text-md whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white sm:text-sm lg:text-2xl",
  };

  if (type === "name")
    return (
      <td className="whitespace-nowrap p-8 text-sm font-normal text-gray-500 dark:text-gray-400">
        <span className="flex items-center">{children}</span>
      </td>
    );
  return (
    <td className="whitespace-nowrap p-4">
      <span className={rowType[type]}>{children}</span>
    </td>
  );
}

function Body({ children }) {
  return (
    <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
      {children}
    </tbody>
  );
}

Table.Header = Header;
Table.Row = Row;
Table.Column = Column;
Table.Body = Body;

//  <tr className="bg-gray-50 dark:bg-gray-700">
//    <td className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
//      Payment refund to <span className="font-semibold">#00910</span>
//    </td>
//    <td className="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
//      Apr 23 ,2021
//    </td>
//    <td className="whitespace-nowrap p-4 text-sm font-semibold text-gray-900 dark:text-white">
//      -$670
//    </td>
//    <td className="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
//      0078568936
//    </td>
//    <td className="inline-flex items-center space-x-2 whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
//      <svg
//        className="h-6 w-6"
//        aria-hidden="true"
//        xmlns="http://www.w3.org/2000/svg"
//        viewBox="0 0 256 83"
//      >
//        <defs>
//          <linearGradient
//            id="logosVisa0"
//            x1="45.974%"
//            x2="54.877%"
//            y1="-2.006%"
//            y2="100%"
//          >
//            <stop offset="0%" stop-color="#222357" />
//            <stop offset="100%" stop-color="#254AA5" />
//          </linearGradient>
//        </defs>
//        <path
//          fill="url(#logosVisa0)"
//          d="M132.397 56.24c-.146-11.516 10.263-17.942 18.104-21.763c8.056-3.92 10.762-6.434 10.73-9.94c-.06-5.365-6.426-7.733-12.383-7.825c-10.393-.161-16.436 2.806-21.24 5.05l-3.744-17.519c4.82-2.221 13.745-4.158 23-4.243c21.725 0 35.938 10.724 36.015 27.351c.085 21.102-29.188 22.27-28.988 31.702c.069 2.86 2.798 5.912 8.778 6.688c2.96.392 11.131.692 20.395-3.574l3.636 16.95c-4.982 1.814-11.385 3.551-19.357 3.551c-20.448 0-34.83-10.87-34.946-26.428m89.241 24.968c-3.967 0-7.31-2.314-8.802-5.865L181.803 1.245h21.709l4.32 11.939h26.528l2.506-11.939H256l-16.697 79.963h-17.665m3.037-21.601l6.265-30.027h-17.158l10.893 30.027m-118.599 21.6L88.964 1.246h20.687l17.104 79.963h-20.679m-30.603 0L53.941 26.782l-8.71 46.277c-1.022 5.166-5.058 8.149-9.54 8.149H.493L0 78.886c7.226-1.568 15.436-4.097 20.41-6.803c3.044-1.653 3.912-3.098 4.912-7.026L41.819 1.245H63.68l33.516 79.963H75.473"
//          transform="matrix(1 0 0 -1 0 82.668)"
//        />
//      </svg>
//      <span>••• 924</span>
//    </td>
//    <td className="whitespace-nowrap p-4">
//      <span className="mr-2 rounded-md border border-green-100 bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:border-green-500 dark:bg-gray-700 dark:text-green-400">
//        Completed
//      </span>
//    </td>
//  </tr>;
