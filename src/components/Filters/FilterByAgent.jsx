import useAgentContext from "../../contexts/AgentContext";
import useFilterContext from "../../contexts/FilterContext";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function FilterByAgent() {
  const { updateFilter } = useFilterContext();
  const { agents } = useAgentContext();

  return (
    <div className="relative w-full max-w-60 max-md:max-w-full">
      <select
        className="w-full min-w-40 h-10 py-2 px-3 border border-border-primary rounded-md appearance-none focus:outline-none text-sm"
        id="selectByAgent"
        onChange={(e) => updateFilter("agent", e.target.value)}
      >
        <option value="">All Agents</option>
        {agents &&
          agents?.length > 0 &&
          agents.map((agent) => (
            <option key={agent._id} value={agent._id}>
              {agent.name}
            </option>
          ))}
      </select>
      <KeyboardArrowDownIcon className="text-text-secondary !text-xl absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none" />
    </div>
  );
}
