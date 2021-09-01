import React from 'react';
import ReactDOM from 'react-dom';

//Import style
import './index.css';

//Import App
import App from './Components/App.jsx';

//Import Contexts
import { WebSocketContextProvider } from '../src/Contexts/WebSocketContext';
import { UserContextProvider } from '../src/Contexts/UserContext';
import { RoomContextProvider } from './Contexts/RoomContext';
import { GameContextProvider } from '../src/Contexts/GameContext';

//Import react-router
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <WebSocketContextProvider>
        <UserContextProvider>
          <RoomContextProvider>
            <GameContextProvider>
              <App />
            </GameContextProvider>
          </RoomContextProvider>
        </UserContextProvider>
      </WebSocketContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
