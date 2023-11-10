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
      className="md:text-md p-5 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400 lg:text-2xl"
    >
      {header}
    </th>
  );
}

function Header({ data, render }) {
  return (
    <thead className="bg-gray-100 dark:bg-gray-700">
      <th scope="col" className="p-4">
        <div className="flex items-center">
          <input
            id="checkbox-all"
            aria-describedby="checkbox-1"
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
    default:
      "md:text-md whitespace-nowrap p-8 text-base font-medium text-gray-900 dark:text-white sm:text-sm lg:text-2xl",
  };

  if (type === "name")
    return (
      <td className="whitespace-nowrap p-8 text-sm font-normal text-gray-500 dark:text-gray-400">
        <span className="flex items-center">{children}</span>
      </td>
    );
  return <td className={rowType[type]}>{children}</td>;
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
