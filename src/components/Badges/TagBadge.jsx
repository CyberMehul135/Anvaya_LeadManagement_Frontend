export default function TagBadge({ tag }) {
  return (
    <div className="py-[3px] px-[10px] font-semibold text-xs text-text-primary bg-surface-gray border w-fit rounded-2xl mt-1">
      {tag}
    </div>
  );
}
