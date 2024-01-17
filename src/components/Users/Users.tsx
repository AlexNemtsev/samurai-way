import React, { useEffect } from 'react';
import { User } from '../../redux/users-reducer';
import styles from './Users.module.css';

type UsersProps = {
    users: User[];
    toggleFollowingUser: (userId: string) => void;
    setUsers: (users: User[]) => void;
};

export const Users = (props: UsersProps) => {
    useEffect(() => {
        props.setUsers([
            {
                id: '1',
                fullName: 'Dmitry',
                photoUrl:
                    'https://www.games-of-thrones.ru/sites/default/files/pictures/allll/Nagiev/7.jpg',
                status: "I'm a boss",
                followed: false,
                location: {
                    country: 'Belarus',
                    city: 'Minsk',
                },
            },
            {
                id: '2',
                fullName: 'Sasha',
                photoUrl:
                    'https://www.games-of-thrones.ru/sites/default/files/pictures/allll/Nagiev/7.jpg',
                status: "I'm a boss too",
                followed: true,

                location: {
                    country: 'Russia',
                    city: 'Moscow',
                },
            },
            {
                id: '3',
                fullName: 'Michael',
                photoUrl:
                    'https://www.games-of-thrones.ru/sites/default/files/pictures/allll/Nagiev/7.jpg',
                status: "I'm a boss too",
                followed: false,

                location: {
                    country: 'Ukraine',
                    city: 'Kiev',
                },
            },
        ]);
    }, []);

    return (
        <div>
            {props.users.map((user) => {
                return (
                    <div key={user.id}>
                        <span>
                            <div>
                                <img src={user.photoUrl} alt="" className={styles.userPhoto} />
                            </div>
                            <div>
                                <button onClick={() => props.toggleFollowingUser(user.id)}>
                                    {user.followed ? 'Unfollow' : 'Follow'}
                                </button>
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{user.fullName}</div>
                                <div>{user.status}</div>
                            </span>
                            <span>
                                <div>{user.location.country}</div>
                                <div>{user.location.city}</div>
                            </span>
                        </span>
                    </div>
                );
            })}
        </div>
    );
};
