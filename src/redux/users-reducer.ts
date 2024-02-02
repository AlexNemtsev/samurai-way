import { PayloadAction } from './PayloadAction';

export type User = {
    name: string;
    id: number;
    uniqueUrlName?: string;
    photos: Photo;
    status?: string;
    followed: boolean;
};

type Photo = {
    small?: string;
    large?: string;
};

type UserId = Pick<User, 'id'>;

type UsersState = {
    users: User[];
};

const initState: UsersState = {
    users: [],
};

interface ToggleFollowAction extends PayloadAction<UserId> {
    type: 'TOGGLE_FOLLOW';
}

interface SetUsersAction extends PayloadAction<UsersState> {
    type: 'SET_USERS';
}

type Action = ToggleFollowAction | SetUsersAction;

const usersReducer = (state = initState, action: Action): UsersState => {
    switch (action.type) {
        case 'TOGGLE_FOLLOW':
            return {
                ...state,
                users: state.users.map((user) =>
                    user.id === action.payload.id ? { ...user, followed: !user.followed } : user
                ),
            };
        case 'SET_USERS':
            return { ...state, users: [...state.users, ...action.payload.users] };
        default:
            return state;
    }
};

export const toggleFollowAC = (userId: number): ToggleFollowAction => ({
    type: 'TOGGLE_FOLLOW',
    payload: { id: userId },
});

export const setUsersAC = (users: User[]): SetUsersAction => ({
    type: 'SET_USERS',
    payload: { users },
});

export default usersReducer;
