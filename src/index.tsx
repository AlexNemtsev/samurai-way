import './index.css';
import { rerenderEntireTree } from './render';
import { addPost, state, updateNewPostText } from './redux/state';

rerenderEntireTree(state, addPost, updateNewPostText);
