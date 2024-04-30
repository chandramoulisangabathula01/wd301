/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useReducer } from "react";
import { initialStateComment } from "./types";
import { commentReducer } from "./reducer";
import { CommentListState, CommentDispatch } from "./types";
const CommentsStateContext = createContext<CommentListState>(initialStateComment);
const CommentsDispatchContext = createContext<CommentDispatch>(() => {});

// THIS PAGE SHOWS THE CONTEXT OF THE MESSAGE
export const CommentProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {

  const [state, dispatch] = useReducer(commentReducer, initialStateComment);
  
  return (
    <CommentsStateContext.Provider value={state}>
      <CommentsDispatchContext.Provider value={dispatch}>
        {children}
      </CommentsDispatchContext.Provider>
    </CommentsStateContext.Provider>
  );
};

export const useCommentsState = () => useContext(CommentsStateContext);
export const useCommentsDispatch = () => useContext(CommentsDispatchContext);