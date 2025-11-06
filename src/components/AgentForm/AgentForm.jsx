import { useNavigate } from "react-router-dom";
import Input from "../Inputs/Input";
import Button from "../Buttons/Button";
import useAgentFormContext from "../../contexts/AgentFormContext";
import useAgentContext from "../../contexts/AgentContext";

export default function AgentForm() {
  const { agentForm, handleAgentFormOnChange } = useAgentFormContext();
  const { addAgent } = useAgentContext();
  const navigate = useNavigate();

  return (
    <form
      className="max-w-[768px] p-6 bg-surface-secondary border border-border-default rounded-lg"
      onSubmit={(e) => {
        e.preventDefault();
        addAgent(agentForm);
      }}
    >
      <header>
        <h3 className="text-2xl font-semibold">Add New Agent</h3>
      </header>
      <div className="mt-6">
        <Input
          label="Agent Name *"
          id="name"
          name="name"
          type="text"
          placeholder="Enter agent name"
          value={agentForm.name}
          handleOnChange={handleAgentFormOnChange}
          containerStyling
        />
        <Input
          label="Agent Email *"
          id="email"
          name="email"
          type="email"
          placeholder="email@example.com"
          value={agentForm.email}
          handleOnChange={handleAgentFormOnChange}
          containerStyling="mt-5"
        />
      </div>
      <div className="mt-7 flex gap-4">
        <Button
          label="Create Lead"
          background="bg-surface-blue hover:bg-surface-bluehover"
          text="text-text-white"
        />
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
