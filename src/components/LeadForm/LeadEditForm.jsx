import Input from "../Inputs/Input";
import useAgentContext from "../../contexts/AgentContext";
import Select from "../Inputs/Select";
import useLeadDetailsContext from "../../contexts/LeadDetailsContext";
import Button from "../Buttons/Button";
import useLeadContext from "../../contexts/LeadContext";
import useLeadEditFormContext from "../../contexts/LeadEditFormContext";
import useLeadIdContext from "../../contexts/LeadIdContext";
import { useNavigate } from "react-router-dom";

export default function LeadEditForm() {
  const { updateLead } = useLeadContext();
  const { agents, agentsLoading, agentsError } = useAgentContext();
  const { status, priority, source } = useLeadDetailsContext();
  const { leadEditForm, handleInputChange, handleFormSubmit } =
    useLeadEditFormContext();
  const { pageLeadId } = useLeadIdContext();
  const navigate = useNavigate();

  return (
    <form
      className="w-full max-w-[800px] bg-white border rounded-lg mt-6"
      onSubmit={(e) => {
        e.preventDefault();
        updateLead(pageLeadId, leadEditForm);
      }}
    >
      <header className="p-6">
        <h3 className="text-2xl font-medium">Edit Lead</h3>
      </header>
      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-6 px-6 pb-6">
        <Input
          label="Lead Name"
          id="name"
          name="name"
          type="text"
          placeholder="Enter lead name"
          value={leadEditForm.name}
          handleOnChange={handleInputChange}
        />
        <Input
          label="Company"
          id="companyName"
          name="companyName"
          type="text"
          placeholder="Company Name"
          value={leadEditForm.companyName}
          handleOnChange={handleInputChange}
        />
        <Input
          label="Email"
          id="email"
          name="email"
          type="text"
          placeholder="email@example.com"
          value={leadEditForm.email}
          handleOnChange={handleInputChange}
        />
        <Input
          label="Phone"
          id="phone"
          name="phone"
          type="text"
          placeholder="+1 234 567 8900"
          value={leadEditForm.phone}
          handleOnChange={handleInputChange}
        />

        <Select
          label="Lead Status"
          id="status"
          name="status"
          firstOption="Select Status"
          value={leadEditForm.status}
          options={status}
          hanldeSelectChange={handleInputChange}
        />

        {leadEditForm.status === "Closed" && (
          <Input
            label="Lead Closed Date"
            id="closedAt"
            name="closedAt"
            type="Date"
            placeholder="Enter Date"
            value={
              leadEditForm.closedAt ? leadEditForm.closedAt.split("T")[0] : ""
            }
            handleOnChange={handleInputChange}
          />
        )}

        <Select
          label="Priority"
          id="priority"
          name="priority"
          firstOption="Select Priority"
          value={leadEditForm.priority}
          options={priority}
          hanldeSelectChange={handleInputChange}
        />

        <Select
          label="Lead Source"
          id="source"
          name="source"
          firstOption="Select Source"
          value={leadEditForm.source}
          options={source}
          hanldeSelectChange={handleInputChange}
        />

        <Select
          label="Sales Agent"
          id="salesAgent"
          name="salesAgent"
          firstOption="Sales Agent"
          value={leadEditForm.salesAgent}
          options={agents}
          hanldeSelectChange={handleInputChange}
        />

        <Input
          label="Expected Days to Close"
          id="timeToClose"
          name="timeToClose"
          type="number"
          placeholder="30"
          value={leadEditForm.timeToClose}
          handleOnChange={handleInputChange}
        />
        <Input
          label="Potential Value ($)"
          id="potentialValue"
          name="potentialValue"
          type="number"
          placeholder="50000"
          value={leadEditForm.potentialValue}
          handleOnChange={handleInputChange}
        />

        <Input
          label="Tags (comma separated)"
          id="tags"
          name="tags"
          type="text"
          placeholder="enterprise, tech, priority"
          value={leadEditForm.tags}
          handleOnChange={handleInputChange}
          containerStyling={`col-span-2 max-sm:col-span-1`}
        />
      </div>
      <div className="px-6 pb-6 flex gap-4">
        <Button label="Update Lead" />
        <Button
          label="Cancel"
          type="button"
          handleClick={() => navigate(-1)}
          background="bg-surface-white hover:bg-surface-green border border-border-default"
          text="text-text-primary hover:text-text-white"
        />
      </div>
    </form>
  );
}
