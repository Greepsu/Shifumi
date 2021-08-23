import React from 'react'
//Import components
import Game from "./Game";
import MainLobby from "./MainLobby";
import Room from "./Room";

//Import react-router
import { BrowserRouter as Switch, Route } from "react-router-dom";

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
          <Room />
        </Route>
      </Switch>
    )
}
