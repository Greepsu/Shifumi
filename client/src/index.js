import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App.jsx';

import { GameContextProvider } from "../src/Contexts/GameContext"

ReactDOM.render(
  <React.StrictMode>
    <GameContextProvider>
      <App />
    </GameContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
