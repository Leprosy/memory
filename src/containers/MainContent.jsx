import { Board } from "../components/Board";
import { Score } from "../components/Score";

export const MainContent = () => {
  return (
    <div className="flex flex-row">
      <Board />
      <Score />
    </div>
  );
};