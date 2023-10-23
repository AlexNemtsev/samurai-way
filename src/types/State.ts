import { Dialog } from './Dialog';
import { Message } from './Message';
import { Post } from './Post';

export interface State {
    messagesPage: {
        dialogs: Dialog[];
        messages: Message[];
    };
    profilePage: {
        posts: Post[];
        newPostText: string;
    };
}
