import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Auth from './Components/Auth/Auth';
import ChangePassword from './Components/Auth/ChangePassword';
import Dashboard from './Components/Dashboard/Dashboard';

export default (
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/authentication' component={Auth}/>
        <Route path='/change-password' component={ChangePassword}/>
        <Route path='/dashboard' component={Dashboard}/>
    </Switch>
)