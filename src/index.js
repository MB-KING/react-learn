import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';
import './styles/bootstrap.min.css'
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./app/login/login.js";
import Main from "./app/landing/main.js";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

