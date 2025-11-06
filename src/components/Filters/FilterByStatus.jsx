import useFilterContext from "../../contexts/FilterContext";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function FilterByStatus() {
  const { filter, updateFilter } = useFilterContext();

  return (
    <div className="relative w-full max-w-60 max-md:max-w-full">
      <select
        className="w-full min-w-40 h-10 py-2 px-3 border border-border-primary rounded-md appearance-none focus:outline-none text-sm"
        id="selectByStatus"
        onChange={(e) => updateFilter("status", e.target.value)}
      >
        <option value="">All Statuses</option>
        <option value="New">New</option>
        <option value="Contacted">Contacted</option>
        <option value="Qualified">Qualified</option>
        <option value="Proposal Sent">Proposal Sent</option>
        <option value="Closed">Closed</option>
      </select>
      <KeyboardArrowDownIcon className="text-text-secondary !text-xl absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none" />
    </div>
  );
}
