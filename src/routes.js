import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App.js';
import Homepage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import SettingsPage from './components/settings/SettingsPage';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={Homepage} />
        <Route path="about" component={AboutPage}/>
        <Route path="settings" component={SettingsPage}/>

    </Route>
);

