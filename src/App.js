import React, { Fragment } from 'react';
import './App.css';
import {BrowserRouter, Link, Switch, Route,Router,Redirect} from "react-router-dom";
import { createBrowserHistory } from "history";
import {SaralContext} from './Context';
import { Provider } from 'react-redux';
import configureStore from './ConfigStore';
import { Offline, Online } from "react-detect-offline";



import Home from './components/screens/Home';
import Login from './components/screens/Login';


const store = configureStore();
const hist = createBrowserHistory();




function App() {
  
  return (
    <Fragment>
    <Online>
    <Provider store={store}>
      
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/login" component={Home} /> */}
        <Route exact path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Redirect from="/" to={"/login"} />
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
