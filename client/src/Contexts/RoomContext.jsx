import React, { useState, useEffect, useContext, createContext } from 'react';

//Import Contexts
import { useWebSocketContext } from './WebSocketContext';

//Import ENUM
import { SocketEvents } from '../Enums/Shifumi';
import { useUserContext } from './UserContext';

export const RoomContext = createContext({});

export function RoomContextProvider({ children }) {
  const { user } = useUserContext();
  const webSocket = useWebSocketContext();
  const [room, setRoom] = useState();
  const [showId, setShowId] = useState(false);
  const [ready, setReady] = useState(false);
  const [readyCount, setReadyCount] = useState(0);
  const [opponent, setOpponent] = useState();

  useEffect(() => {
    webSocket.on(SocketEvents.GET_ROOM, (room) => {
      setRoom(room);
    });

    webSocket.on(SocketEvents.UPDATE_ROOM, (roomUpdate) => {
      // ! LE CHANTIER
      if (room) {
        const filterRoom = room.players.filter((player) => {
          if (player.id === roomUpdate.id) player.weapon = roomUpdate.weapon;
        });
        setRoom(filterRoom);
        console.log(room);
      }
    });

    webSocket.on(SocketEvents.SET_READY, (isReady) => {
      setReadyCount(isReady);
    });

    webSocket.on(SocketEvents.GAME_START, (room) => {
      if (room) {
        const filterRoom = room.players.filter(
          (player) => player.id !== user.id
        );
        setOpponent(filterRoom);
        setRoom(room);
      }
    });
  }, [webSocket, ready, room]);

  function joinRoom(roomId, userInfo) {
    webSocket.emit(SocketEvents.JOIN_ROOM, { roomId, userInfo });

    setShowId(true);
    console.log(`Room with ${roomId} ID just joined by ${userInfo.username}`);
  }

  function getReady() {
    webSocket.emit(SocketEvents.SET_READY);
    setReady(!ready);
  }

  const values = {
    joinRoom,
    room,
    showId,
    getReady,
    readyCount,
    ready,
    opponent,
  };

  return <RoomContext.Provider value={values}>{children}</RoomContext.Provider>;
}

export function useRoomContext() {
  const context = useContext(RoomContext);
  if (!context)
    throw new Error(
      'useRoomContext should be used within a RoomContextProvider'
    );
  return context;
}
