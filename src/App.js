import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <Router>
        <Route path="/">
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
