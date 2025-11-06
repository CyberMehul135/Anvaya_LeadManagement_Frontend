export default function TextArea({
  label,
  id,
  name,
  placeholder,
  className,
  value,
  handleTextAreaChange,
}) {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label className="text-sm font-semibold" htmlFor={id}>
          {label}
        </label>
      )}
      <textarea
        className="w-full min-h-20 py-2 px-3 h-10 mt-2 mb-1 rounded-md text-sm bg-surface-primary border border-border-primary outline-none focus:outline-blue-500"
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleTextAreaChange}
        required
      ></textarea>
    </div>
  );
}
