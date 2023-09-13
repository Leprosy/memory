import { useContext } from "react";
import { StateContext } from "../state/StateContext";

export const Header = () => {
  const { user } = useContext(StateContext);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Memory</h1>
      <h3>Hello, {user}</h3>
    </div>
  );
};