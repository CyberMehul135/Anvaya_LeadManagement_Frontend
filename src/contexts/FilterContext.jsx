import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

const useFilterContext = () => useContext(FilterContext);

export default useFilterContext;

export function FilterProvider({ children }) {
  const [filter, setFilter] = useState({
    status: "",
    agent: "",
    sort: "",
  });
  const [filters, setFilters] = useState();

  const convertObjectToQuery = () => {
    const query = new URLSearchParams(filter).toString();
    setFilters(query);
  };

  useEffect(() => {
    convertObjectToQuery();
  }, [filter]);

  const updateFilter = (key, value) => {
    setFilter((pre) => ({ ...pre, [key]: value }));
  };

  return (
    <FilterContext.Provider value={{ filter, filters, updateFilter }}>
      {children}
    </FilterContext.Provider>
  );
}
