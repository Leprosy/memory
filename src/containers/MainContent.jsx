import { Board } from "../components/Board";
import { Score } from "../components/Score";

export const MainContent = () => {
  return (
    <div className="flex flex-row m-5">
      <Board />
      <Score />
    </div>
  );
};