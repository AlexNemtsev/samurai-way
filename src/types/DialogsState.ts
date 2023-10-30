import { Dialog } from './Dialog';
import { Message } from './Message';

export interface DialogsState {
    dialogs: Dialog[];
    messages: Message[];
}
