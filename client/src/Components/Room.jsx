import React from "react";

//Import style
import "../Styles/Room.css";

//Import Contexts
import { useUserContext } from "../Contexts/UserContext";

import Game from "../Components/Game"

export default function Room() {
  const { user } = useUserContext();

  return (
    <div className="room">
      <Game />
    </div>
  );
}
