import { Board } from "../components/Board";
import { Score } from "../components/Score";

export const MainContent = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">This is main content</h1>
      <Board />
      <Score />
    </div>
  );
};