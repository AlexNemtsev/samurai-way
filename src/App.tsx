import './App.css';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Dialogs, DialogsProps } from './components/Dialogs/Dialogs';
import { Route, Switch } from 'react-router-dom';
import { Profile, ProfileProps } from './components/Profile/Profile';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';

interface AppProps extends ProfileProps, DialogsProps {}

function App(props: AppProps) {
    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="app-wrapper-content">
                <Switch>
                    <Route render={() => <Profile posts={props.posts} />} path="/profile" />
                    <Route
                        render={() => <Dialogs messages={props.messages} dialogs={props.dialogs} />}
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
