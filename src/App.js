import React from 'react';
import './App.css';
import {BrowserRouter, Link, Switch, Route} from "react-router-dom";
import {SaralContext} from './Context';


import Home from './components/screens/Home';

function App() {
  
  return (
    <SaralContext.Provider>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      </BrowserRouter>
      </SaralContext.Provider>
  );
}

export default App;
