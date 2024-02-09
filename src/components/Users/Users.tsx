import React, { useEffect } from 'react';
import {
  setCurrentPageAC,
  User,
  setTotalUsersCountAC,
  setUsersAC,
  toggleFollowAC,
} from '../../redux/users-reducer';
import styles from './Users.module.css';
import axios from 'axios';
import userIcon from '../../assets/user.png';
import { useAppDispatch, useAppSelector } from '../../hooks';

export const Users = () => {
  const users = useAppSelector((state) => state.usersPage.users);
  const totalUsersCount = useAppSelector((state) => state.usersPage.totalUsersCount);
  const pageSize = useAppSelector((state) => state.usersPage.pageSize);
  const currentPage = useAppSelector((state) => state.usersPage.currentPage);

  const pagesCount = Math.ceil(totalUsersCount / pageSize);

  const pages: number[] = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const dispatch = useAppDispatch();

  const toggleFollowingUser = (userId: number) => {
    dispatch(toggleFollowAC(userId));
  };

  const onChangePage = (pageNumber: number) => {
    dispatch(setCurrentPageAC(pageNumber));
  };

  useEffect(() => {
    axios
      .get<Response>(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`
      )
      .then((res) => {
        dispatch(setUsersAC(res.data.items));
        // dispatch(setTotalUsersCountAC(res.data.totalCount));
        dispatch(setTotalUsersCountAC(5));
      });
  }, [currentPage, pageSize]);

  return (
    <div>
      <div>
        {pages.map((p) => (
          <span
            key={p}
            className={currentPage === p ? styles.selectedPage : ''}
            onClick={() => onChangePage(p)}
          >
            {p}
          </span>
        ))}
      </div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <span>
              <div>
                <img src={user.photos.small ?? userIcon} alt="" className={styles.userPhoto} />
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
