import React from 'react';
import { Users } from './Users';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { User, setUsersAC, toggleFollowAC } from '../../redux/users-reducer';

export const UsersContainer = () => {
    const { users } = useAppSelector((state) => state.usersPage);

    const dispatch = useAppDispatch();

    const toggleFollowingUser = (userId: string) => {
        dispatch(toggleFollowAC(userId));
    };

    const setUsers = (users: User[]) => {
        dispatch(setUsersAC(users));
    };

    return <Users users={users} toggleFollowingUser={toggleFollowingUser} setUsers={setUsers} />;
};
