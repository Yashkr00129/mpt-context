import { createContext, useState } from "react";

export const state = createContext();

export const Provider = (props) => {
  const array = localStorage.getItem("assignments");

  const [assignments, setAssignments] = useState(JSON.parse(array));

  return (
    <state.Provider value={[assignments, setAssignments]}>
      {props.children}
    </state.Provider>
  );
};
