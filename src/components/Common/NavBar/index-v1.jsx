import BreadCrumb from "../BreadCrumb";

export function NavBar({ children }) {
  return (
    <div className="block items-center justify-between border-b border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:flex lg:mt-1.5">
      <div className="mb-1 w-full">
        <div className="mb-4">
          <BreadCrumb />
        </div>
        <div className="mb-5 block items-center justify-between dark:divide-gray-700 sm:flex md:divide-x md:divide-gray-100">
          {children}
        </div>
      </div>
    </div>
  );
}
