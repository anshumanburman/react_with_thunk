import React, { Fragment } from 'react';
import './App.css';
import {BrowserRouter, Link, Switch, Route} from "react-router-dom";
import {SaralContext} from './Context';
import { Provider } from 'react-redux';
import configureStore from './ConfigStore';
import { Offline, Online } from "react-detect-offline";



import Home from './components/screens/Home';
import Login from './components/screens/Login';


const store = configureStore();





function App() {
  
  return (
    <Fragment>
    <Online>
    <Provider store={store}>
      <BrowserRouter>
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/" component={Login} />
      </Switch>
      </BrowserRouter>
      </Provider>
      </Online>
      <Offline>
        <div>check your connection</div>
      </Offline>
      </Fragment>
  );
}

export default App;
