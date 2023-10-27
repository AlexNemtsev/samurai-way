import { v1 } from 'uuid';
import { PayloadAction } from './PayloadAction';
import { Post } from '../types/Post';

interface State {
    posts: Post[];
    newPostText: string;
}

const ADD_POST = 'ADD_POST';

const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

/* eslint-disable no-case-declarations */
const profileReducer = (state: State, action: PayloadAction<string | undefined>): State => {
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

export const addPostActionCreator = (): PayloadAction => {
    return {
        type: 'ADD_POST',
    };
};

export const updNewPostTextActionCreator = (newText: string): PayloadAction<string> => {
    return {
        type: 'UPDATE_NEW_POST_TEXT',
        payload: newText,
    };
};

export default profileReducer;
