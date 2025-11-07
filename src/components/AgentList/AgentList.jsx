import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import useAgentContext from "../../contexts/AgentContext";

export default function AgentList() {
  const { agents, agentsLoading, agentsError, deleteAgent } = useAgentContext();
  console.log(agents);

  if (agentsLoading) return <LeadListLoading />;
  if (agents) {
    return (
      <section className="p-6 mt-6 bg-surface-secondary border border-border-default rounded-lg">
        <header>
          <h3 className="text-2xl font-semibold text-center rounded-lg ">
            All Sales Agent
          </h3>
        </header>
        <table className="mt-4 w-full">
          <thead>
            <tr className="grid grid-cols-3 bg-gray-100 border-b border-b-border-default py-3 max-[950px]:grid-cols-1 max-[950px]:border-none">
              <th className="text-sm text-text-secondary max-[950px]:hidden">
                Name
              </th>
              <th className="text-sm text-text-secondary max-[950px]:hidden">
                Email
              </th>
              <th className="text-sm text-text-secondary max-[950px]:hidden">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="max-[950px]:flex max-[950px]:flex-col max-[950px]:gap-2">
            {agents && agents.length > 0 ? (
              agents.map((lead) => (
                <tr
                  key={lead._id}
                  className="grid grid-cols-3 border-b border-b-border-default text-center items-center text-sm max-[950px]:grid-cols-1 max-[950px]:border"
                >
                  <td className="p-4 font-medium max-[950px]:p-1">
                    {lead.name}
                  </td>
                  <td className="p-4 max-[950px]:p-1">{lead.email}</td>
                  <td className="p-4 group max-[950px]:p-1">
                    <DeleteOutlineOutlinedIcon
                      className="!text-[20px] text-text-red hover:scale-125 active:scale-100 cursor-pointer"
                      onClick={() => deleteAgent(lead._id)}
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
  const arr = ["j", "k", "m", "P"];
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
                <td className="p-4 group max-[950px]:p-1 h-12 bg-surface-gray rounded-lg"></td>
              </tr>
            ))
          ) : (
            <p>No Agents found.</p>
          )}
        </tbody>
      </table>
    </div>
  );
}
