export default function FormRow({ label, error, children }) {
  return (
    <>
      {label && (
        <label
          htmlFor={children.props.id}
          className="md:text-md mb-2 block text-sm font-medium text-gray-900 dark:text-white lg:text-2xl"
        >
          {label}
        </label>
      )}
      {children}
      <p className="text-xl text-red-500">{error}</p>
    </>
  );
}
