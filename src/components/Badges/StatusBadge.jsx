export default function StatusBadge({ status }) {
  return (
    <div
      className={`py-[3px] px-[10px] font-semibold text-xs  w-fit rounded-2xl mt-1 ${
        status === "New"
          ? "bg-status-blue text-status-bluetext"
          : status === "Contacted"
          ? "bg-status-purple text-status-purpletext"
          : status === "Qualified"
          ? "bg-status-green100 text-status-green100text"
          : status === "Proposal Sent"
          ? "bg-status-yellow text-status-yellowtext"
          : status === "Closed" && "bg-status-green200 text-status-green200text"
      }`}
    >
      {status}
    </div>
  );
}
