import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { store } from './redux/reduxStore';
import { Provider } from './StoreContext';

const rerenderEntireTree = () => {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>,
        document.getElementById('root')
    );
};

rerenderEntireTree();

store.subscribe(rerenderEntireTree);
