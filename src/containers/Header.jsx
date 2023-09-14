import { useContext, useState, useEffect } from "react";
import { StateContext } from "../state/StateContext";

export const Header = () => {
  const { restart } = useContext(StateContext);
  const [user, setUser] = useState("");

  const cleanUserName = () => {
    localStorage.removeItem("user");
    setUser("");
  };

  const setUserName = () => {
    const userName = document.getElementById("user").value;
    localStorage.setItem("user", userName);
    setUser(userName);
  };

  // Check user information
  useEffect(() => {
    const localUser = localStorage.getItem("user");

    if (localUser) {
      setUser(localUser);
    }
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Memory Game</h1>

      <div className="flex flex-row justify-center">
        <div className="basis-2/4">
          {user === "" ?
            <>
              <input id="user" placeholder="Enter your name" className="inline-block border-b" />
              <button className="header__button inline-block" onClick={() => setUserName()}>Ok</button>
            </>
            :
            <>
              <p className="inline-block px-2">Hello, {user}</p>
              <button className="header__button" onClick={() => cleanUserName()}>Change</button>
            </>
          }
        </div>

        <div className="basis-1/4">
          <button className="header__button" onClick={() => restart()}>Restart Game</button>
        </div>
      </div>

    </div>
  );
};