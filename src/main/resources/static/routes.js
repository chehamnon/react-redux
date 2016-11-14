import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './js/Home';
import Competency from './components/CompetencyPage';
import About from './js/About';

export default (
    <Route path="/" component={App}>
        <Route path="/competency" component={Competency} />
        <Route path="/home" about={Home} />
    </Route>
);