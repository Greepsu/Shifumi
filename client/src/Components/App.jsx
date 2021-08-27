import React from "react";

//Import Styles
import "../Styles/App.css";

//Import Component
import Routes from "./Routes";
import Login from "./Login";

//Import Contexts
import { useUserContext } from "../Contexts/UserContext";

//Import react-router
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const { user } = useUserContext();
  return (
    <Router>
      <div className="App">
        {user ? <Routes /> : <Login />}
      </div>
    </Router>
  );
}

export default App;
