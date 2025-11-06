import { createContext, useContext, useState } from "react";

const CommentFormContext = createContext();

const useCommentFormContext = () => useContext(CommentFormContext);

export default useCommentFormContext;

export function CommentFormProvider({ children }) {
  const [commentForm, setCommentForm] = useState({
    lead: "",
    author: "",
    commentText: "",
  });

  function handleFormChange(e) {
    const { name, value } = e.target;
    setCommentForm((pre) => ({ ...pre, [name]: value }));
  }

  function resetCommentForm() {
    setCommentForm((pre) => ({
      ...pre,
      author: "",
      commentText: "",
    }));
  }

  return (
    <CommentFormContext.Provider
      value={{ commentForm, handleFormChange, resetCommentForm }}
    >
      {children}
    </CommentFormContext.Provider>
  );
}
