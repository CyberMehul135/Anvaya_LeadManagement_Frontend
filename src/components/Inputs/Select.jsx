import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Select({
  label,
  id,
  name,
  firstOption,
  value,
  options,
  hanldeSelectChange,
}) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-semibold" htmlFor={id}>
        {label}
      </label>
      <div className={`relative w-full max-md:max-w-full ${label && "mt-2"}`}>
        <select
          className="w-full min-w-40 h-10 py-2 px-3 bg-surface-primary border border-border-primary rounded-md appearance-none focus:outline-none text-sm"
          id={id}
          name={name}
          value={value}
          onChange={hanldeSelectChange}
          required
        >
          <option value="" disabled>
            {firstOption}
          </option>
          {options &&
            options?.length > 0 &&
            options.map((agent) => (
              <option key={agent._id} value={agent._id}>
                {agent.name}
              </option>
            ))}
        </select>
        <KeyboardArrowDownIcon className="text-text-secondary !text-xl absolute right-1  translate-y-1/2 pointer-events-none" />
      </div>
    </div>
  );
}
