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

    console.log("localuser", localUser);
  }, []);

  console.log("OAW", user, user === "");

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Memory</h1>
      {user === "" ?
        <div>
          <h3>Enter your name</h3>
          <input id="user" placeholder="name" />
          <button onClick={() => setUserName()}>Ok</button>
        </div>
        :
        <div>
          <h3>Hello, {user}</h3>
          <button onClick={() => cleanUserName()}>Change</button>
        </div>
      }

      <button onClick={() => restart()}>Restart Game</button>
    </div>
  );
};