import { v1 } from 'uuid';
import { Post } from '../types/Post';
import { Reducer } from 'redux';
import { PostsState } from '../types/PostsState';
import { PayloadAction } from './PayloadAction';

const initState: PostsState = {
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
};

const ADD_POST = 'ADD_POST';

const profileReducer: Reducer<PostsState> = (
    state = initState,
    action: PayloadAction<string>
): PostsState => {
    let newPost: Post;

    switch (action.type) {
        case ADD_POST:
            newPost = {
                id: v1(),
                text: action.payload ?? '',
                likes: 0,
            };

            return { ...state, posts: [...state.posts, newPost] };
        default:
            return state;
    }
};

export const addPostActionCreator = (text: string): PayloadAction<string> => {
    return {
        type: 'ADD_POST',
        payload: text,
    };
};

export default profileReducer;
