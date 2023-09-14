import { useContext } from "react";
import { StateContext } from "../state/StateContext";

export const Score = () => {
  const { score, errors } = useContext(StateContext);

  return (
    <div className="basis-1/3">
      <h1 className="text-center font-bold">Score</h1>
      <p>Score: {score}</p>
      <p>Errors: {errors}</p>
    </div>
  );
};