import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Game from './Components/Game'

ReactDOM.render(<Game />,document.getElementById('root'));


serviceWorker.unregister();
