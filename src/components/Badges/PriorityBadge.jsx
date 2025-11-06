export default function PriorityBadge({ priority }) {
  return (
    <div
      className={`py-[3px] px-[10px] font-semibold text-xs  w-fit rounded-2xl mt-1 ${
        priority === "High"
          ? "bg-surface-red text-text-white"
          : priority === "Medium"
          ? "bg-surface-yellow text-text-white"
          : "bg-surface-gray text-text-primary"
      }`}
    >
      {priority}
    </div>
  );
}
