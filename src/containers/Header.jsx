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
    <div className="m-5">
      <h1 className="text-xl md:text-3xl font-bold text-center m-5">Memory Game</h1>

      <div className="flex flex-row items-center">
        <div className="basis-1/2">
          {user === "" ?
            <>
              <input id="user" placeholder="Enter your name" className="w-2/3 inline-block border-b" />
              <button className="header__button inline-block" onClick={() => setUserName()}>Ok</button>
            </>
            :
            <>
              <p className="inline-block px-2">Hello, {user}</p>
              <button className="header__button" onClick={() => cleanUserName()}>Change</button>
            </>
          }
        </div>

        <div className="basis-1/2">
          <button className="header__button" onClick={() => restart()}>Restart Game</button>
        </div>
      </div>

    </div>
  );
};