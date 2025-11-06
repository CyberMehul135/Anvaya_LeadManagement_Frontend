import { useFetch } from "../../hooks/useFetch";
import TagBadge from "../Badges/TagBadge";
import TargetSymbol from "../../assets/targetGreen.svg?react";
import GrowArrow from "../../assets/growArrow.svg?react";
import SmsSmall from "../../assets/smsSmall.svg?react";
import useApiUrlContext from "../../contexts/ApiUrlContext";

export default function AgentCard({ agent }) {
  const { API_URL } = useApiUrlContext();
  const { data, loading, error, fetchData } = useFetch(
    agent ? `${API_URL}/api/leads?agent=${agent?._id}` : null
  );

  const totalLead = data?.length;
  const activeLeads = data?.filter((lead) => lead.status !== "Closed").length;
  const closedLeads = data?.filter((lead) => lead.status === "Closed").length;
  const pipelineValue = data?.reduce((acc, curr) => {
    return (acc += curr.status !== "Closed" ? curr.potentialValue : 0);
  }, 0);

  return (
    <article className="bg-surface-secondary border border-border-default rounded-md">
      <header className="p-6 ">
        <h3 className="text-xl font-medium">{agent.name}</h3>
        <div className="flex items-center gap-2 mb-3">
          <SmsSmall />
          <span className="text-sm text-text-secondary">{agent.email}</span>
        </div>
        <TagBadge tag={`${totalLead} total leads`} />
      </header>

      <div className="px-6 pb-6">
        <div className=" grid grid-cols-2">
          <div>
            <p className="text-sm text-text-secondary">Active Leads</p>
            <p className="text-2xl font-bold">{activeLeads}</p>
          </div>
          <div>
            <p className="text-sm text-text-secondary">Closed Deals</p>
            <div className="flex items-center gap-2">
              <TargetSymbol />
              <p className="text-2xl font-bold">{closedLeads}</p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm text-text-secondary">Pipeline Value</p>
          <div className="mt-1 flex items-center gap-1">
            <GrowArrow />
            <p className="text-xl font-semibold">
              ${pipelineValue?.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
