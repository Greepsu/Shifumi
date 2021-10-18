import React from 'react';

import '../Styles/GameMobile.css';

//Import Contexts
import { useWebSocketContext } from '../Contexts/WebSocketContext';
import { useRoomContext } from '../Contexts/RoomContext';
import { useUserContext } from '../Contexts/UserContext';
import { useGameContext } from '../Contexts/GameContext';

//Import Enums
import { ShifumiWeaponObject } from '../Enums/Shifumi';
import { SocketEvents } from '../Enums/Shifumi';

import RockPicture from '../Assets/Images/icon-rock.svg';
import PaperPicture from '../Assets/Images/icon-paper.svg';
import ScissorsPicture from '../Assets/Images/icon-scissors.svg';
import WinningScreen from '../Components/WinningScreen';

export default function GameMobile() {
  const webSocket = useWebSocketContext();
  const { user } = useUserContext();
  const { room } = useRoomContext();
  const { userSelection, handleUserSelection, opponent, readyCount, winner } =
    useGameContext();

  const userInfo = room.players.find((player) => player.id === user.id);

  function weaponLocked() {
    if (userSelection) {
      webSocket.emit(SocketEvents.SET_LOCKED, userSelection);
      userInfo.isReady = !userInfo.isReady;
    }
  }

  function getPicture(weapon) {
    switch (weapon) {
      case ShifumiWeaponObject.PAPER:
        return (
          <button className="selection-weapon selection-paper choice" disabled>
            <img src={PaperPicture} alt="Paper" />
          </button>
        );

      case ShifumiWeaponObject.ROCK:
        return (
          <button className="selection-weapon selection-rock choice" disabled>
            <img src={RockPicture} alt="Rock" />
          </button>
        );

      case ShifumiWeaponObject.SCISSORS:
        return (
          <button
            className="selection-weapon selection-scissors choice"
            disabled
          >
            <img src={ScissorsPicture} alt="Scissors" />
          </button>
        );

      default:
        return '';
    }
  }

  return (
    <div className="mobile-game">
      <h4>
        <span className="blue-word">SHI</span>FUMI
      </h4>
      <div className="user">
        <div className="score-name">
          <div className="name">
            <p>{opponent.username}</p>
          </div>
          <div className="score">
            <span>{opponent.score}</span>
          </div>
        </div>
        {getPicture(opponent.weapon)}
        <div className="empty"></div>
      </div>
      <div className="result">
        <p>{userInfo.resultMatch}</p>
      </div>
      <div className="separator"></div>
      <div className="container">
        <div className="user">
          <div className="score-name">
            <div className="name">
              <p>{user.username}</p>
            </div>
            <div className="score">
              <span>{user.score}</span>
            </div>
          </div>
          {getPicture(userInfo.weapon)}
          <div className="empty"></div>
        </div>
        <div className="selection user">
          <button
            className="selection-weapon selection-rock"
            onClick={() => handleUserSelection(ShifumiWeaponObject.ROCK)}
          >
            <img src={RockPicture} alt="Rock" />
          </button>
          <button
            className="selection-weapon selection-paper"
            onClick={() => handleUserSelection(ShifumiWeaponObject.PAPER)}
          >
            <img src={PaperPicture} alt="Paper" />
          </button>
          <button
            className="selection-weapon selection-scissors"
            onClick={() => handleUserSelection(ShifumiWeaponObject.SCISSORS)}
          >
            <img src={ScissorsPicture} alt="Scissors" />
          </button>
        </div>
        <div className="play-btn">
          <button onClick={weaponLocked}>Validate</button>
        </div>
      </div>
    </div>
  );
}
