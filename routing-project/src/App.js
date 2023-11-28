import React from 'react';
import {Link} from 'react-router-dom';

import './App.css';
import AppRouter from "./AppRouter";

const App = () => {
  return (
        <div className="app">
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/sign-in">Sign In</Link>
              </li>
            </ul>
          </nav>
          <AppRouter />
        </div>
  );
};

export default App;
