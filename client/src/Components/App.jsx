import React from "react";

//Import Styles
import "../Styles/App.css";

//Import Component
import Routes from "./Routes";
import Login from "./Login";

//Import Contexts
import { useUserContext } from "../Contexts/UserContext";

function App() {
  const user = useUserContext();
  return <div className="App">{user ? <Routes /> : <Login />}</div>;
}

export default App;
