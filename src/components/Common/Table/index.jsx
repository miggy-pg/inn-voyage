import { createContext } from "react";
import { render } from "react-dom";

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

function TableColumn({ header }) {
  return (
    <th
      scope="col"
      className="md:text-md p-5 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400 lg:text-2xl"
    >
      {header}
    </th>
  );
}

function Header({ data }) {
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
      {data.map((header) => (
        <TableColumn key={header} header={header} />
      ))}
    </thead>
  );
}

function Row({ children }) {
  return (
    <th
      scope="col"
      className="md:text-md p-5 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400 lg:text-2xl"
    >
      {children}
    </th>
  );
}

function Body({ children }) {
  return children;
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
