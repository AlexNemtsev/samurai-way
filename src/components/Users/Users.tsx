import React, { useEffect } from 'react';
import { User, setUsersAC, toggleFollowAC } from '../../redux/users-reducer';
import styles from './Users.module.css';
import axios from 'axios';
import userIcon from '../../assets/user.png';
import { useAppDispatch, useAppSelector } from '../../hooks';

export const Users = () => {
    const users = useAppSelector((state) => state.usersPage.users);

    const dispatch = useAppDispatch();

    const toggleFollowingUser = (userId: number) => {
        dispatch(toggleFollowAC(userId));
    };

    useEffect(() => {
        axios
            .get<Response>('https://social-network.samuraijs.com/api/1.0/users')
            .then((res) => dispatch(setUsersAC(res.data.items)));
    }, []);

    return (
        <div>
            {users.map((user) => {
                return (
                    <div key={user.id}>
                        <span>
                            <div>
                                <img
                                    src={user.photos.small ?? userIcon}
                                    alt=""
                                    className={styles.userPhoto}
                                />
                            </div>
                            <div>
                                <button onClick={() => toggleFollowingUser(user.id)}>
                                    {user.followed ? 'Unfollow' : 'Follow'}
                                </button>
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                            </span>
                        </span>
                    </div>
                );
            })}
        </div>
    );
};

export interface Response {
    items: User[];
    totalCount: number;
    error?: string;
}
