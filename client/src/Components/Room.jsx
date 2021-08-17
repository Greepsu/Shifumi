import React from "react";

//Import style
import "../Styles/Room.css";

//Import Contexts
import { useUserContext } from "../Contexts/UserContext";

export default function Room() {
  const user = useUserContext();

  return (
    <div className="room">
      <h2>{`User ID: ${user}`}</h2>
    </div>
  );
}
