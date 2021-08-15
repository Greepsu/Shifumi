import React from "react";

//Import styles
import "../Styles/App.css";

//Import components
import Game from "./Game";
import MainLobby from "./MainLobby";
import Room from "./Room";

//Import react-router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
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
      </div>
    </Router>
  );
}

export default App;
