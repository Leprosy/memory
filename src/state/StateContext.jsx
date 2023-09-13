import React, { createContext, useState } from "react";
import { shuffle } from "../helpers";

export const StateContext = createContext({
  items: [],
  user: "",
  score: 0,
  errors: 0
});

const createItems = () => {
  const list = shuffle([0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);

  return list.map((item, index) => { return {
    label: item, index, visible: true
  }; });
};

export const StateProvider = ({ children }) => {
  // const [items, setItems] = useState({});
  const list = createItems();

  return (
    <StateContext.Provider value={{ items: list, user: "Miguel", score: 11, errors: 22 }}>
      {children}
    </StateContext.Provider>
  );
};
