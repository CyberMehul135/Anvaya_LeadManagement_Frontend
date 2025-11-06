import People from "../../assets/people.svg?react";
import Dollar from "../../assets/dollar.svg?react";
import Time from "../../assets/time.svg?react";
import Tag from "../../assets/tag.svg?react";
import { Link } from "react-router-dom";
import PriorityBadge from "../Badges/PriorityBadge";
import StatusBadge from "../Badges/StatusBadge";

export default function LeadCard({ lead }) {
  return (
    <article className="w-full h-fit p-6 bg-surface-secondary border border-border-default rounded-md hover:shadow-lg">
      <Link to={`/leads/${lead._id}`}>
        <header>
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">{lead.name}</h3>
            <PriorityBadge priority={lead.priority} />
          </div>
          <p className="text-sm text-text-secondary">{lead.companyName}</p>
        </header>
        <div className="my-2">
          <StatusBadge status={lead.status} />
        </div>
        <div className="space-y-2 mt-3">
          <div className="flex gap-2 items-center">
            <People />
            <span className="text-sm text-text-secondary">
              {lead.salesAgent.name}
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <Dollar />
            <span className="text-sm text-text-secondary">
              ${lead.potentialValue.toLocaleString()}
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <Time />
            <span className="text-sm text-text-secondary">
              {lead.timeToClose} days to close
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-3">
          <Tag />
          <div className="flex gap-1">
            {lead.tags.map((tag) => (
              <p
                key={tag}
                className="text-xs text-text-primary font-semibold bg-surface-gray py-[4px] px-[10px] rounded-2xl"
              >
                {tag}
              </p>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}
