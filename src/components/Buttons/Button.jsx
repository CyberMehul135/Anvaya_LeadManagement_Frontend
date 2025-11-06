export default function Button({
  label,
  icon: Icon,
  background = "bg-surface-blue hover:bg-surface-bluehover",
  text = "text-text-white",
  type = "submit",
  handleClick,
}) {
  return (
    <button
      className={`h-10 py-2 px-4 flex items-center justify-between gap-2 ${background} ${text} text-sm font-semibold rounded-md max-[420px]:px-2 max-[420px]:gap-2`}
      type={type}
      onClick={handleClick}
    >
      {Icon && <Icon className={`!text-[20px]`} />}
      <span>{label}</span>
    </button>
  );
}
