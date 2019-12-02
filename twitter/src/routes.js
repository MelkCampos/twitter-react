import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginPage from './pages/Login/login';
import TimelinePage from  './pages/Timeline/timeline';

export default function Routes() {
 return(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={LoginPage} />
            <Route path="/timeline" component={TimelinePage} />
        </Switch>
    </BrowserRouter>
 );
}