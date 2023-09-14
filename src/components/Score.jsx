import { useContext } from "react";
import { StateContext } from "../state/StateContext";

export const Score = () => {
  const { score, errors } = useContext(StateContext);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Score</h1>
      <p>Score: {score}</p>
      <p>Errors: {errors}</p>
    </div>
  );
};