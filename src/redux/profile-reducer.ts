import { v1 } from 'uuid';

import { PayloadAction } from './PayloadAction';

interface Post {
    id: string;
    text: string;
    likes: number;
}

export interface PostsState {
    posts: Post[];
}

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

interface AddPostAction extends PayloadAction<string> {
    type: 'ADD_POST';
}

type Action = AddPostAction;

const profileReducer = (state = initState, action: Action): PostsState => {
    let newPost: Post;

    switch (action.type) {
        case 'ADD_POST':
            newPost = {
                id: v1(),
                text: action.payload,
                likes: 0,
            };

            return { ...state, posts: [...state.posts, newPost] };
        default:
            return state;
    }
};

export const addPostActionCreator = (text: string): AddPostAction => {
    return {
        type: 'ADD_POST',
        payload: text,
    };
};

export default profileReducer;
