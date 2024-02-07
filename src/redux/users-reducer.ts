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

type UsersState = {
    users: User[];
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
};

const initState: UsersState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
};

type Action =
    | ReturnType<typeof toggleFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>;

const usersReducer = (state = initState, action: Action): UsersState => {
    switch (action.type) {
        case 'TOGGLE_FOLLOW':
            return {
                ...state,
                users: state.users.map((user) =>
                    user.id === action.payload ? { ...user, followed: !user.followed } : user
                ),
            };
        case 'SET_USERS':
            return { ...state, users: action.payload };
        case 'SET_CURRENT_PAGE':
            return { ...state, currentPage: action.payload };
        case 'SET_TOTAL_USERS_COUNT':
            return { ...state, totalUsersCount: action.payload };
        default:
            return state;
    }
};

export const toggleFollowAC = (userId: number) =>
    ({
        type: 'TOGGLE_FOLLOW',
        payload: userId,
    }) as const;

export const setUsersAC = (users: User[]) =>
    ({
        type: 'SET_USERS',
        payload: users,
    }) as const;

export const setCurrentPageAC = (page: number) =>
    ({
        type: 'SET_CURRENT_PAGE',
        payload: page,
    }) as const;

export const setTotalUsersCountAC = (totalCount: number) =>
    ({
        type: 'SET_TOTAL_USERS_COUNT',
        payload: totalCount,
    }) as const;

export default usersReducer;
