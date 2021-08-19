import React from "react";

//Import styles
import "../Styles/App.css";

import Routes from "./Routes";

//Import Contexts
import { useUserContext } from "../Contexts/UserContext";

//Import react-router
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./Login";

function App() {
  const {user} = useUserContext();
  return (
    <Router>
      <div className="App">
        {user ? <Routes/> : <Login />}
      </div>
    </Router>
  );
}

export default App;
