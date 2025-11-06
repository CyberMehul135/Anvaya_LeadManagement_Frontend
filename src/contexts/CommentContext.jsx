import { createContext, useContext, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import axios from "axios";
import useCommentFormContext from "./CommentFormContext";
import useLeadIdContext from "../contexts/LeadIdContext";
import useApiUrlContext from "./ApiUrlContext";

const CommentContext = createContext();

const useCommentContext = () => useContext(CommentContext);

export default useCommentContext;

export function CommentProvider({ children }) {
  const { API_URL } = useApiUrlContext();
  const { pageLeadId } = useLeadIdContext();
  const { data, loading, error, fetchData } = useFetch(
    pageLeadId ? `${API_URL}/leads/${pageLeadId}/comments` : null
  );
  const { resetCommentForm } = useCommentFormContext();

  async function addComment(newComment) {
    try {
      const response = await axios.post(
        `${API_URL}/api/leads/${pageLeadId}/comments`,
        newComment
      );
      fetchData();
      resetCommentForm();
    } catch (error) {
      if (error.response) {
        console.error("Backend Error:", error.response.data.error);
      } else {
        console.error("Network Error:", error.message);
      }
    }
  }

  useEffect(() => {
    if (pageLeadId) fetchData();
  }, [pageLeadId]);

  return (
    <CommentContext.Provider
      value={{
        comments: data,
        commentsLoading: loading,
        commentsError: error,
        addComment,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
}
