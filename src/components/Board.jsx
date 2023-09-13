import { StateContext } from "../state/StateContext";
import { Tile } from "./Tile";
import { useContext } from "react";

const getTiles = (items) => {
  return items.map((item) => <Tile key={item.index} label={item.label} visible={item.visible} />);
};

export const Board = () => {
  const { items } = useContext(StateContext);
  console.log(items);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">This is board</h1>
      {getTiles(items)}
    </div>
  );
};