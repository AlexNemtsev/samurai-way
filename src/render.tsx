import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { State } from './types/State';

export const rerenderEntireTree = (
    state: State,
    addPost: () => void,
    updateNewPostText: (newText: string) => void
) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
        </BrowserRouter>,
        document.getElementById('root')
    );
};
