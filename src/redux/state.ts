import { Post } from '../types/Post';
import { State } from '../types/State';
import { rerenderEntireTree } from '../render';

export const state: State = {
    messagesPage: {
        dialogs: [
            { id: 1, userName: 'Vasya' },
            { id: 2, userName: 'Petya' },
            { id: 3, userName: 'Fedya' },
            { id: 4, userName: 'Kolya' },
            { id: 5, userName: 'Sasha' },
        ],
        messages: [
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
        ],
    },
    profilePage: {
        posts: [
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
        ],
        newPostText: '',
    },
};

export const addPost = () => {
    const newPost: Post = {
        id: 5,
        text: state.profilePage.newPostText,
        likes: 0,
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state, addPost, updateNewPostText);
};

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state, addPost, updateNewPostText);
};
