import StatusBadge from "../Badges/StatusBadge";
import PriorityBadge from "../Badges/PriorityBadge";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useFetch } from "../../hooks/useFetch";
import useApiUrlContext from "../../contexts/ApiUrlContext";
import useToastPopupContext from "../../contexts/ToastPopupContext";
import axios from "axios";

export default function LeadList() {
  const { API_URL } = useApiUrlContext();
  const { data, loading, error, fetchData } = useFetch(`${API_URL}/api/leads?`);
  const { fireToastPopup } = useToastPopupContext();

  async function deleteLead(leadId) {
    try {
      const response = await axios.delete(`${API_URL}/api/leads/${leadId}`);
      fetchData();
      fireToastPopup();
    } catch (error) {
      if (error.response) {
        console.error("Backend Error:", error.response.data.error);
      } else {
        console.error("Network Error:", error.message);
      }
    }
  }

  if (loading) return <LeadListLoading />;
  if (data) {
    return (
      <section className="p-6 mt-6 bg-surface-secondary border border-border-default rounded-lg">
        <header>
          <h3 className="text-2xl font-semibold max-[950px]:text-center">
            All Leads
          </h3>
        </header>
        <table className="mt-6 w-full">
          <thead>
            <tr className="grid grid-cols-6 border-b border-b-border-default pb-3 max-[950px]:grid-cols-1 max-[950px]:border-none">
              <th className="text-sm text-text-secondary max-[950px]:hidden">
                Name
              </th>
              <th className="text-sm text-text-secondary max-[950px]:hidden">
                Company
              </th>
              <th className="text-sm text-text-secondary max-[950px]:hidden">
                Status
              </th>
              <th className="text-sm text-text-secondary max-[950px]:hidden">
                Assigned Agent
              </th>
              <th className="text-sm text-text-secondary max-[950px]:hidden">
                Priority
              </th>
              <th className="text-sm text-text-secondary max-[950px]:hidden">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="max-[950px]:flex max-[950px]:flex-col max-[950px]:gap-2">
            {data && data.length > 0 ? (
              data.map((lead) => (
                <tr
                  key={lead._id}
                  className="grid grid-cols-6 border-b border-b-border-default text-center items-center text-sm max-[950px]:grid-cols-1 max-[950px]:border"
                >
                  <td className="p-4 font-medium max-[950px]:p-1">
                    {lead.name}
                  </td>
                  <td className="p-4 max-[950px]:p-1">{lead.companyName}</td>
                  <td className="p-4 flex justify-center items-center max-[950px]:p-1">
                    <StatusBadge status={lead.status} />
                  </td>
                  <td className="p-4 max-[950px]:p-1">
                    {lead.salesAgent.name}
                  </td>
                  <td className="p-4 flex justify-center items-center max-[950px]:p-1">
                    <PriorityBadge priority={lead.priority} />
                  </td>
                  <td className="p-4 group max-[950px]:p-1">
                    <DeleteOutlineOutlinedIcon
                      className="!text-[20px] text-text-red hover:scale-125 active:scale-100 cursor-pointer"
                      onClick={() => deleteLead(lead._id)}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <p>No Leads found.</p>
            )}
          </tbody>
        </table>
      </section>
    );
  }
}

function LeadListLoading() {
  const arr = ["j", "k", "m", "P", "K"];
  return (
    <div className="min-h-[450px] w-full mt-6 p-6 text-3xl bg-surface-secondary border border-border-default rounded-lg">
      <header>
        <h3 className="text-2xl font-semibold max-[950px]:text-center h-8 bg-surface-gray rounded-lg"></h3>
      </header>
      <table className="mt-6 w-full">
        <thead>
          <tr className="grid gap-2 grid-cols-6 border-b border-b-border-default pb-3 max-[950px]:grid-cols-1 max-[950px]:border-none">
            <th className="text-sm text-text-secondary max-[950px]:hidden h-6 bg-surface-gray rounded-lg"></th>
            <th className="text-sm text-text-secondary max-[950px]:hidden h-6 bg-surface-gray rounded-lg"></th>
            <th className="text-sm text-text-secondary max-[950px]:hidden h-6 bg-surface-gray rounded-lg"></th>
            <th className="text-sm text-text-secondary max-[950px]:hidden h-6 bg-surface-gray rounded-lg"></th>
            <th className="text-sm text-text-secondary max-[950px]:hidden h-6 bg-surface-gray rounded-lg"></th>
            <th className="text-sm text-text-secondary max-[950px]:hidden h-6 bg-surface-gray rounded-lg"></th>
          </tr>
        </thead>
        <tbody className="max-[950px]:flex max-[950px]:flex-col max-[950px]:gap-2">
          {arr && arr?.length > 0 ? (
            arr.map((lead, i) => (
              <tr
                key={i}
                className="grid gap-3 grid-cols-6 border-b border-b-border-default text-center items-center text-sm max-[950px]:grid-cols-1 max-[950px]:border"
              >
                <td className="p-4 font-medium max-[950px]:p-1 h-12 bg-surface-gray rounded-lg my-2"></td>
                <td className="p-4 max-[950px]:p-1 h-12 bg-surface-gray rounded-lg"></td>
                <td className="p-4 flex justify-center items-center max-[950px]:p-1 h-12 bg-surface-gray rounded-lg"></td>
                <td className="p-4 max-[950px]:p-1 h-12 bg-surface-gray rounded-lg"></td>
                <td className="p-4 flex justify-center items-center max-[950px]:p-1 h-12 bg-surface-gray rounded-lg"></td>
                <td className="p-4 group max-[950px]:p-1 h-12 bg-surface-gray rounded-lg"></td>
              </tr>
            ))
          ) : (
            <p>No Leads found.</p>
          )}
        </tbody>
      </table>
    </div>
  );
}
