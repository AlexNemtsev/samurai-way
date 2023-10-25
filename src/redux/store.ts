/* eslint-disable no-case-declarations */
import { v1 } from 'uuid';
import { Post } from '../types/Post';
import { State } from '../types/State';

const initState: State = {
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
    },
};

type dispatchType = 'ADD_POST' | 'UPDATE_NEW_POST_TEXT';

interface Action {
    type: dispatchType;
    payload?: string;
}

class Store {
    private _state: State;

    constructor(initState: State) {
        this._state = initState;
    }

    private callSubscriber(): void | never {
        throw new Error('Observer not setted! Pass observer to subscribe method');
    }

    private addPost() {
        const newPost: Post = {
            id: v1(),
            text: this._state.profilePage.newPostText,
            likes: 0,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this.callSubscriber();
    }

    private updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this.callSubscriber();
    }

    get state() {
        return this._state;
    }

    subscribe(observer: () => void) {
        this.callSubscriber = observer;
    }

    dispatch(action: { type: dispatchType; payload?: string }) {
        switch (action.type) {
            case 'ADD_POST':
                this.addPost();
                break;
            case 'UPDATE_NEW_POST_TEXT':
                this.updateNewPostText(action.payload ?? '');
                break;
            default:
                break;
        }
    }
}

export const store = new Store(initState);

export const addPostActionCreator = (): Action => {
    return {
        type: 'ADD_POST',
    };
};

export const updNewPostTextActionCreator = (newText: string): Action => {
    return {
        type: 'UPDATE_NEW_POST_TEXT',
        payload: newText,
    };
};
