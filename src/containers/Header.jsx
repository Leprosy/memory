import { useContext } from "react";
import { StateContext } from "../state/StateContext";
import { UserContext } from "../state/UserContext";

export const Header = () => {
  const { restart } = useContext(StateContext);
  const { user, setUser, cleanUser } = useContext(UserContext);

  const setUserFromUI = () => {
    const userName = document.getElementById("user").value;
    setUser(userName);
  };

  return (
    <div className="m-5">
      <h1 className="text-xl md:text-3xl font-bold text-center m-5">Memory Game</h1>

      <div className="flex flex-row items-center">
        <div className="basis-2/3">
          {user === "" ?
            <>
              <input id="user" placeholder="Enter your name" className="w-2/3 inline-block border-b" />
              <button className="header__button inline-block" onClick={() => setUserFromUI()}>Ok</button>
            </>
            :
            <>
              <p className="inline-block px-2">Hi, {user}!</p>
              <button className="header__button" onClick={() => cleanUser()}>Change</button>
            </>
          }
        </div>

        <div className="basis-1/3">
          <button className="header__button" onClick={() => restart()}>Restart</button>
        </div>
      </div>

    </div>
  );
};