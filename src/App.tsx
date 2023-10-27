import './App.css';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Route, Switch } from 'react-router-dom';
import { Profile } from './components/Profile/Profile';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import { Store } from 'redux';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';

interface AppProps {
    store: Store;
}

function App({ store }: AppProps) {
    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="app-wrapper-content">
                <Switch>
                    <Route render={() => <Profile store={store} />} path="/profile" />
                    <Route render={() => <DialogsContainer store={store} />} path="/messages" />
                    <Route component={News} path="/news" />
                    <Route component={Music} path="/music" />
                    <Route component={Settings} path="/settings" />
                </Switch>
            </div>
        </div>
    );
}

export default App;
