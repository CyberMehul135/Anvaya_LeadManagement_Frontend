import useFilterContext from "../../contexts/FilterContext";
import Select from "../Inputs/Select";

export default function Sort() {
  const { updateFilter } = useFilterContext();
  const { filter } = useFilterContext();
  return (
    <div className="relative w-full max-w-60 max-md:max-w-full">
      <Select
        id="selectSortBy"
        name="sort"
        firstOption="Sort By"
        value={filter.sort}
        options={[
          { _id: "asc", name: "Default" },
          { _id: "desc", name: "Recently updated" },
          { _id: "priority", name: "Priority" },
          { _id: "timeToClose", name: "Time To Close" },
        ]}
        hanldeSelectChange={(e) => updateFilter("sort", e.target.value)}
      />
    </div>
  );
}
