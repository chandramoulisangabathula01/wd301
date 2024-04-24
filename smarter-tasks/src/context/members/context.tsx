import React, { createContext, useContext, useReducer } from "react";
import { reducer, initialState, MembersState, MembersActions } from "./reducer";

// Create a context for accessing the members state
const MembersStateContext = createContext<MembersState | undefined>(undefined);

// Define a custom hook for conveniently accessing the members state
// eslint-disable-next-line react-refresh/only-export-components
export const useMembersState = () => useContext(MembersStateContext);

// Create a context for accessing the members dispatch function
type MembersDispatch = React.Dispatch<MembersActions>;
const MembersDispatchContext = createContext<MembersDispatch | undefined>(undefined);

// Using createContext function, we will create a context 
// called `ProjectsDispatchContext`. Let's say the shape of this new 
// context object is ProjectsDispatch (which I'll define now, wait for it).
// I've set the default value to undefined.
// eslint-disable-next-line react-refresh/only-export-components
export const useMembersDispatch = () => useContext(MembersDispatchContext);

export const MembersProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [membersState, membersDispatch] = useReducer(reducer, initialState);

  return (
    <MembersStateContext.Provider value={membersState}>
      <MembersDispatchContext.Provider value={membersDispatch}>
        {children}
      </MembersDispatchContext.Provider>
    </MembersStateContext.Provider>
  );
};