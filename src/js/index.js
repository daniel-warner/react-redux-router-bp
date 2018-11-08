import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import '../scss/main.scss';

import Root from './Root';
import App from './components/app';


ReactDOM.render(
  <Root>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path = '/' component = {App}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Root>
  , document.getElementById("app")
);
