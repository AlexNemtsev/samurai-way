import './App.css';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Route, Switch } from 'react-router-dom';
import { Profile } from './components/Profile/Profile';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import { State } from './types/State';

interface AppProps {
    state: State;
    addPost: () => void;
    updateNewPostText: (newText: string) => void;
}

function App(props: AppProps) {
    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="app-wrapper-content">
                <Switch>
                    <Route
                        render={() => (
                            <Profile
                                profilePage={props.state.profilePage}
                                addPost={props.addPost}
                                updateNewPostText={props.updateNewPostText}
                            />
                        )}
                        path="/profile"
                    />
                    <Route
                        render={() => <Dialogs state={props.state.messagesPage} />}
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
