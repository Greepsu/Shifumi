import React from 'react';

//Import components
import Game from './Game';
import MainLobby from './MainLobby';
import Room from './Room';

//Import react-router
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import RoomHandler from './RoomHandler';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <MainLobby />
      </Route>
      <Route path="/cpu">
        <Game />
      </Route>
      <Route path="/user">
        <RoomHandler />
      </Route>
      <Route path="/room/:roomId">
        <Room />
      </Route>
    </Switch>
  );
}
