import React from "react";

//Import Style
import "../Styles/Room.css";

//Import Contexts
import { useRoomContext } from "../Contexts/RoomContext";


//Import Components
import Game from "../Components/Game";

export default function Room() {
  const users = useRoomContext();

  console.log("ROOM : ", users);

  return (
    <div className="room">
      <Game />
    </div>
  );
}
