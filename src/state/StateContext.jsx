import React, { createContext, useState } from "react";
import { shuffle } from "../helpers";

export const StateContext = createContext();

const createItems = () => {
  const list = shuffle([0, 0, 1, 1, 2, 2]); //, 3, 3, 4, 4, 5, 5]);

  return list.map((item, index) => { return {
    value: item, index, visible: false, clicked: false
  }; });
};

export const StateProvider = ({ children }) => {
  const [items, setItems] = useState(createItems());
  const [score, setScore] = useState(0);
  const [errors, setErrors] = useState(0);

  const restart = () => {
    setErrors(0);
    setScore(0);
    setItems(createItems());
  };

  return (
    <StateContext.Provider value={{
      user: "Miguel",
      items,
      setItems,
      score,
      setScore,
      errors,
      setErrors,
      restart
    }}>
      {children}
    </StateContext.Provider>
  );
};
