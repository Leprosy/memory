import { useContext } from "react";
import { StateContext } from "../state/StateContext";

export const Score = () => {
  const { score, errors } = useContext(StateContext);

  return (
    <div className="text-2xl basis-1/3 text-center font-bold">
      <p>Score: {score}</p>
      <p>Errors: {errors}</p>
    </div>
  );
};