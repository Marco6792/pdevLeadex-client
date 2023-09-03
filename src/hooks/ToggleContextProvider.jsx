import React, { createContext, useContext, useReducer} from "react";

export const ToggleContext = createContext();


export const DataLayer = ({initialState, reducer, children}) => (
  <ToggleContext.Provider value={useReducer(reducer, initialState)}>
    {children}
      </ToggleContext.Provider>
)

export const useToggleContex = () => useContext(ToggleContext);
    