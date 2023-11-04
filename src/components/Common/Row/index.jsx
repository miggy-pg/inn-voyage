export default function Row({ children, type }) {
  const rowType = {
    checkbox: "w-4 p-8",
    actionButton: "space-x-2 whitespace-nowrap p-8",
    default:
      "md:text-md whitespace-nowrap p-8 text-base font-medium text-gray-900 dark:text-white sm:text-sm lg:text-2xl",
  };

  if (type === "name")
    return (
      <td className="whitespace-nowrap p-8 text-sm font-normal text-gray-500 dark:text-gray-400">
        <div className="flex items-center">{children}</div>
      </td>
    );
  return <td className={rowType[type]}>{children}</td>;
}
