import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Auth from './Components/Auth/Auth';
import ChangePassword from './Components/Auth/ChangePassword';
import Dashboard from './Components/Dashboard/Dashboard';
import StudentDashboard from './Components/StudentDashboard/StudentDashboard';

export default (
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/authentication' component={Auth}/>
        <Route path='/change-password/:id' component={ChangePassword}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/student-dashboard' component={StudentDashboard}/>
    </Switch>
)