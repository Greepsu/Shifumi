import React, { useContext } from "react";


//Import style
import "../Styles/Room.css";

//Import Contexts
import { UserContext } from "../Contexts/UserContext";

export default function Room() {
  const user = useContext(UserContext);
  console.log(user)

  return (
  <div className="room">
    <h2>{`User ID: ${user}`}</h2>
  </div>);
}
