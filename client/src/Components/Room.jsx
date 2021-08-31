import React from "react";

//Import Style
import "../Styles/Room.css";

//Import Contexts
import { useRoomContext } from "../Contexts/RoomContext";
import { useUserContext } from "../Contexts/UserContext";


//Import Components
import Game from "../Components/Game";

export default function Room() {




  return (
    <div className="room">
      <Game />
    </div>
  );
}
