// IMPORTS 
import { Reducer } from "react";
import {
  CommentListAvailableAction,
  CommentListState,
  CommentActions,
  initialStateComment
} from "./types";


export const commentReducer: Reducer<CommentListState, CommentActions> = (
  state = initialStateComment,
  action
) => {
  // TRYING TO FIND THE SUITABLE CASES
  switch (action.type) {
    case CommentListAvailableAction.FETCH_COMMENT_REQUEST: // IF DATA IS FETCHING THE REQUEST THE TURN ON LOADING
      return { ...state, isLoading: true };

    case CommentListAvailableAction.FETCH_COMMENT_SUCCESS:
      return {...state,isLoading: false,data:  action.payload ,// IF DATA IS FETCHED SUCCESFULLY THEN TURN OFF LOADING AND SHOW THE DATA VIA PAYLOAD
      };

    case CommentListAvailableAction.FETCH_COMMENT_FAILURE:
      return {...state,IsLoading: false,isError: true,errorMessage: action.payload, // IF DATA FETCH IS FAILED THEN SHOW ISERROR MESSAGE
      };
    case CommentListAvailableAction.CREATE_COMMENT_REQUEST: // USER WANT TO CREATE A COMMENT
      return { ...state, isLoading: true };
    case CommentListAvailableAction.CREATE_COMMENT_SUCCESS:
      return {...state,isLoading: false,data: [action.payload, ...state.data], // IF COMMENT IS CREATED SHOW THE SUCCESS MESSAGE
      };
    case CommentListAvailableAction.CREATE_COMMENT_FAILURE:
      return {...state,isLoading: false,isError: true,errorMessage: action.payload,// IF CREATION IS FAILED THEN SHOW ISERROR IS SHOWN 
      };

    default:
      return state;
  }
};