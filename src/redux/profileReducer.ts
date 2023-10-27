import { v1 } from 'uuid';
import { Post } from '../types/Post';
import { Reducer } from 'redux';

interface State {
    posts: Post[];
    newPostText: string;
}

const initState: State = {
    posts: [
        {
            id: v1(),
            text: 'Hi, how are you?',
            likes: 6,
        },
        {
            id: v1(),
            text: "It's my first post",
            likes: 1,
        },
    ],
    newPostText: '',
};

const ADD_POST = 'ADD_POST';

const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

/* eslint-disable no-case-declarations */
const profileReducer: Reducer<State> = (state = initState, action): State => {
    switch (action.type) {
        case ADD_POST:
            const newPost: Post = {
                id: v1(),
                text: state.newPostText,
                likes: 0,
            };

            return { ...state, posts: [...state.posts, newPost], newPostText: '' };
        case UPDATE_NEW_POST_TEXT:
            return { ...state, newPostText: action.payload ?? '' };
        default:
            return state;
    }
};

export const addPostActionCreator = () => {
    return {
        type: 'ADD_POST',
    };
};

export const updNewPostTextActionCreator = (newText: string) => {
    return {
        type: 'UPDATE_NEW_POST_TEXT',
        payload: newText,
    };
};

export default profileReducer;
