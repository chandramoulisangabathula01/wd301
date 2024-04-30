import { API_ENDPOINT } from "../../config/constants";
import { CommentListAvailableAction, CommentDispatch } from "./types";
import { CommentDetailsPayload } from "./types";

// EXPORT THE ADD COMMENTS FUNCTION
export const addComments = async (
  dispatch: CommentDispatch,
  projectID: string,
  taskID: string,
  comment: CommentDetailsPayload
) => {
  const token = localStorage.getItem("authToken") ?? ""; // LOCAL AUTH
  try {
    dispatch({ type: CommentListAvailableAction.CREATE_COMMENT_REQUEST });
    const response = await fetch(
      `${API_ENDPOINT}/projects/${projectID}/tasks/${taskID}/comments`, // API'S URL
      {
        method: "POST", // TRYING TO POST THE DATA 
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(comment),
      }
    );
    // ERROR THROUGH FOR CREATEING COMMENTS
    if (!response.ok) {
      throw new Error("UNABLE TO CREATE A COMMENT");
    }
    const data = await response.json();
      // And if everything goes well with the API call, we will dispatch an action, 
      // with `type` set to `ADD_COMMENT_SUCCESS` and in `payload` we will send the 
      // new COMMENT.
    dispatch({
      type: CommentListAvailableAction.CREATE_COMMENT_SUCCESS,
      payload: data,
    });
    // Next, I'll return a status called "ok", with value `true`
      // as everything went well.
    console.log(data);
    fetchComment(dispatch, projectID, taskID);
    
    // CATCH ERROR WHILE OPERATION FAILED
  } catch (error) {
    console.error("Operation failed:", error);
    dispatch({
      type: CommentListAvailableAction.CREATE_COMMENT_FAILURE,
      payload: "UNABLE TO DO COMMENT",
    });
  }
};

export const fetchComment = async (
  dispatch: CommentDispatch,
  projectID: string,
  taskID: string
) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    dispatch({ type: CommentListAvailableAction.FETCH_COMMENT_REQUEST });
    const response = await fetch(
      `${API_ENDPOINT}/projects/${projectID}/tasks/${taskID}/comments`, // APIS URL
      {
        method: "GET", // FOR GETTING THE DATA
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // ACCESS IS FAILED TO GET COMMENTS FROM THE API THEN THROW THIS ERROR
    if (!response.ok) {
      throw new Error("FAILED TO ACCESS COMMENTS");
    }

    const data = await response.json();

    dispatch({
      type: CommentListAvailableAction.FETCH_COMMENT_SUCCESS,
      payload: data,
    });
    console.log("API response data:"  , data);

  } catch (error) {
    console.error("Operation failed:", error);
    dispatch({
      type: CommentListAvailableAction.FETCH_COMMENT_FAILURE,
      payload: "CANNOT ACCESS COMMENTS",
    });

    throw error;
  }
};