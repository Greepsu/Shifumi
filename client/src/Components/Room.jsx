import React from "react";

//Import style
import "../Styles/Room.css";

//Import Contexts
import { useUserContext } from "../Contexts/UserContext";

export default function Room() {
  const {user, weapon, joinRoom} = useUserContext();

  return (
    <div className="room">
      <h2>{`User ID: ${user} choose ${weapon}`}</h2>
      <button onClick={joinRoom} >Send</button>
    </div>
  );
}
