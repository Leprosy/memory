import { Board } from "../components/Board";
import { Score } from "../components/Score";
import { useContext } from "react";
import { UserContext } from "../state/UserContext";


export const MainContent = () => {
  const { user } = useContext(UserContext);

  if (user === "") {
    return "";
  }

  return (
    <div className="flex flex-row m-5">
      <Board />
      <Score />
    </div>
  );
};