import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Post } from './types/Post';
import { Dialog } from './types/Dialog';
import { Message } from './types/Message';

const dialogs: Dialog[] = [
    { id: 1, userName: 'Vasya' },
    { id: 2, userName: 'Petya' },
    { id: 3, userName: 'Fedya' },
    { id: 4, userName: 'Kolya' },
    { id: 5, userName: 'Sasha' },
];

const messages: Message[] = [
    {
        id: 1,
        text: 'Hi',
    },
    {
        id: 2,
        text: 'How are you?',
    },
    {
        id: 3,
        text: 'Yo',
    },
];

const posts: Post[] = [
    {
        id: 1,
        text: 'Hi, how are you?',
        likes: 6,
    },
    {
        id: 2,
        text: "It's my first post",
        likes: 1,
    },
];

ReactDOM.render(
    <BrowserRouter>
        <App posts={posts} messages={messages} dialogs={dialogs} />
    </BrowserRouter>,
    document.getElementById('root')
);
