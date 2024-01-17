export type PayloadAction<T = undefined> = T extends undefined ? Action : Action & Payload<T>;

type Action = {
    type: string;
};

type Payload<T> = {
    payload: T;
};
