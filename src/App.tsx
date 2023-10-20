import React from 'react';

import './App.css';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Dialogs } from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Profile } from './components/Profile/Profile';

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className="app-wrapper-content">
                    <Switch>
                        <Route component={Profile} path="/profile" />
                        <Route component={Dialogs} path="/messages" />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
