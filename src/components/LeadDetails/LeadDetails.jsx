import StatusBadge from "../Badges/StatusBadge";
import PriorityBadge from "../Badges/PriorityBadge";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import Company from "../../assets/company.svg?react";
import Sms from "../../assets/sms.svg?react";
import Telephone from "../../assets/telephone.svg?react";
import { useFetch } from "../../hooks/useFetch";
import TagBadge from "../Badges/TagBadge";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import useCommentContext from "../../contexts/CommentContext";
import useApiUrlContext from "../../contexts/ApiUrlContext";

export default function LeadDetails({ leadId }) {
  const { API_URL } = useApiUrlContext();
  const { data, loading, error, fetchData } = useFetch(
    `${API_URL}/api/leads/${leadId}`
  );
  const { comments } = useCommentContext();

  if (error) return <p>Error while fetching data.</p>;
  if (data) {
    return (
      <div className="grid grid-cols-3 gap-6 mt-6">
        <div className="col-span-2 max-lg:col-span-3">
          {/* LEAD-DETAILS-1 */}
          <div className="p-6 bg-surface-secondary border border-border-primary rounded-lg">
            <header className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-semibold">{data.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <Company />
                  <p className="text-base text-text-secondary">
                    {data.companyName}
                  </p>
                </div>
              </div>
              <StatusBadge status={data.status} />
            </header>
            <div className="flex mt-6">
              <div className="flex items-center flex-1 gap-2">
                <Sms />
                <a
                  className="text-sm text-text-blue hover:underline"
                  href={`mailto:${data.email}`}
                >
                  {data.email}
                </a>
              </div>
              <div className="flex items-center flex-1 gap-2">
                <Telephone />
                <a
                  className="text-sm text-text-blue hover:underline"
                  href={`tel:${data.phone}`}
                >
                  +{data.phone}
                </a>
              </div>
            </div>
          </div>

          {/* COMMENTS */}
          <div className="p-6 bg-surface-secondary border border-border-primary rounded-lg mt-6">
            <h3 className="text-2xl font-semibold">Comments & Activity</h3>
            <ul className="mt-6">
              {comments?.comments?.map((comment) => (
                <Comment
                  key={comment._id}
                  author={comment.author.name}
                  date={comment.createdAt.split("T")[0]}
                  comment={comment.commentText}
                />
              ))}
            </ul>
            <CommentForm />
          </div>
        </div>

        {/* LEAD-DETAILS-2 */}
        <aside className="col-span-1 max-lg:col-span-3 border border-border-primary bg-surface-secondary rounded-lg">
          <header className="p-6">
            <h3 className="text-2xl font-semibold">Lead Details</h3>
          </header>
          <div className="px-6 pb-6">
            <div>
              <label className="text-sm text-text-secondary font-semibold">
                Assigned To
              </label>
              <div className="flex items-center gap-2 mt-1">
                <PermIdentityOutlinedIcon className="!text-[20px] text-text-secondary" />
                <span className="text-base">{data.salesAgent.name}</span>
              </div>
            </div>

            <div className="mt-4">
              <label className="text-sm text-text-secondary font-semibold">
                Priority
              </label>
              <PriorityBadge priority={data.priority} />
            </div>

            <div className="mt-4">
              <label className="text-sm text-text-secondary font-semibold">
                Lead Source
              </label>
              <div className="mt-1 text-base">{data.source}</div>
            </div>

            <div className="mt-4">
              <label className="text-sm text-text-secondary font-semibold">
                Potential Value
              </label>
              <div className="mt-1 text-base">
                <span className="font-semibold">
                  ${data.potentialValue.toLocaleString()}
                </span>
              </div>
            </div>

            {data.status !== "Closed" && (
              <div className="mt-4">
                <label className="text-sm text-text-secondary font-semibold">
                  Time to Close
                </label>
                <div className="mt-1 text-base">
                  <span>{data.timeToClose} Days</span>
                </div>
              </div>
            )}

            <div className="mt-4">
              <label className="text-sm text-text-secondary font-semibold">
                Tags
              </label>
              <div className="flex gap-2 flex-wrap">
                {data.tags.map((tag) => (
                  <TagBadge key={tag} tag={tag} />
                ))}
              </div>
            </div>

            <hr className="mt-4" />

            <div className="mt-2">
              <p className="text-xs text-text-secondary">
                Created: {data.createdAt.split("T")[0]} •{" "}
                {new Date(data.createdAt).toLocaleTimeString("en-IN", {
                  timeZone: "Asia/Kolkata",
                })}
              </p>
              <p className="text-xs text-text-secondary">
                Updated: {data.updatedAt.split("T")[0]} •{" "}
                {new Date(data.updatedAt).toLocaleTimeString("en-IN", {
                  timeZone: "Asia/Kolkata",
                })}
              </p>
            </div>
          </div>
        </aside>
      </div>
    );
  }
}
