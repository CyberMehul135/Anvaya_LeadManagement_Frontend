export default function Input({
  label,
  id,
  type,
  placeholder,
  name,
  value,
  handleOnChange,
  containerStyling,
}) {
  return (
    <div className={`flex flex-col ${containerStyling}`}>
      <label className="text-sm font-semibold" htmlFor={id}>
        {label}
      </label>
      <input
        className={`h-10 py-2 px-3 rounded-md text-sm bg-surface-primary border border-border-primary outline-none focus:outline-blue-500 ${
          label && "mt-2"
        }`}
        type={type}
        id={id}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleOnChange}
        required
      />
    </div>
  );
}
