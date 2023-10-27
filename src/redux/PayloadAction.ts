export interface PayloadAction<T = undefined> {
    type: string;
    payload?: T;
}
