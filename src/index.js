import React from 'react';
import ReactDOM from 'react-dom';
import { Route, hashHistory, HashRouter,Switch } from 'react-router-dom';
import './css/index.css';
import App from './pages/App';

import Login from './pages/xu/Login';
import List from './pages/xu/List';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <HashRouter history={hashHistory}>
        <Switch>
            <Route path='/xu/login' component={Login}></Route>
            <Route path='/list' component={List}></Route>
            <Route path='/' component={App}></Route>
        </Switch>
    </HashRouter>
), document.getElementById('root'));
registerServiceWorker();
