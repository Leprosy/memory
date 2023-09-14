import React, { createContext, useState } from "react";
import { shuffle } from "../helpers/array";

export const StateContext = createContext();

const createItems = (total) => {
  let list = [];

  for (let i = 0; i < total; ++i) {
    list.push(i);
    list.push(i);
  }

  list = shuffle(list);

  return list.map((item, index) => { return {
    value: item, index, visible: false, clicked: false
  }; });
};

export const StateProvider = ({ children }) => {
  const [items, setItems] = useState(createItems(9));
  const [score, setScore] = useState(0);
  const [errors, setErrors] = useState(0);

  const restart = () => {
    setErrors(0);
    setScore(0);
    setItems(createItems(9));
  };

  return (
    <StateContext.Provider value={{
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
