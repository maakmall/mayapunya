export default function Label({ children, field }) {
  return (
    <label
      htmlFor={field}
      className="block text-sm text-gray-800 dark:text-gray-200"
    >
      {children}
    </label>
  );
}
