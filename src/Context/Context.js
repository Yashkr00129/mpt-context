import { createContext, useState } from "react";

export const state = createContext();

export const Provider = (props) => {
  const array = JSON.parse(localStorage.getItem("assignments")) || [];

  const [assignments, setAssignments] = useState(array);
  const [auth, setAuth] = useState(false);

  return (
    <state.Provider value={[assignments, setAssignments, auth, setAuth]}>
      {props.children}
    </state.Provider>
  );
};
