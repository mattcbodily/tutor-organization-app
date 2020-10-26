import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './Components/Landing';
import Auth from './Components/Auth/Auth';

export default (
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/authentication' component={Auth}/>
    </Switch>
)