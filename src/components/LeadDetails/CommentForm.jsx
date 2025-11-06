import Button from "../Buttons/Button";
import TextArea from "../Inputs/TextArea";
import Select from "../Inputs/Select";
import useCommentFormContext from "../../contexts/CommentFormContext";
import useAgentContext from "../../contexts/AgentContext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useCommentContext from "../../contexts/CommentContext";

export default function CommentForm({}) {
  const { commentForm, handleFormChange } = useCommentFormContext();
  const { agents } = useAgentContext();
  const { addComment } = useCommentContext();
  const leadId = useParams();

  useEffect(() => {
    handleFormChange({ target: { name: "lead", value: leadId.leadId } });
  }, [leadId]);

  return (
    <form
      className="mt-3"
      onSubmit={(e) => {
        e.preventDefault();
        addComment(commentForm);
      }}
    >
      <h3 className="text-sm font-semibold px-1">Comment here :</h3>
      <Select
        id="author"
        name="author"
        firstOption="Select Comment By"
        value={commentForm.author}
        options={agents}
        hanldeSelectChange={handleFormChange}
      />
      <TextArea
        className="mb-1"
        id="commentText"
        name="commentText"
        placeholder="Add a comment...."
        value={commentForm.commentText}
        handleTextAreaChange={handleFormChange}
      />
      <Button label="Add Comment" />
    </form>
  );
}
