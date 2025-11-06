import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import LeadCard from "./LeadCard";
import useApiUrlContext from "../../contexts/ApiUrlContext";

const filters = [
  { label: "All Leads", value: "" },
  { label: "New", value: "New" },
  { label: "Contacted", value: "Contacted" },
  { label: "Qualified", value: "Qualified" },
  { label: "Proposal Sent", value: "Proposal Sent" },
  { label: "Closed", value: "Closed" },
];

export default function LeadCardOverview() {
  const { API_URL } = useApiUrlContext();
  const [status, setStatus] = useState("");
  const { data, loading, error, fetchData } = useFetch(
    `${API_URL}/api/leads?status=${status}`
  );

  useEffect(() => {
    fetchData();
  }, [status]);

  if (error) return <p>Error while fetching data.</p>;

  if (data) {
    return (
      <>
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <label
              key={f.label}
              htmlFor={f.label}
              className={`h-9 px-3 text-sm font-semibold rounded-md flex items-center cursor-pointer ${
                status === f.value
                  ? "bg-surface-blue text-text-white hover:bg-surface-bluehover"
                  : "bg-surface-white text-text-primary hover:bg-surface-green hover:text-text-white border border-border-primary"
              }`}
            >
              {f.label}
              <input
                type="radio"
                name="leadFilter"
                id={f.label}
                value={f.value}
                onChange={(e) => setStatus(e.target.value)}
                className="hidden"
              />
            </label>
          ))}
        </div>

        {/* LeadCards */}
        <div className="mt-4 grid gap-4 grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {data && data.length > 0 ? (
            data.map((lead) => <LeadCard key={lead._id} lead={lead} />)
          ) : (
            <p>No Leads found.</p>
          )}
        </div>
      </>
    );
  }
}
