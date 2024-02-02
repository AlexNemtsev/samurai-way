import './App.css';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Route, Switch } from 'react-router-dom';
import { Profile } from './components/Profile/Profile';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import { Users } from './components/Users/Users';
import { Dialogs } from './components/Dialogs/Dialogs';

function App() {
    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="app-wrapper-content">
                <Switch>
                    <Route render={() => <Profile />} path="/profile" />
                    <Route render={() => <Dialogs />} path="/messages" />
                    <Route render={() => <Users />} path="/users" />
                    <Route component={News} path="/news" />
                    <Route component={Music} path="/music" />
                    <Route component={Settings} path="/settings" />
                </Switch>
            </div>
        </div>
    );
}

export default App;
