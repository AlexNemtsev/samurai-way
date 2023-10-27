import './App.css';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Route, Switch } from 'react-router-dom';
import { Profile } from './components/Profile/Profile';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import { store } from './redux/store';

interface AppProps {
    store: typeof store;
}

function App({ store }: AppProps) {
    const dispatch = store.dispatch.bind(store);

    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="app-wrapper-content">
                <Switch>
                    <Route
                        render={() => (
                            <Profile profilePage={store.state.profilePage} dispatch={dispatch} />
                        )}
                        path="/profile"
                    />
                    <Route
                        render={() => (
                            <Dialogs dialogsPage={store.state.messagesPage} dispatch={dispatch} />
                        )}
                        path="/messages"
                    />
                    <Route component={News} path="/news" />
                    <Route component={Music} path="/music" />
                    <Route component={Settings} path="/settings" />
                </Switch>
            </div>
        </div>
    );
}

export default App;
